//print all npalindrome number from 1 to 1000 
for(let num=1;num<1001;num++){

    let rev=0;
let temp=num;
while(temp>0){
 let rem=temp%10;
   rev=rev*10+rem;
   temp=Math.floor(temp/10);
}
if(num==rev){
    console.log(num)
}
}
