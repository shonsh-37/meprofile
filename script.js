/* ==========================================================================
   Sarah Shon Portfolio - JavaScript Functionality
   GitHub Pages Ready
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
       1. Theme Toggle (Light / Dark)
       -------------------------------------------------------------------------- */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Load saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    /* --------------------------------------------------------------------------
       2. Sticky Navbar & Active Section Highlighting
       -------------------------------------------------------------------------- */
    const navbar = document.getElementById('navbar');
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        // Sticky Header
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active Link Highlighting
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    });

    /* --------------------------------------------------------------------------
       3. Mobile Navigation Toggle
       -------------------------------------------------------------------------- */
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('open');
        });

        // Close mobile nav when clicking a link
        navItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    /* --------------------------------------------------------------------------
       4. Portfolio Project Filtering (Pinterest Grid)
       -------------------------------------------------------------------------- */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category');
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    /* --------------------------------------------------------------------------
       5. Project Details Modal Data & Controller
       -------------------------------------------------------------------------- */
    const projectDetails = {
        p1: {
            title: "MediFlow Health Analytics Dashboard",
            category: "UI/UX Design • Web Application",
            overview: "MediFlow는 대규모 의료 연구소 및 의료진이 실시간으로 환자 바이탈 신호 및 임상 시험 데이터를 모니터링할 수 있도록 설계된 차세대 SaaS 대시보드입니다.",
            challenge: "기존 시스템은 방대한 양의 수치 데이터가 나열되어 의료진의 시각적 피로도가 높았고, 긴급 상황 발생 시 조치 속도가 지연되는 문제점이 있었습니다.",
            solution: "데이터 시각화 계층 구조를 재설계하여 중요 지표(KPI)를 상단에 배치하고, 위젯 기반의 커스텀 대시보드 레이아웃과 감각적인 알림 시스템을 도입했습니다.",
            impact: "사용자 인터뷰 결과, 과업 수행 시간 45% 감소 및 업무 만족도 98% 달성.",
            tech: ["Figma", "Design System", "User Research", "Data Visualization", "Vue.js"]
        },
        p2: {
            title: "Aura Scalable UI Component Library",
            category: "Design System",
            overview: "Aura는 프로덕트 팀 간의 디자이너와 개발자 협업 효율을 3배 이상 극대화하기 위해 제작된 멀티 플랫폼 디자인 시스템입니다.",
            challenge: "서로 다른 브랜드 서비스 간의 UI 일관성이 부족하고 UI 코드의 중복 작성으로 인해 유지보수 비용이 급증하는 상황이었습니다.",
            solution: "웹 접근성(WCAG 2.1 AA)을 준수하는 50여 개의 Core Component와 디자인 토큰(Color, Typography, Spacing, Elevation) 아키텍처를 전사적으로 구축했습니다.",
            impact: "신규 기능 프로토타이핑 속도 60% 향상 및 브랜딩 일관성 완벽 확보.",
            tech: ["Figma Design Tokens", "Storybook", "React", "TypeScript", "SCSS"]
        },
        p3: {
            title: "Zenith Modern Shopping Experience",
            category: "E-Commerce • Mobile First",
            overview: "Zenith는 모바일 사용자들의 이탈률을 줄이고 결제 전환율을 최대화하기 위해 기획된 라이프스타일 브랜드 이커머스 웹 애플리케이션입니다.",
            challenge: "모바일 결제 단계에서의 복잡한 폼 작성과 느린 상품 탐색 UX로 인해 카트 이탈률이 높았던 기존 플랫폼 개편.",
            solution: "한 손 조작이 용이한 Bottom Sheet Navigation, Swipe 기반 카트 시스템, Quick Checkout UI 및 부드러운 micro-interaction 추가.",
            impact: "모바일 결제 완료율 32% 상승 및 평균 세션 체류 시간 2.5분 증가.",
            tech: ["Mobile UI/UX", "Micro-Interactions", "HTML5/CSS3", "JavaScript", "PWA"]
        },
        p4: {
            title: "DataPulse Bio-Research Platform",
            category: "Research Portal",
            overview: "DataPulse는 다국적 연구진이 복잡한 바이오/유전자 알고리즘 데이터를 공동 분석하고 시각화할 수 있는 Web-based 연구 포털입니다.",
            challenge: "수십만 건의 노드 관계 데이터(Graph Data)를 웹 브라우저 상에서 매끄럽게 렌더링하고 유용한 인사이트를 도출해야 하는 기술적 challenge.",
            solution: "WebGL/D3.js 기반 인터랙티브 노드 맵 레이아웃 구축, 복잡한 필터링 조건을 직관적으로 조작할 수 있는 Side Panel 설계.",
            impact: "글로벌 연구 논문 발표 데이터 도구로 채택 및 연구 생산성 증대.",
            tech: ["UX Architecture", "Data Viz", "D3.js", "WebGL", "Scientific UI"]
        },
        p5: {
            title: "Echo Intelligent AI Assistant UI",
            category: "AI & Conversational UX",
            overview: "Echo는 사용자의 작업 맥락을 실시간으로 추론하여 최적의 제안을 제공하는 생성형 AI 어시스턴트의 인터랙션 디자인 프로젝트입니다.",
            challenge: "AI의 응답 지연 시간 동안 사용자가 지루함을 느끼지 않도록 돕고, 환각(Hallucination) 요소를 명확히 인지시킬 수 있는 UX 장치 필요.",
            solution: "스트리밍 텍스트 애니메이션, 신뢰도 스코어 인디케이터, 즉각적 피드백 버튼 및 인라인 컨텍스트 편집 UI 개발.",
            impact: "사용자 신뢰도 지수 85% 상향 평가 및 타사 AI 대비 높은 UX 호평.",
            tech: ["AI UX", "Conversational UI", "Prompt Interaction", "Prototyping"]
        }
    };

    const modalOverlay = document.getElementById('project-modal');
    const modalCloseBtn = document.getElementById('modal-close');
    const modalBody = document.getElementById('modal-body');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-id');
            const data = projectDetails[projectId];

            if (data) {
                modalBody.innerHTML = `
                    <div style="margin-bottom: 20px;">
                        <span style="font-size: 0.8rem; font-weight: 700; color: var(--accent-primary); text-transform: uppercase;">${data.category}</span>
                        <h2 style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 800; margin-top: 6px; line-height: 1.3;">${data.title}</h2>
                    </div>
                    
                    <div style="margin-bottom: 24px;">
                        <h4 style="font-weight: 700; margin-bottom: 6px; color: var(--text-main);">📌 Overview</h4>
                        <p style="color: var(--text-muted); font-size: 0.98rem;">${data.overview}</p>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                        <div style="background: var(--bg-tertiary); padding: 16px; border-radius: var(--radius-md);">
                            <h4 style="font-weight: 700; margin-bottom: 6px; color: var(--text-main);">⚠️ Challenge</h4>
                            <p style="color: var(--text-muted); font-size: 0.9rem;">${data.challenge}</p>
                        </div>
                        <div style="background: var(--bg-tertiary); padding: 16px; border-radius: var(--radius-md);">
                            <h4 style="font-weight: 700; margin-bottom: 6px; color: var(--accent-primary);">💡 Solution</h4>
                            <p style="color: var(--text-muted); font-size: 0.9rem;">${data.solution}</p>
                        </div>
                    </div>

                    <div style="margin-bottom: 24px; padding: 16px; border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                        <h4 style="font-weight: 700; margin-bottom: 6px; color: #10b981;">📈 Business Impact</h4>
                        <p style="color: var(--text-main); font-weight: 600; font-size: 0.95rem;">${data.impact}</p>
                    </div>

                    <div>
                        <h4 style="font-weight: 700; margin-bottom: 10px;">Tech & Skills Used</h4>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                            ${data.tech.map(t => `<span style="font-size: 0.8rem; font-weight: 600; background: var(--accent-gradient); color: #fff; padding: 4px 12px; border-radius: var(--radius-full);">${t}</span>`).join('')}
                        </div>
                    </div>
                `;

                modalOverlay.classList.add('active');
                modalOverlay.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        modalOverlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    /* --------------------------------------------------------------------------
       6. Contact Form Simulation & Toast Notification
       -------------------------------------------------------------------------- */
    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('toast');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show toast notification
            toast.classList.add('show');
            contactForm.reset();

            setTimeout(() => {
                toast.classList.remove('show');
            }, 4000);
        });
    }

    // Dynamic Year in Footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
