/**
 * 온장 (溫場, On-Jang) Interactive App Logic
 */

// --- 1. 가상 데이터베이스 (Mock Database) ---
const STORES_DATA = [
  { id: 's1', name: '영순이네 반찬', category: 'side', emoji: '🍱', desc: '20년 전통 새벽 수제 반찬 & 밀키트', tag: '덤 증정중', freshScore: 99 },
  { id: 's2', name: '망원청과', category: 'fresh', emoji: '🍎', desc: '가락시장 매일 새벽 경매 직송 과일/야채', tag: '당일직송', freshScore: 100 },
  { id: 's3', name: '마포축산', category: 'meat', emoji: '🥩', desc: '1++ 한우 & 무항생제 암퇘지 소포장', tag: '소포장 전문', freshScore: 98 },
  { id: 's4', name: '원조 망원빈대떡', category: 'snack', emoji: '🥞', desc: '주문 즉시 부치는 바삭한 녹두빈대떡', tag: '따끈조리', freshScore: 97 },
  { id: 's5', name: '바다수산', category: 'meat', emoji: '🐟', desc: '노량진 새벽 경매 싱싱 생물 생선', tag: '손질무료', freshScore: 99 }
];

const STORIES_DATA = [
  { id: 'st1', store: '영순이네 반찬', emoji: '🥘', heroEmoji: '🍲', quote: '새벽 가락시장에서 봄 달래를 실하게 떼왔어요! 오늘 끓인 달래된장찌개 10통 한정으로 끓였습니다. 멸치볶음 덤도 챙겨드려요~', prodId: 'p1', prodName: '수제 달래된장찌개 밀키트', prodPrice: 7000 },
  { id: 'st2', store: '망원청과', emoji: '🍓', heroEmoji: '🍓', quote: '논산에서 방금 올라온 설향 딸기 당도 14브릭스 보장합니다! 2팩 사시면 싱싱 바나나 한 송이 덤 갑니다.', prodId: 'p2', prodName: '논산 설향 딸기 1팩 (500g)', prodPrice: 8900 },
  { id: 'st3', store: '마포축산', emoji: '🥩', heroEmoji: '🥩', quote: '오늘 잡은 1++ 한우 국거리 마블링 예술입니다. 1인분(200g)씩 깔끔하게 진공포장해 두었어요!', prodId: 'p3', prodName: '1++ 한우 국거리 (200g 소포장)', prodPrice: 11000 },
  { id: 'st4', store: '망원빈대떡', emoji: '🥞', heroEmoji: '🥞', quote: '비 오는 날엔 고소한 녹두빈대떡이죠! 100% 맷돌로 직접 갈아 노릇노릇 부치고 있습니다.', prodId: 'p4', prodName: '맷돌 녹두빈대떡 (2장 세트)', prodPrice: 9000 }
];

const DEALS_DATA = [
  { id: 'd1', store: '망원청과', name: '달콤한 성주 꿀참외 (5개)', price: 8900, originalPrice: 13500, discount: '34%', emoji: '🍈', badge: '마감 2시간전' },
  { id: 'd2', store: '영순이네 반찬', name: '봄나물 3종 세트 (취/달래/냉이)', price: 6500, originalPrice: 9500, discount: '31%', emoji: '🥗', badge: '당일 조리' },
  { id: 'd3', store: '마포축산', name: '국내산 암퇘지 삼겹살 (400g)', price: 9900, originalPrice: 14000, discount: '29%', emoji: '🥓', badge: '산지직송' },
  { id: 'd4', store: '바다수산', name: '통영 활 바지락 1kg (해감완료)', price: 5800, originalPrice: 8500, discount: '32%', emoji: '🐚', badge: '신선특가' }
];

