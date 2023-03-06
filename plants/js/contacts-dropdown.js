let dropdown = document.querySelector('.contact-dropdown-head');
let dropdownOptions = document.querySelectorAll('.dropdown-option');
let addressBlock = document.querySelector('.contact-info-block');
let blockBody = document.querySelectorAll('.block-body');
let callUs = document.querySelector('.call-us');
let blockInfo = [
    {
        City: 'Canandaigua, NY',
        Phone: '+1	585	393 0001',
        officeAdress: '151 Charlotte Street'
    },
    {
        City: 'New York City',
        Phone: '+1	212	456 0002',
        officeAdress: '9 East 91st Street'
    },
    {
        City: 'Yonkers, NY',
        Phone: '+1	914	678 0003',
        officeAdress: '511 Warburton Ave'
    },
    {
        City: 'Sherrill, NY',
        Phone: '+1	315	908 0004',
        officeAdress: '14 WEST Noyes BLVD'
    },
]

dropdown.addEventListener("click", function() {
    dropdown.parentElement.classList.toggle('active');
    if (dropdown.parentElement.classList.contains('active')) {
        addressBlock.classList.remove('active');
        return;
    }
    if (dropdown.firstElementChild.textContent !== 'City') {
        addressBlock.classList.add('active');
    }
});

for (var i = 0; i < dropdownOptions.length; i++) {
    dropdownOptions[i].addEventListener("click", function(event) {
        blockBody[0].textContent = blockInfo[event.currentTarget.id].City;
        blockBody[1].textContent = blockInfo[event.currentTarget.id].Phone;
        blockBody[2].textContent = blockInfo[event.currentTarget.id].officeAdress;

        dropdown.firstElementChild.textContent = blockInfo[event.currentTarget.id].City;
        callUs.href = "tel:" + blockInfo[event.currentTarget.id].Phone;
        dropdown.classList.add('active');
        dropdown.parentElement.classList.toggle('active');
        addressBlock.classList.add('active');

        if (screen.width <= 380) {
            let contactWoman = document.querySelector('.contact-woman');
            contactWoman.style.display = "none";
        }
    });
}
