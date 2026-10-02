document.addEventListener("DOMContentLoaded", function() {
    var data = window.location.pathname;
    document.querySelector("#content").innerHTML = data;
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
