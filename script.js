const button=document.getElementById('theme-btn');
const body=document.body;
button.addEventListener('click',function(){
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')){
        button.innerText='☀️';
    } else{
        button.innerText='🌙';
    }
})