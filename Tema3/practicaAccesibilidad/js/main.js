function startJS(){
    $(function(){
        //Abrir Menu Desplegable
        $("#openMenu").click(function(){
          $(".menu-desplegable").css("display","flex");
          $(".menu-desplegable").animate({width:"60%"},1000);
          $("#openMenu").css("visibility","hidden");
        });
        //Cerrar Menu Desplegable
        $("#closeMenu").click(function(){
          $(".menu-desplegable").animate({width:"0%"},0);
          $("#openMenu").css("visibility","visible");
          $(".menu-desplegable").css("display","none");
          
        });
    });
};
window.onload=startJS;