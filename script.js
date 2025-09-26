// 展开/收起模块
function toggleSection(id) {
    const content = document.getElementById(id);
    const card = event.currentTarget; // 用currentTarget防冒泡
    const arrow = card.querySelector('.arrow');
    content.classList.toggle('hidden');
    if (arrow) arrow.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
}

// 搜索（后期连AI）
function handleSearch() {
    const query = document.getElementById('searchInput').value;
    alert('搜索: ' + query + ' - 匹配场景，Grok回应中...');
}

// AI聊天
function toggleAI() {
    document.getElementById('ai-chat').classList.toggle('hidden');
}

function sendToAI() {
    const input = document.getElementById('chatInput').value;
    if (!input) return;
    const output = document.getElementById('chat-output');
    output.innerHTML += `<p><strong>你:</strong> ${input}</p><p><em>思考中...</em></p>`;
    output.scrollTop = output.scrollHeight;
    // 占位，未来Grok API
    setTimeout(() => {
        output.innerHTML = output.innerHTML.replace('<em>思考中...</em>', `<p><strong>AI (Grok):</strong> 澳洲建议：${input}？1. CommBank用APP翻译；2. 带CoE；3. 英语差找中文支行。更多问我！</p>`);
        output.scrollTop = output.scrollHeight;
    }, 1000);
    document.getElementById('chatInput').value = '';
}

// 回车发送
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('chatInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') sendToAI();
    });
});