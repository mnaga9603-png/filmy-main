// ================= DATABASE (MOVIES + WEB SERIES + BIGG BOSS) =================
const moviesDatabase = [
    {
        id: 1,
        type: "movie",
        featured: true,
        title: "Pushpa 2: The Rule",
        year: "2024",
        rating: "8.9",
        quality: "4K UHD",
        category: "Netflix", // DVDRips / Netflix / Prime / Hotstar / Zee5
        ott: "Netflix",
        language: "Telugu (Original)",
        genres: "Action / Crime / Drama",
        director: "Sukumar",
        cast: "Allu Arjun, Rashmika Mandanna, Fahadh Faasil",
        poster: "https://image.tmdb.org/t/p/w500/b0mx1pB3KptpZqT6m6z2s9p2wX5.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/8bp9L2fR5qf1aA5oY5UvC9H3k3S.jpg",
        trailerUrl: "https://www.youtube.com/embed/g3L556vA3Bw",
        description: "Pushpa Raj expands his syndicate globally while locked in an intense battle of wits and power against SP Bhanwar Singh Shekhawat.",
        downloads: [
            { quality: "480p SD - Mobile Quality", size: "~450 MB | x264", cloud: "https://t.me/+fKBhkM9ddl5lNWQ1", fast: "https://gofile.io/d/sample" },
            { quality: "720p HD - Standard Quality", size: "~1.2 GB | HEVC", cloud: "https://t.me/+fKBhkM9ddl5lNWQ1", fast: "https://gofile.io/d/sample" },
            { quality: "1080p FHD - Full HD Quality", size: "~2.4 GB | 5.1 Audio", cloud: "https://t.me/+fKBhkM9ddl5lNWQ1", fast: "https://gofile.io/d/sample" },
            { quality: "4K UHD - Ultra HD HDR", size: "~6.5 GB | Atmos", cloud: "https://t.me/+fKBhkM9ddl5lNWQ1", fast: "https://gofile.io/d/sample" }
        ]
    },
    {
        id: 2,
        type: "show",
        featured: true,
        title: "Bigg Boss Telugu Season 8",
        year: "2024",
        rating: "8.4",
        quality: "Daily Updates",
        category: "Hotstar",
        ott: "Hotstar",
        seasonInfo: "Season 8 (Daily Episode Updates)",
        language: "Telugu (Original)",
        genres: "Reality TV / Entertainment / Drama",
        director: "Star Maa",
        cast: "Nagarjuna Akkineni (Host) & Contestants",
        poster: "https://image.tmdb.org/t/p/w500/8dJyOQ2vXG6mX2T7x0V8iGZz7gA.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/8dJyOQ2vXG6mX2T7x0V8iGZz7gA.jpg",
        trailerUrl: "https://www.youtube.com/embed/example",
        description: "Contestants from various backgrounds are isolated together in a specially constructed house, facing daily tasks, nominations, and weekend eliminations.",
        episodes: [
            {
                epTitle: "Episode 02 (Day 2 - Captaincy Task)",
                airDate: "02 Sept 2024",
                qualities: [
                    { res: "480p SD", size: "~250 MB", cloudDownload: "https://t.me/+fKBhkM9ddl5lNWQ1", fastDownload: "https://gofile.io/d/bb8_ep2_480" },
                    { res: "720p HD", size: "~550 MB", cloudDownload: "https://t.me/+fKBhkM9ddl5lNWQ1", fastDownload: "https://gofile.io/d/bb8_ep2_720" },
                    { res: "1080p FHD", size: "~1.1 GB", cloudDownload: "https://t.me/+fKBhkM9ddl5lNWQ1", fastDownload: "https://gofile.io/d/bb8_ep2_1080" }
                ]
            },
            {
                epTitle: "Episode 01 (Grand Premiere Launch)",
                airDate: "01 Sept 2024",
                qualities: [
                    { res: "480p SD", size: "~350 MB", cloudDownload: "https://t.me/+fKBhkM9ddl5lNWQ1", fastDownload: "https://gofile.io/d/bb8_ep1_480" },
                    { res: "720p HD", size: "~800 MB", cloudDownload: "https://t.me/+fKBhkM9ddl5lNWQ1", fastDownload: "https://gofile.io/d/bb8_ep1_720" },
                    { res: "1080p FHD", size: "~1.6 GB", cloudDownload: "https://t.me/+fKBhkM9ddl5lNWQ1", fastDownload: "https://gofile.io/d/bb8_ep1_1080" }
                ]
            }
        ]
    },
    {
        id: 3,
        type: "series",
        featured: true,
        title: "Dhootha",
        year: "2023",
        rating: "8.5",
        quality: "1080p FHD",
        category: "Prime",
        ott: "Prime",
        seasonInfo: "Season 1 Complete",
        language: "Telugu (Original)",
        genres: "Supernatural / Crime / Mystery Thriller",
        director: "Vikram K. Kumar",
        cast: "Naga Chaitanya, Parvathy Thiruvothu, Priya Bhavani Shankar",
        poster: "https://image.tmdb.org/t/p/w500/8dJyOQ2vXG6mX2T7x0V8iGZz7gA.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/8dJyOQ2vXG6mX2T7x0V8iGZz7gA.jpg",
        trailerUrl: "https://www.youtube.com/embed/example",
        description: "A successful investigative journalist finds himself entangled with newspaper clippings that eerily predict future fatal accidents.",
        seriesPacks: [
            {
                qualityBadge: "480p SD Quality",
                zipTitle: "Complete Season 1 Zip Pack (480p)",
                zipSize: "~1.2 GB (All Episodes in 1 Zip)",
                cloudZip: "https://t.me/+fKBhkM9ddl5lNWQ1",
                fastZip: "https://gofile.io/d/sample"
            },
            {
                qualityBadge: "720p HD Quality",
                zipTitle: "Complete Season 1 Zip Pack (720p)",
                zipSize: "~2.8 GB (All Episodes in 1 Zip)",
                cloudZip: "https://t.me/+fKBhkM9ddl5lNWQ1",
                fastZip: "https://gofile.io/d/sample"
            },
            {
                qualityBadge: "1080p FHD Quality",
                zipTitle: "Complete Season 1 Zip Pack (1080p)",
                zipSize: "~5.5 GB (All Episodes 5.1 Audio)",
                cloudZip: "https://t.me/+fKBhkM9ddl5lNWQ1",
                fastZip: "https://gofile.io/d/sample"
            }
        ]
    }
];

