const signUpBtn = document.getElementById("signUp");
const signInBtn = document.getElementById("signIn");
const container = document.querySelector(".container");
const signupForm = document.getElementById('signupForm');

// 회원가입 버튼 클릭 이벤트
signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

// 로그인 버튼 클릭 이벤트
signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

// 회원가입 양식 제출 이벤트 처리
signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 방지

    const password = document.querySelector('input[type="password"]').value;
    const email = document.querySelector('input[type="email"]').value;

    // 비밀번호 유효성 검사: 최소 8자 이상, 대문자, 소문자, 숫자를 포함해야 함
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("비밀번호는 최소 8자 이상이며, 대문자, 소문자 및 숫자를 포함해야 합니다.");
        return;
    }

    // 이메일 유효성 검사
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("유효한 이메일 주소를 입력하세요.");
        return;
    }

    // 모든 검사를 통과한 경우
    alert("회원가입이 완료되었습니다.");
    // 여기에 회원가입 로직을 추가할 수 있습니다.
});
