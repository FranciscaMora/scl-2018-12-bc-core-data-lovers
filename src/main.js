window.onload = () => {
  document.getElementById("champion-screen").style.display = "none";
};
document.addEventListener('DOMContentLoaded', function () {
  M.AutoInit();
});

/**Pantalla runas */
const containerRoot2=document.getElementById('root2');
document.getElementById('runes').addEventListener('click', (evento) => {
  evento.preventDefault();
  document.getElementById('main-screen').style.display = 'none';
  document.getElementById('champion-screen').style.display = 'block';
  data.forEach(element=>{
  containerRoot2.innerHTML+=`
  
    <div class="col s12 m2">
      <div class="card">
        <div class="card-image">
          <img src=${element.splash}>
        </div>
        <div class="card-action">
          <a href="#">${element.name}</a>
        </div>
      </div>
    </div>
  
            
`
  })
});

const containerRoot = document.getElementById('root');
/**Cambio de tag según valor select */
document.getElementById('selectTags').addEventListener('change', () => {
  let rol = document.getElementById('selectTags').value;
  let filtered = filter(data, rol);
  console.log(filtered)
  containerRoot.innerHTML = '';
  filtered.forEach(element => {
    containerRoot.innerHTML += ` 

        <div class="col s4 m4">
          <div class="card">
            <div class="card-image">
              <img src="${element.splash}">
              <span class="card-title">${element.name}</span>
              <a id="button" data-target="modal1" class="btn-floating halfway-fab waves-effect waves-light red btn modal-trigger"><i class="material-icons">add</i></a>
            </div>
            <div class="card-content">
              <p>${element.title}</p>
            </div>
          </div>
        </div>
      `
  })

})

/**Pantalla runas */



// document.getElementById('button')document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.modal');
//   var instances = M.Modal.init(elems, options);

// });


// var instance = M.Carousel.getInstance(Carousel);
// document.addEventListener('DOMContentLoaded', function() {
//     var instance = M.Carousel.getInstance(Carousel);
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(Carousel, options);
//   });
