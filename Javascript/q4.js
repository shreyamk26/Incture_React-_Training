prime=true;
for(let i=2;i<1001;i++){
    
        if(i%i.length===0)
    {
        prime=false;
        break;
    }
   

if(prime){
    console.log(i);
}
}