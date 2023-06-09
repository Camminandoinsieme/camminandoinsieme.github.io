const dropDown1 = document.querySelector('.activityDD');
const activityDDM = document.querySelector('.activityDDM');
dropDown1.addEventListener('mouseover', function () {
    activityDDM.classList.add("active");
});
dropDown1.addEventListener('mouseout', function () {
    activityDDM.classList.remove("active");    
})