const PRODUCTS_DATA = [
  { id: 'p1', store: '영순이네 반찬', name: '수제 달래된장찌개 밀키트', price: 7000, emoji: '🍲', origin: '국내산 달래', bonusTag: '덤 증정' },
  { id: 'p2', store: '망원청과', name: '논산 설향 딸기 1팩 (500g)', price: 8900, emoji: '🍓', origin: '충남 논산', bonusTag: '당일 수확' },
  { id: 'p3', store: '마포축산', name: '1++ 한우 국거리 (200g 소포장)', price: 11000, emoji: '🥩', origin: '횡성 한우', bonusTag: '1인 맞춤' },
  { id: 'p4', store: '원조 망원빈대떡', name: '맷돌 녹두빈대떡 (2장 세트)', price: 9000, emoji: '🥞', origin: '국내산 녹두', bonusTag: '주문 즉시 조리' },
  { id: 'p5', store: '영순이네 반찬', name: '아삭 열무김치 500g', price: 6000, emoji: '🥬', origin: '국내산 열무', bonusTag: '덤 증정' },
  { id: 'p6', store: '망원청과', name: '친환경 무농약 시금치 1단', price: 2500, emoji: '🌱', origin: '남해 시금치', bonusTag: '새벽 경매' },
  { id: 'p7', store: '마포축산', name: '수제 양념 돼지갈비 (500g)', price: 12500, emoji: '🍖', origin: '국내산 한돈', bonusTag: '단골 베스트' },
  { id: 'p8', store: '바다수산', name: '제주 은갈치 1마리 (토막 손질)', price: 8500, emoji: '🐟', origin: '제주 성산포', bonusTag: '손질 완료' }
];

const COMMUNITY_POSTS = [
  {
    id: 'f1',
    author: '영순이네 반찬 박영순 사장님',
    time: '25분 전',
    avatar: '👵',
    text: '오늘 아침 가락시장에서 달래랑 냉이가 너무 싱싱해서 넉넉히 가져왔어요. 오늘 주문해주시는 분들께는 고소하게 볶은 멸치볶음 한 팩씩 맛보시라고 덤 얹어드립니다! 항상 고맙습니다. ❤️',
    prodAttached: { name: '수제 달래된장찌개 밀키트', price: '7,000원', emoji: '🍲', id: 'p1' }
  },
  {
    id: 'f2',
    author: '망원동 이웃 지은맘',
    time: '2시간 전',
    avatar: '👩',
    text: '퇴근할 때 맞춰서 망원청과 딸기랑 마포축산 소고기 묶음배송 시켰는데, 6시 반에 딱 도착했네요! 다회용 보랭백도 넘 깔끔하고 온누리 할인까지 받으니 마트보다 훨씬 싸요 👍',
    prodAttached: { name: '논산 설향 딸기 1팩', price: '8,900원', emoji: '🍓', id: 'p2' }
  }
];

// --- 2. 앱 전역 상태 (Global State) ---
const state = {
  cart: [], // { id, name, price, store, emoji, count }
  activeTab: 'tab-home',
  soundEnabled: true,
  seniorMode: false,
  fullViewMode: false,
  selectedBonus: '고소한 멸치볶음 50g',
  selectedDeliveryTime: '오늘 18:30 ~ 19:30 (퇴근길 도착)'
};

// --- 3. 오디오 효과음 유틸 (Web Audio API) ---
class SoundManager {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.ctx = new AudioContext();
    }
  }
  playPop() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }
  playSuccess() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0.2, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.35);
    });
  }
}
const sound = new SoundManager();

