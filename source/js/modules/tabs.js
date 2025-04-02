const initTabs = (containerSelector) => {
  const container = document.querySelector(containerSelector);

  if (!container) {
    return;
  }

  const buttons = container.querySelectorAll('.content__tablinks');
  const contents = container.querySelectorAll('.content__tab');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.tab;

      buttons.forEach((btn) => btn.classList.remove('content__tablinks--active'));
      contents.forEach((content) => content.classList.remove('content__tab-active'));

      const targetContent = container.querySelector(`#${targetId}`);
      if (targetContent) {
        targetContent.classList.add('content__tab-active');
      }
      button.classList.add('content__tablinks--active');
    });
  });
};

export { initTabs };
