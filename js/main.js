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