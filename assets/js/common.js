// var baseURL = 'http://ajax.frontend.itheima.net/';
// $.ajaxPrefilter(function(option) {
//     option.befornSend = function() {
//         window.NProgress && NProgress.start()
//     };
//     option.url = baseURL + option.url;

//     if(option.url.lastIndexOf('/my/') !== -1) {
//         option.headers = {
//             Authorization:localStorage.getItem('mytoken')
//         }
//     };
//     option.complete = function(res) {
//         window.NProgress && NProgress.done();

//         if(res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败') {
//             localStorage.removeItem('mytoken')
//             location.href = './login.html'
//         }
//     }

// })


    // var baseURL = 'http://ajax.frontend.itheima.net/';
    var baseURL = 'http://www.liulongbin.top:3007/'
    
    $.ajaxPrefilter(function(option){
        option.beforeSend = function(){
            window.NProgress && NProgress.start()
        }
        option.url = baseURL + option.url;
        if(option.url.lastIndexOf('/my/') !== -1) {
            option.headers = {
                Authorization:localStorage.getItem('mytoken')
            }
        };
        option.complete = function(res) {
            window.Nprogress && NProgress.done();
            if(res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败'){
                localStorage.removeItem('mytoken'),
                location.href = './login.html'
            }
        }
    })
