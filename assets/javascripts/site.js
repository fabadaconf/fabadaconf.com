import countdown from '../../node_modules/countdown/countdown.js';
import '../../node_modules/accordion/src/accordion.js';

// Navbar hambuger menu
document.getElementById('navbar-toggle').addEventListener('click', toggleNav);

function toggleNav() {
  var nav = document.getElementById('navbar-list');
  var className = nav.getAttribute('class');
  if (className === 'navbar-menu') {
    nav.className = 'navbar-menu is-active';
  } else {
    nav.className = 'navbar-menu';
  }
}

// Countdown component
countdown.setLabels(
  ' mseg| seg| min| hora| día| semana| mes| año| década| século| milenio',
  ' msegs| segs| mins| horas| días| semanas| meses| años| décadas| séculos| milenios',
  ' y ',
  ' ',
  'ahora');

if (document.getElementById('count-down-days')) {
  countdown(
    new Date(2020, 10, 7),
    function (ts) {
      document.getElementById('count-down-days').innerHTML = ts.toHTML('strong');
    },
    countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
}

// Agenda accordion
var el = document.querySelector('.agenda-content');
new Accordion(el);
