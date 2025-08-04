// given no is prime number or not 
let num=7;
let prime=true;
if(num<=1){
prime=false;

}
for(let i=2;i<num;i++){
    if(num%i===0)
    {
        prime=false;
        break;
    }
   
}
if(prime){
    console.log("its a prime number")
}
else{
    console.log("its not a prime number")
}