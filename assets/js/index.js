$(function() {
    var mytoken = localStorage.getItem('mytoken');
    if(!mytoken) {
        location.href = 'login1.html'
    }

})