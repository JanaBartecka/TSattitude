let allLektorky=document.querySelectorAll('.lektorky__lektorka')
allLektorky.forEach((lektorka)=> {
    lektorka.addEventListener('click',function(event){
        if (event.target.parentNode.childNodes[1].classList.contains('lektorky__item--active')){
            event.target.parentNode.childNodes[1].classList.remove('lektorky__item--active')
            event.target.parentNode.childNodes[3].classList.remove('lektorky__name--active')
            event.target.parentNode.childNodes[5].classList.remove('lektorky__plus--active')
            event.target.parentNode.childNodes[7].classList.remove('lektorky__description--active')
            event.target.parentNode.childNodes[1].classList.remove('lektorky__item--hover')
        } else {
            event.target.parentNode.childNodes[1].classList.add('lektorky__item--active')
            event.target.parentNode.childNodes[3].classList.add('lektorky__name--active')
            event.target.parentNode.childNodes[5].classList.add('lektorky__plus--active')
            event.target.parentNode.childNodes[7].classList.add('lektorky__description--active')
            event.target.parentNode.childNodes[1].classList.remove('lektorky__item--hover')
        }
    })
    lektorka.addEventListener('mouseenter',()=>{
        lektorka.firstElementChild.classList.add('lektorky__item--hover')
    })
    lektorka.addEventListener('mouseout',()=>{
        lektorka.firstElementChild.classList.remove('lektorky__item--hover')
    })
})



