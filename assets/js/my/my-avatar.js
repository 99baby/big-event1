$(function() {
    var $image = $('.cropper-box img')
    var options = {
        aspectRatio:1,
        preview:'.img-preview'
    }
    $image.cropper(options);
    $('#uploadImg').click(function(){
        $('#selectImg').trigger('click')
    })
    $('#selectImg').change(function(e){
        var file = e.target.files[0];
        var newImgURL = URL.createObjectURL(file);
        $image.cropper('destroy')
              .attr('src',newImgURL)
              .cropper(options)
    });
    $('#okbtn').click(function(){
        var imgURL = $image.cropper('getCroppedCanvas',{
            width:100,
            height:100
        }).toDataURL('image/png');
        $.ajax({
            type:'post',
            url:'my/update/avatar',
            data:{
                avatar:imgURL
            },
            success:function(res){
                if(res.status === 0) {
                    layer.msg(res.message)
                    window.parent.$.loadUserInfo()

                }
               
            }
        })
    })
})