
// const sections = document.querySelectorAll('section[id]')

//       function scrollActive(){
//         const scrollY = window.pageYOffset

//         sections.forEach(current =>{
//             const sectionHeight = current.offsetHeight,
//                  sectionTop = current.offsetTop - 58,
//                  sectionId = current.getAttribute('id')

//             if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
//                {
//                  document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link')
//                 }
//             else
//                 {
//                  document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link')
//                 }
//         })
//       }

//       window.addEventListener('scroll', scrollActive)



/*============ CHANGE BACKGROUND HEADER ===============*/


   function scrollHeader(){
    const header = document.getElementById('header')

    if(this.scrollY >= 50) {
        header.classList.add('scroll-header');
    }
    else {
        header.classList.remove('scroll-header');
    }
   }

   window.addEventListener('scroll', scrollHeader);


//    Services Modal

const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalClose = document.querySelectorAll('.services_modal_close');

      let modal = function(modalClick){
        modalViews[modalClick].classList.add('active-modal');
      }

      modalBtns.forEach((mb, i) =>{
        mb.addEventListener('click',() =>{
            modal(i)
        })
      })

      modalClose.forEach((mc)=>{
        mc.addEventListener('click', () =>{
            modalViews.forEach((mv) =>{
                mv.classList.remove('active-modal');
            })
        })
      })



      let mixerPortfolio = mixitup('.work_container', {
        selectors: {
            target: '.work_card'
        },
        animation: {
            duration: 300
        }
    });


    // Link Active Work

    const linkWork = document.querySelectorAll('.work_item')

    function activework(){
        linkWork.forEach(l=> l.classList.remove('active_work'))
        this.classList.add('active_work')
    }

    linkWork.forEach(L=> L.addEventListener('click', activework))

    let swiper = new Swiper(".testimonial_container", {
        spaceBetween: 24,
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            
          },
      });


    //   LIGHT THEME
    const themeButton = document.getElementById('moon_btn')
    const lightTheme = 'light-theme'
    const iconTheme = 'bx-sun'

    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light' 
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'
    
    if(selectedTheme)
    {
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
        themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
    }

    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(lightTheme)
        themeButton.classList.toggle(iconTheme)

        localStorage.getItem('selected-theme', getCurrentTheme())
        localStorage.getItem('selected-icon', getCurrentIcon())

    })



    // ===================== SCROLL REVEAL ANIMATION

    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
    })

    sr.reveal(`.home_data`)
    sr.reveal(`.home_handle`, {delay: 700})
    sr.reveal(`.home_handle, .home_scroll`, {delay: 900, origin: 'bottom'})
       

