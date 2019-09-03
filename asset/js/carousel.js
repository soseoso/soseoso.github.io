$(function() {
    if ($(window).width() <= 450) {
        document.getElementById("mc1").each(function() {
            $(this).attr("src", $(this).attr("src").replace("images/620x410/", "images/310x205/"));
        });
    }
});