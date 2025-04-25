window.addEventListener('load', () => {
  const boot = document.getElementById('boot');
  const content = document.getElementById('terminal-content');
  const accessLine = document.getElementById('access-line');
  const bootLinesContainer = document.getElementById('boot-lines');

  setTimeout(() => document.getElementById('boot-line-1').classList.add('show'), 300);
  setTimeout(() => document.getElementById('boot-line-2').classList.add('show'), 1000);
  setTimeout(() => document.getElementById('boot-line-3').classList.add('show'), 1700);
  setTimeout(() => bootLinesContainer.classList.add('fade-out'), 2700);
  setTimeout(() => accessLine.classList.add('glitch-show'), 3200);
  setTimeout(() => { boot.style.opacity = 0; }, 4300);
  setTimeout(() => {
    boot.style.display = 'none';
    content.style.opacity = 1;
  }, 5000);
});

const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
const terminalScroll = document.getElementById('terminal-scroll-area');
const sessionStart = Date.now();

const commands = {
  help: `Available commands:
- uptime        Show how long you’ve been browsing
- clock         Show current time
- weather       Show weather in your area
- clear         Clear the terminal`,

  clock: () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const isPM = hours >= 12;
    const displayHours = hours % 12 || 12;
    const ampm = isPM ? 'PM' : 'AM';
    return `> Current time: ${displayHours}:${minutes}:${seconds} ${ampm}`;
  },

  uptime: () => {
    const elapsed = Math.floor((Date.now() - sessionStart) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    return `> Uptime: ${mins}m ${secs}s`;
  },

  weather: () => {
    if (!navigator.geolocation) {
      return '> Geolocation not supported by your browser.';
    }

    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;

      // Reverse geolocation to get city and region
      fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
        .then(res => res.json())
        .then(data => {
          const city = data.city || data.locality || 'your town';
          const region = data.principalSubdivision || '';

          // Static weather data (without an API key)
          const temp = '17°C';  // Static temperature
          const condition = 'Overcast';  // Static weather condition
          const wind = '5 km/h';  // Static wind speed
          const humidity = '85%';  // Static humidity
          const sunrise = '6:10 AM';  // Static sunrise time
          const sunset = '8:00 PM';  // Static sunset time

          const cleanWeather = `
<div class="output">
Weather in ${city}, ${region}:
► Condition : ${condition}
► Temp      : ${temp}
► Wind      : ${wind}
► Humidity  : ${humidity}
► Sunrise   : ${sunrise}
► Sunset    : ${sunset}
</div>`;

          terminalOutput.innerHTML += cleanWeather;
          terminalScroll.scrollTop = terminalScroll.scrollHeight;
        })
        .catch(error => {
          console.error('Error fetching geolocation data:', error);
          terminalOutput.innerHTML += '<div class="output">> Failed to fetch location data.</div>';
        });
    });

    return ''; // no immediate output
  },

  clear: 'CLEAR_SCREEN',
};

terminalInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const cmd = terminalInput.value.trim();
    if (!cmd) return;

    const promptHTML = `<div class="line"><span class="prompt">helix@localhost</span>:<span class="path">~</span>$ ${cmd}</div>`;
    let result = commands[cmd];

    if (typeof result === 'function') {
      result = result();
    }

    if (!result) {
      result = `> Command not found: ${cmd}`;
    }

    if (result === 'CLEAR_SCREEN') {
      terminalOutput.innerHTML = '';
    } else {
      terminalOutput.innerHTML += `${promptHTML}<div class="output">${result}</div>`;
    }

    terminalInput.value = '';
    terminalScroll.scrollTop = terminalScroll.scrollHeight;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const scrollHint = document.getElementById('scroll-up-hint');
  const scrollArea = document.getElementById('terminal-scroll-area');
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');

  function updateScrollHint() {
    const canScroll = scrollArea.scrollHeight > scrollArea.clientHeight;
    const scrolledToTop = scrollArea.scrollTop === 0;

    if (canScroll && !scrolledToTop) {
      scrollHint.style.display = 'block';
    } else {
      scrollHint.style.display = 'none';
    }
  }

  // Show/hide on scroll
  scrollArea.addEventListener('scroll', updateScrollHint);

  // Trigger after command entered
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      setTimeout(updateScrollHint, 100);
    }
  });

  // Trigger once on load
  updateScrollHint();
});