// ================= HERO BANNER AUTO-SLIDER =================
let currentHeroSlideIndex = 0;
let heroSliderInterval = null;

function getFeaturedSliderItems() {
    const featured = moviesDatabase.filter(m => m.featured && m.backdrop);
    return featured.length > 0 ? featured : moviesDatabase.filter(m => m.backdrop).slice(0, 5);
}

function initHeroSlider() {
    renderHeroDots();
    displayHeroSlide(currentHeroSlideIndex);
    startHeroSliderAutoPlay();
}

function renderHeroDots() {
    const dotsContainer = document.getElementById('heroDotsContainer');
    const items = getFeaturedSliderItems();
    if (!dotsContainer || items.length === 0) return;
    
    dotsContainer.innerHTML = items.map((_, idx) => `
        <button onclick="goToHeroSlide(${idx})" class="w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentHeroSlideIndex ? 'bg-brand-red w-6' : 'bg-white/40 hover:bg-white'}"></button>
    `).join('');
}

function displayHeroSlide(index) {
    const items = getFeaturedSliderItems();
    if (items.length === 0) return;
    
    const item = items[index % items.length];
    if (!item) return;

    const imgEl = document.getElementById('heroImage');
    const contentEl = document.getElementById('heroContentBox');

    imgEl.classList.add('slide-fade-out');
    contentEl.classList.add('slide-fade-out');

    setTimeout(() => {
        imgEl.src = item.backdrop;
        imgEl.onerror = () => { imgEl.src = item.poster; };

        document.getElementById('heroTypeBadge').innerText = item.type === 'show' ? 'Reality TV Show' : (item.type === 'series' ? 'Featured Series' : 'Trending Movie');
        document.getElementById('heroQualityBadge').innerText = item.quality;
        document.getElementById('heroYear').innerText = item.year;
        document.getElementById('heroTitle').innerText = item.title;
        document.getElementById('heroDesc').innerText = item.description;

        document.getElementById('heroDownloadBtn').onclick = () => openMovieDetails(item.id);
        document.getElementById('heroTrailerBtn').onclick = () => playTrailer(item.trailerUrl);

        imgEl.classList.remove('slide-fade-out');
        contentEl.classList.remove('slide-fade-out');
        renderHeroDots();
    }, 350);
}