// --- 4. DOM 요소 참조 ---
const elements = {
  // Navigation
  tabButtons: document.querySelectorAll('.nav-tab-btn'),
  tabPanes: document.querySelectorAll('.tab-pane'),
  headerCartBtn: document.getElementById('headerCartBtn'),
  cartCountBadge: document.getElementById('cartCountBadge'),
  navCartBadge: document.getElementById('navCartBadge'),
  
  // Floating Cart
  floatingCartBar: document.getElementById('floatingCartBar'),
  floatCartCount: document.getElementById('floatCartCount'),
  floatStoreCount: document.getElementById('floatStoreCount'),
  floatCartPrice: document.getElementById('floatCartPrice'),
  btnGoCartFromFloat: document.getElementById('btnGoCartFromFloat'),
  
  // Tab 1 (Home)
  storyList: document.getElementById('storyList'),
  dealsContainer: document.getElementById('dealsContainer'),
  storeListContainer: document.getElementById('storeListContainer'),
  claimOnnuriBtn: document.getElementById('claimOnnuriBtn'),
  catPills: document.querySelectorAll('.cat-pill'),
  
  // Tab 2 (Market)
  btnModeList: document.getElementById('btnModeList'),
  btnModeMap: document.getElementById('btnModeMap'),
  alleyMapView: document.getElementById('alleyMapView'),
  marketProductGrid: document.getElementById('marketProductGrid'),
  mapShopNodes: document.querySelectorAll('.map-shop-node'),
  
  // Tab 3 (Community)
  communityFeed: document.getElementById('communityFeed'),
  
  // Tab 4 (Cart)
  cartItemsContainer: document.getElementById('cartItemsContainer'),
  cartStoreCountText: document.getElementById('cartStoreCountText'),
  progressFill: document.getElementById('progressFill'),
  progressText: document.getElementById('progressText'),
  progressRemaining: document.getElementById('progressRemaining'),
  sumItemsPrice: document.getElementById('sumItemsPrice'),
  sumDeliveryFee: document.getElementById('sumDeliveryFee'),
  sumOnnuriDiscount: document.getElementById('sumOnnuriDiscount'),
  sumFinalPrice: document.getElementById('sumFinalPrice'),
  btnCheckout: document.getElementById('btnCheckout'),
  checkoutBtnText: document.getElementById('checkoutBtnText'),
  bonusChoiceInputs: document.querySelectorAll('input[name="bonusItem"]'),
  timeSlotButtons: document.querySelectorAll('.time-slot'),
  
  // Tab 5 (My Page)
  activeOrderTracker: document.getElementById('activeOrderTracker'),
  trackerMainMsg: document.getElementById('trackerMainMsg'),
  
  // Controls & Modals
  seniorModeToggle: document.getElementById('seniorModeToggle'),
  viewModeToggle: document.getElementById('viewModeToggle'),
  soundToggle: document.getElementById('soundToggle'),
  phoneFrame: document.getElementById('phoneFrame'),
  toastContainer: document.getElementById('toastContainer'),
  
  // Story Modal
  storyModalOverlay: document.getElementById('storyModalOverlay'),
  closeStoryModal: document.getElementById('closeStoryModal'),
  storyModalStore: document.getElementById('storyModalStore'),
  storyModalEmoji: document.getElementById('storyModalEmoji'),
  storyModalAvatar: document.getElementById('storyModalAvatar'),
  storyModalQuote: document.getElementById('storyModalQuote'),
  storyProdName: document.getElementById('storyProdName'),
  storyProdPrice: document.getElementById('storyProdPrice'),
  storyAddCartBtn: document.getElementById('storyAddCartBtn'),
  
  // Success Modal
  orderSuccessModal: document.getElementById('orderSuccessModal'),
  btnTrackOrder: document.getElementById('btnTrackOrder'),
  orderSuccessStoreCount: document.getElementById('orderSuccessStoreCount'),
  successBonusName: document.getElementById('successBonusName'),
  successTotalPaid: document.getElementById('successTotalPaid'),
  
  // Clock
  statusClock: document.getElementById('statusClock'),
  bundleTimer: document.getElementById('bundleTimer')
};

// --- 5. 렌더링 함수들 ---

// (1) 상인 스토리 렌더링
function renderStories() {
  if (!elements.storyList) return;
  elements.storyList.innerHTML = STORIES_DATA.map(st => `
    <div class="story-item-card" data-story-id="${st.id}">
      <div class="story-ring-wrapper">
        <div class="story-inner-thumb">
          ${st.emoji}
          <span class="story-live-chip">LIVE</span>
        </div>
      </div>
      <span class="story-store-name">${st.store}</span>
    </div>
  `).join('');

  elements.storyList.querySelectorAll('.story-item-card').forEach(card => {
    card.addEventListener('click', () => {
      const storyId = card.dataset.storyId;
      openStoryModal(storyId);
    });
  });
}

