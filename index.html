const {
  CULTURE_SPOTS = [],
  CULTURE_TIMELINE = [],
  CULTURE_GALLERY = [],
  IMAGE_FALLBACK = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  WEEKDAY_LABELS = ["일","월","화","수","목","금","토"],
  EVENTS = [],
  EVENT_LINKS = {}
} = window.BUSAN_DATA || {};

const featuredEl = document.getElementById("featured");
    const eventListEl = document.getElementById("eventList");
    const filtersEl = document.getElementById("filters");
    const favoriteSectionEl = document.getElementById("favoriteSection");
    const favoriteListEl = document.getElementById("favoriteList");
    const eventSearchInput = document.getElementById("eventSearch");
    const favoriteOnlyBtn = document.getElementById("favoriteOnlyBtn");
    const favoriteCountEl = document.getElementById("favoriteCount");
    const cultureGalleryEl = document.getElementById("cultureGallery");
    const historyTimelineEl = document.getElementById("historyTimeline");
    const calendarGridEl = document.getElementById("calendarGrid");
    const calendarLabelEl = document.getElementById("calendarCurrentLabel");
    const viewToggle = document.querySelector(".view-toggle");
    const viewToggleButtons = viewToggle ? viewToggle.querySelectorAll("button") : [];
    const VIEW_STORAGE_KEY = "busan-view-mode";
    const FAVORITE_STORAGE_KEY = "busan-favorites";
    const MOBILE_BREAKPOINT = "(max-width: 768px)";
    const mobileMediaQuery = window.matchMedia(MOBILE_BREAKPOINT);
    const KAKAO_SHARE_KEY = "d865babc963d6edc39f7371bd8869346";
    const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|Mobi/i.test(navigator.userAgent);
    let userSelectedView = false;
    let favorites = new Set();
    let currentCategory = "전체";
    let currentSearchTerm = "";
    let favoriteOnly = false;
    let currentEventId = null;
    let searchDebounceTimer = null;
    let userLocation = null;
    let sortMode = "default";
    let locatingUser = false;
    const calendarNavButtons = document.querySelectorAll("[data-calendar-nav]");
    let calendarCurrentDate = new Date();
    calendarCurrentDate.setDate(1);

    function getClosest(target, selector) {
      if (!target) return null;
      if (typeof target.closest === "function") {
        return target.closest(selector);
      }
      let node = target.parentElement;
      while (node) {
        if (node.matches(selector)) return node;
        node = node.parentElement;
      }
      return null;
    }

    function getAbsoluteUrl(path) {
      try {
        return new URL(path, window.location.href).toString();
      } catch (err) {
        return path;
      }
    }

    function buildEventPageUrl(id) {
      const url = new URL(window.location.href);
      if (id) {
        url.searchParams.set("event", id);
      } else {
        url.searchParams.delete("event");
      }
      url.hash = "";
      return url.toString();
    }

    function getOfficialLink(id) {
      return EVENT_LINKS[id] || null;
    }

    function copyOfficialLink(id) {
      const officialLink = getOfficialLink(id);
      const linkToCopy = officialLink || buildEventPageUrl(id);
      copyToClipboard(linkToCopy);
      showToast(officialLink ? "행사 공식 링크를 복사했어요." : "행사 페이지 링크를 복사했어요.");
    }

    const EARTH_RADIUS_KM = 6371;
    function deg2rad(value) {
      return value * (Math.PI / 180);
    }

    function calculateDistance(lat1, lng1, lat2, lng2) {
      if ([lat1,lng1,lat2,lng2].some(coord => typeof coord !== "number" || Number.isNaN(coord))) {
        return null;
      }
      const dLat = deg2rad(lat2 - lat1);
      const dLng = deg2rad(lng2 - lng1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return +(EARTH_RADIUS_KM * c).toFixed(2);
    }

    function formatDistanceLabel(distance) {
      if (typeof distance !== "number" || Number.isNaN(distance)) return "";
      if (distance < 1) {
        return `${Math.round(distance * 1000)}m`;
      }
      return distance < 10 ? `${distance.toFixed(1)}km` : `${Math.round(distance)}km`;
    }

    function updateLocationUI() {
      if (nearbySortBtn) {
        nearbySortBtn.classList.toggle("active", sortMode === "distance" && !!userLocation);
        nearbySortBtn.classList.toggle("is-loading", locatingUser);
        nearbySortBtn.setAttribute("aria-pressed", sortMode === "distance" && !!userLocation);
        if (locatingUser) {
          nearbySortBtn.textContent = "위치 확인 중...";
        } else if (sortMode === "distance" && userLocation) {
          nearbySortBtn.textContent = "내 주변 순 정렬 해제";
        } else {
          nearbySortBtn.textContent = "내 주변 행사 보기";
        }
      }
      if (locationStatusEl) {
        if (locatingUser) {
          locationStatusEl.textContent = "현재 위치를 확인하는 중입니다...";
        } else if (sortMode === "distance" && userLocation) {
          locationStatusEl.textContent = "가까운 행사부터 정렬했습니다.";
        } else if (userLocation) {
          locationStatusEl.textContent = "기본 정렬로 표시 중입니다.";
        } else {
          locationStatusEl.textContent = "";
        }
      }
    }

    function requestUserLocation() {
      if (!navigator.geolocation) {
        showToast("이 브라우저에서는 위치 정보를 사용할 수 없습니다.");
        return;
      }
      locatingUser = true;
      updateLocationUI();
      navigator.geolocation.getCurrentPosition(
        pos => {
          userLocation = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          };
          locatingUser = false;
          sortMode = "distance";
          updateLocationUI();
          renderList();
          renderFavoriteSection();
          showToast("내 주변 행사 순으로 정렬했습니다.");
        },
        err => {
          locatingUser = false;
          updateLocationUI();
          const messages = {
            1: "위치 접근이 거부되었습니다.",
            2: "위치 정보를 확인할 수 없습니다.",
            3: "위치 정보를 가져오는 데 시간이 초과되었습니다."
          };
          showToast(messages[err.code] || "위치 정보를 가져올 수 없습니다.");
        },
        { enableHighAccuracy:false, timeout:8000, maximumAge:0 }
      );
    }

    function clearLocationSorting() {
      sortMode = "default";
      updateLocationUI();
      renderList();
      renderFavoriteSection();
      showToast("기본 정렬로 돌아갔어요.");
    }

    function getAbsoluteUrl(path) {
      try {
        return new URL(path, window.location.href).toString();
      } catch (err) {
        return path;
      }
    }

    function ensureKakaoReady() {
      if (typeof Kakao === "undefined") {
        console.warn("카카오 SDK가 로드되지 않았습니다.");
        showToast("카카오 SDK를 불러오지 못했습니다.");
        return false;
      }
      if (!KAKAO_SHARE_KEY || KAKAO_SHARE_KEY.includes("YOUR_")) {
        console.warn("KAKAO_SHARE_KEY 를 실제 JavaScript 키로 교체하세요.");
        showToast("카카오 공유 키가 설정되어 있지 않습니다.");
        return false;
      }
      if (!Kakao.isInitialized()) {
        Kakao.init(KAKAO_SHARE_KEY);
      }
      return true;
    }

    function shareViaKakao(event) {
      if (!ensureKakaoReady()) return;
      const shareUrl = buildEventPageUrl(event.id);
      const imageUrl = getAbsoluteUrl(event.image || IMAGE_FALLBACK);
      Kakao.Share.sendDefault({
        objectType:"feed",
        content:{
          title:event.name,
          description:event.summary || event.description || "",
          imageUrl,
          link:{
            mobileWebUrl:shareUrl,
            webUrl:shareUrl
          }
        },
        buttons:[
          {
            title:"행사 카드 보기",
            link:{
              mobileWebUrl:shareUrl,
              webUrl:shareUrl
            }
          }
        ]
      });
      showToast("카카오톡 공유 패널을 열었습니다.");
    }

    function setToggleActive(mode) {
      viewToggleButtons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.view === mode);
      });
    }

    function storeViewMode(mode) {
      try {
        localStorage.setItem(VIEW_STORAGE_KEY, mode);
      } catch (err) {
        console.warn("view mode 저장 실패:", err);
      }
    }

    function applyDeviceMode(mode, { skipPersist = false } = {}) {
      if (mode === "mobile") {
        document.body.classList.add("device-mobile");
      } else {
        document.body.classList.remove("device-mobile");
        mode = "pc";
      }
      if (viewToggle) {
        setToggleActive(mode);
      }
      if (!skipPersist) {
        storeViewMode(mode);
      }
    }

    if (viewToggle) {
      viewToggle.addEventListener("click", e => {
        const target = getClosest(e.target, "button[data-view]");
        if (!target) return;
        userSelectedView = true;
        applyDeviceMode(target.dataset.view);
      });
    }

    function handleViewportChange(e) {
      if (userSelectedView) return;
      applyDeviceMode(e.matches ? "mobile" : "pc", { skipPersist:true });
    }

    if (typeof mobileMediaQuery.addEventListener === "function") {
      mobileMediaQuery.addEventListener("change", handleViewportChange);
    } else if (typeof mobileMediaQuery.addListener === "function") {
      mobileMediaQuery.addListener(handleViewportChange);
    }

    function initViewMode() {
      let stored = null;
      try {
        stored = localStorage.getItem(VIEW_STORAGE_KEY);
      } catch (err) {
        console.warn("view mode 읽기 실패:", err);
      }
      if (stored) {
        userSelectedView = true;
      }
      const prefersMobile = mobileMediaQuery.matches || isMobileUserAgent;
      const initialMode = stored || (prefersMobile ? "mobile" : "pc");
      applyDeviceMode(initialMode, { skipPersist: Boolean(stored) });
    }

    function renderCards(data, container) {
      if (!container) return;
      container.innerHTML = data.map(item => {
        const isFavorite = favorites.has(item.id);
        const distanceMarkup = typeof item.distance === "number" ? `<p class="distance-info">내 위치에서 약 ${formatDistanceLabel(item.distance)}</p>` : "";
        return `
        <article class="card event-card ${isFavorite ? "is-favorite" : ""}">
          <button type="button" class="favorite-btn ${isFavorite ? "active" : ""}" data-fav-toggle="${item.id}" aria-pressed="${isFavorite}">
            <span class="favorite-icon" aria-hidden="true">${isFavorite ? "★" : "☆"}</span>
            <span class="favorite-label">${isFavorite ? "저장됨" : "찜하기"}</span>
            <span class="sr-only">${isFavorite ? "즐겨찾기 해제" : "즐겨찾기 추가"}</span>
          </button>
          <div class="thumb">
            <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='${IMAGE_FALLBACK}';">
          </div>
          <span class="tag">${item.category}</span>
          <h3>${item.name}</h3>
          <p class="meta">${item.period} · ${item.venue}</p>
          ${distanceMarkup}
          <p>${item.summary}</p>
          <button class="btn primary" style="margin-top:14px;" data-type="event" data-id="${item.id}">
            자세히 보기
          </button>
        </article>`;
      }).join("");
    }

    function buildCultureGalleryCard(item) {
      return `
        <figure class="gallery-card">
          <div class="gallery-thumb">
            <img src="${item.thumb}" alt="${item.title}" onerror="this.onerror=null;this.src='${IMAGE_FALLBACK}';">
            <button class="gallery-zoom" type="button" data-view-image="${item.full}" data-view-alt="${item.title}">
              확대 보기
            </button>
          </div>
          <figcaption>
            <strong>${item.title}</strong>
            <p>${item.caption}</p>
          </figcaption>
        </figure>
      `;
    }

    function buildCultureCard(item) {
      return `
        <article class="card culture-card">
          <div class="culture-header">
            <span class="tag">부산 지역 문화</span>
            <h3>${item.title}</h3>
            <p class="meta">${item.period} · ${item.location}</p>
          </div>
          <button class="btn primary" style="margin-top:12px;" data-type="culture" data-id="${item.id}">
            자세히 보기
          </button>
        </article>
      `;
    }

    function renderCulture(containerId) {
      const target = document.getElementById(containerId);
      target.innerHTML = CULTURE_SPOTS.map(buildCultureCard).join("");
    }

    function renderCultureGallery() {
      if (!cultureGalleryEl) return;
      cultureGalleryEl.innerHTML = CULTURE_GALLERY.map(buildCultureGalleryCard).join("");
    }

    function renderHistoryTimeline() {
      if (!historyTimelineEl) return;
      historyTimelineEl.innerHTML = CULTURE_TIMELINE.map(item => `
        <article class="timeline-card" data-year="${item.year}">
          <strong>${item.title}</strong>
          <p>${item.detail}</p>
          ${item.note ? `<small>${item.note}</small>` : ""}
        </article>
      `).join("");
    }

    function renderFeatured() {
      if (!featuredEl) return;
      renderCards(EVENTS.slice(0,4), featuredEl);
    }

    function loadFavorites() {
      try {
        const stored = JSON.parse(localStorage.getItem(FAVORITE_STORAGE_KEY) || "[]");
        favorites = new Set(Array.isArray(stored) ? stored : []);
      } catch (err) {
        console.warn("즐겨찾기 정보를 불러오지 못했습니다:", err);
        favorites = new Set();
      }
    }

    function saveFavorites() {
      try {
        localStorage.setItem(FAVORITE_STORAGE_KEY, JSON.stringify([...favorites]));
      } catch (err) {
        console.warn("즐겨찾기 저장 실패:", err);
      }
    }

    function updateFavoriteToggleState() {
      if (!favoriteOnlyBtn || !favoriteCountEl) return;
      favoriteCountEl.textContent = favorites.size;
      favoriteOnlyBtn.classList.toggle("active", favoriteOnly);
      favoriteOnlyBtn.setAttribute("aria-pressed", favoriteOnly);
    }

    function updateModalFavoriteState() {
      if (!modalFavoriteBtn) return;
      if (!currentEventId) {
        modalFavoriteBtn.classList.remove("active");
        modalFavoriteBtn.textContent = "관심 행사 저장";
        return;
      }
      const isFavorite = favorites.has(currentEventId);
      modalFavoriteBtn.classList.toggle("active", isFavorite);
      modalFavoriteBtn.textContent = isFavorite ? "즐겨찾기 해제" : "관심 행사 저장";
    }

    function renderFavoriteSection() {
      if (!favoriteSectionEl || !favoriteListEl) return;
      const favoriteData = EVENTS
        .filter(event => favorites.has(event.id))
        .map(event => {
          if (!userLocation) return event;
          return {
            ...event,
            distance: calculateDistance(userLocation.lat, userLocation.lng, event.lat, event.lng)
          };
        });
      favoriteSectionEl.hidden = favoriteData.length === 0;
      if (favoriteData.length === 0) {
        favoriteListEl.innerHTML = "";
        return;
      }
      renderCards(favoriteData, favoriteListEl);
    }

    function toggleFavorite(id, { silent = false } = {}) {
      if (!id) return;
      const isFavorite = favorites.has(id);
      if (isFavorite) {
        favorites.delete(id);
      } else {
        favorites.add(id);
      }
      saveFavorites();
      updateFavoriteToggleState();
      renderList();
      renderFeatured();
      renderFavoriteSection();
      if (currentEventId === id) {
        updateModalFavoriteState();
      }
      if (!silent) {
        showToast(isFavorite ? "즐겨찾기에서 제외했어요." : "즐겨찾기에 추가했어요.");
      }
    }

    function initFilters() {
      const categorySet = new Set();
      EVENTS.forEach(e => e.category.split("/").map(cat => cat.trim()).forEach(cat => categorySet.add(cat)));
      const cats = ["전체", ...categorySet];
      filtersEl.innerHTML = cats.map(cat => `
        <button class="filter-btn ${currentCategory === cat ? "active" : ""}" data-cat="${cat}">${cat}</button>
      `).join("");
      filtersEl.addEventListener("click", e => {
        const target = getClosest(e.target, ".filter-btn");
        if (!target) return;
        [...filtersEl.children].forEach(btn => btn.classList.remove("active"));
        target.classList.add("active");
        currentCategory = target.dataset.cat || "전체";
        renderList();
      });
    }

    function getFilteredEvents() {
      return EVENTS.filter(event => {
        const categories = event.category.split("/").map(cat => cat.trim());
        const matchesCategory = currentCategory === "전체" || categories.includes(currentCategory);
        const matchesFavorite = !favoriteOnly || favorites.has(event.id);
        if (!matchesCategory || !matchesFavorite) return false;
        if (!currentSearchTerm) return true;
        const searchTarget = [
          event.name,
          event.summary,
          event.description,
          event.venue,
          categories.join(" "),
          (event.tags || []).join(" ")
        ].join(" ").toLowerCase();
        return searchTarget.includes(currentSearchTerm);
      });
    }

    function renderList() {
      if (!eventListEl) return;
      let filtered = getFilteredEvents();
      let prepared = filtered.map(event => {
        if (!userLocation) return event;
        return {
          ...event,
          distance: calculateDistance(userLocation.lat, userLocation.lng, event.lat, event.lng)
        };
      });
      if (sortMode === "distance" && userLocation) {
        prepared = prepared.sort((a, b) => {
          const distA = typeof a.distance === "number" ? a.distance : Number.POSITIVE_INFINITY;
          const distB = typeof b.distance === "number" ? b.distance : Number.POSITIVE_INFINITY;
          return distA - distB;
        });
      }
      if (prepared.length === 0) {
        eventListEl.innerHTML = `
          <div class="empty-state">
            조건에 맞는 행사가 없습니다.<br>
            <small>검색어와 필터를 조정해 보세요.</small>
          </div>
        `;
        return;
      }
      renderCards(prepared, eventListEl);
    }

    function initTabs() {
      const buttons = document.querySelectorAll(".tab-btn");
      const panels = document.querySelectorAll(".tab-panel");
      buttons.forEach(btn => {
        btn.addEventListener("click", () => {
          buttons.forEach(b => b.classList.remove("active"));
          panels.forEach(panel => panel.classList.remove("active"));
          btn.classList.add("active");
          document.getElementById(btn.dataset.tab).classList.add("active");
        });
      });
    }

    // ★ 지도가 동작하려면 head에 선언된 Kakao SDK URL의 YOUR_KAKAO_API_KEY를 실제 앱 키로 교체하세요.
    let map, marker;
    function setDetailImageSource(src, altText="") {
      detailImage.onerror = () => {
        detailImage.onerror = null;
        detailImage.src = IMAGE_FALLBACK;
      };
      detailImage.src = src || IMAGE_FALLBACK;
      detailImage.alt = altText;
    }

    function openEventDetail(id) {
      const data = EVENTS.find(e => e.id === id);
      if (!data) return;
      currentEventId = id;
      setDetailActionsVisible(true);
      updateEventParam(id);
      updateModalFavoriteState();
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      detailImage.style.display = "block";
      setDetailImageSource(data.image, data.name);
      detailCategory.textContent = data.category;
      detailTitle.textContent = data.name;
      detailMeta.innerHTML = `<strong>기간</strong> ${data.period} · <strong>장소</strong> ${data.venue}`;
      detailDesc.innerHTML = `
        <p>${data.description}</p>
        ${data.extra ? `<p style="margin-top:8px; color:#30445e;">${data.extra}</p>` : ""}
      `;
      detailTags.innerHTML = data.tags.map(tag=>`<li>#${tag}</li>`).join("");
      relatedTitle.textContent = "관련 행사";
      related.innerHTML = data.related.map(id=>{
        const rel = EVENTS.find(e=>e.id===id);
        return rel ? `
          <div class="card">
            <strong>${rel.name}</strong>
            <p class="meta">${rel.period}</p>
            <button class="btn primary" style="margin-top:10px;" data-type="event" data-id="${rel.id}">
              자세히 보기
            </button>
          </div>` : "";
      }).join("");

      // 카카오맵 API 확인
      if (typeof kakao === 'undefined' || !kakao.maps) {
        const mapHelper = document.getElementById("mapHelper");
        if (mapHelper) {
          mapHelper.innerHTML = `
            <strong style="color:#d32f2f;">⚠️ 카카오맵을 불러올 수 없습니다.</strong><br>
            <small style="color:#666;">
              1. 카카오 개발자 콘솔(https://developers.kakao.com)에서 <strong>JavaScript 키</strong>를 확인하세요.<br>
              2. <strong>플랫폼 설정</strong>에서 GitHub Pages 도메인을 등록하세요: <code>https://사용자명.github.io</code> (프로토콜 포함)<br>
              3. 상단 스크립트 URL의 <code>YOUR_KAKAO_API_KEY</code>를 실제 JavaScript 키로 교체하세요.<br>
              4. 변경사항이 반영되려면 몇 분이 걸릴 수 있습니다.
            </small>
          `;
          mapHelper.style.padding = "12px";
          mapHelper.style.backgroundColor = "#fff3cd";
          mapHelper.style.borderRadius = "8px";
          mapHelper.style.border = "1px solid #ffc107";
        }
        if (mapEl) {
          mapEl.innerHTML = '<div style="display:flex; align-items:center; justify-content:center; height:100%; color:#999;">지도를 불러올 수 없습니다. 위 안내를 확인하세요.</div>';
        }
        if (mapSectionEl) {
          mapSectionEl.style.display = "block";
        }
        return;
      }

      try {
        const center = new kakao.maps.LatLng(data.lat, data.lng);
        if (mapEl) {
          map = map || new kakao.maps.Map(mapEl, { center, level:4 });
          map.setCenter(center);
          if (!marker) marker = new kakao.maps.Marker({ map, position:center });
          marker.setPosition(center);
        }
        if (mapSectionEl) {
          mapSectionEl.style.display = "block";
        }
      } catch (error) {
        console.error("카카오맵 초기화 오류:", error);
        const mapHelper = document.getElementById("mapHelper");
        if (mapHelper) {
          mapHelper.innerHTML = `
            <strong style="color:#d32f2f;">⚠️ 지도 로딩 중 오류가 발생했습니다.</strong><br>
            <small style="color:#666;">브라우저 콘솔(F12)에서 오류 메시지를 확인하세요. 플랫폼 도메인이 올바르게 등록되었는지 확인해주세요.</small>
          `;
          mapHelper.style.padding = "12px";
          mapHelper.style.backgroundColor = "#ffebee";
          mapHelper.style.borderRadius = "8px";
          mapHelper.style.border = "1px solid #f44336";
        }
        if (mapEl) {
          mapEl.innerHTML = '<div style="display:flex; align-items:center; justify-content:center; height:100%; color:#999;">지도 로딩 오류</div>';
        }
      }
    }

    function openImageViewer(src, altText="") {
      if (!imageViewer || !viewerImage) return;
      viewerImage.onerror = () => {
        viewerImage.onerror = null;
        viewerImage.src = IMAGE_FALLBACK;
      };
      viewerImage.src = src || IMAGE_FALLBACK;
      viewerImage.alt = altText || "이미지 확대 보기";
      imageViewer.classList.add("open");
      imageViewer.setAttribute("aria-hidden", "false");
    }

    function closeImageViewer() {
      if (!imageViewer || !viewerImage) return;
      imageViewer.classList.remove("open");
      imageViewer.setAttribute("aria-hidden", "true");
      viewerImage.src = "";
    }

    function openCultureDetail(id) {
      const data = CULTURE_SPOTS.find(c => c.id === id);
      if (!data) return;
      currentEventId = null;
      updateEventParam(null);
      setDetailActionsVisible(false);
      updateModalFavoriteState();
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      // 지역 문화 카드는 상단 이미지를 사용하지 않음
      detailImage.style.display = "none";
      detailCategory.textContent = "부산 지역 문화";
      detailTitle.textContent = data.title;
      detailMeta.innerHTML = `<strong>형성 시기</strong> ${data.period} · <strong>위치</strong> ${data.location}`;
      detailDesc.textContent = data.summary;
      const tagList = (data.keywords || "")
        .split("·")
        .map(t => t.trim())
        .filter(Boolean)
        .map(tag => `<li>#${tag}</li>`)
        .join("");
      detailTags.innerHTML = tagList;
      relatedTitle.textContent = "주요 포인트";
      related.innerHTML = `
        <div class="card">
          <p class="meta">하이라이트</p>
          <p>${data.highlights.join(" · ")}</p>
        </div>
      `;
      if (mapSectionEl) {
        mapSectionEl.style.display = "none";
      }
    }

    function setDetailActionsVisible(isVisible) {
      if (!detailActions) return;
      detailActions.hidden = !isVisible;
    }

    function updateEventParam(id) {
      if (!window.history || !window.history.replaceState) return;
      const url = new URL(window.location.href);
      if (id) {
        url.searchParams.set("event", id);
      } else {
        url.searchParams.delete("event");
      }
      window.history.replaceState({}, "", url);
    }

    function getCurrentEvent() {
      if (!currentEventId) return null;
      return EVENTS.find(event => event.id === currentEventId) || null;
    }

    function handleCalendarAction(target) {
      const event = getCurrentEvent();
      if (!event) {
        showToast("행사를 먼저 선택해주세요.");
        return;
      }
      const dates = parsePeriodToDates(event.period);
      if (!dates) {
        showToast("행사 기간 형식을 인식할 수 없습니다.");
        return;
      }
      if (target === "google") {
        window.open(buildGoogleCalendarUrl(event, dates), "_blank", "noopener");
      } else {
        downloadIcs(event, dates);
        showToast("ICS 파일을 내려받았어요.");
      }
    }

    function parsePeriodToDates(period) {
      if (!period) return null;
      const parts = period.split(/[-~,]/).map(p => p.trim()).filter(Boolean);
      const start = parseDatePart(parts[0]);
      const end = parts[1] ? parseDatePart(parts[1], start && start.getFullYear()) : start;
      if (!start || !end) return null;
      return { start, end };
    }

    function parseDatePart(part, fallbackYear) {
      if (!part) return null;
      const digits = part.replace(/[^\d.]/g, "").split(".").filter(Boolean);
      if (digits.length < 2) return null;
      let year, month, day;
      if (digits.length === 3) {
        [year, month, day] = digits;
      } else {
        [month, day] = digits;
        year = fallbackYear ? String(fallbackYear) : null;
      }
      if (!year) return null;
      const m = Number(month || 1);
      const d = Number(day || 1);
      if (!m || !d) return null;
      return new Date(Number(year), m - 1, d);
    }

    function addDays(date, days) {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }

    function formatDateValue(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}${month}${day}`;
    }

    function buildGoogleCalendarUrl(event, dates) {
      const start = formatDateValue(dates.start);
      const end = formatDateValue(addDays(dates.end, 1));
      const details = `${event.summary || ""}\n${event.description || ""}\n${event.extra || ""}`.trim();
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.name)}&dates=${start}/${end}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(event.venue)}`;
    }

    function buildIcsContent(event, dates) {
      const start = formatDateValue(dates.start);
      const end = formatDateValue(addDays(dates.end, 1));
      const description = `${event.summary || ""}\\n${event.description || ""}\\n${event.extra || ""}`.trim();
      return [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Busan Culture Calendar//KR",
        "CALSCALE:GREGORIAN",
        "BEGIN:VEVENT",
        `UID:${event.id}@busan-culture`,
        `DTSTAMP:${start}T090000Z`,
        `DTSTART;VALUE=DATE:${start}`,
        `DTEND;VALUE=DATE:${end}`,
        `SUMMARY:${event.name}`,
        `DESCRIPTION:${description}`,
        `LOCATION:${event.venue}`,
        "END:VEVENT",
        "END:VCALENDAR"
      ].join("\n");
    }

    function downloadIcs(event, dates) {
      const blob = new Blob([buildIcsContent(event, dates)], { type:"text/calendar" });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `${event.id || "busan-event"}.ics`;
      anchor.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    function getEventStartDate(event) {
      if (!event) return null;
      const dates = parsePeriodToDates(event.period);
      return dates ? dates.start : null;
    }

    function formatWeeklyDateLabel(date) {
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const weekday = WEEKDAY_LABELS[date.getDay()];
      return `${month}.${day} (${weekday})`;
    }

    function renderWeeklySummary(rangeDays = 7) {
      if (!weeklySummaryEl) return;
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const endDate = addDays(today, Math.max(rangeDays - 1, 0));
      const eventsWithinRange = EVENTS
        .map(event => ({ event, start: getEventStartDate(event) }))
        .filter(item => item.start && item.start >= today && item.start <= endDate)
        .sort((a, b) => a.start - b.start);
      const grouped = eventsWithinRange.reduce((acc, item) => {
        const key = item.start.getTime();
        if (!acc[key]) acc[key] = [];
        acc[key].push(item.event);
        return acc;
      }, {});
      const sections = Object.entries(grouped)
        .map(([timestamp, events]) => ({
          date: new Date(Number(timestamp)),
          events
        }))
        .sort((a, b) => a.date - b.date);
      const daysMarkup = sections.map(({ date, events }) => `
        <article class="weekly-day">
          <header>
            <span class="weekly-date">${formatWeeklyDateLabel(date)}</span>
            <span class="weekly-count">${events.length}건</span>
          </header>
          <div class="weekly-events">
            ${events.map(event => `
              <button type="button" class="weekly-event-chip" data-type="event" data-id="${event.id}">
                <span class="weekly-event-name">${event.name}</span>
                <span class="weekly-event-meta">${event.venue}</span>
              </button>
            `).join("")}
          </div>
        </article>
      `).join("");
      const totalCount = eventsWithinRange.length;
      weeklySummaryEl.innerHTML = `
        <div class="weekly-meta">
          <div>
            <p class="weekly-label">이번 주 하이라이트</p>
            <strong>${formatWeeklyDateLabel(today)} - ${formatWeeklyDateLabel(endDate)}</strong>
          </div>
          <span class="weekly-total">${totalCount ? `${totalCount}건 일정 예정` : "새 일정 대기중"}</span>
        </div>
        ${totalCount ? `<div class="weekly-list">${daysMarkup}</div>` : `<p class="weekly-empty">다가오는 7일 안에 등록된 행사가 없습니다.</p>`}
      `;
    }

    function renderCalendarView() {
      if (!calendarGridEl || !calendarLabelEl) return;
      const year = calendarCurrentDate.getFullYear();
      const month = calendarCurrentDate.getMonth();
      calendarLabelEl.textContent = `${year}.${String(month + 1).padStart(2, "0")}`;
      const firstDay = new Date(year, month, 1);
      const startWeekday = firstDay.getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const totalCells = Math.ceil((startWeekday + daysInMonth) / 7) * 7;
      const eventsByDay = EVENTS.reduce((acc, event) => {
        const startDate = getEventStartDate(event);
        if (!startDate) return acc;
        if (startDate.getFullYear() !== year || startDate.getMonth() !== month) return acc;
        const day = startDate.getDate();
        (acc[day] = acc[day] || []).push(event);
        return acc;
      }, {});
      let cells = "";
      for (let index = 0; index < totalCells; index++) {
        const dayNumber = index - startWeekday + 1;
        const inMonth = dayNumber > 0 && dayNumber <= daysInMonth;
        const eventsForDay = inMonth && eventsByDay[dayNumber] ? eventsByDay[dayNumber] : [];
        const ariaLabel = inMonth ? `${year}년 ${month + 1}월 ${dayNumber}일` : "이전/다음 달";
        let content = "&nbsp;";
        if (inMonth && eventsForDay.length) {
          content = eventsForDay.map(event => `
            <button type="button" class="calendar-event-chip" data-type="event" data-id="${event.id}">
              ${event.name}
            </button>
          `).join("");
        }
        cells += `
          <div class="calendar-cell ${inMonth ? "" : "is-muted"}" role="gridcell" aria-label="${ariaLabel}">
            <div class="calendar-date">${inMonth ? dayNumber : ""}</div>
            <div class="calendar-events">
              ${content}
            </div>
          </div>
        `;
      }
      calendarGridEl.innerHTML = cells;
    }

    function changeCalendarMonth(offset) {
      if (!Number.isFinite(offset)) return;
      calendarCurrentDate.setMonth(calendarCurrentDate.getMonth() + offset);
      calendarCurrentDate.setDate(1);
      renderCalendarView();
    }

    function handleShare(target) {
      const event = getCurrentEvent();
      if (!event) {
        showToast("행사를 먼저 선택해주세요.");
        return;
      }
      if (target === "kakao") {
        shareViaKakao(event);
        return;
      }
      if (target === "copy") {
        copyOfficialLink(event.id);
        return;
      }
      showToast("지원하지 않는 공유 방식입니다.");
    }

    function copyToClipboard(text) {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
      } else {
        fallbackCopy(text);
      }
    }

    function fallbackCopy(text) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    let toastTimer;
    function showToast(message) {
      if (!toastEl) return;
      toastEl.textContent = message;
      toastEl.classList.add("visible");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toastEl.classList.remove("visible");
      }, 2200);
    }

    function handleInitialEventFromQuery() {
      const params = new URLSearchParams(window.location.search);
      const targetId = params.get("event");
      if (targetId && EVENTS.some(ev => ev.id === targetId)) {
        openEventDetail(targetId);
      }
    }

    function closeModal() {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      currentEventId = null;
      setDetailActionsVisible(false);
      updateModalFavoriteState();
      updateEventParam(null);
    }

    const modal = document.getElementById("detailModal");
    const detailImage = document.getElementById("detailImage");
    const detailCategory = document.getElementById("detailCategory");
    const detailTitle = document.getElementById("detailTitle");
    const detailMeta = document.getElementById("detailMeta");
    const detailDesc = document.getElementById("detailDesc");
    const detailTags = document.getElementById("detailTags");
    const related = document.getElementById("related");
    const relatedTitle = document.getElementById("relatedTitle");
    const mapEl = document.getElementById("map");
    const mapSectionEl = document.getElementById("mapSection");
    const imageViewer = document.getElementById("imageViewer");
    const viewerImage = document.getElementById("viewerImage");
    const detailActions = document.getElementById("detailActions");
    const modalFavoriteBtn = document.getElementById("modalFavoriteBtn");
    const calendarButtons = document.querySelectorAll("[data-calendar-target]");
    const shareButtons = document.querySelectorAll("[data-share-target]");
    const toastEl = document.getElementById("toast");
    const nearbySortBtn = document.getElementById("nearbySortBtn");
    const locationStatusEl = document.getElementById("locationStatus");
    const weeklySummaryEl = document.getElementById("weeklySummary");

    document.body.addEventListener("click", e => {
      const detailBtn = getClosest(e.target, "button[data-id][data-type]");
      if (!detailBtn) return;
      const id = detailBtn.dataset.id;
      const type = detailBtn.dataset.type || "event";
      if (!id) return;
      if (type === "culture") {
        openCultureDetail(id);
      } else {
        openEventDetail(id);
      }
    });

    document.body.addEventListener("click", e => {
      const favoriteBtn = getClosest(e.target, "[data-fav-toggle]");
      if (!favoriteBtn) return;
      e.preventDefault();
      e.stopPropagation();
      toggleFavorite(favoriteBtn.dataset.favToggle);
    });

    document.body.addEventListener("click", e => {
      const viewerTrigger = getClosest(e.target, "[data-view-image]");
      if (!viewerTrigger) return;
      openImageViewer(viewerTrigger.dataset.viewImage, viewerTrigger.dataset.viewAlt);
    });

    modal.addEventListener("click", e => {
      if (e.target === modal || e.target.matches(".close-btn")) {
        closeModal();
        return;
      }
      if (e.target === detailImage) {
        openImageViewer(detailImage.src, detailImage.alt);
      }
    });

    imageViewer.addEventListener("click", e => {
      if (e.target === imageViewer || e.target.matches(".close-btn")) {
        closeImageViewer();
      }
    });

    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        if (imageViewer.classList.contains("open")) {
          closeImageViewer();
        } else if (modal.classList.contains("open")) {
          closeModal();
        }
      }
    });

    if (favoriteOnlyBtn) {
      favoriteOnlyBtn.addEventListener("click", () => {
        favoriteOnly = !favoriteOnly;
        updateFavoriteToggleState();
        renderList();
      });
    }

    if (eventSearchInput) {
      eventSearchInput.addEventListener("input", e => {
        const value = (e.target.value || "").toLowerCase();
        clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(() => {
          currentSearchTerm = value.trim();
          renderList();
        }, 180);
      });
    }

    if (modalFavoriteBtn) {
      modalFavoriteBtn.addEventListener("click", () => {
        if (!currentEventId) return;
        toggleFavorite(currentEventId);
      });
    }

    calendarButtons.forEach(btn => {
      btn.addEventListener("click", () => handleCalendarAction(btn.dataset.calendarTarget));
    });

    shareButtons.forEach(btn => {
      btn.addEventListener("click", () => handleShare(btn.dataset.shareTarget));
    });

    if (calendarNavButtons.length) {
      calendarNavButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          const offset = Number(btn.dataset.calendarNav);
          if (Number.isNaN(offset)) return;
          changeCalendarMonth(offset);
        });
      });
    }

    if (nearbySortBtn) {
      nearbySortBtn.addEventListener("click", () => {
        if (locatingUser) return;
        if (sortMode === "distance" && userLocation) {
          clearLocationSorting();
        } else {
          requestUserLocation();
        }
      });
      updateLocationUI();
    }

    initViewMode();
    loadFavorites();
    updateFavoriteToggleState();
    renderCulture("cultureList");
    renderCultureGallery();
    renderHistoryTimeline();
    initTabs();
    initFilters();
    renderFeatured();
    renderList();
    renderFavoriteSection();
    renderWeeklySummary();
    renderCalendarView();
    handleInitialEventFromQuery();

    // 페이지 로드 시 카카오맵 API 상태 확인
    window.addEventListener('load', () => {
      setTimeout(() => {
        if (typeof kakao !== 'undefined' && kakao.maps) {
          console.log('✅ 카카오맵 API 로드 성공! 지도 사용 가능합니다.');
        } else {
          console.error('❌ 카카오맵 API 로드 실패');
          console.log('확인 사항:');
          console.log('1. 카카오 개발자 콘솔에서 도메인 https://leejeonghun1216.github.io 등록 여부 확인');
          console.log('2. JavaScript 키가 올바르게 입력되었는지 확인');
          console.log('3. 설정 변경 후 5-10분 대기 (반영 시간 필요)');
          console.log('4. 브라우저 캐시 삭제 후 재시도');
        }
      }, 500);
    });
