const data = Object.entries(LOL.data);

function filter(data, condition) {
  const filtered = data.filter((element) => {
    return element[1].tags.indexOf(condition)>=0;
  });

  return filtered;


}


// function sort(data, sortBy, sortOrder) {
//   data.forEach(element => {
//     let name = element[1].id;
//     if (sortBy === 'id' && sortOrder === 'A-Z') {
//       const sortByNameAz = element.sort((a, b) => {
//         if (b.element[1].name > a.element[1].name) {
//           return -1
//         }
//         if (a.element[1].name > b.element[1].name) {
//           return 1;
//         }
//         return 0
//       });
//       return sortByNameAz
//     }
//     if (sortBy === 'id' && sortOrder === 'Z-A') {
//       const sortByNameZa = element.sort((a, b) => {
//         if (a.element[1].name > b.element[1].name) {
//           return -1;
//         }
//         if (b.element[1].name > a.element[1].name) {
//           return 1;
//         }
//         return 0;
//       });
//       return sortByNameZa;
//     }

//   })
// };


// function sortData(data, sortBy, sortOrder) {
//   data.forEach(element => {
//     let name = element.id;
//   if (sortBy === 'id' && sortOrder === 'A-Z') {
//     const dataLOL = data.sort((a, b) => {
//       if (b.name < a.name) {
//         return -1;
//       }
//       if (a.name > b.name) {
//         return 1;
//       }
//       return 0;
//     }); return dataLOL
//   }
// })

// };
//   // }
//   // if (sortBy === 'id' && sortOrder === 'Z-A') {
//   //   data.sort((a, b) => {
//   //     if (a.name > b.name) {
//   //       return -1;
//   //     }
//   //     if (b.name < a.name) {
//   //       return 1;
//   //     }
//   //     return 0;
//   //   });
//   // }





























// const data = Object.values(LOL.data);





// for (let i = 0; i < data.length; i++) {
//   const element = data[i];
//   console.log(element);
//   // const sortByName=element.sort((a,b)=>{

//   }










// // Función no comprobada. Se espera su completitud en la siguiente versión
// function sortData(data, sortBy, sortOrder) {
//   data.forEach(element => {
//     let name = element.id;
//   if (sortBy === 'id' && sortOrder === 'A-Z') {
//     const dataLOL = data.sort((a, b) => {
//       if (b.name < a.name) {
//         return -1;
//       }
//       if (a.name > b.name) {
//         return 1;
//       }
//       return 0;
//     }); return dataLOL
//   }
// })

// };
//   // }
//   // if (sortBy === 'id' && sortOrder === 'Z-A') {
//   //   data.sort((a, b) => {
//   //     if (a.name > b.name) {
//   //       return -1;
//   //     }
//   //     if (b.name < a.name) {
//   //       return 1;
//   //     }
//   //     return 0;
//   //   });
//   // }





// // window.onload=showData(data);












// //   return data
// // };


// // window.onload=showData(data);











































// // const containerRoot=document.getElementById('root');
// // const selectTag=document.getElementById('tags');
// // const dataL=Object.values(LOL.data);

// // const showData=(dataLol)=>{
// //     let result='';
// //     // const imagen= (((LOL || {}).data||{}).image||{}).sprite;
// //     // console.log(imagen);
// //     dataLol.forEach(element=>{
// //         if(element.tags.indexOf('Tank')>=0){
// //             result = containerRoot.innerHTML += `
// //             <div class="row">
// //               <div class="col s12 m7">
// //                 <div class="card">
// //                   <div class="card-image">
// //                     <img src=>
// //                     <span class="card-title">${dataLol.name}</span>
// //                   </div>
// //                   <div class="card-content">
// //                     <p>${dataLol.info}</p>
// //                   </div>
// //                   <div class="card-action">
// //                     <a href="#">This is a link</a>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>`

// //         }
// //     });
// //     return result;
// // }
























// /**Inicio función filter */

// // // crea un array de objetos
// // const dataLol = Object.values(LOL.data);

// /**filtro por tags */
//  //muestra todos los champ con el tag Tank
// // const tankTags = dataLol.filter((elemento)=>{
// // return elemento.tags.indexOf("Tank")>=0});

// // const dataImg = (data) => {
// //     let img = [];
// //     for (let i = 0; i < data.length; i++) {
// //       img.push(data[i].img);
// //     }
// //     return img;
// //    };



// // //muestra el name de los champ con tag Fighter
// // const fighterTags = dataLol.filter((elemento)=>{
// //     return elemento.tags.indexOf("Fighter")>=0});
// // //muestra el name de los champ con tag Mage
// // const mageTags = dataLol.filter((elemento)=>{
// //     return elemento.tags.indexOf("Mage")>=0});
// // //muestra el name de los champ con tag Assassin
// // const assassinTags = dataLol.filter((elemento)=>{
// //     return elemento.tags.indexOf("Assassin")>=0});
// // //muestra el name de los champ con tag Support
// // const supportTags = dataLol.filter((elemento)=>{
// //     return elemento.tags.indexOf("Support")>=0});
// // //muestra el name de los champ con tag Marksman
// // const marksmanTags = dataLol.filter((elemento)=>{
// //     return elemento.tags.indexOf("Marksman")>=0});
// // /**Cierre función filter */





// // // muestra el name de  los champ con el  tag “Tank”
// // const champTags =dataLol.filter((elemento)=>{
// //     return elemento.tags.indexOf("Tank")>=0)
// // const tankChamps = champTags.reduce((acum,elemento)=>{return acum+" "+elemento.name},"")};

// // //muestra el name de los champ con tag "Fighter"
// // const fighterChamps0 = dataLol.filter((elemento)=>{return elemento.tags.indexOf("Fighter")>=0}); 
// // const fighterChamps = fighterChamps0.reduce((acum,elemento)=>{return acum+" "+elemento.name},""); 
// // }



