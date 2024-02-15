class account{

    acc_Bal=0;

    deposit_amount(amount){
        this.acc_Bal= this.acc_Bal + amount
    }


}
let a1=new account();
console.log(a1);
a1.deposit_amount(5999);
console.log(a1);
a1.deposit_amount(856556);
console.log(a1);