/*====================================
 Free To Use For Personal And Commercial Usage
Author: #
 License: Open source - MIT
 Please visit http://opensource.org/licenses/MIT for more Full Deatils of license.
 Share Us if You Like our work 
 Enjoy Our Codes For Free always.
======================================*/

(function ($) {
    $.mainApp = {
        main_fun: function (err_status) {
            var count;
            if(err_status) {
                count = new countUp("error-link", 10, err_status, 0, 5); 
            } else {
                count = new countUp("error-link", 10, 404, 0, 5); //CHANGE 404 TO THE ERROR VALUE AS YOU WANT
            }
            window.onload = function () {
                count.start();
            }
        },
        initialization: function () {
            mainApp.main_fun();
        }
    }
}(jQuery));
