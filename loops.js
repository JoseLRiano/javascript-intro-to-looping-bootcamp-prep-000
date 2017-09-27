function forloop(arr){

for(let n=0;n<25;n++){
    arr.push("I am ${n} strange loop ${n===0 ? '' : 's'}.")
  }
  return arr;
}
