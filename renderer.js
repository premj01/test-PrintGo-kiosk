const QRCode = require("qrcode");

const qrContainer = document.getElementById("qr");
const status = document.getElementById("status");

// Example: generate a unique QR code (e.g., kiosk ID + timestamp)
const kioskId = "KIOSK_001";
const qrData = `${kioskId}_${Date.now()}`;

QRCode.toCanvas(qrContainer, qrData, { width: 200 }, function (error) {
  if (error) console.error(error);
  else console.log("QR code generated:", qrData);
});

// Simulate status update
setTimeout(() => { status.textContent = "Downloading job..."; }, 3000);
setTimeout(() => { status.textContent = "Printing..."; }, 6000);
setTimeout(() => { status.textContent = "Job completed!"; }, 9000);
