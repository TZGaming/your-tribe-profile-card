/* Stap 1: Selecteer de knop */
/* let expandButton = document.querySelector('.profile-card-example-button')

/* Stap 2: Wacht tot iemand op die knop klikt */
/*expandButton?.addEventListener('click', function() {

  /* Stap 3: Verander een class zodra iemand op die knop klikt */
  /*document.body.classList.toggle('is-expanded')
})*/

function play(audioId) {
  var audio = document.getElementById(audioId);
  audio.play();
}

  const image = document.getElementById('Bananza_icn');

  image.addEventListener('click', () => {
    const originalSrc = image.getAttribute('data-original');
    const gifSrc = image.getAttribute('data-gif');
    const duration = parseInt(image.getAttribute('data-duration'), 10);

    image.src = gifSrc;

    setTimeout(() => {
      image.src = originalSrc;
    }, duration);
  });