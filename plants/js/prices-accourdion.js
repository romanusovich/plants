let basicsButton = document.querySelector('.circle-arrow.basics');
let standardButton = document.querySelector('.circle-arrow.standard');
let proCareButton = document.querySelector('.circle-arrow.pro-care');

basicsButton.addEventListener("click", function() {
    activateIt(basicsButton);
    disactivateIt(standardButton);
    disactivateIt(proCareButton);
});

standardButton.addEventListener("click", function() {
    activateIt(standardButton);
    disactivateIt(basicsButton);
    disactivateIt(proCareButton);
});

proCareButton.addEventListener("click", function() {
    activateIt(proCareButton);
    disactivateIt(basicsButton);
    disactivateIt(standardButton);
});

function activateIt(element) {
    if (element.classList.contains("price-item-group")) return true;
    else if (element.classList.contains("circle-arrow")) {
        activateIt(element.firstElementChild);
    }
    else if (element.classList.contains("price-item-main")) {
        activateIt(element.nextElementSibling);
        return true;
    }
    if (!element.classList.contains("arrow")) {
        activateIt(element.parentNode);
    }
    element.classList.toggle('active');    
}

function disactivateIt(element) {
    if (element.classList.contains("price-item-group")) return true;
    else if (element.classList.contains("circle-arrow")) {
        disactivateIt(element.firstElementChild);
    }
    else if (element.classList.contains("price-item-main")) {
        disactivateIt(element.nextElementSibling);
        return true;
    }
    if (!element.classList.contains("arrow")) {
        disactivateIt(element.parentNode);
    }
    element.classList.remove('active');    
}

