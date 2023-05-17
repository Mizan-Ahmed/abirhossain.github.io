// stikey header code 
window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("stikey", window.scrollY > 0);
  });

  let closestnavbarNav = $(this).closest(".navItem ");



  // scroll to top button 
  const scrollTopicon = document.querySelector(".scrollIcon");

  scrollTopicon.addEventListener("click", function(){

    // window.scrollTo(0, 0, "smooth");
    window.scrollTo({
        top : 0,
        left: 0,
        behavior: "smooth",
    })
  });