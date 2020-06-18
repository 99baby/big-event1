$(function() {
    var mytoken = localStorage.getItem('mytoken');
    if(!mytoken) {
        location.href = 'login1.html'
    };
    function loadUserInfo(){
        $.ajax({
            type:'get',
            url:'http://ajax.frontend.itheima.net/my/userinfo',
            headers:{
                Authorization: localStorage.getItem('mytoken')

            },
            success:function(res){
                if(res.status === 0) {
                    var info = res.data
                    $('#welcome-username').html(info.username);
                    $('#nav-username').html(info.username)
                    if(info.user_pic){
                        $('#welcome-username').parent().prev('div').remove();
                        $('#welcome-username').parent().prepend('<img src="' + info.user_pic + '" alt= "" />')
                    }
                }
            }
        })
    }
    loadUserInfo();
    $('#logout-btn').click(function() {
        layer.confirm('确定要退出吗',{icon:3,title:'提示'},function(index){
            localStorage.removeItem('mytoken')
            layer.close(index)
            location.href = './login.html'
        })
    })

})