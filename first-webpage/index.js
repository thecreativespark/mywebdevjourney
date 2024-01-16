const icon = document.getElementById('icon');

    function changemode() {
      document.body.classList.toggle('darkmode');
      if(document.body.classList.contains('darkmode')){
        icon.src = "icons/moon.png";
      }
      else{
        icon.src = "icons/sun.png";
      }
    }

    icon.addEventListener('click', changemode);