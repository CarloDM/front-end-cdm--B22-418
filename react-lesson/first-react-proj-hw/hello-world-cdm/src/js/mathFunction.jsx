export default{
  randomBetween,probabilisticBoolean
};

function randomBetween(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function probabilisticBoolean(percentageTrue){
  const rnd = randomBetween(0 , 100);
  if(rnd <= percentageTrue){
    return true;
  }else{
    return false;
  }
}