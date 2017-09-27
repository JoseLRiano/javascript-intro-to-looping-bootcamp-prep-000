function forloop(arr){
  var n;
for( n=0;n<25;n++){
  if(n==0){
    arr.push("I am 1 strange loop.");
    else{
        arr.push(`I am ${n} strange loop${n === 0 ? '' : 's'}.`);
    }
  }
}
return arr;
}
