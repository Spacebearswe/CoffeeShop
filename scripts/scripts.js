document.addEventListener("DOMContentLoaded", function() {
var location = window.location.pathname;
var path = location.substring(0, location.lastIndexOf("/"));
var directoryName = path.substring(path.lastIndexOf("/")+1);

    document.querySelector("#content").innerHTML = path;
    //loadGallery();
});

function loadAboutUs() {
    fetch("/CoffeeShop/About.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("#content").innerHTML = data;
        });
}

function loadProducts() {
    fetch("Products.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("#content").innerHTML = data;
        });
}

function loadServices() {
    fetch("Services.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("#content").innerHTML = data;
        });
}

function loadContact() {
    fetch("Contact.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("#content").innerHTML = data;
        });
}
function loadGallery() {
    fetch("/Gallery.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("#content").innerHTML = data;
        });
}
