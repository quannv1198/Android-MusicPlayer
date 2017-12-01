var audio = $("#audio");

$("#icon_menu").click(()=>{
    $("#menu").animate({left: 0},300)
})

$("#right_menu").click(()=>{
    $("#menu").animate({left: "-100%"},300)
})

var isRun = false;
var deg = 0;
function rotate(){
    if(!isRun){
        return;
    }
    if( deg == 360){deg = 0}
    deg += 1;
    $("#img_plate").css("transform", "rotate("+deg+"deg)")
    setTimeout(()=>{
        rotate();
    },30)
}

$("#play_pause").click(()=>{
     if(!isRun){
        audio[0].play();
        isRun = true;
        rotate();
        $("#play_pause").addClass("fa-pause-circle-o").removeClass("fa-play-circle-o");
        return;
    }
    $("#play_pause").addClass("fa-play-circle-o").removeClass("fa-pause-circle-o");
    isRun = false;
    audio[0].pause();
})