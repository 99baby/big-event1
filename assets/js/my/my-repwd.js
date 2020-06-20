$('#form').submit(function(e){
    var form = layui.form
    form.verify({
        diff:function(value){
            var oldPwd = $('#form input[name = oldPwd]').val()
            if(oldPwd === value) {
                return '新密码不能和原密码相同'
            }
        },
        same:function(value){
            var newPwd = $('#form input[name = newPwd]').val();
            if(newPwd !== value){
                return '两次密码不一致'
            }
        }
    })
    e.preventDefault();
    var fd = $(this).serialize();
    console.log(fd)
    $.ajax({
        type:'post',
        url:'my/updatepwd',
        data:fd,
        success:function(res){
            if(res.status === 0) {
                layer.msg(res.message)
            }else{
                layer.msg(res.message)
            }
        }
    })

})