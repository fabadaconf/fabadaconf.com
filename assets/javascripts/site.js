import countdown from '../../node_modules/countdown/countdown.js';

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
    new Date(2019, 10, 9),
    function (ts) {
      document.getElementById('count-down-days').innerHTML = ts.toHTML('strong');
    },
    countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
}

const endDate = new Date('Nov 09, 2019 00:00:00').getTime();

const countdowndate = () => {
  let now = new Date().getTime(); 
  let t = endDate - now; 

  if(t>=0){
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById('timer-days').innerHTML = days + 
    "<p class='date__day'>día(s)</p>";
    
    document.getElementById('timer-hours').innerHTML= ("0" + hours).slice(-2) +
    "<p class='date__hours'>hora(s)</p>";
    
    document.getElementById('timer-mins').innerHTML= ("0" + mins).slice(-2) +
    "<p class='date__mins'>mins</p>";
    
    document.getElementById('timer-segs').innerHTML= ("0" + secs).slice(-2) +
    "<p class='date__segs'>secs</p>";
  } else {
    document.getElementById('timer').innerHTML = "Ha llegado el día de FabadaConf!" 
  }
};

setInterval(countdowndate, 1000);






          
          