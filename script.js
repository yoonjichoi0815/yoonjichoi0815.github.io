function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// 페이지가 로드되면 실행되는 함수
document.addEventListener('DOMContentLoaded', function () {
    console.log('포트폴리오 페이지가 로드되었습니다!');

    // 프로젝트 항목들에 호버 효과 추가
    const projectItems = document.querySelectorAll('.project-list li');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.backgroundColor = '#555';
            this.style.cursor = 'pointer';
        });

        item.addEventListener('mouseleave', function () {
            this.style.backgroundColor = 'transparent';
        });
    });
});

// 스크롤 위치를 저장할 변수
let scrollPosition = 0;

function openModal(id) {
    const modal = document.getElementById(id);
    // 현재 스크롤 위치 저장
    scrollPosition = window.pageYOffset;
    modal.style.display = 'flex';
    modal.classList.add('active');
    document.body.classList.add('modal-open');
    // body의 위치를 현재 스크롤 위치로 고정
    document.body.style.top = `-${scrollPosition}px`;
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'none';
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    // body의 위치 고정 해제
    document.body.style.top = '';
    // 저장된 스크롤 위치로 즉시 복원 (애니메이션 없이)
    window.scrollTo({
        top: scrollPosition,
        behavior: 'instant'
    });
}

// ESC 키 누르면 닫기
window.onkeydown = function (event) {
    if (event.key === "Escape") {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.style.display = 'none';
            modal.classList.remove('active');
        });
        document.body.classList.remove('modal-open');
        document.body.style.top = '';
        window.scrollTo({
            top: scrollPosition,
            behavior: 'instant'
        });
    }
}

// 모달 바깥 클릭 시 닫기
document.addEventListener('click', function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal.id);
        }
    });
});

async function loadAndOpenModal(url, modalId) {
    try {
        const response = await fetch(url);
        const html = await response.text();

        // HTML 문자열에서 body 내용만 추출
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const projectContent = doc.querySelector('.project-detail');

        if (projectContent) {
            document.getElementById(`${modalId}-content`).innerHTML = projectContent.innerHTML;
            openModal(modalId);
        }
    } catch (error) {
        console.error('Error loading modal content:', error);
    }
}

// document.addEventListener('DOMContentLoaded', function () {
//     const messages = [
//         "👋 Hello, welcome to Yoonji's portfolio!",
//         "My name is Yoonji Choi.",
//         "I'm an aspiring data scientist with a growing passion for data analysis and machine learning.",
//         "I also continuously expanding my knowledge in AI and software development through personal projects.",
//         "This portfolio highlights my background, skills, and experience through data-driven projects and work experience."
//     ];

// const container = document.getElementById('chat-container');
// const screen = document.querySelector('.screen');

// let msgIndex = 0;

// function typeMessage(msg, index = 0, bubble) {
//     if (index < msg.length) {
//         bubble.textContent += msg.charAt(index);
//         setTimeout(() => typeMessage(msg, index + 1, bubble), 30);
//     } else {
//         bubble.scrollIntoView({ behavior: 'smooth', block: 'end' });
//     }
// }

// function showNextMessage() {
//     if (msgIndex < messages.length) {
//         const bubble = document.createElement('div');
//         bubble.className = 'chat-bubble';
//         container.appendChild(bubble);
//         typeMessage(messages[msgIndex], 0, bubble);
//         msgIndex++;
//         setTimeout(showNextMessage, messages[msgIndex - 1].length * 30 + 1000);
//     }
// }

// showNextMessage();
// });


document.querySelectorAll('.folder').forEach(folder => {
    folder.addEventListener('click', () => {
        const targetId = folder.dataset.target;
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

