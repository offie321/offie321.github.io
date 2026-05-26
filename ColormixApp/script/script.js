let colorA = null;
let colorB = null;
let mixStrength = 0;

// simpele kleur database
const colors = {
  red: { r: 255, g: 0, b: 0 },
  blue: { r: 0, g: 0, b: 255 },
  yellow: { r: 255, g: 255, b: 0 },
  green: { r: 0, g: 255, b: 0 },
  purple: { r: 128, g: 0, b: 128 },
  orange: { r: 255, g: 165, b: 0 },
};

// kleur knoppen
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

// mix functie
function mix(c1, c2, t) {
  return {
    r: Math.round(c1.r + (c2.r - c1.r) * t),
    g: Math.round(c1.g + (c2.g - c1.g) * t),
    b: Math.round(c1.b + (c2.b - c1.b) * t),
  };
}

// accelerometer shake detectie
window.addEventListener("devicemotion", (event) => {
  const acc = event.accelerationIncludingGravity;

  if (!acc || !colorA || !colorB) return;

  const strength =
    Math.abs(acc.x) +
    Math.abs(acc.y) +
    Math.abs(acc.z);

  if (strength > 20) {
    mixStrength += 0.05;
    if (mixStrength > 1) mixStrength = 1;

    const result = mix(colors[colorA], colors[colorB], mixStrength);

    const rgb = `rgb(${result.r}, ${result.g}, ${result.b})`;

    const box = document.getElementById("mixBox");
    box.style.background = rgb;
    box.innerText = rgb;
  }
});