/* Stap 1: Selecteer de knop */
/* let expandButton = document.querySelector('.profile-card-example-button')

/* Stap 2: Wacht tot iemand op die knop klikt */
/*expandButton?.addEventListener('click', function() {

  /* Stap 3: Verander een class zodra iemand op die knop klikt */
  /*document.body.classList.toggle('is-expanded')
})*/

function play() {
  var audio = document.getElementById("test");
    audio.play();
}

  const image = document.getElementById('Bananza_icn');

  image.addEventListener('click', () => {
    const originalSrc = image.getAttribute('data-original');
    const gifSrc = image.getAttribute('data-gif');
    const duration = parseInt(image.getAttribute('data-duration'), 10); // in ms

    // Vervang door de GIF
    image.src = gifSrc;

    // Zet terug na de duur van de GIF
    setTimeout(() => {
      image.src = originalSrc;
    }, duration);
  });