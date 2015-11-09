/*
 * Custom
 */
//= partials/jquery-2.1.4.min.js
//= partials/jquery.fancybox.pack.js
//= partials/jquery.raty.js
//= partials/jquery.validate.min.js
//= partials/jquery.maskedinput.js
//= partials/app.js

$(document).ready(function(){
  /* header */
  $(".basket-logo").click(function(){
    $('.basket-popup').toggle("fast");
  });

  $("#search-toggle").click(function() {
    $('.search-toggle').toggle("fast");
  });

  /* faq.html */
      $(".faq-item h2").click(function(){
        $(this).next('.answer').toggle("fast");
    });

  /* about.html */
  $(".fancybox").fancybox({   
    openEffect  : 'none',
    closeEffect : 'none'
  });

  /* index.html
  $('.aside-nav a').click(function() {
    var $this = $(this);    // save $(this) in a variable for efficiency
    $('.panel').hide();     // hide panels
    $('.aside-nav a.active').removeClass('active');
    $this.addClass('active').blur();        // add active state to new tab
    var panel = $this.attr('href');       // retrieve href from link (is id of panel to display)
    $(panel).fadeIn(250);       // show panel
    $('.index-content').hide();
    return(false);        // don't follow link down page
  }); // end click

  // $('.aside-nav a:first').click();
 */
  /* comments.html */
  $('.stars-0').raty({
    readOnly: true,
    score: 0,
    path: 'img'
  });
  $('.stars-1').raty({
    readOnly: true,
    score: 1,
    path: 'img'
  });
  $('.stars-2').raty({
    readOnly: true,
    score: 2,
    path: 'img'
  });
  $('.stars-3').raty({
    readOnly: true,
    score: 3,
    path: 'img'
  });
  $('.stars-4').raty({
    readOnly: true,
    score: 4,
    path: 'img'
  });
  $('.stars-5').raty({
    readOnly: true,
    score: 5,
    path: 'img'
  });  

  $('.form-stars-1').raty({
    starOff : 'star-off-big.png',
    starOn  : 'star-on-big.png',
    score: 0,
    path: 'img'
  });
  $('.form-stars-2').raty({
    starOff : 'star-off-big.png',
    starOn  : 'star-on-big.png',
    score: 0,
    path: 'img'
  });
  $('.form-stars-3').raty({
    starOff : 'star-off-big.png',
    starOn  : 'star-on-big.png',
    score: 0,
    path: 'img'
  });    

  $('.comment-tabbed-panels a').click(function() {
    var $this = $(this);    // save $(this) in a variable for efficiency
    $('.theme-wr').hide();     // hide panels
    $('.comment-tabbed-panels a.active').removeClass('active');
    $this.addClass('active').blur();        // add active state to new tab
    var panel = $this.attr('href');       // retrieve href from link (is id of panel to display)
    $(panel).fadeIn(250);       // show panel
    return(false);        // don't follow link down page
  }); // end click
  $('.theme-wr').hide();
  $('.comment-tabbed-panels a:first').click();

  /* comments.html validate */
 $('#form-theme-1').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     message: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ваше имя.",
       minlength: "Имя не должно быть короче 3 символов."
     },
     message: {
        required: "Пожалуйста введите текст сообщения."
     }
   }
  }); /* close form-theme-1 validate */

  $('#form-theme-2').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     message: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ваше имя.",
       minlength: "Имя не должно быть короче 3 символов."
     },
     message: {
        required: "Пожалуйста введите текст сообщения."
     }
   }
  }); /* close form-theme-2 validate */

  $('#form-theme-3').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     message: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ваше имя.",
       minlength: "Имя не должно быть короче 3 символов."
     },
     message: {
        required: "Пожалуйста введите текст сообщения."
     }
   }
  }); /* close form-theme-3 validate */

  /* contacts.html */
   $('#contacts-form').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ваше имя.",
       minlength: "Имя не должно быть короче 3 символов."
     },
     tel: {
        required: "Пожалуйста введите телефон."
     }
   }
  }); /* close form-theme-1 validate */

  $("#contacts-tel").mask("+7 (999) 999-9999");

  /* basket.html */
 $('#delivery-address').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     },
     street: {
      required: true
     },
     house: {
      required: true
     },
     apartment: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
      required: "Пожалуйста введите Ваше ФИО.",
      minlength: "Имя не должно быть короче 3 символов."
     },
     tel: {
      required: "Пожалуйста введите телефон."
     },
     street: {
      required: "Введите улицу для доставки заказа."
     },
     house: {
      required: "Введите номер дома."
     },
     apartment: {
      required: "Введите номер кв./офиса"
     }
   }
  }); // end validate delivery-address

  $("#basket-tel").mask("+7 (999) 999-9999");

});