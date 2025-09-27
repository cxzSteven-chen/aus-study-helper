// 展开/收起模块
function toggleSection(id) {
    const content = document.getElementById(id);
    const h2 = event.currentTarget; // 直接用h2
    const arrow = h2.querySelector('.arrow');
    content.classList.toggle('hidden');
    if (arrow) arrow.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
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

// AI发送（加async修复await报错）
async function sendToAI() {
    const input = document.getElementById('chatInput').value;
    if (!input) return;
    const output = document.getElementById('chat-output');
    output.innerHTML += `<p><strong>你:</strong> ${input}</p><p><em>AI思考中...</em></p>`;
    output.scrollTop = output.scrollHeight;
    
    try {
        const response = await fetch('https://api.x.ai/v1/chat/completions', {
            method: 'POST',
            headers: { 
                'Authorization': 'Bearer xai-Gh6u7ahsozc7Pg0vlGqTd8iidVuKfUN8pBUIUibTu0BAmK9W7AGWvDxJ32jyw6kWir1CRYQbBeDMWgU6', 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'grok-beta',  // 修：换grok-beta
                messages: [
                    { role: 'system', content: '你是澳洲留学生AI导师，基于权威来源，给3步通用解法+个性化建议。限3种，共通权威。' },
                    { role: 'user', content: `澳洲留学生问题：${input}` }
                ],
                max_tokens: 300,
                temperature: 0
            })
        });
        const data = await response.json();
        if (data.choices && data.choices[0]) {
            const aiReply = data.choices[0].message.content;
            output.innerHTML = output.innerHTML.replace('<em>AI思考中...</em>', `<p><strong>AI (Grok):</strong> ${aiReply}</p>`);
        } else {
            output.innerHTML += `<p><strong>AI:</strong> 回应生成中... (检查key)</p>`;
        }
    } catch (error) {
        console.log('API Error Details:', error); // 加：Console详错
        output.innerHTML += `<p><strong>AI:</strong> 连接出错：${error.message} (重试key)</p>`;
    }
    document.getElementById('chatInput').value = '';
    output.scrollTop = output.scrollHeight;
}