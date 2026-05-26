let colorA = null;
let colorB = null;

let mix = 0;       // 0 = A at bottom, 1 = fully mixed
let tilt = 0;      // smoothed device tilt

const colors = {
  red: { r: 255, g: 0, b: 0 },
  blue: { r: 0, g: 0, b: 255 },
  yellow: { r: 255, g: 255, b: 0 },
  green: { r: 0, g: 255, b: 0 },
  purple: { r: 128, g: 0, b: 128 },
  orange: { r: 255, g: 165, b: 0 },
};

// select colors
document.querySelectorAll(".color").forEach(btn => {
  btn.addEventListener("click", () => {
    const c = btn.dataset.color;

    if (!colorA) {
      colorA = c;
      document.getElementById("colorA").style.background = c;
      document.getElementById("colorA").innerText = c;
    } else {
      colorB = c;
      document.getElementById("colorB").style.background = c;
      document.getElementById("colorB").innerText = c;
    }
  });
});

// reset
document.getElementById("resetBtn").addEventListener("click", () => {
  colorA = null;
  colorB = null;
  mix = 0;
  tilt = 0;

  document.getElementById("colorA").style.background = "#333";
  document.getElementById("colorA").innerText = "A";

  document.getElementById("colorB").style.background = "#333";
  document.getElementById("colorB").innerText = "B";

  const box = document.getElementById("mixBox");
  box.style.background = "white";
  box.style.transform = "none";
});

// device tilt (direction matters slightly for slosh feel)
window.addEventListener("deviceorientation", (e) => {
  if (!colorA || !colorB) return;

  const g = e.gamma || 0;

  // smoother tilt (-1 → 1)
  const targetTilt = Math.max(-1, Math.min(1, g / 30));

  // smooth interpolation
  tilt += (targetTilt - tilt) * 0.1;
});

// helper
function mixColor(a, b, t) {
  return {
    r: a.r + (b.r - a.r) * t,
    g: a.g + (b.g - a.g) * t,
    b: a.b + (b.b - a.b) * t,
  };
}

// animation
function animate() {
  const box = document.getElementById("mixBox");

  if (colorA && colorB) {
    const cA = colors[colorA];
    const cB = colors[colorB];

    // 🎯 slosh effect:
    // tilt back & forth slowly increases mixing
    const movement = Math.abs(tilt);

    // mixing only happens when tilting (like shaking a drink)
    mix += movement * 0.008;

    // natural settling (prevents instant full mix)
    mix *= 0.997;

    mix = Math.max(0, Math.min(1, mix));

    // final color blend
    const c = mixColor(cA, cB, mix);

    // 💧 liquid level illusion (not full fill)
    const level = 0.35 + mix * 0.6; // leaves empty space at top

    box.style.background = `
      linear-gradient(
        to top,
        rgb(${c.r}, ${c.g}, ${c.b}) ${level * 100}%,
        white ${level * 100}%
      )
    `;

    // 🌊 slosh movement (back and forth)
    const slosh = tilt * 10 * (1 + mix);
    box.style.transform = `translateX(${slosh}px)`;

  }

  requestAnimationFrame(animate);
}

animate();