window.addEventListener('click', function (e) {
    if (document.getElementById('apDiv1').contains(e.target) ||
        document.getElementById('show_button').contains(e.target)) {

    } else {
        document.getElementById('apDiv1').style.display = 'none';
        document.getElementById('show_button').style.display = "block";
    }
});
function toggleIfrm() {
    if (document.getElementById('apDiv1').style.display === "none") {
        document.getElementById('apDiv1').style.display = "block";
        document.getElementById('show_button').style.display = "none";

    } else {
        document.getElementById('apDiv1').style.display = "none";

    }
}