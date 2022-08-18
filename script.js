const phoneCall = document.getElementById('phoneCall');

// After googling I found out that I have to call the alert function in a callback so it won't trigger without clicking :D
phoneCall.addEventListener('click', function () {
    alert(
        'Unfortunately we cannot take calls right now.\nBut you can write us an email at contact@canva.com'
    );
});
