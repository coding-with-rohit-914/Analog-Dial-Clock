const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour');
const dayName = document.querySelector('.day-name');
const dayDate = document.querySelector('.day-date');

// Days of week array
const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// Create spikes for seconds and minutes dials
for (let s = 0; s < 60; s++) {
    let mSpikeEl = document.createElement('i');
    let sSpikeEl = document.createElement('i');
    mSpikeEl.className = 'spike';
    sSpikeEl.className = 'spike';
    mSpikeEl.style = `--rotate:${6 * s}deg`;
    sSpikeEl.style = `--rotate:${6 * s}deg`;
    mSpikeEl.setAttribute('data-i', s);
    sSpikeEl.setAttribute('data-i', s);

    seconds.append(sSpikeEl);
    minutes.append(mSpikeEl);
}

function getTime() {
    let date = new Date();
    let s = date.getSeconds();
    let m = date.getMinutes();
    let h = date.getHours();
    let day = date.getDay();
    let dayNum = date.getDate();

    // Format hour with leading zero
    let formattedHour = h.toString().padStart(2, '0');

    // Update hour display
    hour.textContent = formattedHour;

    // Update minute display with leading zero
    minute.textContent = m.toString().padStart(2, '0');

    // Update day section
    dayName.textContent = daysOfWeek[day];
    dayDate.textContent = dayNum.toString().padStart(2, '0');

    // Rotate the dials
    minutes.style = `--dRotate:${6 * m}deg`;
    seconds.style = `--dRotate:${6 * s}deg`;

    // Add stop-anim class for smooth transitions at second/minute boundaries
    if (s == 0) {
        seconds.classList.add('stop-anim');
    } else {
        seconds.classList.remove('stop-anim');
    }

    if (m == 0) {
        minutes.classList.add('stop-anim');
    } else {
        minutes.classList.remove('stop-anim');
    }
}

// Initialize the clock
getTime();

// Update time every second
setInterval(getTime, 1000);