const pages = [...document.querySelectorAll('.page')];
const noBtn = document.getElementById('noBtn');
const buttonArea = document.getElementById('buttonArea');
const hint = document.getElementById('hint');
const toast = document.getElementById('toast');
const dateInput = document.getElementById('date');
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
const musicStatus = document.getElementById('musicStatus');
let selectedFoods = [];

const today = new Date();
today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
dateInput.min = today.toISOString().slice(0, 10);

function showPage(id) {
  pages.forEach(page => page.classList.toggle('active', page.id === id));
  window.scrollTo({top: 0, behavior: 'smooth'});
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2400);
}
function heartBurst(amount = 20) {
  const symbols = ['💗', '♡', '💕', '🌸', '✨'];
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart-pop';
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${45 + Math.random() * 45}vh`;
    heart.style.animationDelay = `${Math.random() * .45}s`;
    document.body.appendChild(heart);
    window.setTimeout(() => heart.remove(), 2100);
  }
}

document.getElementById('yesBtn').addEventListener('click', () => {
  showPage('yesPage');
  heartBurst(28);
});

function dodgeNoButton() {
  const areaWidth = buttonArea.clientWidth;
  const travel = Math.min(85, Math.max(25, areaWidth / 3));
  noBtn.style.transform = `translate(${Math.round((Math.random() - .5) * travel * 2)}px, ${Math.round((Math.random() - .5) * 22)}px)`;
  hint.textContent = ['hehe, try again 🙈', 'the little button is shy 💗', 'pani puri might convince you 👀'][Math.floor(Math.random() * 3)];
}
noBtn.addEventListener('mouseenter', dodgeNoButton);
noBtn.addEventListener('click', () => {
  showToast('That button is shy… the pink one has a surprise 💗');
  dodgeNoButton();
});
noBtn.addEventListener('touchstart', event => {
  event.preventDefault();
  dodgeNoButton();
}, {passive: false});

document.getElementById('foodPageBtn').addEventListener('click', () => showPage('foodPage'));

document.getElementById('foodForm').addEventListener('submit', event => {
  event.preventDefault();
  selectedFoods = [...document.querySelectorAll('input[name="food"]:checked')].map(input => input.value);
  const other = document.getElementById('otherFood').value.trim();
  if (other) selectedFoods.push(other);
  if (selectedFoods.length === 0) {
    showToast('Choose at least one tasty option, cutie 💗');
    return;
  }
  showPage('datePage');
});

document.getElementById('dateForm').addEventListener('submit', event => {
  event.preventDefault();
  const dateValue = dateInput.value;
  const time = document.getElementById('time').value;
  const activity = document.getElementById('activity').value;
  const place = document.getElementById('place').value.trim();
  if (!dateValue || !time || !activity) {
    showToast('Fill in the date, time, and date vibe first 💌');
    return;
  }
  const chosenDate = new Date(`${dateValue}T12:00:00`);
  const niceDate = chosenDate.toLocaleDateString(undefined, {weekday:'long', month:'long', day:'numeric', year:'numeric'});
  const foodLine = selectedFoods.length ? selectedFoods.join(', ') : 'We will decide our snacks together';
  document.getElementById('planSummary').innerHTML = '';
  const summary = document.getElementById('planSummary');
  [
    `📅 <strong>Day:</strong> ${niceDate}`,
    `⏰ <strong>Time:</strong> ${time}`,
    `🌷 <strong>Plan:</strong> ${activity}`,
    `🍴 <strong>Veg food wishlist:</strong> ${escapeHtml(foodLine)}`,
    place ? `📍 <strong>Place:</strong> ${escapeHtml(place)}` : ''
  ].filter(Boolean).forEach(line => {
    const p = document.createElement('p');
    p.innerHTML = line;
    summary.appendChild(p);
  });
  showPage('memoriesPage');
  heartBurst(18);
});

document.getElementById('letterBtn').addEventListener('click', () => {
  showPage('finalPage');
  heartBurst(24);
});

document.getElementById('restartBtn').addEventListener('click', () => {
  document.getElementById('foodForm').reset();
  document.getElementById('dateForm').reset();
  selectedFoods = [];
  noBtn.style.transform = '';
  hint.textContent = "P.S. there's pani puri involved 👀";
  showPage('invitePage');
});

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, character => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  })[character]);
}

musicBtn.addEventListener('click', async () => {
  if (music.paused) {
    try {
      await music.play();
      musicBtn.textContent = 'Ⅱ';
      musicStatus.textContent = 'playing your song 💗';
    } catch (error) {
      musicStatus.textContent = 'Add an MP3 named our-song.mp3 to this folder first';
      showToast('Add your song file first, then tap play 🎵');
    }
  } else {
    music.pause();
    musicBtn.textContent = '▶';
    musicStatus.textContent = 'paused — tap play whenever you like';
  }
});
music.addEventListener('ended', () => {
  musicBtn.textContent = '▶';
  musicStatus.textContent = 'tap play to listen again';
});
