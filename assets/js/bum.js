/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {

            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
	
// Notification Button Close the dropdown if the user clicks outside of it


function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show1");
}

window.onclick = function(event) {
        if (!event.target.matches('.dropbtn1')) {

            var dropdowns = document.getElementsByClassName("dropdown-content1");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show1')) {
                    openDropdown.classList.remove('show1');
                }
            }
        }
    }


function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show3");
}

window.onclick = function(event) {
        if (!event.target.matches('.dropbtn3')) {

            var dropdowns = document.getElementsByClassName("dropdown-content3");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show3')) {
                    openDropdown.classList.remove('show3');
                }
            }
        }
    }