// (2) 마감 임박 특가 렌더링
function renderDeals() {
  if (!elements.dealsContainer) return;
  elements.dealsContainer.innerHTML = DEALS_DATA.map(deal => `
    <div class="deal-card">
      <div class="deal-img-box">
        <span class="deal-badge-live">${deal.badge}</span>
        ${deal.emoji}
      </div>
      <span class="deal-store">${deal.store}</span>
      <h4 class="deal-title">${deal.name}</h4>
      <div class="deal-price-row">
        <span class="discount-rate">${deal.discount}</span>
        <span class="current-price">${deal.price.toLocaleString()}원</span>
        <span class="origin-price">${deal.originalPrice.toLocaleString()}원</span>
      </div>
      <button class="deal-add-btn" data-deal-id="${deal.id}">
        <i data-lucide="plus" style="width:14px;height:14px;"></i> 담기
      </button>
    </div>
  `).join('');

  elements.dealsContainer.querySelectorAll('.deal-add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const dealId = btn.dataset.dealId;
      const deal = DEALS_DATA.find(d => d.id === dealId);
      if (deal) {
        addToCart({
          id: deal.id,
          name: deal.name,
          price: deal.price,
          store: deal.store,
          emoji: deal.emoji
        });
      }
    });
  });
}

// (3) 인기 상점 리스트 렌더링
function renderStores() {
  if (!elements.storeListContainer) return;
  elements.storeListContainer.innerHTML = STORES_DATA.map(st => `
    <div class="store-card" data-store-name="${st.name}">
      <div class="store-thumb">${st.emoji}</div>
      <div class="store-info">
        <div class="store-badge-row">
          <span class="tag-fresh">신선도 ${st.freshScore}%</span>
          <span class="tag-bonus">${st.tag}</span>
        </div>
        <h4 class="store-name">${st.name}</h4>
        <p class="store-desc">${st.desc}</p>
      </div>
      <i data-lucide="chevron-right" style="color:#94A3B8;width:18px;height:18px;"></i>
    </div>
  `).join('');

  elements.storeListContainer.querySelectorAll('.store-card').forEach(card => {
    card.addEventListener('click', () => {
      switchTab('tab-market');
      showToast(`'${card.dataset.storeName}' 점포 상품 목록으로 이동했습니다.`);
    });
  });
}

// (4) 골목 장보기 상품 그리드 렌더링
function renderMarketProducts(filterStore = null) {
  if (!elements.marketProductGrid) return;
  let list = PRODUCTS_DATA;
  if (filterStore) {
    list = list.filter(p => p.store === filterStore);
  }
  elements.marketProductGrid.innerHTML = list.map(prod => `
    <div class="product-item-card">
      <div class="prod-img-box">
        <span class="prod-tag-origin">${prod.origin}</span>
        <span class="prod-tag-bonus">${prod.bonusTag}</span>
        ${prod.emoji}
      </div>
      <span class="prod-store-name">${prod.store}</span>
      <h4 class="prod-item-name">${prod.name}</h4>
      <div class="prod-price-area">
        <span class="prod-price-val">${prod.price.toLocaleString()}원</span>
        <button class="prod-add-cart-btn" data-prod-id="${prod.id}" title="장바구니 담기">
          <i data-lucide="plus" style="width:16px;height:16px;"></i>
        </button>
      </div>
    </div>
  `).join('');

  elements.marketProductGrid.querySelectorAll('.prod-add-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const prod = PRODUCTS_DATA.find(p => p.id === btn.dataset.prodId);
      if (prod) addToCart(prod);
    });
  });
  lucide.createIcons();
}

// (5) 동네소식 피드 렌더링
function renderCommunityFeed() {
  if (!elements.communityFeed) return;
  elements.communityFeed.innerHTML = COMMUNITY_POSTS.map(post => `
    <div class="feed-card">
      <div class="feed-author-row">
        <div class="author-avatar">${post.avatar}</div>
        <div>
          <h4 class="author-name">${post.author}</h4>
          <span class="feed-time">${post.time}</span>
        </div>
      </div>
      <p class="feed-text">${post.text}</p>
      ${post.prodAttached ? `
        <div class="feed-attached-product">
          <div class="f-prod-info">
            <span>${post.prodAttached.emoji}</span>
            <span>${post.prodAttached.name} (${post.prodAttached.price})</span>
          </div>
          <button class="f-quick-buy-btn" data-prod-id="${post.prodAttached.id}">장바구니 담기</button>
        </div>
      ` : ''}
    </div>
  `).join('');

  elements.communityFeed.querySelectorAll('.f-quick-buy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const prod = PRODUCTS_DATA.find(p => p.id === btn.dataset.prodId);
      if (prod) addToCart(prod);
    });
  });
}

