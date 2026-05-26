let colorA = null;
let colorB = null;

let targetMix = 0;
let mixStrength = 0;

let mixA = 1; // starts fully A
let mixB = 0; // starts empty B

// simple color database
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
    const selected = btn.dataset.color;

    if (!colorA) {
      colorA = selected;
      document.getElementById("colorA").style.background = selected;
      document.getElementById("colorA").innerText = selected;
    } else {
      colorB = selected;
      document.getElementById("colorB").style.background = selected;
      document.getElementById("colorB").innerText = selected;
    }
  });
});

// RESET FUNCTION
function resetMix() {
  colorA = null;
  colorB = null;

  mixStrength = 0;
  targetMix = 0;
  liquidMix = 0;

  document.getElementById("colorA").style.background = "#333";
  document.getElementById("colorA").innerText = "A";

  document.getElementById("colorB").style.background = "#333";
  document.getElementById("colorB").innerText = "B";

  document.getElementById("mixBox").style.background = "white";
}

// attach reset button (add a button with id="resetBtn")
document.getElementById("resetBtn")?.addEventListener("click", resetMix);

// mix function
function mix(c1, c2, t) {
  return {
    r: Math.round(c1.r + (c2.r - c1.r) * t),
    g: Math.round(c1.g + (c2.g - c1.g) * t),
    b: Math.round(c1.b + (c2.b - c1.b) * t),
  };
}

// smoother lerp
function lerp(a, b, t) {
  return a + (b - a) * t;
}

// device tilt detection
window.addEventListener("deviceorientation", (event) => {
  if (!colorA || !colorB) return;

  const gamma = event.gamma || 0;

  // normalize -90..90 → -1..1
  targetMix = gamma / 90;
});

function animate() {
  mixStrength = lerp(mixStrength, targetMix, 0.05);

  const box = document.getElementById("mixBox");

  if (colorA && colorB) {

    // 🔥 tilt controls exchange rate (not replacement!)
    const exchange = Math.abs(mixStrength) * 0.01;

    // if tilting right → B enters A
    if (mixStrength > 0) {
      mixA -= exchange;
      mixB += exchange;
    }

    // if tilting left → A comes back (reverse mixing)
    if (mixStrength < 0) {
      mixA += exchange;
      mixB -= exchange;
    }

    // clamp so they stay valid
    mixA = Math.max(0, Math.min(1, mixA));
    mixB = Math.max(0, Math.min(1, mixB));

    // normalize (important for stability)
    const total = mixA + mixB;
    const a = mixA / total;
    const b = mixB / total;

    const colA = colors[colorA];
    const colB = colors[colorB];

    const result = {
      r: Math.round(colA.r * a + colB.r * b),
      g: Math.round(colA.g * a + colB.g * b),
      b: Math.round(colA.b * a + colB.b * b),
    };

    const rgb = `rgb(${result.r}, ${result.g}, ${result.b})`;

    // 🍹 stable horizontal liquid surface
    const surface = 50;

    // slight tilt effect ONLY on slope (not height)
    const tiltOffset = mixStrength * 5;

    box.style.background = `
      linear-gradient(
        to right,
        ${rgb} 0%,
        ${rgb} 100%
      )
    `;

    box.style.clipPath = `
      polygon(
        0% ${surface - tiltOffset}%,
        100% ${surface + tiltOffset}%,
        100% 100%,
        0% 100%
      )
    `;
  }

  requestAnimationFrame(animate);
}

animate();