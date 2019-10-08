import countdown from '../../node_modules/countdown/countdown.js';

// Countdown component
countdown.setLabels(
  ' mseg| seg| min| hora| día| semana| mes| año| década| século| milenio',
  ' msegs| segs| mins| horas| días| semanas| meses| años| décadas| séculos| milenios',
  ' y ',
  ' ',
  'ahora');

if (document.getElementById('count-down-days')) {
  countdown(
    new Date(2019, 10, 9),
    function (ts) {
      document.getElementById('count-down-days').innerHTML = ts.toHTML('strong');
    },
    countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
}
