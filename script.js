document.addEventListener('DOMContentLoaded', function() {
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');
    const messageBoard = document.getElementById('messageBoard');

    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const messageText = messageInput.value.trim();
        
        if (messageText !== '') {
            const message = createMessageElement(messageText);
            messageBoard.appendChild(message);
            messageInput.value = '';
        }
    });

    function createMessageElement(messageText) {
        const message = document.createElement('div');
        message.classList.add('message');
        
        const messageContent = document.createElement('p');
        messageContent.textContent = messageText;

        const messageFooter = document.createElement('small');
        messageFooter.textContent = '' + getCurrentDateTime();

        message.appendChild(messageContent);
        message.appendChild(messageFooter);

        return message;
    }

    function getCurrentDateTime() {
        const now = new Date();
        const date = now.toLocaleDateString('pt-BR');
        const time = now.toLocaleTimeString('pt-BR');
        return `${date} às ${time}`;
    }
});
