# 디자인 시스템 상세 규격 (Design System Specifications)

## 1. 컬러 팔레트 (Color Palette Tokens)

```css
:root {
  /* Primary & Accents */
  --market-primary: #FF5A1F;          /* 따뜻한 시장 오렌지 (Brand Primary, CTA) */
  --market-primary-hover: #E04812;
  --market-primary-light: #FFF0EB;    /* 연한 오렌지 배경 */
  --market-primary-soft: rgba(255, 90, 31, 0.12);

  --market-secondary: #1E5A3E;        /* 싱그러운 로컬 그린 (신선식품, 친환경) */
  --market-secondary-light: #E8F5EE;
  
  --market-bonus-gold: #F59E0B;       /* 덤(Bonus) & 혜택 골드 */
  --market-bonus-gold-light: #FEF3C7;

  /* Functional Status */
  --status-coral: #EF4444;            /* 라이브, 할인율 */
  --status-emerald: #10B981;          /* 배송 완료, 안심 포장 */
  
  /* Surfaces & Neutrals */
  --bg-app: #F8F9FB;                  /* 앱 기본 배경 */
  --surface: #FFFFFF;                 /* 카드, 모달 표면 */
  --surface-alt: #F3F4F6;             /* 인풋, 비활성 탭 배경 */
  --border: #E5E7EB;                  /* 테두리선 */
  
  --text-main: #18181B;               /* 헤드라인, 굵은 텍스트 */
  --text-body: #4B5563;               /* 본문 텍스트 */
  --text-muted: #9CA3AF;              /* 캡션, 비활성 */
}
```

---

## 2. 시니어 큰글씨 모드 (Senior Mode) 스타일 정의

고령층 상인 및 고객의 가독성을 위한 자동 전환 스타일 규칙:

```css
body.senior-mode {
  font-size: 115% !important;
}

body.senior-mode .header-location,
body.senior-mode .hero-title,
body.senior-mode h3,
body.senior-mode .product-title,
body.senior-mode .total-price {
  font-size: 1.25em !important;
  font-weight: 800 !important;
}

body.senior-mode button,
body.senior-mode .cat-pill {
  min-height: 52px !important;
  font-size: 1rem !important;
  font-weight: 700 !important;
}
```

---

## 3. 핵심 컴포넌트 규격 (Component Specs)

### 3.1. 메인 CTA 버튼
- Height: `54px`
- Border Radius: `14px`
- Background: `var(--market-primary)` (`#FF5A1F`)
- Typography: `16px SemiBold / Bold`
- Interaction: `:active { transform: scale(0.98); }`

### 3.2. 상인 라이브 스토리 링 (Live Story Ring)
- Outer Ring: `68px x 68px`, Gradient(`linear-gradient(45deg, #FF5A1F, #F59E0B, #EC4899)`)
- Inner Thumbnail: `border-radius: 50%`, `border: 2px solid #FFF`
- Live Badge: `position: absolute; bottom: 0; background: #EF4444; font-size: 0.55rem; font-weight: 800;`

### 3.3. 무료 묶음배송 게이지 (Unified Cart Progress)
- Height: `8px`, `border-radius: 4px`
- Fill Gradient: `linear-gradient(90deg, #FF5A1F, #10B981)`
- Smooth Transition: `transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);`
