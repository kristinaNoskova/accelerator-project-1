const videoContainerElement = document.querySelector('#video-container');
const playButtonElement = document.querySelector('#play-button');

const loadVideoPlayer = () => {
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&rel=0&modestbranding=1';
  iframe.setAttribute('allow', 'autoplay; encrypted-media');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('width', '100%');
  iframe.setAttribute('height', '100%');

  videoContainerElement.innerHTML = '';
  videoContainerElement.classList.remove('about-video--shadow');
  videoContainerElement.appendChild(iframe);
};

const playVideo = () => {
  playButtonElement.addEventListener('click', loadVideoPlayer);
};

export {playVideo};
