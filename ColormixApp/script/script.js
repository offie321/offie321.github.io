let colorA = null;
let colorB = null;

let mixLevel = 0;   // 0 = pure A, 1 = fully blended
let energy = 0;

// color database
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

// RESET
function resetMix() {
  colorA = null;
  colorB = null;

  mixLevel = 0;
  energy = 0;

  document.getElementById("colorA").style.background = "#333";
  document.getElementById("colorA").innerText = "A";

  document.getElementById("colorB").style.background = "#333";
  document.getElementById("colorB").innerText = "B";

  document.getElementById("mixBox").style.background = "white";
  document.getElementById("mixBox").style.transform = "none";
}

document.getElementById("resetBtn")?.addEventListener("click", resetMix);

// mix between two colors
function mix(c1, c2, t) {
  return {
    r: Math.round(c1.r + (c2.r - c1.r) * t),
    g: Math.round(c1.g + (c2.g - c1.g) * t),
    b: Math.round(c1.b + (c2.b - c1.b) * t),
  };
}

// average color (final blended state)
function average(c1, c2) {
  return {
    r: Math.round((c1.r + c2.r) / 2),
    g: Math.round((c1.g + c2.g) / 2),
    b: Math.round((c1.b + c2.b) / 2),
  };
}

// smooth lerp
function lerp(a, b, t) {
  return a + (b - a) * t;
}

// tilt input (NO direction influence, only intensity)
window.addEventListener("deviceorientation", (event) => {
  if (!colorA || !colorB) return;

  const gamma = event.gamma || 0;

  // wider sensitivity range (0 → 1.5)
  const intensity = Math.min(Math.abs(gamma) / 45, 1.5);

  // smooth energy buildup
  energy = lerp(energy, intensity, 0.08);
});

function animate() {
  const box = document.getElementById("mixBox");

  if (colorA && colorB) {

    const cA = colors[colorA];
    const cB = colors[colorB];

    // final blended target (stable endpoint)
    const target = average(cA, cB);

    // tilt increases diffusion speed
    const diffusionSpeed = energy * 0.015;

    // progressive mixing (no direction bias)
    mixLevel += diffusionSpeed;

    // natural decay when not tilting
    mixLevel *= 0.998;

    // clamp
    mixLevel = Math.max(0, Math.min(1, mixLevel));

    // blend from A → averaged color
    const result = mix(cA, target, mixLevel);

    box.style.background = `rgb(${result.r}, ${result.g}, ${result.b})`;

    // liquid motion feel
    const wobble = Math.sin(mixLevel * 8) * energy * 3;
    box.style.transform = `translateY(${wobble}px) scale(${1 + mixLevel * 0.02})`;

    // stabilize when fully mixed
    if (mixLevel > 0.98) {
      box.style.transform = "none";
    }
  }

  requestAnimationFrame(animate);
}

animate();