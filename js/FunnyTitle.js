var OriginTitle = document.title;
var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/chotollysunset.jpg");
         document.title = '免费色情视频及性爱影片-A片,X级,色情片分享';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/chotollysunset.jpg");
         document.title = 'ヾ(Ő∀Ő3)ノ欢迎回来!是先吃饭,还是先洗澡,还是瓦达西~~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });