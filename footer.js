/* =====================================================
   FOOTER JS
===================================================== */

const footerYear = document.getElementById("footerYear");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}