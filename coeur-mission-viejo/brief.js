const videos = [...document.querySelectorAll('video')];
const mobileVideo = window.matchMedia('(max-width: 760px)');

function openVideoFullscreen(video) {
  if (!mobileVideo.matches || document.fullscreenElement || video.webkitDisplayingFullscreen) return;
  try {
    if (video.requestFullscreen) {
      const request = video.requestFullscreen();
      if (request && request.catch) request.catch(() => {});
    } else if (typeof video.webkitEnterFullscreen === 'function') {
      video.webkitEnterFullscreen();
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
  const opener = document.createElement('button');
  opener.className = 'mobile-video-open';
  opener.type = 'button';
  opener.textContent = '▶ Play fullscreen';
  opener.setAttribute('aria-label', 'Play comparison video fullscreen');
  const wrapper = document.createElement('div');
  wrapper.className = 'video-wrapper';
  video.before(wrapper);
  wrapper.append(video, opener);
  opener.addEventListener('click', () => {
    openVideoFullscreen(video);
    video.play().catch(() => {});
  });
  video.addEventListener('click', () => openVideoFullscreen(video));
  video.addEventListener('play', () => {
    videos.forEach(other => { if (other !== video) other.pause(); });
    openVideoFullscreen(video);
  });
});
