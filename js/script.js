// Get Elements
const siteWrapper = document.querySelector(".site-wrapper");
const changeBgBtn = document.querySelector("#change-bg-btn");
const rgbText = document.querySelector(".rgb-text");
const btnClickSound = new Audio("../assets/music/btn-click.mp3");

// Function to Generate a Random Number Between Two Values (both inclusive)
const generateRandom = (min = 0, max = 0) => {
  // Convert to Number (In Case of String Type)
  min = Number(min);
  max = Number(max);

  // if NaN
  if (isNaN(min) || isNaN(max)) return 0;

  // If min is Greater than max then Swap
  if (min > max) [min, max] = [max, min];

  // Generate a Random Number Between min & max (both inclusive) and Return it
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Function to Change Background Color
const changeBgColor = (e) => {
  // Play Button Click Sound
  btnClickSound.pause();
  btnClickSound.currentTime = 0;
  if (e) btnClickSound.play();

  // Generate a Random RGB Value;
  let rgb = `rgb(${generateRandom(0, 255)},${generateRandom(
    0,
    255
  )},${generateRandom(0, 255)})`;

  // Set Values
  rgbText.textContent = rgb;
  siteWrapper.style.backgroundColor = rgb;
  changeBgBtn.style.color = rgb;
};

// Adding Click Event Listner On Button to Change Background Color
changeBgBtn.onclick = changeBgColor;

// Generate and Set a Background Color On Initial Page Load
changeBgColor();
