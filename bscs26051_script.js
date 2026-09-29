
const chatLog = document.getElementById('chatLog');
const userInput = document.getElementById('userInput');

function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');

  if (sender === 'user') {
    messageDiv.classList.add('user-message');
  } else if (sender === 'bot'){
    messageDiv.classList.add('bot-message');
  }

  messageDiv.textContent = text;
  chatLog.appendChild(messageDiv);
  chatLog.scrollTop = chatLog.scrollHeight;
}


function handleUserMessage() {
  const userText = userInput.value.trim();

  // a. Check if the user input is empty. If it is, do nothing.
  if (userText === '') {
    return;
  }

  // b. Display the user input as a user message.
  addMessage(userText, 'user');

  // c. Display the bot reply as a bot message.
  addMessage('You said ' + userText, 'bot');

  // Clear the input box and keep focus on it for the next message.
  userInput.value = '';
  userInput.focus();
}

// Bonus: pressing Enter also sends the message.
userInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    handleUserMessage();
  }
});