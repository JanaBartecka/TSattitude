//zobrazeni banneru na celou obrazovku
let bannerPicture=document.querySelector('.header')
bannerPicture.style.height=window.innerHeight + 'px'


//counter
window.addEventListener('scroll',() => {
    // const countersDiv=document.querySelector('.counters')
    const counters = document.querySelectorAll('.counters__item');
    const speed = 200;
    counters.forEach((counter) => {
        if (window.pageYOffset+window.innerHeight>counter.offsetTop+counter.offsetHeight) {
        const updateCount = () => {
            const target = parseInt(counter.getAttribute('data-target'));
            const count = parseInt(counter.innerText);
            // const increment = Math.trunc(target / speed);
            // if (target<=1000) {
                 const increment = 1
            // } else {
            //     const increment = 5
            // }
            

            if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 100);
            } else {
            counter.innerText = target + '+';
            }
        };
        updateCount();
    }
    });
})
    
    //efekty na text
//     let test=document.querySelector('.test')
//     let nadpis=document.querySelector('h1')
//     if (window.pageYOffset+window.innerHeight>test.offsetTop) {
//         test.classList.add('animationRight')
//         nadpis.classList.add('animationLeft')
//     }
// })





let LoadingEndFunction=()=>{

}

//loading page
//window.onload=() => {
window.addEventListener('load',()=> {

    //po nacteni skryje loading page
    document.querySelector('.loading').classList.add('loading--hidden')
    document.querySelector('.loading').addEventListener('transitionend',()=> {

        document.querySelector('.loading').classList.add('loading--dispNone')
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })

        const AllAnimations=document.querySelectorAll('.AddAnimLeft')
// console.log(AllAnimations);

window.addEventListener('scroll',()=> {

    AllAnimations.forEach((animation)=> {
        // console.log(animation);
        //     console.log(window.pageYOffset);
        //     console.log(window.innerHeight);
        //     console.log(animation.parentElement.offsetTop);
            if (window.pageYOffset+window.innerHeight>animation.offsetTop) {
                animation.classList.add('animationLeft')
            }
    })
}), {once:true}

const AllAnimationsRight=document.querySelectorAll('.AddAnimRight')
// console.log(AllAnimationsRight);

window.addEventListener('scroll',()=> {

    AllAnimationsRight.forEach((animation)=> {
        // console.log(animation);
        //     console.log(window.pageYOffset);
        //     console.log(window.innerHeight);
        //     console.log(animation.parentElement.offsetTop);
            if (window.pageYOffset+window.innerHeight>animation.offsetTop) {
                animation.classList.add('animationRight')
            }
    })
}), {once:true}

    })

})

//focus event pro karticky lekce
let CoverItem=document.querySelectorAll('.grid__item--cover')
CoverItem.forEach((item)=> {
    item.addEventListener('mouseover',()=>{
        console.log(item);
        item.nextElementSibling.classList.toggle('heading-frame--hover')
    })
    item.addEventListener('mouseleave',()=>{
        console.log(item);
        item.nextElementSibling.classList.toggle('heading-frame--hover')
    })
})

