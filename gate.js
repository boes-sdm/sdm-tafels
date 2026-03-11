(function () {
  if (sessionStorage.getItem('sdm_auth') === '1') return;

  /* Hide page content */
  document.documentElement.style.visibility = 'hidden';

  var KEY = '17maartgebeurthet';

  document.addEventListener('DOMContentLoaded', function () {
    /* Overlay */
    var overlay = document.createElement('div');
    overlay.id = 'gate-overlay';
    overlay.innerHTML =
      '<div id="gate-box">' +
        '<p class="gate-label">Stichting Democratie en Media</p>' +
        '<h2>Beschermde pagina</h2>' +
        '<p class="gate-sub">Voer het wachtwoord in om verder te gaan.</p>' +
        '<form id="gate-form">' +
          '<input id="gate-pw" type="password" placeholder="Wachtwoord" autocomplete="off" autofocus>' +
          '<button type="submit">Verder</button>' +
        '</form>' +
        '<p id="gate-err"></p>' +
      '</div>';

    var style = document.createElement('style');
    style.textContent =
      '#gate-overlay{position:fixed;inset:0;z-index:99999;background:#f5f0eb;' +
        'display:flex;align-items:center;justify-content:center;visibility:visible}' +
      '#gate-box{text-align:center;max-width:360px;padding:2rem}' +
      '#gate-box .gate-label{font-family:"JetBrains Mono",monospace;font-size:.72rem;' +
        'text-transform:uppercase;letter-spacing:.18em;color:#8a8a82;margin-bottom:.6rem}' +
      '#gate-box h2{font-family:"Playfair Display",Georgia,serif;font-weight:900;' +
        'font-size:1.6rem;color:#1a1a18;margin-bottom:.8rem}' +
      '#gate-box .gate-sub{font-family:"Source Sans 3",Georgia,serif;font-size:.95rem;' +
        'color:#4a4a45;font-weight:300;margin-bottom:1.5rem}' +
      '#gate-form{display:flex;gap:.5rem}' +
      '#gate-pw{flex:1;padding:.6rem 1rem;font-family:"Source Sans 3",sans-serif;' +
        'font-size:1rem;border:1px solid #d4cdc4;border-radius:3px;background:#fff;' +
        'outline:none;transition:border .2s}' +
      '#gate-pw:focus{border-color:#c23a22}' +
      '#gate-form button{padding:.6rem 1.4rem;font-family:"Source Sans 3",sans-serif;' +
        'font-size:.9rem;font-weight:600;background:#1a1a18;color:#fff;border:none;' +
        'border-radius:3px;cursor:pointer;transition:background .2s}' +
      '#gate-form button:hover{background:#c23a22}' +
      '#gate-err{font-size:.82rem;color:#c23a22;margin-top:.8rem;min-height:1.2em}';

    document.head.appendChild(style);
    document.body.appendChild(overlay);

    document.getElementById('gate-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var val = document.getElementById('gate-pw').value;
      if (val === KEY) {
        sessionStorage.setItem('sdm_auth', '1');
        overlay.remove();
        document.documentElement.style.visibility = '';
      } else {
        document.getElementById('gate-err').textContent = 'Onjuist wachtwoord';
        document.getElementById('gate-pw').value = '';
        document.getElementById('gate-pw').focus();
      }
    });
  });
})();
