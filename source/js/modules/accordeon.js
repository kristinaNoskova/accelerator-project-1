const accordionElements = document.querySelectorAll('.accordeon');

const setMaxHeight = (content) => {
  if (content.classList.contains('accordeon__descr--visible')) {
    content.style.maxHeight = `${content.scrollHeight}px`;
  }
};

const toggleAccordion = (button, content) => {
  const isOpen = content.classList.toggle('accordeon__descr--visible');
  button.parentElement.classList.toggle('accordeon__item--active');

  if (isOpen) {
    setMaxHeight(content);
  } else {
    content.style.maxHeight = '0';
  }
};

const observeContentChanges = (content) => {
  const observer = new MutationObserver(() => {
    setMaxHeight(content);
  });

  observer.observe(content, { childList: true, subtree: true, characterData: true });
};

const initAccordion = () => {
  const allContents = [];

  accordionElements.forEach((accordeon) => {
    const buttons = accordeon.querySelectorAll('button');

    buttons.forEach((button) => {
      const content = button.parentElement.querySelector('.accordeon__descr');
      allContents.push(content);

      button.addEventListener('click', () => {
        toggleAccordion(button, content);
      });

      setMaxHeight(content);

      observeContentChanges(content);
    });
  });
};

const onResize = () => {
  document.querySelectorAll('.accordeon__descr--visible').forEach((element) => setMaxHeight(element));
};

export { initAccordion, onResize };
