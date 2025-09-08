// -------------------- PAGINA CONTENT PER TAAL --------------------
const pageContent = {
  nl: {
    profile: {
      name: 'Tom Zuidervaart',
      img: 'assets/20250427_145611.jpg',
      bio1: '<br>Ik ben 19 jaar, en woon in Heemskerk',
      bio2: `En dan nu een aantal kwaliteiten;<br><br>
             Ik kan goed samenwerken, ik ben rustig en een goeie doorzetter. <br><br>
             Mijn vooropleiding was SD/Software Developer (N4) op het Talland College.`
    },
    hobbies: [
      'Gamen',
      'Muziek maken/bewerken',
      'Afspreken met vrienden',
      'Games modden/hacken',
      'Online met mensen interacteren, vooral op <span class="discord">Discord</span>'
    ],
    gameHeader: 'Favoriete game',
    consoleHeader: 'Favoriete console',
    hobbiesTitle: "Hobby's"
  },
  en: {
    profile: {
      name: 'TZ Gaming',
      img: 'assets/icon.png',
      bio1: '19 years old',
      bio2: ''
    },
    hobbies: [
      'Gaming',
      'Making/editing music',
      'Meeting with friends',
      'Modding/hacking games',
      'Interacting online with people, mostly on <span class="discord">Discord</span>'
    ],
    gameHeader: 'Favorite game',
    consoleHeader: 'Favorite console',
    hobbiesTitle: 'Hobbies'
  }
};

// -------------------- ROBUUSTE TAAL-DETECTIE --------------------
const userLangs = (navigator.languages || [navigator.language || '']).map(l => l.toLowerCase());
let lang = 'en'; // standaard

// Als Nederlands voorkomt in de browsertalen, gebruik Nederlands
if (userLangs.some(l => l.includes('nl'))) {
  lang = 'nl';
}

console.log('Browser languages:', userLangs);
console.log('Chosen lang:', lang);

// -------------------- WACHT TOT DOM VOLLEDIG GELADEN IS --------------------
document.addEventListener('DOMContentLoaded', () => {

  // ---- PROFIEL AANPASSEN ----
  const profileName = document.getElementById('profile-name');
  const profileImg = document.getElementById('profile-img');
  const profileBio = document.getElementById('profile-bio');
  const profileBio2 = document.getElementById('profile-bio2');

  if(profileName) profileName.innerHTML = pageContent[lang].profile.name;
  if(profileImg) profileImg.src = pageContent[lang].profile.img;
  if(profileBio) profileBio.innerHTML = pageContent[lang].profile.bio1;
  if(profileBio2) profileBio2.innerHTML = pageContent[lang].profile.bio2;

  // ---- HOBBIES AANPASSEN ZONDER CONTAINER TE VERWIJDEREN ----
  const hobbiesContainer = document.querySelector('.hobbys');
  if (hobbiesContainer) {
    // Pas de titel aan
    const hobbyTitle = hobbiesContainer.querySelector('.hobbytitle h1');
    if (hobbyTitle) hobbyTitle.innerHTML = pageContent[lang].hobbiesTitle;

    // Oude hobby-items verwijderen
    hobbiesContainer.querySelectorAll('.hobbylist').forEach(el => el.remove());

    // Voeg nieuwe hobby-items toe
    const hobbyListHTML = pageContent[lang].hobbies
      .map(hobby => `<p class="hobbylist">- ${hobby}</p>`)
      .join('');
    hobbiesContainer.insertAdjacentHTML('beforeend', hobbyListHTML);
  }

  // ---- GAME & CONSOLE TITELS AANPASSEN ----
  const gameHeader = document.querySelector('.game-header-text');
  const consoleHeader = document.querySelector('.console-header-text');
  if (gameHeader) gameHeader.innerHTML = pageContent[lang].gameHeader;
  if (consoleHeader) consoleHeader.innerHTML = pageContent[lang].consoleHeader;

  // ---- AUDIO FUNCTIES ----
  window.play = function(audioId) {
    const audio = document.getElementById(audioId);
    if(audio) audio.play();
  };

  // ---- GIF CLICK FUNCTIE ----
  const image = document.getElementById('Bananza_icn');
  if(image){
    image.addEventListener('click', () => {
      const originalSrc = image.getAttribute('data-original');
      const gifSrc = image.getAttribute('data-gif');
      const duration = parseInt(image.getAttribute('data-duration'), 10);

      image.src = gifSrc;

      setTimeout(() => {
        image.src = originalSrc;
      }, duration);
    });
  }

});
