window.onscroll = function() {
  var videoContainer = document.getElementById('video-container');
  if (videoContainer) {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    videoContainer.style.top = 50 + scrollPosition + "%";
  }
};