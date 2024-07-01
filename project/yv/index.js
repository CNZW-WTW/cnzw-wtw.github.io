//标题闪烁效果
var title = document.getElementById('title'),
    ttx = '未满18🔞禁入 在线直播 高清无码 - CNZW';
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