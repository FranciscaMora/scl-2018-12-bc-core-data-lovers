document.addEventListener('DOMContentLoaded',function(){
  window.M.AutoInit();
});


window.onload = () => {
  document.getElementById("runes-screen").style.display = "none";

// document.addEventListener('DOMContentLoaded', function () {
//   M.AutoInit();
// });

const dataLol= Object.entries(window.lol)
const containerRoot = document.getElementById('root');
/**Cambio de tag según valor select */
document.getElementById('selectTags').addEventListener('change', () => {
  let rol = document.getElementById('selectTags').value;
  let filtered = window.data.filterData(dataLol, rol);
  containerRoot.innerHTML = '';
  filtered.forEach(element => {
    containerRoot.innerHTML += ` <div class="card small col s4 l3">
  <div class="card-image waves-effect waves-block waves-light">
    <img class="activator" src=${element[1].splash}>
  </div>
  <div class="card-content">
  <span class="card-title activator text-darken-4">${element[1].name}<i class="material-icons right">more_vert</i></span>
    <p><a href="#">Builds</a> <a href="#">Runas</a></p>
  </div>
  <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">Stats<i class="material-icons right">close</i></span>
    <p>Hp:${element[1].stats.hp}+(${element[1].stats.hpperlevel}por nivel)</p>
    <p>Mp:${element[1].stats.mp}+(${element[1].stats.mpperlevel}por nivel)</p>
    <p>Defensa física:${element[1].stats.armor}+(${element[1].stats.armorperlevel}por nivel)</p>
    <p>Defensa mágica:${element[1].stats.spellblock}+(${element[1].stats.spellblockperlevel}por nivel)</p>
    <p>Rango de ataque:${element[1].stats.attackrange}</p>
  </div>
</div>
          
      `
  })

})


const containerRoot2 = document.getElementById('root2');
document.getElementById('runes').addEventListener('click', (evento) => {
  evento.preventDefault();
  document.getElementById('main-screen').style.display = 'none';
  document.getElementById('runes-screen').style.display = 'block';
  dataLol.forEach(element => {
    containerRoot2.innerHTML += `
  
    <div id="champ-card"class="col s12 m2">
      <div class="card">
        <div class="card-image">
          <img src=${element.splash}>
        </div>
        <div class="card-action">
          <a  class="waves-effect waves-teal btn-flat" id="champ-runes-link">${element.name}</a>
        </div>
      </div>
    </div>
  
            
`
  })
});



document.getElementById('selectOrder').addEventListener('change', () => {
  let selectValue = document.getElementById('selectOrder').value;
  containerRoot.innerHTML = '';
  let sortedByName = window.data.sortData(dataLol, 'name', selectValue);
  containerRoot.innerHTML = '';
  sortedByName.forEach(element => {
    containerRoot.innerHTML +=
      ` <div class="card small col s12 l3">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src=${element[1].splash}>
    </div>
    <div class="card-content">
    <span class="card-title activator text-darken-4">${element[1].name}<i class="material-icons right">more_vert</i></span>
      <p><a href="#">Builds</a> <a href="#">Runas</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Stats<i class="material-icons right">close</i></span>
      <p id="hpChamp">Hp:${element[1].stats.hp}</p>
    <p>Mp:${element[1].stats.mp}</p>
    <p>Defensa física:${element[1].stats.armor}</p>
    <p>Defensa mágica:${element[1].stats.spellblock}</p>
    <p>Rango de ataque:${element[1].stats.attackrange}</p>
    </div>
  </div>
            
        `
  });
  return sortedByName;
});



}









