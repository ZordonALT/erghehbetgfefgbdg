    function redirect_home() {
    window.location = 'index.html';
    window.close();
    }
    function open_window() {
        window.location = 'join.html';
        window.close();
        }
    
        function close_window() {
        window.location = 'declined.html';
        window.close();
        }

        let popup = document.getElementById("popup");

        function openpopup(){
        popup.classList.add("open-popup");
        }