function nextHeroSlide() {
    const items = getFeaturedSliderItems();
    if (items.length <= 1) return;
    currentHeroSlideIndex = (currentHeroSlideIndex + 1) % items.length;
    displayHeroSlide(currentHeroSlideIndex);
    resetHeroSliderAutoPlay();
}

function prevHeroSlide() {
    const items = getFeaturedSliderItems();
    if (items.length <= 1) return;
    currentHeroSlideIndex = (currentHeroSlideIndex - 1 + items.length) % items.length;
    displayHeroSlide(currentHeroSlideIndex);
    resetHeroSliderAutoPlay();
}

function goToHeroSlide(index) {
    currentHeroSlideIndex = index;
    displayHeroSlide(currentHeroSlideIndex);
    resetHeroSliderAutoPlay();
}

function startHeroSliderAutoPlay() {
    if (heroSliderInterval) clearInterval(heroSliderInterval);
    heroSliderInterval = setInterval(() => {
        const items = getFeaturedSliderItems();
        if (items.length > 1) {
            currentHeroSlideIndex = (currentHeroSlideIndex + 1) % items.length;
            displayHeroSlide(currentHeroSlideIndex);
        }
    }, 4500);
}

function resetHeroSliderAutoPlay() {
    clearInterval(heroSliderInterval);
    startHeroSliderAutoPlay();
}

// ================= PAGINATION & MOVIES GRID =================
let currentPage = 1;
const moviesPerPage = 6;
let currentList = [];

function renderPaginatedMovies(list) {
    currentList = list;
    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const paginatedItems = list.slice(startIndex, endIndex);

    renderMoviesGrid(paginatedItems);
    renderPaginationButtons(list);
}

