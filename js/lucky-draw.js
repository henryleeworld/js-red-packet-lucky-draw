var eqNum = 0;
var timesRun = 0;
var timesStop, interval;
$(".gift-btn").click(function() {
    // timesStop =7;
    reset()
    interval = setInterval(play, 100);
})

function reset() {
    $(".prize").removeClass("showPrize");
    timesStop = Math.floor(Math.random() * 14) + 7;
    clearInterval(interval);
}

function play() {
    eqNum++;
    if (eqNum > 7) {
        eqNum = 0;
    }
    var nextNo = ".no" + eqNum;
    timesRun++;
    if (timesRun >= timesStop) {
        $(nextNo).addClass("showPrize");
        clearInterval(interval);
        timesRun = 0;
    }
    $(nextNo).addClass("active").siblings().removeClass("active");
}