// (6) 장바구니 렌더링 & 묶음배송 계산
function renderCart() {
  if (!elements.cartItemsContainer) return;
  
  if (state.cart.length === 0) {
    elements.cartItemsContainer.innerHTML = `
      <div class="cart-empty-placeholder">
        <div class="empty-icon">🛒</div>
        <h4 class="empty-text">장바구니가 비어있어요</h4>
        <p class="empty-sub">망원시장의 싱싱한 상품들을 담아 묶음배송으로 받아보세요!</p>
      </div>
    `;
    updateCartSummary(0, 0);
    return;
  }

  // 상점별 그룹화
  const grouped = {};
  state.cart.forEach(item => {
    if (!grouped[item.store]) grouped[item.store] = [];
    grouped[item.store].push(item);
  });

  const storeNames = Object.keys(grouped);
  elements.cartStoreCountText.innerText = `${storeNames.length}개 점포 ${state.cart.reduce((a, b) => a + b.count, 0)}개 상품`;

  elements.cartItemsContainer.innerHTML = storeNames.map(storeName => {
    const items = grouped[storeName];
    return `
      <div class="cart-store-group">
        <div class="cart-group-header">
          <span class="group-store-name">🏪 ${storeName}</span>
          <span class="group-deom-badge">묶음배송 참여점포</span>
        </div>
        <div class="cart-group-items">
          ${items.map(it => `
            <div class="cart-item-row" data-item-id="${it.id}">
              <div>
                <div class="cart-item-title">${it.emoji} ${it.name}</div>
                <div class="cart-item-sub">${it.price.toLocaleString()}원</div>
              </div>
              <div class="cart-item-ctrl">
                <button class="qty-btn btn-minus" data-id="${it.id}">-</button>
                <span class="qty-num">${it.count}</span>
                <button class="qty-btn btn-plus" data-id="${it.id}">+</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  // 수량 조절 이벤트 바인딩
  elements.cartItemsContainer.querySelectorAll('.btn-plus').forEach(btn => {
    btn.addEventListener('click', () => changeCartQty(btn.dataset.id, 1));
  });
  elements.cartItemsContainer.querySelectorAll('.btn-minus').forEach(btn => {
    btn.addEventListener('click', () => changeCartQty(btn.dataset.id, -1));
  });

  calculateCartTotals(storeNames.length);
}

// --- 6. 장바구니 비즈니스 로직 ---

function addToCart(product) {
  sound.playPop();
  const existing = state.cart.find(i => i.id === product.id);
  if (existing) {
    existing.count += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      store: product.store,
      emoji: product.emoji || '🎁',
      count: 1
    });
  }
  updateGlobalCartBadges();
  renderCart();
  showToast(`🛒 [${product.store}] ${product.name} 담김!`);
}

function changeCartQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.count += delta;
  if (item.count <= 0) {
    state.cart = state.cart.filter(i => i.id !== id);
  }
  sound.playPop();
  updateGlobalCartBadges();
  renderCart();
}

function updateGlobalCartBadges() {
  const totalCount = state.cart.reduce((a, b) => a + b.count, 0);
  const totalPrice = state.cart.reduce((a, b) => a + (b.price * b.count), 0);
  const storeCount = new Set(state.cart.map(i => i.store)).size;

  // 헤더 & 바텀 네비 배지
  if (totalCount > 0) {
    elements.cartCountBadge.style.display = 'flex';
    elements.cartCountBadge.innerText = totalCount;
    elements.navCartBadge.style.display = 'flex';
    elements.navCartBadge.innerText = totalCount;

    // 플로팅 바 노출 (홈이나 장보기 탭일 때)
    if (state.activeTab === 'tab-home' || state.activeTab === 'tab-market') {
      elements.floatingCartBar.style.display = 'flex';
      elements.floatCartCount.innerText = totalCount;
      elements.floatStoreCount.innerText = `${storeCount}개 점포 묶음 담김`;
      elements.floatCartPrice.innerText = `${totalPrice.toLocaleString()}원`;
    } else {
      elements.floatingCartBar.style.display = 'none';
    }
  } else {
    elements.cartCountBadge.style.display = 'none';
    elements.navCartBadge.style.display = 'none';
    elements.floatingCartBar.style.display = 'none';
  }
}

