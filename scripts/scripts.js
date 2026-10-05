document.addEventListener("DOMContentLoaded", function () {
    // tried to dynamically determine the current directory for fetching files, but it didn't work as expected.
    // var location = window.location.pathname;
    // var path = location.substring(0, location.lastIndexOf("/"));
    // var directoryName = path.substring(path.lastIndexOf("/")+1);

    //  var r;
    //   const url = `https://api.github.com/repos/${user}/${repo}/git/trees/master`;
    //   const list = fetch(url).then(res => res.json());
    //   const dir = list.tree.find(node => node.path === directory);
    //   if (dir) {
    //      const list = fetch(dir.url).then(res => res.json());
    //      r =  list.then(data => data.tree.map(node => node.path));
    //   }

    loadGallery();
});

function loadAbout() {
    // Load the About section content directly without fetching an external file
    // I have problems to load this content from an external file, 
    // so it's hardcoded here. as I don't find the right filepath in github pages.

    var data = "<h3>Welcome to our coffee shop!</h3>"
    data += "<p>Our mission is to create a memorable coffee experience for every customer who walks through our doors.</p>"
    data += "<p>We believe in the art of coffee-making and strive to deliver exceptional quality in every cup.</p>"

    document.querySelector("#content").innerHTML = data;
}

function loadProducts() {
    // html from Products.html
    var data = "<h3>Welcome to our coffee shop!</h3>"
    data += "<p>Our mission is to create a memorable coffee experience for every customer who walks through our doors.</p>"
    data += "<p>We believe in the art of coffee-making and strive to deliver exceptional quality in every cup.</p>"

    document.querySelector("#content").innerHTML = data;
}

function loadServices() {
    // html from Services.html
    var data = "<h3>Our Services</h3>"
    data += "<p>We offer a wide range of coffee-related services to cater to every coffee lover's needs.</p>"
    data += "<p>From brewing workshops to personalized coffee consultations, we ensure a unique experience for each customer.</p>"

    document.querySelector("#content").innerHTML = data;
}

function loadProducts() {
    // html from Products.html
    var data = "<h3>Our Products</h3>"
    data += "<p>Explore our diverse range of coffee products, from freshly roasted beans to specialty blends.</p>"
    data += "<p>We source the finest ingredients to ensure every cup of coffee you enjoy is of the highest quality.</p>"

    document.querySelector("#content").innerHTML = data;
}

function loadGallery() {
    // html from Gallery.html
    var data = "<h3>Gallery</h3>"
    data += "<p>Explore our coffee shop through our gallery of images showcasing our ambiance, products, and events.</p>"

    document.querySelector("#content").innerHTML = data;
}

function loadContact() {
    // html from Contact.html
    var data = "<h3>Contact Us</h3>"
    data += "<p>If you have any questions or inquiries, feel free to reach out to us.</p>"
    data += "<p>Email: contact@coffeeshop.com | Phone: (123) 456-7890</p>"

    document.querySelector("#content").innerHTML = data;
}


function loadAboutFile() {
    fetch("/CoffeeShop/artifacts/About.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("#content").innerHTML = data;
        });
}

function loadProductsFile() {
    fetch("Products.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("#content").innerHTML = data;
        });
}

function loadServicesFile() {
    fetch("Services.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("#content").innerHTML = data;
        });
}

function loadContactFile() {
    fetch("Contact.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("#content").innerHTML = data;
        });
}
function loadGalleryFile() {
    fetch("/Gallery.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("#content").innerHTML = data;
        });
}
