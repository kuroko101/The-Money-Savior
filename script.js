// Get references to DOM elements
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInputText = document.getElementById('chatbot-input-text');
const chatbotSendButton = document.getElementById('chatbot-send-button');

// Add event listeners
chatbotInputText.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    send
