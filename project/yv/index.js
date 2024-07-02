//标题闪烁变化效果
var title = document.getElementById('title'),
    ttx = '未滿18🔞禁入 線上直播 高清無碼 - CNZW';
setTimeout(function () {
    title.innerText = ttx;
})
setInterval(function () {
    setTimeout(function () {
        title.innerText = '❤' + ttx;
        setTimeout(function () {
            title.innerText = '🤍' + ttx;
        }, 500)
    }, 500)
}, 1000)
//