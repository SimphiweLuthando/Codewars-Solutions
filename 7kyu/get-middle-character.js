function getMiddle(s)
{
  //Code goes here!
  if(s.length == 1){
    return s;
  }
  else if(s.length == 2){
    return s[0] + s[1];
  }
  else if(s.length % 2 == 0){
    return s[(s.length / 2) - 1] + s[((s.length / 2) + 1) - 1];
  }
  else if(s.length % 2 != 0){
    return s[Math.floor(s.length / 2)];
  }
}