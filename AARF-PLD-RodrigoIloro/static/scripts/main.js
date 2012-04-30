$(document).ready(function() {
    /* make all external links open in new window */
    $("a[href*='http://']:not([href*='" + location.hostname + "'])").attr("target", "_blank");
    /* hide investment calculator submit button because javascript is enabled */
    $("#investmentCycleSubmit").css("display", "none");
    /* investment calculator */
    $("#investmentCycle").change(function() {
        try {
            var dateParts = $("#investmentCycle").val().split("/");
            var investmentCycle = new Date(dateParts[1], dateParts[0] - 1, 1);
            if (investmentCycle != "Invalid Date") {
                var nextQuarters = new Array();
                nextQuarters[0] = new Date(investmentCycle.getFullYear(), investmentCycle.getMonth(), investmentCycle.getDate() + 90).format("mmmm");
                nextQuarters[1] = new Date(investmentCycle.getFullYear(), investmentCycle.getMonth(), investmentCycle.getDate() + 210).format("mmmm");
                nextQuarters[2] = new Date(investmentCycle.getFullYear(), investmentCycle.getMonth(), investmentCycle.getDate() + 300).format("mmmm");

                $("#subsecuentInvestments").text(nextQuarters.join(", "));
            }
        }
        catch (exception) {
            $("#subsecuentInvestments").text("please, select a cycle");
        }
    });
    $("span.displayInstructions").click(function(eventArgs) {
        $("div#instructions").toggle("fast");
    });
});