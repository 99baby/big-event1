// $(function () {
//     function loadUserInfo() {
//         var form = layui.form;
//         $.ajax({
//             type: 'get',
//             url: 'my/userinfo',
//             success: function (res) {
//                 // $('#form input[name = username]').val(res.data.username)
//                 // $('#form input[name = nickname]').val(res.data.nickname)
//                 // $('#form input[name = email]').val(res.data.email)

//                 form.val('basicForm', res.data)
//             }
//         })
//     }
// })

$(function() {
    var form = layui.form
    function loadUserInfo() {
        $.ajax({
            type:'get',
            url:'my/userinfo',
            success:function(res) {
                form.val('basicForm',res.data)

            }
        })
    }
    loadUserInfo();
    $('#form').submit(function(e){
        e.preventDefault();
        var fd = $(this).serializeArray();
        fd = fd.filter(function(value){
            return value.name !== 'username'
        });
        $.ajax({
            type:'post',
            url:'my/userinfo',
            data:fd,
            success:function(res) {
                if(res.status === 0) {
                    layer.msg('更新用户信息成功')
                }
            }
        })
    })
})