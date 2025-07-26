
let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => 
{
    document.querySelector('.search-form').classList.toggle('active');
        searchFOrm.classList.toggle('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
};





let cart = document.querySelector('.shopping-cart');
let cartBtn = document.querySelector('#cart-btn');

cartBtn.onclick = () => {
  cart.classList.toggle('active'); // Toggle visibility
}


let loginForm = document.querySelector('.login-form');

    document.querySelector('#login-btn').onclick = () =>
    {
        loginForm.classList.toggle('active');
        shoppingCart.classList.remove('active');
        searchFOrm.classList.remove('active');
        navbar.classList.remove('active');
    }


let navbar = document.querySelector('.navbar');

    document.querySelector('#menu-btn').onclick = () =>
    {
        navbar.classList.toggle('active');
        loginForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        searchFOrm.classList.remove('active');
    }
    window.onscroll = () =>
    {
        searchFOrm.classList.remove('active');
        shippongform.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
        
    }

var swiper = new Swiper(".product-slider", {
      loop:true,
      spaceBetween: 20,
      autoplay:{
        delay:7500,
        disableOnInteraction: false,
      },
        
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        
        },
        1020: {
          slidesPerView: 3,
          
        
      
          
        },
      },
    });



    var swiper = new Swiper(".review-slider", {
      loop:true,
      spaceBetween: 20,
      autoplay:{
        delay:7500,
        disableOnInteraction: false,
      },
        
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        
        },
        1020: {
          slidesPerView: 3,
          
        
      
          
        },
      },
    });









