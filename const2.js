class ground{
playerId;
playerName;
playerScore;

constructor(Id,Name,Score){
this.playerId=Id;
this.playerName=Name;
this.playerScore=Score;

}

get_Result(){
    console.log('hello');
 
 }


}
var a1=new ground(3565,'Ram',45);
console.log(a1);
var a2=new ground(3365,'mouli',95);
console.log(a2);
var a3=new ground(9789,'leon',67);
console.log(a3);
console.log(a1.get_Result());
