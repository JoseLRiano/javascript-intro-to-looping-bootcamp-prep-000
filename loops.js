function forLoop(array){

  for(let n=0;n<25;n++){
    array.push('I am ${i} strange loop ${i===0 ? \'\' : \'s\' }.')
  }
  return array;
}
