function forLoop(array){
  for(let n=0;n<25;n++){
    array.push('I am ${i} strange loop ${i===0 ? \'\' : \'s\' }.')
  }
  return array;
}
function whileLoop(n){
  while(n>0){
    console.log(n);
    n--;
  }
  return "done";
}
function maybeTrue() {
  return Math.random() >= 0.5;
}
function doWhileLoop(array){
  do{
    array.pop();
    return array;
  }while(arra.length > 0 && maybeTrue());