function calculateCartTotals(storeCount) {
  const itemsSum = state.cart.reduce((a, b) => a + (b.price * b.count), 0);
  const FREE_SHIPPING_GOAL = 30000;
  
  // 무료배송 계산 (3만원 이상이면 0원, 미만이면 3,000원)
  const deliveryFee = (itemsSum >= FREE_SHIPPING_GOAL || itemsSum === 0) ? 0 : 3000;
  
  // 온누리상품권 10% 할인
  const onnuriDiscount = Math.floor(itemsSum * 0.10);
  const finalTotal = Math.max(0, itemsSum + deliveryFee - onnuriDiscount);

  // 프로그레스 바
  const progressPercent = Math.min(100, Math.floor((itemsSum / FREE_SHIPPING_GOAL) * 100));
  elements.progressFill.style.width = `${progressPercent}%`;

  if (itemsSum >= FREE_SHIPPING_GOAL) {
    elements.progressText.innerHTML = `🎉 <strong>무료 묶음배송 달성!</strong> 배송비 0원 적용`;
    elements.progressRemaining.innerText = `무료배송 적용`;
    elements.progressRemaining.style.color = 'var(--emerald)';
  } else {
    const remain = FREE_SHIPPING_GOAL - itemsSum;
    elements.progressText.innerHTML = `30,000원 채우면 <strong>배송비 0원</strong>!`;
    elements.progressRemaining.innerText = `${remain.toLocaleString()}원 남음`;
    elements.progressRemaining.style.color = 'var(--primary)';
  }

  // 요약 뷰 텍스트
  elements.sumItemsPrice.innerText = `${itemsSum.toLocaleString()}원`;
  elements.sumDeliveryFee.innerText = deliveryFee === 0 ? '0원 (무료)' : `${deliveryFee.toLocaleString()}원`;
  elements.sumOnnuriDiscount.innerText = `-${onnuriDiscount.toLocaleString()}원 (10% 즉시할인)`;
  elements.sumFinalPrice.innerText = `${finalTotal.toLocaleString()}원`;

  if (itemsSum === 0) {
    elements.btnCheckout.disabled = true;
    elements.checkoutBtnText.innerText = '상품을 담아주세요';
  } else {
    elements.btnCheckout.disabled = false;
    elements.checkoutBtnText.innerText = `${finalTotal.toLocaleString()}원 묶음배송 주문하기`;
  }
}

function updateCartSummary(itemsSum, deliveryFee) {
  elements.sumItemsPrice.innerText = '0원';
  elements.sumDeliveryFee.innerText = '3,000원';
  elements.sumOnnuriDiscount.innerText = '-0원';
  elements.sumFinalPrice.innerText = '0원';
  elements.progressFill.style.width = '0%';
  elements.progressRemaining.innerText = '30,000원 남음';
  elements.btnCheckout.disabled = true;
  elements.checkoutBtnText.innerText = '상품을 담아주세요';
  elements.cartStoreCountText.innerText = '0개 점포 0개 상품';
}

// --- 7. 탭 전환 & 모달 인터랙션 ---

function switchTab(tabId) {
  state.activeTab = tabId;
  elements.tabButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  elements.tabPanes.forEach(pane => {
    pane.classList.toggle('active', pane.id === tabId);
  });

  updateGlobalCartBadges();

  // 탭 변경 시 스크롤 최상단으로
  document.getElementById('appMainContent').scrollTop = 0;
  lucide.createIcons();
}

