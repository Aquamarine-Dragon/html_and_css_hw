$(function () {
    $(".color-box li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $(this).parent().siblings().children().eq(index).addClass("active")
            .siblings().removeClass("active");
    });
});

function calculateTotal() {
    var total = 0;
    if (document.getElementById("Manual").checked)
        total = total + 17790.00;
    if (document.getElementById("Automatic").checked)
        total = total + 18590.00;
    if (document.getElementById("GT-S Manual").checked)
        total = total + 22455.00;
    if (document.getElementById("Sportshift").checked)
        total = total + 23155.00;
    if (document.getElementById("Combo1").checked)
        total = total + 1235.00;
    if (document.getElementById("Combo2").checked)
        total = total + 3354.00;
    if (document.getElementById("Stereo").checked)
        total = total + 550.00;
    if (document.getElementById("Security").checked)
        total = total + 399.00;
    if (document.getElementById("Dimming").checked)
        total = total + 295.00;

    document.getElementById("total").value = total;


}

document.getElementById("totalButton").addEventListener("click", calculateTotal, false);
