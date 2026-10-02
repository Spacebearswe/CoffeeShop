# Coffee Shop

A simple static website for a coffee shop. The home page presents a navigation menu for the shop's products, gallery, services, about information, and contact details. Selecting a section loads its HTML into the page without a full-page navigation.

## Run locally

This project does not require a build step or package installation. Because the page uses `fetch()` to load its section files, open it through a local web server rather than directly as a `file://` URL.

From the project folder, run:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000> in a browser. Stop the server with `Ctrl+C`.

## Project structure

```text
CoffeeShop/
├── index.html          # Main page and section navigation
├── about.html          # About section
├── contact.html        # Contact information
├── gallery.html        # Coffee image gallery
├── products.html       # Coffee menu
├── services.html       # Services offered
├── css/
│   ├── gallery.css     # Gallery styles
│   ├── shop.css        # Shop layout styles
│   └── style.css       # General styles
├── pics/               # Gallery images
└── scripts/
    └── scripts.js      # Loads section content into the home page
```

## Built with

- HTML
- CSS
- JavaScript (browser `fetch()` API)