function renderMoviesGrid(list) {
    const container = document.getElementById('moviesGrid');
    document.getElementById('moviesCountBadge').innerText = `Total ${currentList.length} Items (Page ${currentPage})`;

    if (list.length === 0) {
        container.innerHTML = `<div class="col-span-full py-16 text-center text-gray-400">No content found matching your criteria.</div>`;
        return;
    }

    container.innerHTML = list.map(item => `
        <div onclick="openMovieDetails(${item.id})" class="glass-card rounded-2xl overflow-hidden cursor-pointer group hover:border-brand-red transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-brand-red/20">
            <div class="relative aspect-[2/3] overflow-hidden bg-black">
                <img src="${item.poster}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/300x450/14161d/ffffff?text=${encodeURIComponent(item.title)}'" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                <div class="absolute top-2 left-2 bg-black/80 backdrop-blur-sm text-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded border border-white/10">
                    ★ ${item.rating}
                </div>
                <div class="absolute top-2 right-2 ${item.type === 'show' ? 'bg-orange-600' : (item.type === 'series' ? 'bg-emerald-600' : 'bg-brand-red')} text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wide">
                    ${item.type === 'show' ? 'TV Show' : (item.type === 'series' ? 'Web Series' : item.quality)}
                </div>
            </div>
            <div class="p-3">
                <h3 class="font-bold text-xs sm:text-sm text-white truncate group-hover:text-brand-red transition-colors">${item.title}</h3>
                <div class="flex items-center justify-between text-[11px] text-gray-400 mt-1">
                    <span>${item.year}</span>
                    <span class="text-brand-red font-semibold">${item.ott}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderPaginationButtons(list) {
    const totalPages = Math.ceil(list.length / moviesPerPage);
    const container = document.getElementById('paginationContainer');
    
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }

    let buttonsHtml = '';
    if (currentPage > 1) {
        buttonsHtml += `<button onclick="goToPage(${currentPage - 1})" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-brand-cardBg text-gray-300 hover:text-white border border-brand-cardBorder"><i class="fas fa-chevron-left"></i> Prev</button>`;
    }

    for (let i = 1; i <= totalPages; i++) {
        buttonsHtml += `<button onclick="goToPage(${i})" class="px-3.5 py-1.5 rounded-lg text-xs font-bold ${currentPage === i ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30' : 'bg-brand-cardBg text-gray-400 hover:text-white border border-brand-cardBorder'}">${i}</button>`;
    }

    if (currentPage < totalPages) {
        buttonsHtml += `<button onclick="goToPage(${currentPage + 1})" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-brand-cardBg text-gray-300 hover:text-white border border-brand-cardBorder">Next <i class="fas fa-chevron-right"></i></button>`;
    }

    container.innerHTML = buttonsHtml;
}

function goToPage(pageNumber) {
    currentPage = pageNumber;
    renderPaginatedMovies(currentList);
    window.scrollTo({ top: 480, behavior: 'smooth' });
}

function renderPopularList() {
    const listContainer = document.getElementById('popularList');
    const popular = moviesDatabase.slice(0, 4);
    listContainer.innerHTML = popular.map(m => `
        <div onclick="openMovieDetails(${m.id})" class="flex items-center gap-3 cursor-pointer group p-1.5 rounded-xl hover:bg-white/5 transition-colors">
            <img src="${m.poster}" class="w-12 h-16 object-cover rounded-lg shrink-0">
            <div class="overflow-hidden">
                <h4 class="text-xs font-bold text-white truncate group-hover:text-brand-red">${m.title}</h4>
                <div class="text-[10px] text-gray-400">${m.year} • ★ ${m.rating}</div>
            </div>
        </div>
    `).join('');
}

