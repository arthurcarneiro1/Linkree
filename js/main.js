 const toggleCheckbox = document.getElementById('theme-toggle');
  const body = document.body;

  // Verifica se o usuário já salvou preferência no localStorage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggleCheckbox.checked = true;
  }

  toggleCheckbox.addEventListener('change', () => {
    if (toggleCheckbox.checked) {
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });


  const btn = document.getElementById('change-photo-btn');
  const profilePic = document.querySelector('.profile-pic');

  const fotoOriginal = 'img/Perfil.jpg';
  const fotoAnime = 'img/perfilAnime.webp';

  let usandoAnime = false;

  btn.addEventListener('click', () => {
    if (usandoAnime) {
      profilePic.src = fotoOriginal;
    } else {
      profilePic.src = fotoAnime;
    }
    usandoAnime = !usandoAnime;
  });

 const audio = document.getElementById('bg-music');
  const soundBtn = document.getElementById('sound-toggle');
  const icon = soundBtn.querySelector('i');

  // Volume inicial
  audio.volume = 0.3; // 30% do volume

  document.addEventListener('DOMContentLoaded', () => {
    audio.play().catch(() => {
      console.log("Autoplay bloqueado, aguardando interação do usuário...");
    });
  });

  // Se o usuário clicar em qualquer lugar da página, tentar tocar
  document.body.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    }
  }, { once: true });

  // Alternar som
  soundBtn.addEventListener('click', () => {
    if (audio.muted) {
      audio.muted = false;
      icon.classList.remove('fa-volume-mute');
      icon.classList.add('fa-volume-up');
    } else {
      audio.muted = true;
      icon.classList.remove('fa-volume-up');
      icon.classList.add('fa-volume-mute');
    }
  });