
  function showEvent(type) {
    // Vis infoboks
    document.querySelectorAll('.info-box').forEach(el => el.classList.remove('show'));
    document.getElementById(type === 'krig' ? 'info1' : 'info2').classList.add('show');

    // Fade billeder
    document.getElementById('krig-img').classList.remove('show');
    document.getElementById('vand-img').classList.remove('show');

    if (type === 'krig') {
      document.getElementById('krig-img').classList.add('show');
    } else {
      document.getElementById('vand-img').classList.add('show');
    }
  }


