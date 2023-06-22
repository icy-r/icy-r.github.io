const sponsors = [
    {
      name: "Sponsor 1",
      image: "files/sponsor1.jpg"
    },
    {
      name: "Sponsor 2",
      image: "files/sponsor1.jpg"
    },
    {
      name: "Sponsor 1",
      image: "files/sponsor1.jpg"
    }
  ];
  
  let currentIndex = 0;
let prevIndex = -1;

function changeSponsor() {
  const sponsor = sponsors[currentIndex];
  if (currentIndex !== prevIndex) {
    const sponsorElement = document.createElement("div");
    sponsorElement.innerHTML = `
      <h3>${sponsor.name}</h3>
      <img src="${sponsor.image}">
    `;
    document.querySelector(".sponsors").innerHTML = "";
    document.querySelector(".sponsors").appendChild(sponsorElement);
    prevIndex = currentIndex;
  }
  currentIndex++;
  if (currentIndex >= sponsors.length) {
    currentIndex = 0;
  }
}

setInterval(changeSponsor, 2000);