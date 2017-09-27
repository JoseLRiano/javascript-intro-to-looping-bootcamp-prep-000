function forloop(array){
for(let n=0;n<25;n++){
  if(n==0){
    array[n]="I am "+n+" strange loop.";
  }else {
    array[n]="I am "+n+" strange loops.";
  }
}
return array;
}
