/* jshint newcap: false */
/* global Velocity */
(function() {
    "use strict";

    var positions = document.getElementById("positions");
    if (positions) {
        var openPositions = document.getElementById("openpositions");
        var closePositions = document.getElementById("closepositions");

        if (openPositions) {
            openPositions.addEventListener("click", function(e) {
                e.preventDefault();
                e.stopPropagation();

                Velocity(positions, "fadeIn", { duration: 200 });
                Velocity(positions, "scroll", { duration: 300 });
            });
        }

        if (closePositions) {
            closePositions.addEventListener("click", function() {
                Velocity(positions, "fadeOut", { duration: 200 });
            });
        }

        // open if target set to position, show that section
        if (document.location.hash != "") {
            Velocity(
                positions,
                {
                    opacity: 1
                },
                {
                    display: "block",
                    complete: function() {
                        var element = document.getElementById(document.location.hash.slice(1)) || positions;
                        Velocity(element, "scroll", { duration: 300 });
                    }
                }
            );
        }
    }
})();
