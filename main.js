window.onload=()=>{
    document.getElementById("champion-screen").style.display="none";


  
};

function runes(){
    document.getElementById("main-screen").style.display="none";
    document.getElementById("champion-screen").style.display="block";
}



document.getElementById("az").addEventListener("click",(event) =>{
    event.preventDefault();
    alert("Holamundo");

});






// var instance = M.Carousel.getInstance(Carousel);
// document.addEventListener('DOMContentLoaded', function() {
//     var instance = M.Carousel.getInstance(Carousel);
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(Carousel, options);
//   });
