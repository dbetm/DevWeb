function get(url) {
    return new Promise(function(resolve, reject) {
        let ajaxCall = new XMLHttpRequest();
        ajaxCall.open("GET", url);

        // Definir lo que haga cuando termine de cargar
        // Escuchar el evento de terminar de cargar
        ajaxCall.onload = function() {
            // status 200 cuando sale bien
            if(ajaxCall.status == 200) return resolve(ajaxCall.response);
            else reject(new Error(ajaxCall.status));
        };

        // Definir lo que haga cuando haya algún error
        ajaxCall.onerror = function(error) {
            reject(error);
        };

        // Hacemos la petición
        ajaxCall.send();
    });
}


function getUserInfo(username) {
    // Obtener la info del usuario
    return get("https://api.github.com/users/"+username);
}

function getRepos(repos_url) {
    return get(repos_url);
}

let getUserPromise = getUserInfo();

let getReposPromise = getUserPromise.then(response => {
    return getRepos(JSON.parse(response).repos_url);
}).catch(console.log);

getReposPromise.then(console.log).catch(console.log);
