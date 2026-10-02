document.addEventListener("DOMContentLoaded", function() {
// var location = window.location.pathname;
// var path = location.substring(0, location.lastIndexOf("/"));
// var directoryName = path.substring(path.lastIndexOf("/")+1);

// Source - https://stackoverflow.com/a/70803662
// Posted by jcubic
// Retrieved 2026-10-02, License - CC BY-SA 4.0

function list_directory(user, repo, directory) {
  const url = `https://api.github.com/repos/${user}/${repo}/git/trees/master`;
  const list = fetch(url).then(res => res.json());
  const dir = list.tree.find(node => node.path === directory);
  if (dir) {
     const list = fetch(dir.url).then(res => res.json());
     var r =  list.then(data => data.tree.map(node => node.path));
  }
}

    r.then(data => {
        document.querySelector("#content").innerHTML = data;
    });
    //loadGallery();
});

function loadAboutUs() {
    fetch("/CoffeeShop/artifacts/About.html")
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
