let allLektorky=document.querySelectorAll('.lektorky__lektorka')
allLektorky.forEach((lektorka)=> {
    lektorka.addEventListener('click',function(event){
        event.target.parentNode.childNodes[1].classList.toggle('lektorky__item--active')
        event.target.parentNode.childNodes[3].classList.toggle('lektorky__name--active')
        event.target.parentNode.childNodes[5].classList.toggle('lektorky__plus--active')
        event.target.parentNode.childNodes[7].classList.toggle('lektorky__description--active')
    })
    lektorka.addEventListener('mouseover',()=>{
        lektorka.firstElementChild.classList.toggle('lektorky__item--hover')
    })
    lektorka.addEventListener('mouseout',()=>{
        lektorka.firstElementChild.classList.toggle('lektorky__item--hover')
    })
})



