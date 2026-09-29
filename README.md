# 🌿 온장 (溫場, On-Jang)
> **전통시장·로컬 커머스 리디자인 & 인터랙티브 웹 프로토타입**  
> *"따뜻한 온기와 정(情)이 깃든 우리 동네 손안의 전통시장"*

[![Local Demo](https://img.shields.io/badge/Local%20Demo-http%3A%2F%2Flocalhost%3A3000-FF5A1F?style=for-the-badge&logo=googlechrome&logoColor=white)](http://localhost:3000)
[![Design System](https://img.shields.io/badge/Design%20System-Warm%20Modernism-1E5A3E?style=for-the-badge)](./style.css)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](#)

---

## 📌 목차 (Table of Contents)
1. [프로젝트 개요](#1-프로젝트-개요)
2. [핵심 기능 및 UX 차별점](#2-핵심-기능-및-ux-차별점)
3. [빠른 시작 및 로컬 실행 링크](#3-빠른-시작-및-로컬-실행-링크)
4. [사용자 페르소나 및 여정](#4-사용자-페르소나-및-여정)
5. [디자인 시스템 (UI Design System)](#5-디자인-시스템-ui-design-system)
6. [AI 프롬프트 종합 가이드 (AI Prompts)](#6-ai-프롬프트-종합-가이드-ai-prompts)
   - [Midjourney v6 UI/UX 목업 프롬프트](#61-midjourney-v6-uiux-목업-생성-프롬프트)
   - [초고화질 시장 및 식재료 비주얼 프롬프트](#62-초고화질-전통시장--식재료-비주얼-프롬프트)
   - [ChatGPT/Claude 상인 스토리텔링 카피라이팅](#63-chatgptclaude-상인-스토리텔링-카피라이팅-프롬프트)
   - [2030 타겟 푸시 알림 마케팅 프롬프트](#64-2030-타겟-푸시-알림-마케팅-프롬프트)
7. [프로젝트 파일 구조](#7-프로젝트-파일-구조)

---

## 1. 프로젝트 개요

기존 전통시장 앱이 겪던 **① 점포별 파편화된 배송비 부담, ② 신선도에 대한 불투명성, ③ 시니어 접근성 부재, ④ 전통시장 고유의 정(情)과 덤 문화 실종** 문제를 해결하기 위해 설계된 차세대 로컬 커머스 플랫폼입니다.

---

## 2. 핵심 기능 및 UX 차별점

| 기능 | 상세 설명 |
| :--- | :--- |
| 🚚 **통합 묶음배송 (One-Cart Unified Delivery)** | 반찬가게, 정육점, 청과물 등 시장 내 여러 점포 상품을 하나의 장바구니에 담아 배송비 1회(3만원 이상 시 0원)로 2시간 내 당일 통합 배송 |
| 🔴 **상인 LIVE & 숏폼 스토리** | 매일 아침 입고된 신선 식재료와 당일 조리 모습을 상인이 직접 숏폼 영상으로 소개하고 원클릭으로 장바구니에 추가 |
| 🎁 **디지털 '덤(Bonus)' 시스템** | 전통시장 고유의 덤 문화를 디지털로 구현하여, 일정 금액 이상 구매 시 상인이 선물하는 무료 맛보기 반찬을 소비자가 직접 선택 |
| 🗺️ **가상 골목 탐방 지도 (Virtual Alley Tour)** | 시장 오프라인 골목 구조를 인터랙티브 맵으로 구현하여 실제 시장을 거니는 듯한 탐색 경험 제공 |
| 👓 **시니어 큰글씨 모드 & 접근성** | 글자 크기 120% 확대, 고대비 인터페이스, 간결한 주문 경로로 고령층 및 디지털 취약계층 친화적 설계 |
| 💳 **모바일 온누리상품권 10% 자동할인** | 결제 시 10% 즉시 할인 적용 및 실시간 지갑 잔액 연동 |

---

## 3. 빠른 시작 및 로컬 실행 링크

### 🌐 로컬 데모 접속 주소
* **Web App URL**: [http://localhost:3000](http://localhost:3000)

### 💻 로컬 실행 방법
```bash
# 프로젝트 디렉터리 이동
cd onjang-market-app

# 정적 웹 서버 실행 (Node.js npx serve 기준)
npx -y serve -l 3000 .
```

---

## 4. 사용자 페르소나 및 여정

- **페르소나 1 (30대 워킹맘 '이지은')**: 퇴근길에 맞춰 여러 점포의 신선 식재료를 묶음배송으로 한 번에 수령하고 싶은 실속형 구매자
- **페르소나 2 (20대 1인 가구 '김민우')**: 소포장 밀키트와 반찬, 시장 특유의 가성비와 먹거리 탐방을 선호하는 자취생
- **페르소나 3 (60대 상인 '박영순')**: 디지털 기기 조작이 서투르지만 정겨운 손맛과 단골 관리에 능한 반찬가게 베테랑 상인

---

## 5. 디자인 시스템 (UI Design System)

### 컬러 팔레트 (Color Palette)
- **Primary (Market Warm Orange)**: `#FF5A1F` - 활기, 메인 CTA, 브랜드 시그니처
- **Secondary (Fresh Local Forest Green)**: `#1E5A3E` - 신선도, 당일입고 배지, 친환경
- **Accent (Bonus Gold)**: `#F59E0B` - 덤(Bonus) 쿠폰, 리뷰 별점, 스페셜 태그
- **Neutral Dark**: `#18181B` - 주요 텍스트, 헤드라인
- **Surface**: `#FFFFFF` / **Background**: `#F8F9FB`

### 타이포그래피 (Typography)
- **국문/숫자 본문**: `Pretendard`
- **브랜드/영문/숫자**: `Outfit`
- **감성 헤드라인/손편지**: `Song Myung` (명조 계열 포인트)

---

## 6. AI 프롬프트 종합 가이드 (AI Prompts)

### 6.1. Midjourney v6 UI/UX 목업 생성 프롬프트

#### [메인 홈 화면 & 마켓플레이스 UI]
```text
Clean and modern mobile app UI design for a Korean traditional local market grocery delivery app called "On-Jang", iOS 17 style, warm orange (#FF5A1F) and fresh forest green (#1E5A3E) accent colors, white minimalist card layout, displaying fresh Korean produce, homemade banchan, friendly merchant live stories at the top, bundled cart status bar, high-resolution Figma mockup, Dribbble trending, ultra-detailed, 8k --ar 9:16 --v 6.0
```

#### [묶음배송 장바구니 & 덤(Bonus) 인터랙션 모달]
```text
Mobile app UI checkout and bundled cart screen for traditional market e-commerce, showing multiple stalls consolidated into one order, interactive bonus gift "Deom" selection modal popup with warm illustrations, friendly Korean typography, soft rounded glassmorphism cards, pastel tones with vibrant orange CTA button, sleek and clean UX, Behance award-winning UI/UX --ar 9:16 --v 6.0
```

---

### 6.2. 초고화질 전통시장 & 식재료 비주얼 프롬프트

#### [생동감 넘치는 전통시장 골목 전경]
```text
A vibrant and heartwarming Korean traditional market alley in Seoul at golden hour, beautifully organized stalls with fresh colorful vegetables, artisanal side dishes in neat glass cases, warm hanging lantern lights, clean floor, lively atmosphere, cinematic lighting, photorealistic, shot on Sony A7R V, 35mm f/1.8 lens, 8k resolution --ar 16:9 --style raw
```

#### [수제 반찬 세트 플랫레이 컷]
```text
Top-down flatlay photo of fresh authentic Korean side dishes (banchan) in eco-friendly packaging, seasoned perilla leaves, stir-fried anchovies, kimchi, and seasoned namul herbs, placed on a warm wooden dining table with a linen cloth, soft natural morning sunlight, cozy homestyle aesthetic, editorial food photography --ar 4:3 --v 6.0
```

---

### 6.3. ChatGPT/Claude 상인 스토리텔링 카피라이팅 프롬프트

```text
[역할]: 당신은 망원시장에서 20년 동안 매일 아침 손수 반찬을 만드는 '영순이네 반찬'의 박영순 사장님입니다.
[목표]: 로컬 커머스 앱 '온장'에 등록할 반찬가게 소개글과 오늘의 대표 메뉴(달래된장찌개 밀키트, 계절 나물 3종)의 상세 홍보 문구를 작성해주세요.
[톤앤매너]:
1. 어머니의 따뜻한 정(情)과 깊은 손맛이 느껴지는 다정하고 신뢰감 있는 말투.
2. "새벽 가락시장에서 직접 떼온", "우리 가족이 먹는다는 마음으로" 같은 생생한 디테일 포함.
3. 구매 고객에게 무료로 증정하는 '오늘의 덤(콩자반)'에 대한 감사의 말 추가.
[출력 형식]:
- 가게 한 줄 소개
- 사장님의 인사말 (3~4문장)
- 오늘의 추천 반찬 3종 (메뉴명 / 특징 / 맛있게 먹는 꿀팁)
- 덤(Bonus) 선물 안내
```

---

### 6.4. 2030 타겟 푸시 알림 마케팅 프롬프트

```text
[목표]: 전통시장 로컬 커머스 앱 '온장'의 2030 직장인 및 1인 가구 대상 저녁 묶음배송 유도 푸시 알림 문구 5개를 작성해주세요.
[조건]:
- 글자 수: 제목(20자 이내), 내용(45자 이내)
- 이모지 적극 활용
- 혜택(당일 퇴근 전 도착, 배송비 0원 묶음배송, 1인용 소포장 맛집)을 명확히 전달할 것
- A/B 테스트가 가능하도록 감성형, 혜택형, 위트형, 긴급형(타임세일) 버전으로 다변화할 것.
```

---

## 7. 프로젝트 파일 구조

```
onjang-market-app/
├── index.html       # 메인 모바일 뷰포트 마크업 & 5대 탭 컴포넌트
├── style.css        # 온장 디자인 시스템 토큰, 반응형 & 시니어 모드 스타일
├── app.js           # 장바구니 묶음 계산, 오디오 효과음, 인터랙티브 맵, 스토리 플레이어
└── README.md        # 프로젝트 종합 가이드북, 링크 및 AI 프롬프트 가이드
```

---

## 📜 License
This project is open-sourced under the MIT License.
