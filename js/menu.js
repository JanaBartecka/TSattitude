const hamburger=document.querySelector(".menu__hamburger");
const MenuList=document.querySelector(".menu__list");
const MenuItem=document.querySelectorAll(".menu__item");

hamburger.addEventListener("click",() => {
    let hamburgerAriaExpanded=hamburger.getAttribute('aria-expanded')
    if ( hamburgerAriaExpanded==='false') {
        hamburger.setAttribute('aria-expanded','true');
        MenuItem.forEach(item=>item.setAttribute('aria-hidden','false'))
    } else {
        MenuItem.forEach(item=>item.setAttribute('aria-hidden','true'))
        hamburger.setAttribute('aria-expanded','false');
    }
    
    hamburger.classList.toggle("menu__active");
    MenuList.classList.toggle("menu__active");
})

document.querySelectorAll(".menu__link").forEach(n=>n.addEventListener("click", () => {
    hamburger.classList.remove("menu__active");
    MenuList.classList.remove("menu__active");
}))


const menuLinks=document.querySelectorAll('.menu__link')

// Function to update active menu item
function updateActiveMenuItem() {
    const currentScrollPos = window.scrollY;
    //console.log(currentScrollPos);
  
    // Iterate through each menu link
    menuLinks.forEach((link) => {
      const section = document.querySelector(link.getAttribute('href'));
  
      // Check if section is in the viewport
      if (
        section.offsetTop <= currentScrollPos && section.offsetTop + section.offsetHeight > currentScrollPos
      ) {
        // Add 'active' class to the menu link
        link.classList.add('menu__link--active');
        link.parentNode.classList.add('menu__item--active')
      } else {
        // Remove 'active' class from the menu link
        link.classList.remove('menu__link--active');
        link.parentNode.classList.remove('menu__item--active')
      }
    });
  }
  
  // Attach scroll event listener to the window object
  window.addEventListener('scroll', updateActiveMenuItem);

  const MenuIcons=document.querySelectorAll('.menu__icon')
  console.log(MenuIcons);
  const BodyElement=document.querySelector('body')
  const ComputedStyleBody=window.getComputedStyle(BodyElement,null)
  const DefaultFontSize=ComputedStyleBody.getPropertyValue('font-size')
  const DefaultFontSizeValue=DefaultFontSize.split('px');
  //resize menu list to fit along with menu__icon
  window.addEventListener('scroll',()=> {
    if (window.innerWidth>DefaultFontSizeValue[0]*86) {
      if (window.scrollY > 100) {
        MenuList.classList.add('menu__list--full')
        MenuIcons.forEach((icon)=> {
          icon.classList.remove('menu__icon--full')
        })
      } else {
        MenuList.classList.remove('menu__list--full')
        MenuIcons.forEach((icon)=> {
          icon.classList.add('menu__icon--full')
        })
      }
    } 
  })

  window.addEventListener('resize', ()=> {
    if (window.innerWidth>DefaultFontSizeValue[0]*86) {
      MenuIcons.forEach((icon)=> {
        icon.classList.add('menu__icon--full')
      })
    } else {
      MenuIcons.forEach((icon)=> {
        icon.classList.remove('menu__icon--full')
      })
    }
  })

