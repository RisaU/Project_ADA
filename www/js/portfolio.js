
$(function() {
/**
* Gallery 
* Full-Screen Mode
*/
    var viewer = ImageViewer();
    $('.gallery-items').click(function () {
        var imgSrc = this.src,
            highResolutionImage = $(this).data('high-res-img');
 
        viewer.show(imgSrc, highResolutionImage);
    });   
});
