/* jshint newcap: false */
/* global Velocity */
(function() {
    "use strict";

    var positions = document.getElementById("positions");

    document.getElementById("openpositions").addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();

        Velocity(positions, "fadeIn", { duration: 200 });
        Velocity(positions, "scroll", { duration: 300 });
    });

    document.getElementById("closepositions").addEventListener("click", function() {
        Velocity(positions, "fadeOut", { duration: 200 });
    });
})();

