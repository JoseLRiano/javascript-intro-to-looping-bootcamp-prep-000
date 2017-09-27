function forloop(array){
for(let n=0;n<25;n++){
  if(n==0){
    array.push("I am 1 strange loop.");
    else{
        array.push("I am "+n+" strage loops.");
    }
  }
}
return array;
}
