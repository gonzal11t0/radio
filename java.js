window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
    });
window.onload=function(){alert('Bienvenido a nuestra radio')
;}