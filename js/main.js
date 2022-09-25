//Section, Hex to RGB variables
const haxToRGBInput = document.getElementById('hexCInp');
const hexResult = document.getElementById('hexCOut');

//Section, RGB to Hex variables
const rgbInputR = document.getElementById('RCInput');
const rgbInputG = document.getElementById('GCInput');
const rgbInputB = document.getElementById('BCInput');
const rgbToHexResult = document.getElementById('rgbCOut');

//Select, Color by RGB Range variables
const rangeInputR = document.getElementById('RrInput');
const rangeInputG = document.getElementById('GrInput');
const rangeInputB = document.getElementById('BrInput');
const rgbRangeResult = document.getElementById('rangeColorBox');

//Section, Color By Hex Code variables
const hexInput = document.getElementById('hexInput');
const hexResultBox = document.getElementById('colorBox');

//Section, Color By RGB Code variables
const rgbByCodeR = document.getElementById('RInput');
const rgbByCodeG = document.getElementById('GInput');
const rgbByCodeB = document.getElementById('BInput');
const rgbResultBox = document.getElementById('rgbColorBox');

//Section, Random Picker variables
const randomPickerCode = document.getElementById('randomValuePara');
const randomPickerResult = document.getElementById('randomPicker');

////////////////////////////////////////////////////////////////////////

//Random Color Picker Function
function randompickerbtn() {
  const colorCharacter = '1234567890ABCDEF';
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * 16);
    hex += colorCharacter[random];
    console.log(hex);
  }
  randomPickerResult.style.background = `${hex}`;
  randomPickerCode.innerText = hex;
}

//Hex to RGB Convert Function

function hexConvbtn() {
  const hexInputValue = haxToRGBInput.value;
  const rgbHex = hexInputValue.match(/.{1,2}/g);
  if (rgbHex == null) {
    return;
  }
  let rgb = [
    parseInt(rgbHex[0], 16),
    parseInt(rgbHex[1], 16),
    parseInt(rgbHex[2], 16),
  ];
  let [r, g, b] = rgb;

  hexResult.textContent = `rgb(${r},${g},${b})`;
  hexResult.style.background = `rgb(${r},${g},${b})`;
  hexResult.style.padding = `1rem`;
}

//Convert Rgb to Hex
function rgbToHex(color) {
  let hexColor = color.toString(16);
  console.log(hexColor);
  return hexColor.length == 1 ? '0' + hexColor : hexColor;
}

function rgbConvbtn() {
  let rgbRValue = +rgbInputR.value;
  let rgbGValue = +rgbInputG.value;
  let rgbBValue = +rgbInputB.value;
  if (rgbRValue > 255 || rgbGValue > 255 || rgbBValue > 255) {
    alert('Invalid RGB Code, RGB value should be less then 255');
  }
  let result =
    '#' + rgbToHex(rgbRValue) + rgbToHex(rgbGValue) + rgbToHex(rgbBValue);
  rgbToHexResult.innerText = result;

  rgbToHexResult.style.background = `${result}`;
  rgbToHexResult.style.padding = `1rem`;
}

//RGB range
function RangeSelector() {
  let rangeRValue = +rangeInputR.value;
  let rangeGValue = +rangeInputG.value;
  let rangeBValue = +rangeInputB.value;
  rgbRangeResult.style.background = `rgb(${rangeRValue},${rangeGValue},${rangeBValue})`;
  rgbRangeResult.textContent = `rgb(${rangeRValue},${rangeGValue},${rangeBValue})`;
}

function hexFindbtn() {
  let hexInpValue = hexInput.value;
  hexResultBox.style.background = `${hexInpValue}`;
  hexResultBox.textContent = `${hexInpValue}`;
}

function RGBFindbtn() {
  let rInpValue = rgbByCodeR.value;
  let gInpValue = rgbByCodeG.value;
  let bInpValue = rgbByCodeB.value;
  rgbResultBox.style.background = `rgb(${rInpValue},${gInpValue},${bInpValue})`;
  rgbResultBox.textContent = `rgb(${rInpValue},${gInpValue},${bInpValue})`;
}

// Copy Code
function copyColorCode(section) {
  const CopycolorCode = section.innerText;
  navigator.clipboard.writeText(CopycolorCode);
  section.innerText = `Copied`;
}
