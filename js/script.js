//zobrazeni banneru na celou obrazovku
let bannerPicture=document.querySelector('.header')
bannerPicture.style.height=window.innerHeight + 'px'

// document.querySelector('.header__motto').innerHTML=
// document.querySelector('.header__motto').textContent.replace(/./g,'<span>$&</span>')

// let spans=document.querySelectorAll('.header__motto span')
// for (let i = 0; i < spans.length; i++) {
//     let left=innerWidth*Math.random()
//     let top=innerHeight*Math.random()
//     if(Math.random()<0.5){
//         spans[i].style.left='-' + left + 'px'
//     } else {
//         spans[i].style.left=left + 'px'
//     }
    
//     if(Math.random()<0.5){
//         spans[i].style.top='-' + top + 'px'
//     } else {
//         spans[i].style.top=top + 'px'
//     }
// }

// document.querySelector('.header__brand').innerHTML=
// document.querySelector('.header__brand').textContent.replace(/./g,'<span>$&</span>')

// let spans1=document.querySelectorAll('.header__brand span')
// for (let i = 0; i < spans1.length; i++) {
//     let left=innerWidth*Math.random()
//     let top=innerHeight*Math.random()
//     if(Math.random()<0.5){
//         spans1[i].style.left='-' + left + 'px'
//     } else {
//         spans1[i].style.left=left + 'px'
//     }
    
//     if(Math.random()<0.5){
//         spans1[i].style.top='-' + top + 'px'
//     } else {
//         spans1[i].style.top=top + 'px'
//     }
// }


//counter
window.addEventListener('scroll',() => {
    // const countersDiv=document.querySelector('.counters')
    const counters = document.querySelectorAll('.counters__item');
    const speed = 200;
    counters.forEach((counter) => {
        if (window.pageYOffset+window.innerHeight>counter.offsetTop) {
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
            setTimeout(updateCount, 1);
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

