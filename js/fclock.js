addEventListener("load", function starttime() {
  time(fclock, "2023/12/23"); // 2024年考研时间
  ptimer = setTimeout(starttime, 1000); // 添加计时器
});

function time(obj, futimg) {
  var nowtime = new Date().getTime(); // 现在时间转换为时间戳
  var futruetime = new Date(futimg).getTime(); // 未来时间转换为时间戳
  var msec = futruetime - nowtime; // 毫秒 未来时间-现在时间
  var time = msec / 1000; // 毫秒/1000
  var day = parseInt(time / 86400); // 天  24*60*60*1000
  var hour = parseInt(time / 3600) - 24 * day; // 小时 60*60 总小时数-过去的小时数=现在的小时数
  var minute = parseInt((time % 3600) / 60); // 分 -(day*24) 以60秒为一整份 取余 剩下秒数 秒数/60 就是分钟数
  var second = parseInt(time % 60); // 以60秒为一整份 取余 剩下秒数

  if (day < 10) day = "0" + day;
  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;
  if (second < 10) second = "0" + second;

  obj.innerHTML =
    "<br>" + day + " 天<br><br> " + hour + " : " + minute + " : " + second;
}
