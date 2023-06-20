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