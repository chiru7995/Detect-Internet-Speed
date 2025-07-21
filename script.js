let imageSizeInBytes = 500000; // size of image in bytes (around 500 KB)
let startTime, endTime;

const bitOutput = document.getElementById("bits");
const kbOutput = document.getElementById("kbs");
const mbOutput = document.getElementById("mbs");

let image = new Image();

image.onload = function () {
  endTime = new Date().getTime();
  let duration = (endTime - startTime) / 1000; // seconds
  let bitsLoaded = imageSizeInBytes * 8;

  let speedBps = (bitsLoaded / duration).toFixed(2);
  let speedKbps = (speedBps / 1024).toFixed(2);
  let speedMbps = (speedKbps / 1024).toFixed(2);

  bitOutput.innerText = `${speedBps} bps`;
  kbOutput.innerText = `${speedKbps} Kbps`;
  mbOutput.innerText = `${speedMbps} Mbps`;
};

function init() {
  bitOutput.innerText = "Calculating...";
  kbOutput.innerText = "Calculating...";
  mbOutput.innerText = "Calculating...";

  const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg"; // fixed image
  startTime = new Date().getTime();
  image.src = imageUrl + "?t=" + startTime; // avoid caching
}

window.onload = init;
