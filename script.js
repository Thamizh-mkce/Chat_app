document.addEventListener('DOMContentLoaded', () => {
    const senderInput = document.getElementById('sender-input');
    const senderSend = document.getElementById('sender-send');
    const senderMessages = document.getElementById('sender-messages');

    const receiverInput = document.getElementById('receiver-input');
    const receiverSend = document.getElementById('receiver-send');
    const receiverMessages = document.getElementById('receiver-messages');

    function addMessage(panel, message, className) {
        const msgDiv = document.createElement('div');
        msgDiv.className = className;
        msgDiv.textContent = message;
        panel.appendChild(msgDiv);
        panel.scrollTop = panel.scrollHeight; // Scroll to the bottom
    }

    senderSend.addEventListener('click', () => {
        const message = senderInput.value.trim();
        if (message) {
            addMessage(senderMessages, message, 'sender-message');
            addMessage(receiverMessages, message, 'receiver-message');
            senderInput.value = '';
        }
    });

    receiverSend.addEventListener('click', () => {
        const message = receiverInput.value.trim();
        if (message) {
            addMessage(receiverMessages, message, 'receiver-message');
            addMessage(senderMessages, message, 'sender-message');
            receiverInput.value = '';
        }
    });

    senderInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            senderSend.click();
        }
    });

    receiverInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            receiverSend.click();
        }
    });
});
