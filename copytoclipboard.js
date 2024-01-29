function copyToClipboard() {
    var discordHandle = "@0nsx";
    navigator.clipboard.writeText(discordHandle);

    var tooltip = document.getElementById("toast-simple");
    tooltip.style.display = "flex";
    tooltip.style.zIndex = '5000'
    tooltip.style.width = '200px'
    tooltip.style.bottom = '150%'
    setTimeout(function () {
        tooltip.style.display = "none";
    }, 10000);
}