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

<<<<<<< HEAD









// var instance = M.Carousel.getInstance(Carousel);
// document.addEventListener('DOMContentLoaded', function() {
//     var instance = M.Carousel.getInstance(Carousel);
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(Carousel, options);
//   });



/*Toma el id de los champ */
//let name =[];
/*Toma la img de champ*/ 
//let icon=[];
/*Toma la biografia de champ */
//let biography=[];
/*Toma el titulo de champ */
//let title=[];
/*Toma los tags */
//let tag=[];
/*Toma los stats */
//let stats=[];
/**toma la imagen y ubicación en html */
//let img=[];
/**Toma el splash para luego ubicarlo en background */
//let splash=[];

/*let arrayLOL= Object.values(LOL.data);
arrayLOL.forEach(element =>{
    name.push(element.id);
    icon.push(element.img);
    biography.push(element.blurb);
    title.push(element.title);
    tag.push(element.tags);
    stats.push(element.stats);
    img.push(element.image);
    splash.push(element.splash);
});

/**Toma el valor de armor de cada champ*/
//let armor=[];
/**Toma el daño de ataque de cada champ */
//let attackDamage=[];
/**Toma el HP */
//let healPoints=[];
/**Toma los mp */
//let magicPoints=[];
/**Toma la defenza mágica */
//let magicDefense=[];
/**Toma rango de ataque */
//let attackRange=[];

/*let arrayStats= Object.values(stats);
    arrayStats.forEach(element =>{
    armor.push(element.armor);
    attackDamage.push(element.attackdamage);
    healPoints.push(element.hp);
    magicPoints.push(element.mp);
    magicDefense.push(element.spellblock);
    attackRange.push(element.attackrange);

});

*/

=======
>>>>>>> FranMora/master
