

$("button").click(function() {
var type = $(".input1").val();
var age = parseInt($(".input2").val());
  
    if(type==="introvert" && age<17) {
    $(".message").html("Jotaro Kujo");
    $(".image").html('<img src="https://i.pinimg.com/originals/f7/6d/a3/f76da33f3bfbfe08f1af9a6df442f3aa.png">');
    }
     else if (type==="introvert" && age===30){
          $(".message").html("You have discovered the idenity of Kira Yoshikage, Now my stand Killer Queen Bites the Dust shall kill you");
          $(".image").html('<img src="https://thumbs.gfycat.com/SpotlessTiredAfricanrockpython-max-1mb.gif">');
          $(".image").delay(1500).fadeOut();
          $("h1").fadeOut();
          $("h2").fadeOut();
          $("input").fadeOut();
          $(".intro").fadeOut();
          $("button").fadeOut();
          $(".message").delay(1500).fadeOut();
          $(".imageBite").delay(1600).fadeIn();
      }
    else if(type==="introvert" && age>=17){
    $(".message").html("Johnathan Jostar");
     $(".image").html('<img src="https://t00.deviantart.net/biBHwqRItEHOIZumxILR4fzGfoA=/fit-in/300x900/filters:no_upscale():origin()/pre00/6b89/th/pre/f/2018/208/5/0/umvc3___jonathan_joestar_by_majorillustrious-dcih74e.png">');
    }
    else if(type==="extrovert" && age>=17){
    $(".message").html("Joseph Jostar");
     $(".image").html('<img src="https://vignette.wikia.nocookie.net/characterprofile/images/3/3d/JosephJoestar.png/revision/latest?cb=20160103085431">');
    }
      else if(type==="extrovert" && age<17){
    $(".message").html("Joskue Higashika");
     $(".image").html('<img src="http://images.shoutwiki.com/jojoss/3/3b/Chr_profile_Josuke_Higashikata.png">');
    }
});

