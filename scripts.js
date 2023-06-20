// Menu e footer

fetch('head.html')
    .then(response => response.text())
    .then(data => {
        const headB = document.getElementsByTagName('head')[0];
        const headerContentB = data;
        headB.innerHTML += headerContentB;
    });


fetch('header.html')
    .then(response => response.text())
    .then(data => {
        const headA = document.getElementsByTagName('header')[0];
        const headerContentA = data;
        headA.innerHTML += headerContentA;
    });

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        const head = document.getElementsByTagName('footer')[0];
        const headerContent = data;
        head.innerHTML += headerContent;
    });

//

// Modal

$(document).ready(function () {
    $("#myModal").modal();
});

//

// Calendário 

function openCity(evt, cityName) {
    var i, tabreplacepage, tablinkpage;
    tabreplacepage = document.getElementsByClassName("tabreplacepage");
    for (i = 0; i < tabreplacepage.length; i++) {
        tabreplacepage[i].style.display = "none";
    }
    tablinkpage = document.getElementsByClassName("tablinkpage");
    for (i = 0; i < tablinkpage.length; i++) {
        tablinkpage[i].className = tablinkpage[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openday(evt, dayName) {
    var i, tabreplacequadro, tablinkquadro;
    tabreplacequadro = document.getElementsByClassName("tabreplacequadro");
    for (i = 0; i < tabreplacequadro.length; i++) {
        tabreplacequadro[i].style.display = "none";
    }
    tablinkquadro = document.getElementsByClassName("tablinkquadro");
    for (i = 0; i < tablinkquadro.length; i++) {
        tablinkquadro[i].className = tablinkquadro[i].className.replace(" active", "");
    }
    document.getElementById(dayName).style.display = "block";
    evt.currentTarget.className += " active";
}

const date = new Date();
let day = date.getDate();


function myFunction() {
    if (day != 3 && day != 7 && day != 8 && day != 9 && day != 14 && day != 21 && day != 26 && day != 28 && day != 30) {
        document.getElementById("dia").style.display = "block";
        document.getElementById("fdia").innerHTML = day;
        document.getElementById("finfo").innerHTML = "Dia de aula";
    } else {
        document.getElementById(day).style.display = "block";
    }


    if (day == 4 || day == 10 || day == 11 || day == 17 || day == 18 || day == 24 || day == 25 || day == 31) {
        document.getElementById("finfo").innerHTML = "Dia de folga";
    }
}

// 