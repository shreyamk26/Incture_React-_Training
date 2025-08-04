//to check given number is plindrome or not
let x=101;
let temp=x;
rev=0;
while(temp>0){
  let rem=temp%10;
   rev=rev*10+rem;
   temp=Math.floor(temp/10);
}
if(x==rev){
    console.log("num is palindrome")
}
else{
       console.log("num is  not palindrome") 
}