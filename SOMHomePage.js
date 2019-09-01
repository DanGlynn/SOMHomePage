

function openNav() {
  var e = document.getElementById("mySidenav");
  if (e.style.width == '260px')
  {
      e.style.width = '0px';
      document.getElementById("page-wrapper").style.marginLeft = "0";
  }
  else
  {
      e.style.width = '260px';
      document.getElementById("page-wrapper").style.marginLeft = "260px";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0"
}

/*JS for modal button images*/

var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
      var modalImg = document.getElementById("img01");
      img.onclick = function(){

  modal.style.display = "block";
          modalImg.src = this.src;
        }
      var modal2 = document.getElementById('myModal2');
      var img2 = document.getElementById('myImg2');
      var modalImg2 = document.getElementById("img02");

            img2.onclick = function(){
            modal2.style.display = "block";
            modalImg2.src = this.src;
              }

              window.onclick = function(event) {
                  if (event.target == modal) {
                    modal.style.display = "none";
                  }
                 if(event.target == modal2) {
                   modal2.style.display = "none";
                 }
              }
