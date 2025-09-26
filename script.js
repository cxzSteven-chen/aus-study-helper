// 展开/收起模块
function toggleSection(id) {
    const content = document.getElementById(id);
    const arrow = event.target.querySelector('.arrow') || event.target;
    content.classList.toggle('hidden');
    arrow.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
}

// 搜索（后期连AI）
function handleSearch() {
    const query = document.getElementById('searchInput').value;
    alert('搜索: ' + query + ' - 匹配场景，Grok回应中...'); // 占位
    // 未来：fetch Grok API
}

// AI聊天（占位，未来真API）
function toggleAI() {
    document.getElementById('ai-chat').classList.toggle('hidden');
}

function sendToAI() {
    const input = document.getElementById('chatInput').value;
    const output = document.getElementById('chat-output');
    output.innerHTML += `<p><strong>你:</strong> ${input}</p>`;
    output.innerHTML += `<p><strong>AI (Grok):</strong> 基于你的问题：${input}。例如，办卡英语差？用Google Translate + 带朋友。个性化建议：告诉我国家！</p>`;
    output.scrollTop = output.scrollHeight;
    document.getElementById('chatInput').value = '';
}

// 回车发送AI
document.getElementById('chatInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendToAI();
});