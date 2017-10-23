jQuery(function($) {

	/* =============== SHOW / HIDE FORM SEARCH =============== */
	$("header .nino-search, #nino-searchForm .nino-close").click(function(){
		$("#nino-searchForm").toggleClass("open");
	});

	/* =============== SHOW / HIDE GOOGLE MAP =============== */
	$("#nino-map .nino-sectionHeading").click(function(){
		$("#nino-map").toggleClass("showMap");
		$(this).find(".text").toggle();
	});
	
	$("#nino-map4 .nino-sectionHeading").click(function(){
		$("#nino-map4").toggleClass("showMap");
		$(this).find(".text").toggle();
	});
	
	$("#nino-map3 .nino-sectionHeading").click(function(){
		$("#nino-map3").toggleClass("showMap");
		$(this).find(".text").toggle();
	});

	/* =============== TESTIMONIAL SLIDER =============== */
	$('.nino-testimonialSlider').unslider({
		nav: false,
		arrows: {
			//  Unslider default behaviour
			prev: '<a class="unslider-arrow prev"><i class="mdi mdi-chevron-left"></i></a>',
			next: '<a class="unslider-arrow next"><i class="mdi mdi-chevron-right"></i></a>',
		}
	});

	/* =============== CUSTOM SCROLLBAR STYLE =============== */
	$("#nino-whatWeDo .panel-body").mCustomScrollbar({
		theme:"default"
	});

	/* =============== MAKE MAIN MENU STICKED ON TOP WHEN SCROLL =============== */
	$(window).scroll(function () {
		if ($(this).scrollTop() == $('#nino-header').height() || $(this).scrollTop() > $('#nino-header').height()) {
			$('body').addClass("nino-fixed-nav");
			$('body').css('padding-top', $('#nino-navbar').height() + 'px');
		} else {
			$('body').removeClass("nino-fixed-nav");
			$('body').css('padding-top', 0);
		}
	});
	
	/* =============== ISOTOP =============== */	
	$(window).load(function(){
		$portfolio = $('.nino-portfolioItems');
		$portfolio.isotope({
			itemSelector : 'li',
			layoutMode : 'masonry'
		});
	});
	
	/* =============== PORTFOLIO HOVER EFFECT =============== */
	$('.nino-portfolioItems > li').each( function() { $(this).hoverdir(); } );
	
	/* =============== PERTTYPHOTO =============== */
	$("a.nino-prettyPhoto").prettyPhoto();
	
	/* =============== SMOOTH SCROOL EFFECT =============== */
	$('#nino-slider ul li a').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
	/* =============== SHOW / HIDE GO TO TOP =============== */
	/* Check to see if the window is top if not then display go top button */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('#nino-scrollToTop').fadeIn();
		} else {
			$('#nino-scrollToTop').fadeOut();
		}
	});
	/* Click event to scroll to top */
	$('#nino-scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});
//confeerence PAGE Btn
        function Secretariat()
            {
                localStorage.setItem("Conferencebtn","Secretariat")
            }
        function StudentOfficers()
            {
                localStorage.setItem("Conferencebtn","StudentOff")
            }
        function Delegates()
            {
                localStorage.setItem("Conferencebtn","Delegate")
            }
        function Delegatess()
            {
                localStorage.setItem("Conferencebtn","Delegate")
            }
        function ConferenceTheme()
            {
                localStorage.setItem("Conferencebtn","theme")
            }
        function StatementOfPurpose()
            {
                localStorage.setItem("Conferencebtn","statement")
            }
        function MessageFromFounder()
            {
                localStorage.setItem("Conferencebtn","founder")
            }
        function conference()
            {
                
                localStorage.setItem("Conferencebtn","")

            }
            
            


//confeerence PAGE Btn

//Committee Page BTN
        function GeneralAssembly()
            {
                localStorage.setItem("CommitteeBtn","GeneralAssembly")
            }
		function GeneralAssembly2()
            {
                localStorage.setItem("CommitteeBtn","GeneralAssembly2")
            }
        function EnviromentalCommision()
            {
                localStorage.setItem("CommitteeBtn","EnviromentalCommision")
            }
        function Economic()
            {
                localStorage.setItem("CommitteeBtn","Economic")
            }
        function HumanRights()
            {
                localStorage.setItem("CommitteeBtn","HumanRights")
            }
        function Special()
            {
                localStorage.setItem("CommitteeBtn","Special")
            }
        function Disarmament()
            {
                localStorage.setItem("CommitteeBtn","Disarmament")
            }
        function Advisory()
            {
                
                localStorage.setItem("CommitteeBtn","Advisory")

            }
        function Security()
            {
                
                localStorage.setItem("CommitteeBtn","Security")

            }
        function Committee()
            {
                
                localStorage.setItem("CommitteeBtn","")

            }

//Committee Page BTN



//SlideShow
    var slideIndex = 1;
    showDivs(slideIndex);

    function currentDiv(n) {
      showDivs(slideIndex = n);
    }

    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("demo");
      if (n > x.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" w3-red", "");
      }
      x[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " w3-red";
      
    }

    var slideIndex2 = 1;
    showDivs2(slideIndex2);

    function currentDiv2(n) {
      showDivs2(slideIndex2 = n);
    }

    function showDivs2(n) {
      var i;
      var x = document.getElementsByClassName("mySlides2");
      var dots = document.getElementsByClassName("demo2");
      if (n > x.length) {slideIndex2 = 1}    
      if (n < 1) {slideIndex2 = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" w3-red", "");
      }
      x[slideIndex2-1].style.display = "block";  
      dots[slideIndex2-1].className += " w3-red";
      
    }
    
    
         var slideIndex3 = 1;
    showDivs3(slideIndex3);

    function currentDiv3(n) {
      showDivs3(slideIndex3 = n);
    }

    function showDivs3(n) {
      var i;
      var x = document.getElementsByClassName("mySlides3");
      var dots = document.getElementsByClassName("demo3");
      if (n > x.length) {slideIndex3 = 1}    
      if (n < 1) {slideIndex3 = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" w3-red", "");
      }
      x[slideIndex3-1].style.display = "block";  
      dots[slideIndex3-1].className += " w3-red";
    }
    
    
    var slideIndex4 = 1;
    showDivs4(slideIndex4);

    function currentDiv4(n) {
      showDivs4(slideIndex4 = n);
    }

    function showDivs4(n) {
      var i;
      var x = document.getElementsByClassName("mySlides4");
      var dots = document.getElementsByClassName("demo4");
      if (n > x.length) {slideIndex4 = 1}    
      if (n < 1) {slideIndex4 = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" w3-red", "");
      }
      x[slideIndex4-1].style.display = "block";  
      dots[slideIndex4-1].className += " w3-red";
    } 

    var slideIndex5 = 1;
    showDivs5(slideIndex5);

    function currentDiv5(n) {
      showDivs5(slideIndex5 = n);
    }

    function showDivs5(n) {
      var i;
      var x = document.getElementsByClassName("mySlides5");
      var dots = document.getElementsByClassName("demo5");
      if (n > x.length) {slideIndex5 = 1}    
      if (n < 1) {slideIndex5 = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" w3-red", "");
      }
      x[slideIndex5-1].style.display = "block";  
      dots[slideIndex5-1].className += " w3-red";
    } 

    var slideIndex6 = 1;
    showDivs6(slideIndex6);

    function currentDiv6(n) {
      showDivs6(slideIndex6 = n);
    }

    function showDivs6(n) {
      var i;
      var x = document.getElementsByClassName("mySlides6");
      var dots = document.getElementsByClassName("demo6");
      if (n > x.length) {slideIndex6 = 1}    
      if (n < 1) {slideIndex6 = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" w3-red", "");
      }
      x[slideIndex6-1].style.display = "block";  
      dots[slideIndex6-1].className += " w3-red";
    } 
    
    var slideIndex7 = 1;
    showDivs7(slideIndex7);

    function currentDiv7(n) {
      showDivs7(slideIndex7 = n);
    }

    function showDivs7(n) {
      var i;
      var x = document.getElementsByClassName("mySlides7");
      var dots = document.getElementsByClassName("demo7");
      if (n > x.length) {slideIndex7 = 1}    
      if (n < 1) {slideIndex7 = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" w3-red", "");
      }
      x[slideIndex7-1].style.display = "block";  
      dots[slideIndex7-1].className += " w3-red";
    }

    var slideIndex8 = 1;
    showDivs8(slideIndex8);

    function currentDiv8(n) {
      showDivs8(slideIndex8 = n);
    }

    function showDivs8(n) {
      var i;
      var x = document.getElementsByClassName("mySlides8");
      var dots = document.getElementsByClassName("demo8");
      if (n > x.length) {slideIndex8 = 1}    
      if (n < 1) {slideIndex8 = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" w3-red", "");
      }
      x[slideIndex8-1].style.display = "block";  
      dots[slideIndex8-1].className += " w3-red";
    }

    var slideIndex9 = 1;
    showDivs9(slideIndex9);

    function currentDiv9(n) {
      showDivs9(slideIndex9 = n);
    }

    function showDivs9(n) {
      var i;
      var x = document.getElementsByClassName("mySlides9");
      var dots = document.getElementsByClassName("demo9");
      if (n > x.length) {slideIndex9 = 1}    
      if (n < 1) {slideIndex9 = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" w3-red", "");
      }
      x[slideIndex9-1].style.display = "block";  
      dots[slideIndex9-1].className += " w3-red";
    }

    var slideIndex10 = 1;
    showDivs10(slideIndex10);

    function currentDiv10(n) {
      showDivs10(slideIndex10 = n);
    }

    function showDivs10(n) {
      var i;
      var x = document.getElementsByClassName("mySlides10");
      var dots = document.getElementsByClassName("demo10");
      if (n > x.length) {slideIndex10 = 1}    
      if (n < 1) {slideIndex10 = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" w3-red", "");
      }
      x[slideIndex10-1].style.display = "block";  
      dots[slideIndex10-1].className += " w3-red";
    }
    

