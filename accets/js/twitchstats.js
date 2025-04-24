const clientId = 'vmehg5hmjn31qugdu5hhijkogt30mj';
const accessToken = 'i8hlmg3l7a3xu1gi2ximappgknfbu7';
const username = 'angryginge13';

  async function checkTwitchStatus() {
    try {
      const userRes = await fetch(`https://api.twitch.tv/helix/users?login=${username}`, {
        headers: {
          'Client-ID': clientId,
          'Authorization': `Bearer ${accessToken}`
        }
      });

      const userData = await userRes.json();
      if (!userData.data || userData.data.length === 0) throw new Error("User not found");

      const user = userData.data[0];
      const userId = user.id;

      // 🔽 Get stream info
      const streamRes = await fetch(`https://api.twitch.tv/helix/streams?user_id=${userId}`, {
        headers: {
          'Client-ID': clientId,
          'Authorization': `Bearer ${accessToken}`
        }
      });

      const streamData = await streamRes.json();
      const bubble = document.getElementById('twitch-bubble');
      const label = document.getElementById('twitch-label');
      const tooltip = document.getElementById('twitch-tooltip');

      if (streamData.data.length > 0) {
        const stream = streamData.data[0];

        // Calculate uptime
        const startTime = new Date(stream.started_at);
        const now = new Date();
        const diffMs = now - startTime;
        const hours = Math.floor(diffMs / (1000 * 60 * 60));
        const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
        const uptime = `${hours > 0 ? hours + 'h ' : ''}${minutes}m ${seconds}s`;

        // Get game name
        let gameName = '';
        if (stream.game_id) {
          const gameRes = await fetch(`https://api.twitch.tv/helix/games?id=${stream.game_id}`, {
            headers: {
              'Client-ID': clientId,
              'Authorization': `Bearer ${accessToken}`
            }
          });
          const gameData = await gameRes.json();
          gameName = gameData.data[0]?.name || '';
        }

        label.textContent = 'LIVE';
        tooltip.innerHTML = `${gameName ? '🎮 Game playing: ' + gameName + '<br>' : ''} ⏱️ Live for: ${uptime}`;
        bubble.classList.remove('offline', 'error');
        bubble.classList.add('live');
      } else {
        label.textContent = 'Offline';
        tooltip.innerHTML = '';
        bubble.classList.remove('live', 'error');
        bubble.classList.add('offline');
      }
    } catch (error) {
      console.error('Twitch check error:', error);
      const label = document.getElementById('twitch-label');
      const tooltip = document.getElementById('twitch-tooltip');
      label.textContent = 'Error';
      tooltip.innerHTML = 'Could not load';
      bubble.classList.remove('live', 'offline');
      bubble.classList.add('error');
    }
  }

  window.onload = checkTwitchStatus;
  setInterval(checkTwitchStatus, 60000);

  const bubble = document.getElementById('twitch-bubble');
  const tooltip = document.getElementById('twitch-tooltip');

bubble.addEventListener('mouseenter', () => {
  // Make tooltip visible but not fully opaque just to get its position
  tooltip.style.visibility = 'hidden';
  tooltip.style.opacity = '0';
  tooltip.style.display = 'block';

  // Allow rendering
  requestAnimationFrame(() => {
    const rect = tooltip.getBoundingClientRect();
    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;

    tooltip.classList.remove('above', 'below');

    if (spaceAbove < 60 && spaceBelow > 60) {
      tooltip.classList.add('below');
    } else {
      tooltip.classList.add('above');
    }

    tooltip.style.visibility = '';
    tooltip.style.opacity = '';
    tooltip.style.display = '';
  });
});
