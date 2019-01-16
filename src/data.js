window.data={

filterData:(dato, condition)=>{
  const data = Object.entries(window.lol);
  const filtered = data.filter((element) => {
    return element[1].tags.indexOf(condition) >= 0;
  });

  return filtered;


},


sortData:(dataLol, sortBy, sortOrder)=>{
  if (sortOrder === 'A-Z') {
    const sortAZ = dataLol.sort((elementA, elementB) =>
      elementA[1][sortBy].localeCompare(elementB[1][sortBy])
    )
    return sortAZ
  }
  if (sortOrder === 'Z-A') {
    const sortZA = dataLol.sort((elementA, elementB) =>
      -elementA[1][sortBy].localeCompare(elementB[1][sortBy])
    )
    return sortZA
  }
  
}



}




























































































