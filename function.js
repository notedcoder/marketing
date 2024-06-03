console.log(document.getElementById("contact-button"))
document.getElementById("contact-button").addEventListener("click", function(){
  
  document.querySelector(".popup").style.display = "flex"; 
});

document.querySelector(".close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none"; 
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
})

document.getElementById("text-1").addEventListener("click", function(){
  document.getElementById("image-select").setAttribute("src", "image.png");
  // console.log(document.getElementById("image-select"));

})
document.getElementById("text-2").addEventListener("click", function(){
  document.getElementById("image-select").setAttribute("src", "fruits2.png");
  // console.log(document.getElementById("image-select"));

})
document.getElementById("text-3").addEventListener("click", function(){
  document.getElementById("image-select").setAttribute("src", "fruits4.png");
  // console.log(document.getElementById("image-select"));

})

document.getElementsByClassName("b").addEventListener("click", function(){
  window.location.href= "https://www.fylehq.com/";
})