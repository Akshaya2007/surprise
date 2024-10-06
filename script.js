let swipeCount = 0;
const envelope = document.getElementById('envelope');
const message = document.getElementById('message');

function openEnvelope() {
    if (swipeCount < 15) {
        envelope.style.transform = 'translateY(-150%)';
        setTimeout(() => {
            envelope.style.transform = 'translateY(0)';
            swipeCount++;
        }, 500);
    } else {
        message.classList.add('show');
        envelope.style.transform = 'translateY(0)';
        envelope.style.pointerEvents = 'none'; // Disable further interactions
    }
}

document.body.addEventListener('click', openEnvelope);
