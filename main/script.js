
  
  
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

  var navItems = document.querySelectorAll('.nav li');

for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}
