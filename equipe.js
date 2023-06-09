
const dropDown = document.querySelector('.equipeDD');
const equipeDDM = document.querySelector('.equipeDDM');
dropDown.addEventListener('mouseover', function () {
    equipeDDM.classList.add("active");
});
dropDown.addEventListener('mouseout', function () {
    equipeDDM.classList.remove("active");    
})
