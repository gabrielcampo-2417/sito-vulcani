let buttons = document.querySelectorAll('.filter-pill-btn');
let cards = document.querySelectorAll('.vcard');
let searchInput = document.getElementById('search-input');
let activeFilter = 'tutti';

function applyFilters() {
  let query = searchInput.value.toLowerCase().trim();

  cards.forEach(function (card) {
    let name = card.querySelector('.vcard-name').textContent.toLowerCase();
    let matchFilter = activeFilter === 'tutti' || card.dataset.stato === activeFilter;
    let matchSearch = query === '' || name.includes(query);

    if (matchFilter && matchSearch) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

buttons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    buttons.forEach(function (b) {
      b.className = 'filter-pill-btn';
    });

    activeFilter = btn.dataset.filter;

    if (activeFilter === 'tutti') {
      btn.classList.add('active-tutti');
    } else if (activeFilter === 'attivo') {
      btn.classList.add('active-attivi');
    } else {
      btn.classList.add('active-quiesc');
    }

    applyFilters();
  });
});

searchInput.addEventListener('input', function () {
  applyFilters();
});
