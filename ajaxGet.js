function ajaxGet(url, callback)
{
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.addEventListener("load", function () {
        if ((req.status >= 200) && (req.status < 400))
            callback(req.responseText);
        
        else
            console.error(req.status + " " + req.statusText + " " + url)
    });

    xhr.addEventListener("error", function () {
        console.error("Erreur de requete avec --> " + url);
    });

    xhr.send(null);
}
