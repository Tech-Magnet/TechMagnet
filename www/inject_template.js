window.onload = function(){
    //Inject Header
    document.getElementById("header").innerHTML = "<div style=\"display: flex; align-items: center; justify-content: center;\">\n" +
        "            <img src=\"/www/img/TM_logo.png\" style=\"width: 150px;\" alt=\"\">\n" +
        "            <h1 class=\"MainTitle\" id=\"main_title\" onclick=\"window.location.pathname = ''\">Tech Magnet</h1>\n" +
        "        </div>\n" +
        "        <div class=\"center\">\n" +
        "            <div class=\"menuBar\">\n" +
        "                <h1 onclick=\"window.location.pathname=''\">Home</h1>\n" +
        "                <h1 onclick=\"window.location.pathname='/shop'\">Shop</h1>\n" +
        "                <h1 onclick=\"window.location.pathname='/about_us'\">About Us</h1>\n" +
        "                <h1 onclick=\"window.location.pathname='/contact_us'\">Contact Us</h1>\n" +
        "            </div>\n" +
        "        </div>";

    //inject Footer

}