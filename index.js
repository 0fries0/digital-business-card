const emailBtn = document.querySelector(".contact");
const em = document.querySelector(".em");

emailBtn.addEventListener('click', function(){
    em.attributes[1].textContent = "mailto: retecatripathi@gmail.com";
})