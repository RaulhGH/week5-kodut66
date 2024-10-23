//select movie poster original image
let moviePoster = document.querySelector('.movie-poster');

// modal

let modal = document.querySelector('#myModal');

let closaBtn = document.querySelector('.closeBtn');

//nähtamatu pildi asukoht

let modalImage = document.querySelector('.movie-poster-modal');


moviePoster.addEventListener('click', () => {
  modal.style.display = 'block';
  modalImage.src = moviePoster.src
});

closaBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});