let swipeCount = 0;
const envelope = document.getElementById('envelope');
const message = document.getElementById('message');
const container = document.getElementById('container');

function openEnvelope() {
    if (swipeCount < 15) {
        // Create a new envelope
        const newEnvelope = document.createElement('div');
        newEnvelope.classList.add('envelope');
        newEnvelope.style.transform = 'translateY(0)'; // Reset position
        container.appendChild(newEnvelope);
        
        // Animate the envelope
        setTimeout(() => {
            newEnvelope.style.transform = 'translateY(-150%)';
            setTimeout(() => {
                newEnvelope.style.transform = 'translateY(0)';
                swipeCount++;
            }, 500);
        }, 10);
    } else {
        // Show the message
        message.classList.add('show');
        envelope.style.transform = 'translateY(0)';
        envelope.style.pointerEvents = 'none'; // Disable further interactions
    }
}

document.body.addEventListener('click', openEnvelope);
