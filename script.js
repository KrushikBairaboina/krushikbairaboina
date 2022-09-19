

console.log("Script running...")
document.querySelector('.cross').style.display ='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(()=>{
            document.querySelector('.cross').style.display = 'inline'
        },300);
        
    }
    
}) 
var MainImg = document.getElementById("MainImg");
var smallimg =document.getElementsByClassName("small-img");
smallimg[0].onclick =function(){
  MainImg.src =smallimg[0].src;
}
smallimg[1].onclick =function(){
  MainImg.src =smallimg[1].src;
}
smallimg[2].onclick =function(){
  MainImg.src =smallimg[2].src;
}
smallimg[3].onclick =function(){
  MainImg.src =smallimg[3].src;
}

document.getElementById("mybutton").onclick = function myfunction(){
  var cname = document.getElementById("clientname").value;
  console.log("coname",cname);
  var mail = document.getElementById("clientemail").value;
  console.log("cmail",mail);
}
