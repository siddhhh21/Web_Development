let promise = new Promise((resolve,reject)=>{

    let paymentSuccess=true;

    if(paymentSuccess){
        resolve("Payment Successful");
    }else{
        reject("Payment Failed");
    }
    
});

promise
.then((msg)=>{
    console.log(msg);
})
.catch((err)=>{
    console.log(err);
});