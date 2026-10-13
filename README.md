# 🎨 Sarah Shon (손세희) - Personal Portfolio & Creative Resume

Pinterest 감성의 모던 포트폴리오 & 이력서 웹사이트입니다. GitHub Pages 무료 호스팅에 맞춰 순수 HTML5, CSS3, ES6+ JavaScript로 제작되었습니다.

---

## ✨ 주요 특징 (Key Features)

1. **Pinterest / Dribbble 감성의 인터랙티브 디자인**
   - 핀터레스트 스타일의 카드 그리드 레이아웃
   - 반응형 Masonry 스타일 프로젝트 뷰 & 모달 상세 보기 (Case Study)
   - 부드러운 스크롤 애니메이션 및 글래스모피즘(Glassmorphism) 시각 효과

2. **다크 모드 / 라이트 모드 지원 (Light & Dark Theme Toggle)**
   - 헤더 아이콘 버튼 클릭 시 테마 즉시 전환
   - LocalStorage 연동으로 사용자 선호 테마 자동 저장

3. **Curriculum Vitae (경력 및 이력 타임라인)**
   - Sarah Shon의 핀터레스트/LinkedIn 기반 역량 및 경력 타임라인 구축
   - UI/UX 디자인, 연구 시각화, 디자인 시스템, 프론트엔드 개발 경험 정리

4. **프로젝트 필터링 & 상세 모달 (Interactive Projects Filter)**
   - 카테고리별 (All, UI/UX, Web App, Design System) 탭 필터링
   - 프로젝트 클릭 시 팝업 모달로 비즈니스 임팩트, 데이터 지표, 사용 기술 스택 확인

5. **완벽한 반응형 지원 (Fully Responsive Design)**
   - 데스크톱, 태블릿, 모바일 기기 완벽 대응 (모바일 드로어 메뉴 지원)

---

## 🚀 GitHub Pages 호스팅 방법 (How to Deploy to GitHub Pages)

이 웹사이트는 외부 번들러나 빌드 도구 없이 GitHub Pages에 1초 만에 배포가 가능합니다.

### 방법 1: GitHub 레포지토리 생성 후 배포 (추천)

1. **GitHub 로그인 및 레포지토리 생성**
   - GitHub(`https://github.com`)에 접속하여 로그인합니다.
   - 우측 상단 `+` 버튼 -> **New repository** 생성.
   - Repository name: `sarahshon.github.io` (또는 원하시는 이름)
   - Public 선택 후 **Create repository** 클릭.

2. **파일 업로드 및 Git 푸시**
   현재 폴더(`c:\Users\Edu_AI_08\Desktop\서버실습`)에서 터미널을 열고 아래 명령어를 순서대로 실행합니다:

   ```bash
   git init
   git add .
   git commit -m "Initial commit for Sarah Shon portfolio"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
   git push -u origin main
   ```

3. **GitHub Pages 설정 활성화**
   - 생성한 레포지토리의 **Settings** 탭으로 이동합니다.
   - 좌측 메뉴에서 **Pages** 클릭.
   - **Build and deployment** 섹션의 **Branch**를 `main` (또는 `/root`)으로 선택하고 **Save** 클릭.
   - 1~2분 후 `https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>/` 주소로 웹사이트가 자동 라이브 배포됩니다!

---

## 📁 프로젝트 파일 구조

```
서버실습/
├── index.html        # 메인 시맨틱 HTML5 구조
├── styles.css        # 모던 디자인 시스템, 애니메이션, 테마 CSS
├── script.js        # 다크모드, 필터링, 모달, 인터랙션 JS
└── README.md         # 프로젝트 안내 및 배포 가이드 문서
```

---

© 2026 Sarah Shon (손세희). Built with passion & precision.
