export default function fibonacciTable(rows, cols) {
  let total = rows * cols;
  let mainArray = [];
  let resultArray= [];
 
  
  for (let i = 0; i < total; i++) {
    
    //there is enough cols on row push to main
    if (i === 0) {
      mainArray.push(0);
    } else if (i === 1) {
      mainArray.push(1);
    } else {
      mainArray.push(mainArray[i - 2] + mainArray[i - 1]);
    }
  }

  //split the generated fibonacci array to rows
  let row = [];
  for (let i = 0; i < mainArray.length; i++) {
    if ((i + 1) % cols === 0) {
      row.push(mainArray[i]);
      resultArray.push(row);
      row = [];
    } else {
      row.push(mainArray[i])
    }
  }


  

 

  return resultArray;
}




