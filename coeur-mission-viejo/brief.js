const videos = [...document.querySelectorAll('video')];
const mobileVideo = window.matchMedia('(max-width: 760px)');

function openVideoFullscreen(video) {
  if (!mobileVideo.matches || document.fullscreenElement || video.webkitDisplayingFullscreen) return;
  try {
    if (typeof video.webkitEnterFullscreen === 'function') {
      video.webkitEnterFullscreen();
    } else if (video.requestFullscreen) {
      const request = video.requestFullscreen();
      if (request && request.catch) request.catch(() => {});
    }
  } catch (_) {
    // Native video controls remain available if the browser declines fullscreen.
  }
}

videos.forEach(video => {
  function updatePlaybackMode() {
    video.playsInline = !mobileVideo.matches;
  }
  updatePlaybackMode();
  mobileVideo.addEventListener('change', updatePlaybackMode);
  video.addEventListener('click', () => openVideoFullscreen(video));
  video.addEventListener('play', () => {
    videos.forEach(other => { if (other !== video) other.pause(); });
    openVideoFullscreen(video);
  });
});
