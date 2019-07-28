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

let getUserPromise = getUserInfo("dbetm");

let getReposPromise = getUserPromise.then(response => {
    return getRepos(JSON.parse(response).repos_url);
}).catch(console.log);

// getReposPromise.then(console.log).catch(console.log);

// Se imprime primero que la anterior

// Los manejeadores de eventos then y catch se pueden mandar
// llamar de una vez
/*
getUserPromise.then(response => {
    console.log("Respuesta del usuario: ");
    console.log(response);
});
*/

// esperar múltiples promesas
Promise.all([getUserPromise, getReposPromise])
    .then(([userInfo, reposInfo]) => {
        console.log("Info del usuario: ");
        console.log(userInfo);
        console.log("Info de los repos: ");
        console.log(reposInfo);
    }).catch(err => console.log(err));
