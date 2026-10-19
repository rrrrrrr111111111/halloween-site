const goal = new Date("2026-10-24T00:00:00");
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
    const diff = Math.max(0, goal - Date.now());
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    countdownEl.textContent = `${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;
}

updateCountdown();
setInterval(updateCountdown, 1000);