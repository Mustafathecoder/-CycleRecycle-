// Initialize Points and Streak
let points = 0; 
let streak = 0; 
let lastRecycleDate = null;

// Initialize Map
function initMap() {
    const map = L.map('mapContainer').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
          '&copy; OpenStreetMap contributors',
      }).addTo(map);

      L.marker([51.505, -0.09]).addTo(map)
          .bindPopup('Recycling Location')
          .openPopup();
}

// QR Code Scanner
function onScanSuccess(decodedText) {
   alert(`Scanned Item!`);
   addPoints(50); 
   updateStreak();
}

function onScanFailure(error) { console.warn(`QR Code Scan Failed`); }

// Initialize QR Code Scanner
const qrReader = new Html5Qrcode("qr-reader");
qrReader.start({ facingMode:"environment"}, {}, onScanSuccess);

// Add Points
function addPoints(amount) {
   points += amount; 
   document.getElementById("points").innerText=points; 
}

// Update Streaks
function updateStreak(){
 const today = new Date().toDateString(); 
 if(lastRecycleDate !== today){
 streak+=1; 
 lastRecycleDate=today; 
 document.getElementById("streak").innerText=streak}
}

window.onload=initMap();
