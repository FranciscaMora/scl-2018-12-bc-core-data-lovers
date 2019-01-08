
const data=Object.values(LOL.data);

function filter(data,condition){
  const filtered = data.filter((elemento)=>{
  return elemento.tags.indexOf(condition)>=0;
  });
  console.log(filtered)
  return filtered;
;

}



// const showData=(data)=>{
//   let result='';
//   // data.forEach(element => 
//   data.forEach(element=>{
//   for(let i=0;i<=element.lenght;i++){
//     if(element.img !==''){
//       result= containerRoot.innerHTML+=`<section class="container-fluid">
//       <div class="card" >
//           <div class="box">
//               <div class="img">
//                   <img src="${element.img}"> 
//       </div>
//                   <h2>${element.name}<br><span>${element.tags}</span></h2>
//                       <p>${element.info}</p>
//     </div>
//               </div>
// </section>`
//     }
    
//   };
//   console.log(showData);
//   return result;
// })
// };


// selectedTag.addEventListener('change',()=>{
//   let condition = selectedTag.options[selectedTag.selectedIndex].text;
//   let filtered= filteredTag(data,condition);
//   containerRoot.innerHTML='';
//   filtered.forEach(element=>{
//     containerRoot.innerHTML+=`<section class="container-fluid">
//     <div class="card" >
//         <div class="box">
//             <div class="img">
//                 <img src="${element.img}"> 
//     </div>
//                 <h2>${element.name}<br><span>${element.tags}</span></h2>
//                     <p>${element.info}</p>
//   </div>
//             </div>
// </section>`
//   })


// })

// window.onload=showData(data);











































// const containerRoot=document.getElementById('root');
// const selectTag=document.getElementById('tags');
// const dataL=Object.values(LOL.data);

// const showData=(dataLol)=>{
//     let result='';
//     // const imagen= (((LOL || {}).data||{}).image||{}).sprite;
//     // console.log(imagen);
//     dataLol.forEach(element=>{
//         if(element.tags.indexOf('Tank')>=0){
//             result = containerRoot.innerHTML += `
//             <div class="row">
//               <div class="col s12 m7">
//                 <div class="card">
//                   <div class="card-image">
//                     <img src=>
//                     <span class="card-title">${dataLol.name}</span>
//                   </div>
//                   <div class="card-content">
//                     <p>${dataLol.info}</p>
//                   </div>
//                   <div class="card-action">
//                     <a href="#">This is a link</a>
//                   </div>
//                 </div>
//               </div>
//             </div>`
                      
//         }
//     });
//     return result;
// }
























/**Inicio función filter */

// // crea un array de objetos
// const dataLol = Object.values(LOL.data);

 /**filtro por tags */
 //muestra todos los champ con el tag Tank
// const tankTags = dataLol.filter((elemento)=>{
// return elemento.tags.indexOf("Tank")>=0});

// const dataImg = (data) => {
//     let img = [];
//     for (let i = 0; i < data.length; i++) {
//       img.push(data[i].img);
//     }
//     return img;
//    };



// //muestra el name de los champ con tag Fighter
// const fighterTags = dataLol.filter((elemento)=>{
//     return elemento.tags.indexOf("Fighter")>=0});
// //muestra el name de los champ con tag Mage
// const mageTags = dataLol.filter((elemento)=>{
//     return elemento.tags.indexOf("Mage")>=0});
// //muestra el name de los champ con tag Assassin
// const assassinTags = dataLol.filter((elemento)=>{
//     return elemento.tags.indexOf("Assassin")>=0});
// //muestra el name de los champ con tag Support
// const supportTags = dataLol.filter((elemento)=>{
//     return elemento.tags.indexOf("Support")>=0});
// //muestra el name de los champ con tag Marksman
// const marksmanTags = dataLol.filter((elemento)=>{
//     return elemento.tags.indexOf("Marksman")>=0});
// /**Cierre función filter */





// // muestra el name de  los champ con el  tag “Tank”
// const champTags =dataLol.filter((elemento)=>{
//     return elemento.tags.indexOf("Tank")>=0)
// const tankChamps = champTags.reduce((acum,elemento)=>{return acum+" "+elemento.name},"")};

// //muestra el name de los champ con tag "Fighter"
// const fighterChamps0 = dataLol.filter((elemento)=>{return elemento.tags.indexOf("Fighter")>=0}); 
// const fighterChamps = fighterChamps0.reduce((acum,elemento)=>{return acum+" "+elemento.name},""); 
// }



