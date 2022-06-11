
function loadFile(path, type) {
    if (type == 'js') {
        $('head').append(
            `<script type=“text/javascript” src=“${path}“></script>`
        );
    } else if (type == 'css') {
        $('head').append(
            `<link href=“${path}" rel=“stylesheet” type=“text/css”>`
        );
    }
}

// Stylesheets
loadFile('src/main/resources/static/CSS/homepage.css', 'css');
// Scripts
loadFile('src/main/resources/static/js/views/partials/home.js', 'js');