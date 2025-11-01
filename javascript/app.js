const app = document.getElementById('app');

function loadPage(page) {
  fetch(`templates/${page}.html`)
    .then(response => {
      if (!response.ok) throw new Error('Página não encontrada');
      return response.text();
    })
    .then(html => {
      app.innerHTML = html;
    })
    .catch(error => {
      app.innerHTML = `<h2>Erro 404: Página "${page}" não encontrada.</h2>`;
    });
}

function router() {
  const hash = window.location.hash.replace('#', '') || 'home';
  loadPage(hash);
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);

// Recarrega mesmo se clicar no mesmo link
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = e.target.getAttribute('href').replace('#', '');
    const current = window.location.hash.replace('#', '') || 'home';
    if (target === current) {
      loadPage(target);
    }
  });
});