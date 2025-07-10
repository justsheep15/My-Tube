document.addEventListener("DOMContentLoaded", function () {
  const profileBtn = document.getElementById('profile-btn');
  const modal = document.getElementById('signin-modal');
  const closeBtn = document.querySelector('.close-btn');

  profileBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
