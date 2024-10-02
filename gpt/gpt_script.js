document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript 로드 완료!");

    var sendButton = document.getElementById('sendButton');
    sendButton.addEventListener('click', sendMessage);

    function sendMessage() {
        console.log("sendMessage 함수 호출됨");

        var input = document.getElementById('userInput').value;
        var chatWindow = document.getElementById('chatWindow');
        var history = document.getElementById('history');

        if (input.trim() !== "") {
            // 사용자의 질문을 추가
            var userMessage = "<div class='user-msg'>사용자: " + input + "</div>";
            chatWindow.innerHTML += userMessage;
            history.innerHTML += userMessage;

            // GPT의 답변을 추가 (샘플 답변)
            var gptMessage = "<div class='gpt-msg'>GPT: " + input + "에 대한 답변입니다.</div>";
            chatWindow.innerHTML += gptMessage;
            history.innerHTML += gptMessage;

            // 입력창 초기화
            document.getElementById('userInput').value = "";

            // 스크롤 자동으로 내리기
            chatWindow.scrollTop = chatWindow.scrollHeight;
        } else {
            console.log("빈 입력값: 메시지를 입력하세요.");
        }
    }
});
