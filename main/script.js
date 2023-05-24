function toggleSidePanel() {
    const sidePanel = document.querySelector('.side-panel');
    sidePanel.classList.toggle('open');
  }

  document.addEventListener('DOMContentLoaded', function() {
    var panelLabel = document.querySelector('.panel-label');
    var panelMenu = document.querySelector('.panel-menu');
  
    panelLabel.addEventListener('click', function() {
      panelLabel.classList.toggle('active');
    });
  });
  
  
  const ipLocationDiv = document.getElementById('ip-location');

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;
    fetch(`https://ipapi.co/${ipAddress}/json/`)
      .then(response => response.json())
      .then(data => {
        const location = `${data.city}, ${data.region}, ${data.country}`;
        ipLocationDiv.textContent = `IP Address: ${ipAddress} | Location: ${location}`;
      })
      .catch(error => console.error(error));
  })
  .catch(error => console.error(error));

  