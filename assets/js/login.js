$(function() {

    $('.regiter a').click(function(){
        $('.login-box').hide().next().show()
    })
    $('.login a').click(function(){
        $('.login-box').show().next().hide()
    })
    // layui是全局对象，通过他可以得到form对象
    var form = layui.form;
    // 基于Layui自定义表单验证规则
    form.verify({
        uname: [/^[\S]{6,8}$/,'用户名必须是6-8位字符'],
        //密码6-12位数字或者字母和下划线
        pwd: function(value,item) {
            //形参value:是对应表单输入的值，
            // item表示dom对象
            var reg = /^[\w]{6,12}$/
            if(!reg.test(value)) {
                return '密码必须是6-12位数字、字母或者下划线组成'
            }

        },
        same:function(value,item){
            var password = $('#reg-password').val();
            if(password !== value){
                return '两次密码不一样'
            }
        }
    })
    //控制表单提交
    $('.login-box').submit(function(e) {
        e = window.event || e;
        e.preventDefault();
        var formData = $(this).serialize();
        // 提前之前要做表单验证
        $.ajax({
            type:'post',
            url:'http://ajax.frontend.itheima.net/api/login',
            data:formData,
            success: function(res) {
                // 成功了，自己保存token，跳转到index.html
                layer.msg(res.message);
                if(res.status === 0) {
                     // 保存到本地存储中
                    localStorage.setItem('token', res.token);
                    location.href = './index.html'
                }
            }
        })
    })
    //注册
    $('.regiter-box').submit(function(e){
        e = window.event || e;
        e.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            type:'post',
            url: 'http://btapi.ehomespace.com/api/reguser',  
            data:formData,
            success: function(res) {
                layer.msg(res.message);
                if(res.status === 0) {
                   
                        $('.login-box').show().next().hide()
                    
                }

            }
        })
    })
})