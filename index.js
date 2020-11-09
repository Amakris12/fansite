var score =0;
function scored(){
if(document.getElementById('F1').checked == true)
{
  score+=2;
}
else{
  score = score;
}
if(document.getElementById('m2').checked == true)
{
  score+=2;
}
if(document.getElementById('r1').checked == true )
{
  score+=2;
}
if(document.getElementById('g1').checked == true)
{
  score+=2;
}
if(document.getElementById('q3').checked == true)
{
  score+=2;
}
document.getElementById('score').value = score;


}