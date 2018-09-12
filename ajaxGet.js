function ajaxGet(url, callback)
{
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.addEventListener("load", function () {
        if ((xhr.status >= 200) && (xhr.status < 400))
            callback(xhr.responseText);
        
        else
            console.error(xhr.status + " " + xhr.statusText + " " + url)
    });

    xhr.addEventListener("error", function () {
        console.error("Erreur de requete avec --> " + url);
    });

    xhr.send(null);
}
