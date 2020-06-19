$(function() {
    var form = layui.form;
    $.ajax({
        type:'get',
        url:'my/userinfo',
        success: function(res) {
            // $('#form input[name = username]').val(res.data.username)
            // $('#form input[name = nickname]').val(res.data.nickname)
            // $('#form input[name = email]').val(res.data.email)

            form.val('basicForm',res.data)
        }
    })
})