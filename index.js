let marker = 0;
module.exports = function(str) {
  for(let c of str) {
    if(marker < 0) return false;
    if(c =='(') { console.log(marker); marker++; }
    else if(c ==')') { console.log(marker);  marker--; }
  }
  return marker == 0 ? true : false;
}