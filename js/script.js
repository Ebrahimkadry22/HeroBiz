
const toggler = document.querySelector('.toggle');
const close = document.querySelector('.nav__close')
const nav_mo = document.querySelector('.nav__moblia .nav__links')
const scorll_top = document.querySelector('.scorll__top')

toggler.addEventListener("click" , ()=> {
    nav_mo.style.transform=`translateX(0)`
})
close.addEventListener("click" , ()=> {
    nav_mo.style.transform=`translateX(-150%)`
})

// Start scroll header
const header = document.querySelector('header');

window.onscroll = function () {
    if(window.scrollY >= 20){
        
        header.style.boxShadow = `var(--box-shadow-two)`
        scorll_top.style.display=`block`
    }
    else {
        header.style.boxShadow = `none`
        scorll_top.style.display=`none`
        
        
    }
}

scorll_top.onclick = function () {
    window.scrollTo ({
        top: 0 , 
        behavior:'smooth',
    })
}
// End scroll header

// Start about
let item = document.querySelectorAll(".about__con ul li ")
let content = document.querySelectorAll(".tab")

item.forEach((tap , index) => {
    tap.addEventListener("click" , () => {
        item.forEach(tap => {
            tap.classList.remove('active')
        })
        tap.classList.add('active')
        
        
        content.forEach(con => {
            con.classList.remove('active')
        })
        content[index].classList.add('active')
    })
})

// End about

// Start features 
const  link = document.querySelectorAll('.feat__items .feat__oreder li ');
const feat = document.querySelectorAll('.feats__content .feat__cont')


link.forEach((a , i) => {
    a.addEventListener("click" , () => {
        link.forEach(a => {
            a.classList.remove('active__feat')
        })
        a.classList.add('active__feat')
        
        
        feat.forEach(con => {
            con.classList.remove('feat__active')
        })
        feat[i].classList.add('feat__active')
    })
})
// End features

//Start A.Q setion
const buttons = document.querySelectorAll('.question button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
       
            const faq = button.nextElementSibling;
            const icon = button.children[1];
            
        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )

//End A.Q setion

// Start Gallery
const item__galler =document.querySelectorAll('.heading__section ul li')
const itembox = document.querySelectorAll('.product .itemBox');

item__galler.forEach((a ) => {
    a.addEventListener("click" , () => {
        item__galler.forEach(a => {
            a.classList.remove('active__li')
        })
        a.classList.add('active__li')
        let datafil = a.getAttribute('data--fil')
        
        itembox.forEach((a , i)=> {
            a.classList.remove('active')
            a.classList.add('hide')
            if(a.getAttribute('data-item') == datafil || datafil == 'all'){
                a.classList.remove('hide')
                a.classList.add('active')
            }
        })
        
        
        
    })
})

// End Gallery
// Start test