// ================= DYNAMIC DETAILS & DOWNLOAD BUILDER =================
function openMovieDetails(id, pushHistory = true) {
    const item = moviesDatabase.find(m => m.id === id);
    if (!item) return;

    document.getElementById('breadcrumbTitle').innerText = item.title;
    document.getElementById('detailPoster').src = item.poster;
    document.getElementById('detailTitle').innerText = item.title;
    document.getElementById('detailYear').innerText = item.year;
    document.getElementById('detailRating').innerHTML = `<i class="fas fa-star mr-1"></i> ${item.rating}/10`;
    document.getElementById('detailGenres').innerText = item.genres;
    document.getElementById('detailDesc').innerText = item.description;
    document.getElementById('detailQualityBadge').innerText = item.type === 'show' ? 'TV Show' : (item.type === 'series' ? 'Web Series' : item.quality);

    const seriesBadge = document.getElementById('seriesBadgeInfo');
    const dlContainer = document.getElementById('dynamicDownloadContainer');

    // 1. BIGG BOSS / REALITY SHOWS
    if (item.type === 'show') {
        seriesBadge.innerText = item.seasonInfo || "Daily Reality Show";
        seriesBadge.classList.remove('hidden');
        document.getElementById('downloadSectionTitle').innerHTML = `<i class="fas fa-tv text-orange-400"></i> Daily Episodes (Cloud & Fast Download)`;

        dlContainer.innerHTML = item.episodes.map(ep => `
            <div class="p-4 sm:p-5 rounded-2xl bg-brand-darkBg/95 border border-brand-cardBorder space-y-3.5 shadow-xl hover:border-orange-500/40 transition-all">
                <div class="flex items-center justify-between border-b border-brand-cardBorder/60 pb-2.5">
                    <span class="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                        <i class="fas fa-play-circle text-orange-400"></i> ${ep.epTitle}
                    </span>
                    <span class="text-[10px] text-gray-400 font-semibold bg-white/5 px-2 py-0.5 rounded border border-white/10">
                        ${ep.airDate}
                    </span>
                </div>

                <div class="space-y-2.5">
                    ${ep.qualities.map(q => `
                        <div class="p-3 rounded-xl bg-brand-cardBg/60 border border-brand-cardBorder/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                            <div class="flex items-center gap-2">
                                <span class="bg-orange-500/20 text-orange-400 border border-orange-500/30 text-[10px] font-black px-2 py-0.5 rounded uppercase">
                                    ${q.res}
                                </span>
                                <span class="text-[11px] text-gray-300 font-medium">Size: ${q.size}</span>
                            </div>

                            <div class="grid grid-cols-2 gap-2 sm:w-auto w-full">
                                <button data-url="${q.cloudDownload}" onclick="startDownloadTimer(this, 'Cloud Download (${ep.epTitle} - ${q.res})')" class="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 text-white font-bold text-[11px] py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 transition-all">
                                    <i class="fas fa-cloud-arrow-down"></i> Cloud Download
                                </button>
                                <button data-url="${q.fastDownload}" onclick="startDownloadTimer(this, 'Fast Download (${ep.epTitle} - ${q.res})')" class="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 text-white font-bold text-[11px] py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-md shadow-purple-600/20 transition-all">
                                    <i class="fas fa-bolt"></i> Fast Download
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');

    // 2. WEB SERIES COMPLETE ZIP PACKS
    } else if (item.type === 'series') {
        seriesBadge.innerText = item.seasonInfo || "Web Series";
        seriesBadge.classList.remove('hidden');
        document.getElementById('downloadSectionTitle').innerHTML = `<i class="fas fa-tv text-emerald-400"></i> Series Downloads (Zip Packs)`;

        dlContainer.innerHTML = item.seriesPacks.map(pack => `
            <div class="p-4 rounded-2xl bg-brand-darkBg/95 border border-brand-cardBorder space-y-3.5 shadow-lg">
                <div class="flex items-center justify-between border-b border-brand-cardBorder/60 pb-2.5">
                    <div class="flex items-center gap-2">
                        <span class="bg-brand-red/20 text-brand-red border border-brand-red/30 text-[11px] font-black px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                            ${pack.qualityBadge}
                        </span>
                        <span class="text-xs font-bold text-white">${pack.zipTitle}</span>
                    </div>
                    <span class="text-[10px] text-gray-400 font-medium">${pack.zipSize}</span>
                </div>

                <div class="space-y-1.5">
                    <div class="text-[11px] text-yellow-400 font-semibold flex items-center gap-1.5">
                        <i class="fas fa-file-zipper"></i> Complete Season Zip:
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <button data-url="${pack.cloudZip}" onclick="startDownloadTimer(this, 'Cloud Zip (${pack.qualityBadge})')" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-all">
                            <i class="fas fa-cloud-arrow-down"></i> Cloud Download Zip
                        </button>
                        <button data-url="${pack.fastZip}" onclick="startDownloadTimer(this, 'Fast Cloud Zip (${pack.qualityBadge})')" class="bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-all">
                            <i class="fas fa-bolt"></i> Fast Download Zip
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

    // 3. REGULAR MOVIES
    } else {
        seriesBadge.classList.add('hidden');
        document.getElementById('downloadSectionTitle').innerHTML = `<i class="fas fa-download text-emerald-400"></i> Download Links & Qualities`;

        dlContainer.innerHTML = item.downloads.map(dl => `
            <div class="p-4 rounded-2xl bg-brand-darkBg/90 border border-brand-cardBorder space-y-3">
                <div class="flex items-center justify-between border-b border-brand-cardBorder/50 pb-2">
                    <div>
                        <span class="text-xs font-bold text-white uppercase tracking-wide">${dl.quality}</span>
                        <span class="text-[10px] text-gray-400 block">Size: ${dl.size}</span>
                    </div>
                    <span class="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold px-2 py-0.5 rounded">Fast</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button data-url="${dl.cloud}" onclick="startDownloadTimer(this, 'Cloud Download')" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-all">
                        <i class="fas fa-cloud-arrow-down"></i> Cloud Download
                    </button>
                    <button data-url="${dl.fast}" onclick="startDownloadTimer(this, 'Fast Download')" class="bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-all">
                        <i class="fas fa-bolt"></i> Fast Download
                    </button>
                </div>
            </div>
        `).join('');
    }

    document.getElementById('detailTrailerBtn').onclick = () => playTrailer(item.trailerUrl);

    document.getElementById('homeView').classList.add('hidden');
    document.getElementById('movieDetailView').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (pushHistory) {
        history.pushState({ view: 'detail', id: id }, '', `#item-${id}`);
    }
}

// ================= DYNAMIC CATEGORY & OTT FILTERING =================
function filterCategory(cat) {
    currentPage = 1;

    // బటన్ కలర్స్ మార్చడం
    document.querySelectorAll('.filter-chip').forEach(btn => {
        btn.classList.remove('active', 'bg-brand-red', 'text-white');
        btn.classList.add('bg-brand-cardBg', 'text-gray-300');
    });
    
    if (window.event && window.event.target) {
        const clickedBtn = window.event.target.closest('.filter-chip');
        if (clickedBtn) {
            clickedBtn.classList.add('active', 'bg-brand-red', 'text-white');
            clickedBtn.classList.remove('bg-brand-cardBg', 'text-gray-300');
        }
    }

    const data = [...moviesDatabase];

    if (cat === 'ALL') {
        renderPaginatedMovies(data);
    } else if (cat === 'Series') {
        // సిరీస్ & టీవీ షోలను మాత్రమే ఫిల్టర్ చేస్తుంది
        const filtered = data.filter(m => m.type === 'series' || m.type === 'show');
        renderPaginatedMovies(filtered);
    } else {
        // Prime, Netflix, Hotstar, Zee5, DVDRips లలో ఉన్న సినిమాలు & సిరీస్‌లు రెండింటినీ చూపిస్తుంది
        const filtered = data.filter(m => 
            (m.ott && m.ott.toLowerCase().includes(cat.toLowerCase())) ||
            (m.category && m.category.toLowerCase().includes(cat.toLowerCase())) ||
            (m.quality && m.quality.toLowerCase().includes(cat.toLowerCase()))
        );
        renderPaginatedMovies(filtered);
    }
}

function navFilterCategory(cat) {
    showHomeView(false);
    filterCategory(cat);
}

// ================= PAGE VIEWS & SEARCH =================
function showHomeView(pushHistory = true) {
    document.getElementById('homeView').classList.remove('hidden');
    document.getElementById('movieDetailView').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const searchInput = document.getElementById('searchInput');
    const searchInputMobile = document.getElementById('searchInputMobile');
    if (searchInput) searchInput.value = '';
    if (searchInputMobile) searchInputMobile.value = '';

    document.querySelectorAll('.filter-chip').forEach(btn => {
        btn.classList.remove('active', 'bg-brand-red', 'text-white');
        btn.classList.add('bg-brand-cardBg', 'text-gray-300');
        if (btn.innerText.includes('All Content')) {
            btn.classList.add('active', 'bg-brand-red', 'text-white');
            btn.classList.remove('bg-brand-cardBg', 'text-gray-300');
        }
    });

    currentPage = 1;
    renderPaginatedMovies([...moviesDatabase]);

    if (pushHistory) {
        history.pushState({ view: 'home' }, '', '#home');
    }
}

window.addEventListener('popstate', function(event) {
    if (event.state && event.state.view === 'detail') {
        openMovieDetails(event.state.id, false);
    } else {
        showHomeView(false);
    }
});

// ================= 5-SECOND TIMER LOGIC =================
let timerCountdownInterval = null;

function startDownloadTimer(buttonEl, methodName = 'Server') {
    const targetUrl = buttonEl.getAttribute('data-url');
    if (!targetUrl || targetUrl === "#") {
        alert("ఈ లింక్ ప్రస్తుతం అందుబాటులో లేదు!");
        return;
    }

    const modal = document.getElementById('timerModal');
    const headingEl = document.getElementById('timerModalHeading');
    const countdownBox = document.getElementById('countdownBox');
    const countdownNumberEl = document.getElementById('countdownNumber');
    const manualBtn = document.getElementById('directManualLinkBtn');
    const methodText = document.getElementById('timerMethodText');
    const subText = document.getElementById('timerSubText');

    let countdown = 5;
    
    headingEl.innerText = "Generating Download Link";
    methodText.innerText = `[${methodName}] లింక్ వెరిఫై అవుతోంది, దయచేసి వేచి ఉండండి...`;
    subText.innerText = "దయచేసి 5 సెకన్లు వేచి ఉండండి...";
    countdownNumberEl.innerText = countdown;
    countdownBox.classList.remove('hidden');
    manualBtn.classList.add('hidden');
    manualBtn.href = targetUrl;

    modal.classList.remove('hidden');

    if (timerCountdownInterval) clearInterval(timerCountdownInterval);

    timerCountdownInterval = setInterval(() => {
        countdown--;
        countdownNumberEl.innerText = countdown;

        if (countdown <= 0) {
            clearInterval(timerCountdownInterval);
            countdownBox.classList.add('hidden');
            headingEl.innerText = "Link Generated Successfully! 🎉";
            methodText.innerText = "మీ డౌన్‌లోడ్ లింక్ సిద్ధంగా ఉంది.";
            subText.innerText = "డౌన్‌లోడ్ చేయడానికి క్రింది బటన్ పై క్లిక్ చేయండి:";
            manualBtn.classList.remove('hidden');
        }
    }, 1000);
}

function handleLiveSearch(query) {
    const q = query.toLowerCase().trim();
    currentPage = 1;
    const filtered = moviesDatabase.filter(m => 
        m.title.toLowerCase().includes(q) ||
        m.genres.toLowerCase().includes(q) ||
        m.cast.toLowerCase().includes(q)
    );
    renderPaginatedMovies(filtered);
}

// Modal Helpers
function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
    if (id === 'trailerModal') document.getElementById('trailerIframe').src = '';
}
function playTrailer(url) {
    document.getElementById('trailerIframe').src = url;
    openModal('trailerModal');
}
function toggleMobileSearch() { document.getElementById('mobileSearchBox').classList.toggle('hidden'); }
function toggleMobileMenu() { document.getElementById('mobileMenu').classList.toggle('hidden'); }

function submitMovieRequest() {
    const name = document.getElementById('reqMovieName').value.trim();
    if (name) {
        alert(`ధన్యవాదాలు! మీ రిక్వెస్ట్ "${name}" నమోదు చేయబడింది.`);
        closeModal('requestMovieModal');
        document.getElementById('reqMovieName').value = '';
    } else {
        alert('దయచేసి సినిమా లేదా సిరీస్ పేరు నమోదు చేయండి.');
    }
}

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash.startsWith('#item-')) {
        const itemId = parseInt(window.location.hash.replace('#item-', ''));
        openMovieDetails(itemId, false);
    } else {
        history.replaceState({ view: 'home' }, '', '#home');
    }

    renderPaginatedMovies([...moviesDatabase]);
    renderPopularList();
    initHeroSlider();
});
