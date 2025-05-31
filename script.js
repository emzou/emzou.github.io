const tabButtons = document.querySelectorAll(".tab-button");
const tabContentArea = document.getElementById("tab-content-area");
const tabIndicator = document.getElementById("tab-indicator");

const branding = document.querySelector('.film-branding');
  const text = branding.textContent;
  branding.innerHTML = [...text].map(char => {
    const r = (Math.random() - 0.5) * 6;  // rotation: -3° to 3°
    const y = (Math.random() - 0.5) * 2;  // vertical wobble: -1px to 1px
    return `<span style="--r:${r}deg; --y:${y}px">${char}</span>`;
  }).join('');

tabButtons.forEach(btn => {
  btn.addEventListener("click", async () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const tab = btn.getAttribute("data-tab");
    tabIndicator.textContent = tab;

    if (tab === "home") {
      tabContentArea.innerHTML = `
        <!-- Home content -->
        <div class="name-header">emily zou</div>
        <div class="cam-frame">
          <div class="home-image-frame">
            <div class="home-image">
              <img src="emleezoo.jpeg" alt="itsme" />
            </div>
          </div>
          <div class="home-text">
            <h2>I want to know how you know things</h2>
            <p>I'm a first-year PhD student in Stanford's Communication department, where I'm advised by Dr. Jennifer Pan. I'm interested in how people learn and talk about politics online. I investigate this through natural language processing and computational social science broadly.</p>
          </div>
        </div>
        <div class="film-strip">
          <span class="film-branding">easyone at stanford dot edu</span>
        </div>  
      `;
    } else {
      try {
        const res = await fetch(`${tab}.html`);
        const html = await res.text();
        tabContentArea.innerHTML = html;
      } catch (err) {
        tabContentArea.innerHTML = `<p> a summoner could not load ${tab} </p>`;
      }
    }
  });
});



