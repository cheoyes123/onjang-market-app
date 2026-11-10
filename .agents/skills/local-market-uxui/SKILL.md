---
name: local-market-uxui
description: >-
  Design and build UX/UI for traditional market and local commerce apps (On-Jang style).
  Use when designing, redesigning, or building local marketplace apps, neighborhood grocery delivery platforms,
  or traditional market digital commerce services. Enforces core UX patterns (one-cart unified bundle delivery,
  digital deom/bonus gifts, virtual alley tours, merchant live short-form stories, senior accessibility mode),
  the warm-organic design system tokens, and provides ready-to-use AI prompts for UI mockups and copywriting.
---

# 🌿 Local Market UX/UI Design Skill (온장, On-Jang)

이 스킬은 전통시장 및 로컬 커머스 플랫폼을 기획, 리디자인, 구축할 때 필요한 **UX 방법론, 모던 디자인 시스템, 핵심 인터랙션 패턴, AI 프롬프트 가이드**를 제공합니다.

---

## 1. 핵심 설계 원칙 (Core UX Principles)

전통시장 로컬 커머스는 일반 공산품 이커머스와 달리 **오프라인 시장의 '정(情)', '신선함', '상인과의 교감'**을 디지털로 이식해야 합니다.

1. **통합 묶음배송 (One-Cart Unified Delivery)**
   - 시장 내 반찬가게, 정육점, 청과물 등 여러 점포의 상품을 장바구니 1개에 담고 배송비를 단 1회(목표 금액 달성 시 0원) 부과.
   - 장바구니 내 상점별 그룹화 UI와 무료배송 게이지를 실시간 노출.

2. **온기 있는 투명성 (Warm Transparency & Live Stories)**
   - 당일 새벽 경매/입고 신선도 지수(Fresh Score) 및 당일 조리 인증 배지.
   - 인스타그램 스타일의 상인 LIVE 숏폼 스토리로 당일 입고 식재료를 생생하게 소개.

3. **정(情)과 디지털 '덤(Bonus)' 시스템**
   - 전통시장 특유의 덤 문화를 결제 단계의 능동적 선택형 혜택으로 전환.
   - 일정 금액(예: 2만원) 이상 주문 시 상인이 제공하는 무료 맛보기 반찬 또는 응원 손편지 선택 인터랙션.

4. **유니버설 시니어 접근성 (Senior Accessibility Mode)**
   - 60대 이상 상인 및 장년층 고객을 위한 원클릭 '큰글씨 모드'(폰트 120% 확대, 대비율 4.5:1 이상, 터치 타겟 48px 이상).

5. **실시간 3단계 배송 트래킹 (Alley-to-Door Tracker)**
   - `[1단계] 점포 순회 픽업` ➔ `[2단계] 통합 검수 및 친환경 보랭 포장` ➔ `[3단계] 당일 라이더 배송`.

---

## 2. 디자인 시스템 요약 (Design System Summary)

### 컬러 팔레트 (Color Palette)
- **Primary (Market Warm Orange)**: `#FF5A1F` (메인 CTA, 활기, 장바구니 강조)
- **Secondary (Fresh Local Green)**: `#1E5A3E` (신선식품, 친환경 배지, 당일 입고)
- **Accent (Bonus Gold)**: `#F59E0B` (덤 쿠폰, 리뷰 별점, 스페셜 태그)
- **Neutral Dark**: `#18181B` (헤드라인, 본문 메인)
- **Surface**: `#FFFFFF` / **Background**: `#F8F9FB`
- **Primary Soft / Light**: `#FFF0EB` (선택된 탭, 태그 배경)

### 타이포그래피 (Typography)
- **국문/숫자 본문**: `Pretendard` (숫자 정렬 및 가독성 최적화)
- **브랜드/숫자**: `Outfit`
- **감성 헤드라인/상인 메모**: `Song Myung` (전통 명조 계열 포인트)

### 컴포넌트 규격
- **CTA 버튼**: Height 54px, `border-radius: 14px`, Font 16px Bold, 탭 시 `scale(0.98)` 마이크로 인터랙션.
- **상품 카드**: `border-radius: 16px`, `box-shadow: 0 4px 16px rgba(0,0,0,0.04)`.
- **배송 프로그레스 바**: Gradient 90deg (`#FF5A1F` ➔ `#10B981`).

---

## 3. 핵심 화면 흐름 (Core Screen Flows)

```
[홈 (Home)]
  ├── 상인 LIVE 숏폼 피드 (동그란 스토리 링)
  ├── 당일 묶음배송 골든타임 타이머 (마감 카운트다운)
  └── 마감 임박 신선 특가 & 인기 점포 리스트
        ↓
[골목 장보기 (Market)]
  ├── 리스트 뷰 ↔ 가상 골목 탐방 지도(Interactive Map) 토글
  └── 점포별 대표 상품 장바구니 담기
        ↓
[묶음 장바구니 (Unified Cart)]
  ├── 점포별 그룹화 및 무료배송 프로그레스 게이지
  ├── 상인의 정(情) '덤(Bonus)' 선택 라디오 박스
  └── 모바일 온누리상품권 10% 자동할인 & 시간 슬롯 선택
        ↓
[주문 완료 & 마이페이지 (Tracking)]
  └── 실시간 3단계 배송 트래커 (점포 순회 픽업 → 검수 포장 → 라이더 배송)
```

---

## 4. 상세 레퍼런스 문서 (References)

더 자세한 정보와 코드는 다음 문서를 확인하세요:
- [디자인 시스템 상세 규격](./references/design-system.md): 상세 색상 코드, 컴포넌트 CSS, 시니어 모드 스타일
- [페르소나 및 사용자 시나리오](./references/personas-and-scenarios.md): 30대 워킹맘, 20대 자취생, 60대 상인 페르소나 및 여정 맵
- [UX 와이어프레임](./references/ux-wireframes.md): 텍스트 와이어프레임 및 정보 구조도(IA)
- [AI 프롬프트 가이드](./references/ai-prompts.md): Midjourney v6 UI/사진 프롬프트 및 ChatGPT 마케팅 카피라이팅 프롬프트
- [샘플 컴포넌트 코드](./examples/sample-components.html): 묶음배송 바, 덤 선택기, 배송 트래커 HTML/CSS 스니펫
