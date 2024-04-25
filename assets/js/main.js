(function(){
    "use strict";
    const header=document.getElementById('header');
    if (header) {
        const headerScrolled = () => {
          if (window.scrollY > 150) {
            if(header.classList.contains('header-scrolled')===false){
              header.classList.add('header-scrolled');
            }
            
          } else {
              header.classList.remove('header-scrolled');           
          }
        }
        window.addEventListener('load', headerScrolled);
        document.addEventListener('scroll',headerScrolled);
    }
    const openNav=document.querySelector("#open-nav");
    const closeNav=document.querySelector("#close-nav");
    openNav.addEventListener("click",()=>{
        document.querySelector(".mobile-nav").classList.add("show");
    });
    closeNav.addEventListener("click",()=>{
        document.querySelector(".mobile-nav").classList.remove("show");
    });
    const mobileNavs=document.querySelectorAll(".mobile-nav-link-main");
    for(let i=0;i<mobileNavs.length;i++){
        mobileNavs[i].addEventListener("click",function(){
            if(this.classList.contains("show")){
                for(let i=0;i<mobileNavs.length;i++){
                    mobileNavs[i].classList.remove("show")
                }
            }else{
                for(let i=0;i<mobileNavs.length;i++){
                    mobileNavs[i].classList.remove("show")
                }
                this.classList.add("show")
            }
        })
    }
 })();