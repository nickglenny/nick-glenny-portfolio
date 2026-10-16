(() => {
  const players = [...document.querySelectorAll('[data-player]')];
  for (const player of players) {
    const video = player.querySelector('video');
    const cover = player.querySelector('.play-cover');
    const open = async () => {
      cover.hidden = true;
      try {
        await video.play();
        video.focus({ preventScroll: true });
      } catch {
        // Native controls remain available when the browser declines playback.
        video.focus({ preventScroll: true });
      }
    };
    cover.addEventListener('click', open);
    video.addEventListener('play', () => {
      cover.hidden = true;
      for (const other of players) {
        const otherVideo = other.querySelector('video');
        if (otherVideo !== video) otherVideo.pause();
      }
    });
  }
})();
