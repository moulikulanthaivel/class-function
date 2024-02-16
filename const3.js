class account{

accId;
accName;
accBal;

constructor(Id,Name,Bal){
    this.accId=Id
    this.accName=Name
    this.accBal=Bal
}
deposit_account(amount){
this.accBal=this.accBal+amount
    
}

}
let a1=new account(7568676355,'manikandan',789008);
let a3=new account(8798646355,'naveen',4008);

console.log(a1);
console.log(a3);

a1.deposit_account(68787789);
console.log(a1);
a3.deposit_account(90989);
console.log(a3);