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

  document.addEventListener('DOMContentLoaded', function() {
    var newsList = document.getElementById('news-list');
    var apiKey = '3a8eef76d62a4a29b51bf11c71e19cc2'; // Replace with your NewsAPI key
  
    fetchNews();
  
    function fetchNews() {
      var url = `https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=3a8eef76d62a4a29b51bf11c71e19cc2`;
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.status === 'ok') {
            displayNews(data.articles);
          }
        })
        .catch(error => {
          console.log('Error fetching news:', error);
        });
    }
  
    function displayNews(articles) {
      articles.forEach(article => {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = article.url;
        a.textContent = article.title;
        li.appendChild(a);
        newsList.appendChild(li);
      });
    }
  });
  
  
    function displayNews(articles) {
      articles.forEach(article => {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = article.url;
        a.textContent = article.title;
        li.appendChild(a);
        newsList.appendChild(li);
      });
    }
  
  