// 스토리 모달 열기
let storyTimer = null;
function openStoryModal(storyId) {
  const story = STORIES_DATA.find(s => s.id === storyId);
  if (!story) return;

  elements.storyModalStore.innerText = story.store;
  elements.storyModalEmoji.innerText = story.heroEmoji;
  elements.storyModalAvatar.innerText = story.emoji;
  elements.storyModalQuote.innerText = `"${story.quote}"`;
  elements.storyProdName.innerText = story.prodName;
  elements.storyProdPrice.innerText = `${story.prodPrice.toLocaleString()}원`;

  elements.storyAddCartBtn.onclick = () => {
    const prod = PRODUCTS_DATA.find(p => p.id === story.prodId) || {
      id: story.prodId,
      name: story.prodName,
      price: story.prodPrice,
      store: story.store,
      emoji: story.emoji
    };
    addToCart(prod);
    closeStoryModalFunc();
  };

  elements.storyModalOverlay.classList.add('active');

  // 스토리 진행 바 애니메이션
  const bar = elements.storyModalOverlay.querySelector('.story-bar-fill');
  bar.style.transition = 'none';
  bar.style.width = '0%';
  setTimeout(() => {
    bar.style.transition = 'width 6s linear';
    bar.style.width = '100%';
  }, 50);

  if (storyTimer) clearTimeout(storyTimer);
  storyTimer = setTimeout(() => {
    closeStoryModalFunc();
  }, 6100);
}

function closeStoryModalFunc() {
  elements.storyModalOverlay.classList.remove('active');
  if (storyTimer) clearTimeout(storyTimer);
}

// 토스트 메시지 띄우기
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `<span>🏮</span><span>${message}</span>`;
  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2400);
}

