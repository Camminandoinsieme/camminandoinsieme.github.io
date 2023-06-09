const dropDown2 = document.querySelector('.contactsDD');
const contactsDDM = document.querySelector('.contactsDDM');
console.log("ciao");
dropDown2.addEventListener('mouseover', function () {
    contactsDDM.classList.add("active");
});
dropDown2.addEventListener('mouseout', function () {
    contactsDDM.classList.remove("active");    
})