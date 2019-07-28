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


getUserInfo("dbetm").then(function(response) {
    // Convertir a json
    let responseJSON = JSON.parse(response);
    // Mostramos la url de sus repos
    console.log(responseJSON.repos_url);

    getRepos(responseJSON.repos_url).then(repos => {
        console.log(repos);
    });
}).catch(console.log);

// Otra forma
// getUserInfo("dbetm").then(response => {
//     // ...
// }).catch(console.log);
