let serviceItemsGarden = document.querySelectorAll('.service-item.garden');
let serviceItemsLawn = document.querySelectorAll('.service-item.lawn');
let serviceItemsPlanting = document.querySelectorAll('.service-item.planting');
let buttonGarden = document.querySelector('.service-button.garden');
let buttonLawn = document.querySelector('.service-button.lawn');
let buttonPlanting = document.querySelector('.service-button.planting');
let activeButtons = 0;
let isEnabledGarden = false;
let isEnabledLawn = false;
let isEnabledPlanting = false;


buttonGarden.addEventListener("click", function() {
    isEnabledGarden = !isEnabledGarden;
    if (isEnabledGarden) {
        activeButtons++;
        buttonGarden.classList.add('active');
    }
    else {
        activeButtons--;
        buttonGarden.classList.remove('active');
    }
    if (activeButtons === 0) {
        unBlurAll();
    }
    if (activeButtons === 1 && isEnabledGarden) {
        blurAll();
        unBlurMe(serviceItemsGarden);
    }
    if (activeButtons === 1 && !isEnabledGarden) {
        blurMe(serviceItemsGarden);
    }
    if (activeButtons === 2) {
        unBlurMe(serviceItemsGarden);
    }
    if (activeButtons >= 3) {
        isEnabledLawn = !isEnabledLawn;
        isEnabledPlanting = !isEnabledPlanting;
        activeButtons = 1;
        blurAll();
        unBlurMe(serviceItemsGarden);
        buttonPlanting.classList.remove('active');
        buttonLawn.classList.remove('active');
    }
});

buttonLawn.addEventListener("click", function() {
    isEnabledLawn = !isEnabledLawn;
    if (isEnabledLawn) {
        activeButtons++;
        buttonLawn.classList.add('active');
    }
    else {
        activeButtons--;
        buttonLawn.classList.remove('active');
    }
    if (activeButtons === 0) {
        unBlurAll();
    }
    if (activeButtons === 1 && isEnabledLawn) {
        blurAll();
        unBlurMe(serviceItemsLawn);
    }
    if (activeButtons === 1 && !isEnabledLawn) {
        blurMe(serviceItemsLawn);
    }
    if (activeButtons === 2) {
        unBlurMe(serviceItemsLawn);
    }
    if (activeButtons >= 3) {
        isEnabledGarden = !isEnabledGarden;
        isEnabledPlanting = !isEnabledPlanting;
        activeButtons = 1;
        blurAll();
        unBlurMe(serviceItemsLawn);
        buttonPlanting.classList.remove('active');
        buttonGarden.classList.remove('active');
    }
});

buttonPlanting.addEventListener("click", function() {
    isEnabledPlanting = !isEnabledPlanting;
    if (isEnabledPlanting) {
        activeButtons++;
        buttonPlanting.classList.add('active');
    }
    else {
        activeButtons--;
        buttonPlanting.classList.remove('active');
    }
    if (activeButtons === 0) {
        unBlurAll();
    }
    if (activeButtons === 1 && isEnabledPlanting) {
        blurAll();
        unBlurMe(serviceItemsPlanting);
    }
    if (activeButtons === 1 && !isEnabledPlanting) {
        blurMe(serviceItemsPlanting);
    }
    if (activeButtons === 2) {
        unBlurMe(serviceItemsPlanting);
    }
    if (activeButtons >= 3) {
        isEnabledLawn = !isEnabledLawn;
        isEnabledGarden = !isEnabledGarden;
        activeButtons = 1;
        blurAll();
        unBlurMe(serviceItemsPlanting);
        buttonGarden.classList.remove('active');
        buttonLawn.classList.remove('active');
    }
});

function blurMe(nodeList) {
    for (var i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.add('active');
    } 
}

function unBlurMe(nodeList) {
    for (var i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.remove('active');
    } 
}

function blurAll() {
    for (var i = 0; i < serviceItemsGarden.length; i++) {
        serviceItemsGarden[i].classList.add('active');
    }  
    for (var i = 0; i < serviceItemsLawn.length; i++) {
        serviceItemsLawn[i].classList.add('active');
    }
    for (var i = 0; i < serviceItemsPlanting.length; i++) {
        serviceItemsPlanting[i].classList.add('active');
    }
}

function unBlurAll() {
    for (var i = 0; i < serviceItemsGarden.length; i++) {
        serviceItemsGarden[i].classList.remove('active');
    }  
    for (var i = 0; i < serviceItemsLawn.length; i++) {
        serviceItemsLawn[i].classList.remove('active');
    }
    for (var i = 0; i < serviceItemsPlanting.length; i++) {
        serviceItemsPlanting[i].classList.remove('active');
    }
}