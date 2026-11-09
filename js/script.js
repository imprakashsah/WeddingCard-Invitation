const events = [
  {
    title: "Wedding",
    lines: [
      "Date: 21 November 2026 (Saturday)",
      "Venue: Netaji Subhash Institute",
      "Address: 76 Sealdah Road, Sealdah, Raja Bazar, Kolkata, West Bengal – 700009"
    ],
    map: "Netaji Subhash Institute, 76 Sealdah Road, Sealdah, Raja Bazar, Kolkata, West Bengal 700009"
  },
  {
    title: "Reception",
    lines: [
      "Date: 23 November 2026 (Monday)",
      "Time: 7:00 PM",
      "Venue: Gupta Banquet",
      "Address: P-23 Benaras Road, Bamangachi, Howrah (near Bamangachi Petrol Pump)"
    ],
    map: "Gupta Banquet, P-23 Benaras Road, Bamangachi, Howrah"
  }
];

const mapUrl = query => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);

const only = document.body.dataset.events;
const shown = only ? events.filter(e => e.title.toLowerCase() === only) : events;
document.getElementById("events").innerHTML = events.map(event => `
  <section class="event">
    <div class="container">
      <h2 class="script">${event.title}</h2>
      <div class="event-lines">${event.lines.map(line => `<p>${line}</p>`).join("")}</div>
      <a class="btn btn-location" href="${mapUrl(event.map)}" target="_blank" rel="noopener">Location</a>
    </div>
  </section>`).join("");

const bgm = document.getElementById("bgm");
const landing = document.getElementById("landing");
const soundBtn = document.getElementById("soundBtn");

document.getElementById("openBtn").addEventListener("click", () => {
  landing.classList.add("open");
  bgm.play().catch(() => {});
  landing.classList.add("hide");
  document.body.classList.remove("locked");
  soundBtn.hidden = false;
  window.scrollTo(0, 0);
});

document.querySelector(".door-left").addEventListener("transitionend", () => landing.remove());

soundBtn.addEventListener("click", () => {
  bgm.muted = !bgm.muted;
  soundBtn.classList.toggle("muted", bgm.muted);
  soundBtn.setAttribute("aria-pressed", bgm.muted);
  soundBtn.setAttribute("aria-label", bgm.muted ? "Unmute music" : "Mute music");
});