// 주문 완료 처리 및 축하
function executeOrderCheckout() {
  if (state.cart.length === 0) return;
  sound.playSuccess();

  // 폭죽 이펙트
  if (window.confetti) {
    window.confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  const storeCount = new Set(state.cart.map(i => i.store)).size;
  const itemsSum = state.cart.reduce((a, b) => a + (b.price * b.count), 0);
  const deliveryFee = itemsSum >= 30000 ? 0 : 3000;
  const onnuriDiscount = Math.floor(itemsSum * 0.10);
  const finalTotal = itemsSum + deliveryFee - onnuriDiscount;

  elements.orderSuccessStoreCount.innerText = storeCount;
  elements.successBonusName.innerText = state.selectedBonus;
  elements.successTotalPaid.innerText = `${finalTotal.toLocaleString()}원`;

  elements.orderSuccessModal.classList.add('active');

  // 장바구니 비우기
  state.cart = [];
  updateGlobalCartBadges();
  renderCart();
}

// --- 8. 이벤트 리스너 등록 ---

function initEventListeners() {
  // 하단 탭 전환
  elements.tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });

  // 상단 헤더 장바구니 버튼 & 플로팅 장바구니 버튼
  elements.headerCartBtn.addEventListener('click', () => switchTab('tab-cart'));
  elements.btnGoCartFromFloat.addEventListener('click', () => switchTab('tab-cart'));

  // 온누리 쿠폰 받기
  elements.claimOnnuriBtn.addEventListener('click', () => {
    sound.playPop();
    showToast('🎉 모바일 온누리 10% 자동할인 혜택이 적용되었습니다!');
  });

  // 카테고리 필터
  elements.catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      elements.catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      sound.playPop();
      showToast(`'${pill.querySelector('.cat-label').innerText}' 카테고리 필터 적용`);
    });
  });

  // 마켓 뷰 모드 (리스트 vs 지도)
  elements.btnModeList.addEventListener('click', () => {
    elements.btnModeList.classList.add('active');
    elements.btnModeMap.classList.remove('active');
    elements.alleyMapView.style.display = 'none';
    renderMarketProducts(null);
  });

  elements.btnModeMap.addEventListener('click', () => {
    elements.btnModeMap.classList.add('active');
    elements.btnModeList.classList.remove('active');
    elements.alleyMapView.style.display = 'block';
  });

  // 지도 노드 클릭
  elements.mapShopNodes.forEach(node => {
    node.addEventListener('click', () => {
      elements.mapShopNodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');
      const store = node.dataset.store;
      sound.playPop();
      renderMarketProducts(store);
      showToast(`📍 [${store}] 골목 매장 상품을 표시합니다.`);
    });
  });

  // 덤(Bonus) 선택 라디오
  elements.bonusChoiceInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      state.selectedBonus = e.target.value;
      sound.playPop();
      showToast(`🎁 상인의 덤: '${state.selectedBonus}' 선택됨`);
    });
  });

  // 배송 희망 시간 선택
  elements.timeSlotButtons.forEach(slot => {
    slot.addEventListener('click', () => {
      elements.timeSlotButtons.forEach(s => s.classList.remove('active'));
      slot.classList.add('active');
      state.selectedDeliveryTime = slot.dataset.time;
      sound.playPop();
      showToast(`🕒 배송시간: ${state.selectedDeliveryTime} 설정`);
    });
  });

  // 주문 결제 버튼
  elements.btnCheckout.addEventListener('click', executeOrderCheckout);

  // 주문 성공 모달 닫고 마이페이지 배송현황으로 이동
  elements.btnTrackOrder.addEventListener('click', () => {
    elements.orderSuccessModal.classList.remove('active');
    switchTab('tab-mypage');
  });

  // 스토리 모달 닫기
  elements.closeStoryModal.addEventListener('click', closeStoryModalFunc);

  // 시니어 큰글씨 모드 토글
  elements.seniorModeToggle.addEventListener('click', () => {
    state.seniorMode = !state.seniorMode;
    document.body.classList.toggle('senior-mode', state.seniorMode);
    elements.seniorModeToggle.classList.toggle('active', state.seniorMode);
    showToast(state.seniorMode ? '👓 시니어 큰글씨 모드가 켜졌습니다.' : '일반 글씨 크기로 전환되었습니다.');
  });

  // 데스크톱 / 폰 뷰 모드 토글
  elements.viewModeToggle.addEventListener('click', () => {
    state.fullViewMode = !state.fullViewMode;
    elements.phoneFrame.classList.toggle('full-view-mode', state.fullViewMode);
    elements.viewModeToggle.classList.toggle('active', state.fullViewMode);
    showToast(state.fullViewMode ? '🖥️ 풀 뷰 모드로 전환되었습니다.' : '📱 스마트폰 프레임 모드로 전환되었습니다.');
  });

  // 사운드 토글
  elements.soundToggle.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    elements.soundToggle.classList.toggle('active', state.soundEnabled);
    elements.soundToggle.querySelector('span').innerText = state.soundEnabled ? '사운드 ON' : '사운드 OFF';
    showToast(state.soundEnabled ? '🔊 효과음이 켜졌습니다.' : '🔇 효과음이 음소거되었습니다.');
  });
}

// --- 9. 실시간 시계 & 배송 카운트다운 타이머 ---
function startTimers() {
  // 상태바 시계
  setInterval(() => {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    if (elements.statusClock) elements.statusClock.innerText = `${hrs}:${mins}`;
  }, 1000);

  // 묶음배송 마감 카운트다운
  let totalSeconds = 3600 + 42 * 60 + 18;
  setInterval(() => {
    if (totalSeconds > 0) totalSeconds--;
    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const s = String(totalSeconds % 60).padStart(2, '0');
    if (elements.bundleTimer) elements.bundleTimer.innerText = `${h}:${m}:${s}`;
  }, 1000);
}

// --- 10. 초기화 실행 (App Bootstrap) ---
window.addEventListener('DOMContentLoaded', () => {
  renderStories();
  renderDeals();
  renderStores();
  renderMarketProducts(null);
  renderCommunityFeed();
  renderCart();
  initEventListeners();
  startTimers();
  lucide.createIcons();

  // 초기 샘플 장바구니 데이터 채우기 (데모 인터랙션 직관성 향상)
  setTimeout(() => {
    addToCart(PRODUCTS_DATA[0]); // 영순이네 된장찌개
    addToCart(PRODUCTS_DATA[1]); // 망원청과 딸기
  }, 400);
});
