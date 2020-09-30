window.onload = function() {
    my_init();
};

function my_init() {
    let initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('MiddleNameOutput').innerText = initPerson.middleName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('birthYearOutput').innerText = initPerson.year_of_birth;
    document.getElementById('workOutput').innerText = initPerson.work;
};


document.getElementById('generationOutput').addEventListener('click', function () {
    my_init();
});

document.getElementById('сlearOutput').addEventListener('click', function () {
    
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('MiddleNameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('workOutput').innerText = '';
});

