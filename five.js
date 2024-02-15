class account{

    acc_id=0867566766276
    acc_name='pranesh kumar'
    acc_Bal=598;

    deposit_account(amount){
       console.log('Added',amount,'successfully');
    }


}
let a1= new account();
a1.deposit_account(80000);
console.log(a1);

let a2=new account();
a2.deposit_account(9000000);