
document.getElementById("contact-button").addEventListener("click", function(){
  
  document.querySelector(".popup").style.display = "flex"; 

  document.getElementsByTagName('body')[0].style.overflow = 'hidden';

  // document.getElementsByTagName('body')[0].style.overflow = 'visible'
});

document.querySelector(".close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none"; 
  document.getElementsByTagName('body')[0].style.overflow = 'visible'

})


document.querySelector(".submit-btn").addEventListener("click",function(){
  const email = document.querySelector(".work-email").value;
  const firstName = document.querySelector(".first-name").value;
  const lastName = document.querySelector(".last-name").value;
  const obj = {
    email,
    firstName,
    lastName
  }

  fetch('https://getform.io/f/zazkxxgb', {
    method:'POST',
    body: JSON.stringify(obj),
    headers:{
      'Content-Type' : 'application/json'
    }
  })

  document.querySelector(".popup").style.display = "none";
  document.getElementsByTagName('body')[0].style.overflow = 'visible'

})

document.getElementById("text-1").addEventListener("click", function(){
  document.getElementById("image-select").setAttribute("src", "images/image.png");
  // console.log(document.getElementById("image-select"));

})
document.getElementById("text-2").addEventListener("click", function(){
  document.getElementById("image-select").setAttribute("src", "images/fruits3.jpg");
  // console.log(document.getElementById("image-select"));

})
document.getElementById("text-3").addEventListener("click", function(){
  document.getElementById("image-select").setAttribute("src", "images/foots.jpg");
  // console.log(document.getElementById("image-select"));

})




let arr = document.getElementsByClassName("b")
console.log(arr);

for(let i = 0; i < arr.length; i++){
  arr[i].addEventListener("click",function(){
    // console.log("njnr");
    // window.location.replace("https://www.youtube.com/watch?v=xO-bV5aAd-U&ab_channel=CodingArtist");
    window.open("https://www.fylehq.com", "_blank");
  })
  
}