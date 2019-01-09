window.onload = () => {
  document.getElementById("champion-screen").style.display = "none";
};
// document.addEventListener('DOMContentLoaded', function () {
//   M.AutoInit();
// });



const containerRoot = document.getElementById('root');
/**Cambio de tag según valor select */
document.getElementById('selectTags').addEventListener('change', () => {
  let rol = document.getElementById('selectTags').value;
  let filtered = filter(data,rol);
  containerRoot.innerHTML = '';
  filtered.forEach(element => {
    containerRoot.innerHTML += ` <div class="card small col s12 l3">
  <div class="card-image waves-effect waves-block waves-light">
    <img class="activator" src=${element.splash}>
  </div>
  <div class="card-content">
  <span class="card-title activator grey-text text-darken-4">${element.name}<i class="material-icons right">more_vert</i></span>
    <p><a href="#">Builds</a> <a href="#">Runas</a></p>
  </div>
  <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
    <p>${element.info}</p>
  </div>
</div>
          
      `
  })

})


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

