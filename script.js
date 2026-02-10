const API_KEY = "PASTE_YOUR_API_KEY_HERE";
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const loadingIndicator = document.getElementById('loading-indicator');

document.getElementById('send-btn').addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (e) => e.key === 'Enter' && sendMessage());

function setInput(text) {
    userInput.value = text;
    userInput.focus();
}

async function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    appendMessage(text, 'user');
    userInput.value = '';
    loadingIndicator.classList.remove('hidden');
    chatLog.scrollTop = chatLog.scrollHeight;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{
                parts: [{
                    text: `You are a helpful, professional, and concise Financial Advisor AI. Provide clear, actionable advice on personal finance, investing, budgeting, and saving. Use Indian Rupees (₹) for currency and the Indian numbering system (Lakhs/Crores) where appropriate. Formatting should be minimal (mostly plain text with newlines).\n\nUser Question: ${text}`
                }]
            }]
        })
    });

    const data = await response.json();
    appendMessage(data.candidates[0].content.parts[0].text.trim(), 'ai');
    loadingIndicator.classList.add('hidden');
}

function appendMessage(text, sender) {
    const div = document.createElement('div');
    div.classList.add('message', `${sender}-message`);
    div.innerHTML = `<div class="message-content">${sender === 'ai' ? parseMarkdown(text) : text.replace(/\n/g, '<br>')}</div>`;
    chatLog.appendChild(div);

    requestAnimationFrame(() => {
        (sender === 'ai' && div.previousElementSibling ? div.previousElementSibling : div).scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

const parseMarkdown = (text) => text
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^\s*[\-\*]\s+(.*$)/gm, '<li>$1</li>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^\s*].*?)\*/g, '<em>$1</em>')
    .replace(/<\/h[23]>\n/g, '</h$1>')
    .replace(/<\/li>\n/g, '</li>')
    .replace(/\n/g, '<br>');
