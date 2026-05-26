let colorA = null;
let colorB = null;

let targetMix = 0;
let mixStrength = 0;

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
  mixStrength = 0;
  targetMix = 0;

  const box = document.getElementById("mixBox");
  box.style.background = "white";
  box.innerText = "reset";
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

  const gamma = event.gamma; // left/right tilt (-90 to 90)

  if (gamma === null) return;

  // convert tilt → 0..1
  // center (0°) = 0.5
  targetMix = (gamma + 90) / 180;
});

function animate() {
  mixStrength = lerp(mixStrength, targetMix, 0.08);

  const box = document.getElementById("mixBox");

  if (colorA && colorB) {
    const result = mix(colors[colorA], colors[colorB], mixStrength);

    const rgb = `rgb(${result.r}, ${result.g}, ${result.b})`;

    // bottom fill height (60% → 75%)
    const baseHeight = 60;
    const extraHeight = mixStrength * 15;
    const fillHeight = baseHeight + extraHeight;

    // slanted top edge based on tilt
    const tiltOffset = (mixStrength - 0.5) * 40; // controls slope

    box.style.background = `
      linear-gradient(
        to top,
        ${rgb} 0%,
        ${rgb} ${fillHeight}%,
        white ${fillHeight + 1}%
      )
    `;

    box.style.clipPath = `
      polygon(
        0% 100%,
        100% 100%,
        100% ${fillHeight + tiltOffset}%,
        0% ${fillHeight - tiltOffset}%
      )
    `;
  }

  requestAnimationFrame(animate);
}

animate();