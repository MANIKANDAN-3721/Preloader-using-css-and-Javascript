const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

    setInterval(() => {
        
        loader.classList.add('.fadeOut');
        setInterval(() => {
             loader.style.display='none'
        }, 1000);



    }, 5000);
    //when the website loaded
   
})