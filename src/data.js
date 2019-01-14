const data = Object.entries(LOL.data);

function filter(data, condition) {
  const filtered = data.filter((element) => {
    return element[1].tags.indexOf(condition) >= 0;
  });

  return filtered;


}


function sort(data,sortBy,sortOrder){
  if(sortOrder==='A-Z'){
    const sortAZ=data.sort((elementA,elementB)=> 
    elementA[1][sortBy].localeCompare(elementB[1][sortBy])
    )
    return sortAZ
  }
  if (sortOrder==='Z-A'){
    const sortZA=data.sort((elementA,elementB)=>
    -elementA[1][sortBy].localeCompare(elementB[1][sortBy])
    )
    return sortZA
  }
  return sort;
};

function computeStats(elementA,elementB){
  for (let i = 0; i < data.length; i++) {
    const dataLocation = data[i];
    
  }
}




























































































