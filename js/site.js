function equalizeCols(clasName) {

    var heights = $(clasName).map(function() {
        return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);

    $(clasName).height(maxHeight);

}


$(document).ready(function(){
    equalizeCols(".contact-col");
    equalizeCols(".about-col");
});