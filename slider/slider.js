const p=document.querySelectorAll(".slide");
let c=0;

p.forEach(
(value,index)=>{
value.style.left=`${index*100}%`


}

)
const goprev=()=>{
    if(c>0){
c--;
slideImage();
    }

}
const gonext=()=>{
   if(c<p.length-1){
    c++;
    slideImage();
   }
    
    }
const slideImage=()=>{
p.forEach((slide)=>{
slide.style.transform=`translateX(-${c*100}%)`;



})



}