class school{

acc_Bal=0;

deposit_Amount(amount){
this.acc_Bal=this.acc_Bal+amount
}
get_Bal(){
    return this.acc_Bal
}
}
let s1=new school();
console.log(s1);
s1.deposit_Amount(6000);
console.log(s1.get_Bal());

s1.deposit_Amount(456);
console.log(s1.get_Bal());