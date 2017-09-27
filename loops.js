function forloop(array){

for(let n=0;n<25;n++){
    array.push('"I am ${n} strange loop ${n === 0 ? '' : 's'}."')
  }
  return array;
}
