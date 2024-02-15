class account{

    acc_Id=101;
    acc_Name='mouli'
    acc_Bal=590;
    
    open_account(){
        console.log('Account opened successfully');
    }
    deposit_Amount(){
        console.log('deposited successfully');
    }
    check_balance(){
        console.log('server busy');
    }
    withDrawal(){
        console.log('insufficient amount');
    }
    close_account(){
        console.log('Your account Closed successfully');
    }
    
    }
    let a1=new account();
    a1.open_account();
    a1.deposit_Amount();
    a1.check_balance();
    a1.withDrawal();
    a1.close_account();
    console.log(a1);





















//this is object type 

    let a2 = { acc_Id: 101, acc_Name: 'Rahul Gandhi', acc_Bal: 50000 }

console.log(typeof a2)