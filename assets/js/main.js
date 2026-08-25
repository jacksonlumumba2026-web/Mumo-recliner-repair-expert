// Mumo Recliner Repair Experts — landing page

document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Scroll-reveal animation
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  // Quote form -> pre-filled WhatsApp message
  var quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(quoteForm);
      var name = (data.get('name') || '').trim();
      var phone = (data.get('phone') || '').trim();
      var service = data.get('service') || '';
      var details = (data.get('details') || '').trim();

      var message = 'Hi Mumo, my name is ' + name + ' (' + phone + '). I need help with: ' + service + '.';
      if (details) message += ' Details: ' + details;

      var url = 'https://wa.me/254716125795?text=' + encodeURIComponent(message);
      window.open(url, '_blank', 'noopener');
    });
  }
});
