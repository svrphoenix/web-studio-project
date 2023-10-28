const refs = {
  filter: document.querySelector('.filter'),
  gallery: document.querySelector('.portfolio-examples'),
};

refs.filter.addEventListener('click', filterSelection);

function filterSelection(e) {
  if (e.target.tagName === 'BUTTON') {
    const filterType = e.target.dataset.filter;
    const buttons = refs.filter.getElementsByClassName('filter__button');
    for (i = 0; i < buttons.length; i += 1) {
      if (buttons[i] !== e.target) {
        buttons[i].classList.remove('filter__button--active');
      } else e.target.classList.add('filter__button--active');
    }
    filterGalleryItems(filterType);
  }
}

function filterGalleryItems(selectedType) {
  const galleryItems = refs.gallery.getElementsByClassName('portfolio-examples__item');
  for (i = 0; i < galleryItems.length; i += 1) {
    if (galleryItems[i].dataset.filter === selectedType || selectedType === 'all') {
      galleryItems[i].classList.remove('visually-hidden');
    } else galleryItems[i].classList.add('visually-hidden');
  }
}
