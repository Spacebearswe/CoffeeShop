document.addEventListener("DOMContentLoaded", function() {
    loadGallery();
});

function loadAboutUs() {
    fetch("../About.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("#content").innerHTML = data;
        });
}

function loadProducts() {
    fetch("../Products.html")
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
    fetch("Gallery.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("#content").innerHTML = data;
        });
}
