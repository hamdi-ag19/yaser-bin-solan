// تهيئة أيقونات Lucide
lucide.createIcons();

// نصوص الترجمة بين العربية والإنجليزية
const translations = {
  ar: {
    pageTitle: "قرآن كريم | ياسر بن صولان - Yaser Bin Solan",
    navHome: "الرئيسية",
    navQuran: "القرآن الكريم",
    navSongs: "الأناشيد",
    navVideos: "الفيديو كليب",
    navAbout: "عن الفنان",
    navContact: "التواصل",
    contactArtist: "التواصل مع الفنان",
    mainTitlePart1: "تلاوة عطرة",
    mainTitlePart2: "من القرآن الكريم",
    mainSubtitle: "تلاوات خاشعة بصوت القارئ ياسر بن صولان (40 سورة مباركة)",
    featuredTitle: "تلاوات خاشعة ومميزة",
    featuredSubtitle: "اختيارات ممتازة تمتاز بالروحانية والخشوع العالي",
    badgeFeatured: "مميزة",
    listenNow: "استماع الآن",
    artistName: "ياسر بن صولان",
    footerDesc: "الموقع الرسمي للمنشد والقارئ ياسر بن صولان لخدمة القرآن الكريم والأناشيد الإسلامية الهادفة.",
    quickLinks: "روابط سريعة",
    aboutArtistTitle: "عن الفنان",
    bookingLink: "حجز الحفلات والفعاليات",
    socialTitle: "تابع المنشد عبر منصات التواصل",
    copyRights: "© جميع الحقوق محفوظة لياسر بن صولان",
    developerBy: "تطوير حمدي اللقماني",
    playerDefault: "اختر سورة للتلاوة",
    
    // أسماء السور
    surahFateha: "سورة الفاتحة",
    surahBaqara: "سورة البقرة",
    surahKahf: "سورة الكهف",
    surahNaba: "سورة النبأ",
    surahNaziate: "سورة النازعات",
    surahAbasa: "سورة عبس",
    surahTakwir: "سورة التكوير",
    surahInfitar: "سورة الانفطار",
    surahMutaffifin: "سورة المطففين",
    surahInshiqaq: "سورة الانشقاق",
    surahBurooj: "سورة البروج",
    surahTariq: "سورة الطارق",
    surahAla: "سورة الأعلى",
    surahGhashiyah: "سورة الغاشية",
    surahFajr: "سورة الفجر",
    surahBalad: "سورة البلد",
    surahShams: "سورة الشمس",
    surahLail: "سورة الليل",
    surahDuha: "سورة الضحى",
    surahSharh: "سورة الشرح",
    surahTeen: "سورة التين",
    surahAlaq: "سورة العلق",
    surahQadr: "سورة القدر",
    surahBayyinah: "سورة البينة",
    surahZalzalah: "سورة الزلزلة",
    surahAadiyat: "سورة العاديات",
    surahQariah: "سورة القارعة",
    surahTakathur: "سورة التكاثر",
    surahAsr: "سورة العصر",
    surahHumazah: "سورة الهمزة",
    surahFeel: "سورة الفيل",
    surahQuraish: "سورة قريش",
    surahMaoun: "سورة الماعون",
    surahKawthar: "سورة الكوثر",
    surahKafiroun: "سورة الكافرون",
    surahNasr: "سورة النصر",
    surahMasad: "سورة المسد",
    surahIkhlas: "سورة الإخلاص",
    surahFalaq: "سورة الفلق",
    surahNas: "سورة الناس",
    featuredKahfDesc: "تلاوة خاشعة ليوم الجمعة",
    featuredFatehaDesc: "أم الكتاب والأداء الخاشع",
    featuredNabaDesc: "من أروع تلاوات جزء عم",
  },
  en: {
    pageTitle: "Holy Quran | Yaser Bin Solan",
    navHome: "Home",
    navQuran: "Holy Quran",
    navSongs: "Nasheeds",
    navVideos: "Video Clips",
    navAbout: "About Artist",
    navContact: "Contact",
    contactArtist: "Contact Artist",
    mainTitlePart1: "Fragrant Recitation",
    mainTitlePart2: "From the Holy Quran",
    mainSubtitle: "Humble recitations by reciter Yaser Bin Solan (40 Blessed Surahs)",
    featuredTitle: "Featured Humble Recitations",
    featuredSubtitle: "Excellent selections characterized by high spirituality and reverence",
    badgeFeatured: "Featured",
    listenNow: "Listen Now",
    artistName: "Yaser Bin Solan",
    footerDesc: "The official website of vocalist and reciter Yaser Bin Solan serving the Holy Quran and purposeful Islamic nasheeds.",
    quickLinks: "Quick Links",
    aboutArtistTitle: "About Artist",
    bookingLink: "Book Concerts & Events",
    socialTitle: "Follow the Artist on Social Media",
    copyRights: "© All rights reserved to Yaser Bin Solan",
    developerBy: "Developed by Hamdi Al-Lugmani",
    playerDefault: "Choose a Surah to recite",
    
    // Surahs
    surahFateha: "Surah Al-Fatihah",
    surahBaqara: "Surah Al-Baqarah",
    surahKahf: "Surah Al-Kahf",
    surahNaba: "Surah An-Naba",
    surahNaziate: "Surah An-Nazi'at",
    surahAbasa: "Surah 'Abasa",
    surahTakwir: "Surah At-Takwir",
    surahInfitar: "Surah Al-Infitar",
    surahMutaffifin: "Surah Al-Mutaffifin",
    surahInshiqaq: "Surah Al-Inshiqaq",
    surahBurooj: "Surah Al-Burooj",
    surahTariq: "Surah At-Tariq",
    surahAla: "Surah Al-A'la",
    surahGhashiyah: "Surah Al-Ghashiyah",
    surahFajr: "Surah Al-Fajr",
    surahBalad: "Surah Al-Balad",
    surahShams: "Surah Ash-Shams",
    surahLail: "Surah Al-Lail",
    surahDuha: "Surah Ad-Duha",
    surahSharh: "Surah Ash-Sharh",
    surahTeen: "Surah At-Tin",
    surahAlaq: "Surah Al-Alaq",
    surahQadr: "Surah Al-Qadr",
    surahBayyinah: "Surah Al-Bayyinah",
    surahZalzalah: "Surah Az-Zalzalah",
    surahAadiyat: "Surah Al-A'diyat",
    surahQariah: "Surah Al-Qari'ah",
    surahTakathur: "Surah At-Takathur",
    surahAsr: "Surah Al-Asr",
    surahHumazah: "Surah Al-Humazah",
    surahFeel: "Surah Al-Fil",
    surahQuraish: "Surah Quraish",
    surahMaoun: "Surah Al-Ma'un",
    surahKawthar: "Surah Al-Kawthar",
    surahKafiroun: "Surah Al-Kafirun",
    surahNasr: "Surah An-Nasr",
    surahMasad: "Surah Al-Masad",
    surahIkhlas: "Surah Al-Ikhlas",
    surahFalaq: "Surah Al-Falaq",
    surahNas: "Surah An-Nas",
    featuredKahfDesc: "Humble recitation for Friday",
    featuredFatehaDesc: "The Mother of the Book and reverent performance",
    featuredNabaDesc: "One of the finest recitations of Juz Amma",
  }
};

let currentLang = 'ar';

// جلب العناصر الأساسية عبر الـ ID حصراً
const langToggleBtn = document.getElementById('langToggleBtn');
const htmlRoot = document.getElementById('htmlRoot') || document.getElementById('html-root');
const audio = document.getElementById('audioElement') || new Audio();
const playerBar = document.getElementById('globalAudioPlayer');
const playerTitle = document.getElementById('playerTitle');
const playerImg = document.getElementById('playerImg');
const mainPlayBtn = document.getElementById('mainPlayBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const volumeBar = document.getElementById('volumeBar');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const closePlayerBtn = document.getElementById('closePlayerBtn');
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

const cards = Array.from(document.querySelectorAll('.surah-card'));
let currentIndex = -1;

function switchLanguage(lang) {
  currentLang = lang;
  if (htmlRoot) {
    htmlRoot.setAttribute('lang', lang);
    htmlRoot.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }
  
  if (langToggleBtn) {
    if (lang === 'ar') {
      langToggleBtn.innerHTML = '<img id="lang-flag" src="https://flagcdn.com/w20/us.png" alt="US Flag" class="w-4 h-3 object-cover rounded-xs"> <span id="lang-text">EN</span>';
    } else {
      langToggleBtn.innerHTML = '<img id="lang-flag" src="https://flagcdn.com/w20/sa.png" alt="SA Flag" class="w-4 h-3 object-cover rounded-xs"> <span id="lang-text">AR</span>';
    }
  }

  // دعم المعرفات وسمات الترجمة
  document.querySelectorAll('[data-translate], [data-i18n]').forEach(el => {
    const key = el.getAttribute('data-translate') || el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  if (playerBar) {
    playerBar.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }
}

if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'ar' ? 'en' : 'ar';
    switchLanguage(nextLang);
  });
}

function formatTime(seconds) {
  if (isNaN(seconds)) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function loadTrack(index) {
  if (index < 0 || index >= cards.length) return;
  currentIndex = index;
  const card = cards[currentIndex];
  const titleKey = card.getAttribute('data-translate') || card.getAttribute('data-i18n');
  const title = (translations[currentLang] && translations[currentLang][titleKey]) ? translations[currentLang][titleKey] : card.getAttribute('data-title');
  const src = card.getAttribute('data-audio');
  const img = card.getAttribute('data-img');

  if (playerTitle) playerTitle.textContent = title;
  if (playerImg) playerImg.src = img;
  audio.src = src;

  if (playerBar) {
    playerBar.classList.remove('translate-y-full');
  }
  playAudio();
}

function playAudio() {
  audio.play();
  if (mainPlayBtn) {
    mainPlayBtn.innerHTML = '<i data-lucide="pause" class="w-5 h-5 fill-current"></i>';
    lucide.createIcons();
  }
}

function pauseAudio() {
  audio.pause();
  if (mainPlayBtn) {
    mainPlayBtn.innerHTML = '<i data-lucide="play" class="w-5 h-5 fill-current ml-0.5" id="mainPlayIcon"></i>';
    lucide.createIcons();
  }
}

function closePlayer() {
  audio.pause();
  audio.currentTime = 0;
  currentIndex = -1;
  if (playerBar) {
    playerBar.classList.add('translate-y-full');
  }
}

if (closePlayerBtn) {
  closePlayerBtn.addEventListener('click', closePlayer);
}

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    if (progressBar) {
      progressBar.value = progressPercent;
      progressBar.style.background = `linear-gradient(to right, #f59e0b ${progressPercent}%, #1e293b ${progressPercent}%)`;
    }
    if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);
    if (durationEl) durationEl.textContent = formatTime(audio.duration);
  }
});

if (volumeBar) {
  volumeBar.addEventListener('input', (e) => {
    audio.volume = e.target.value / 100;
  });
}

if (progressBar) {
  progressBar.addEventListener('input', (e) => {
    if (audio.duration) {
      audio.currentTime = (e.target.value / 100) * audio.duration;
    }
  });
}

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    if (currentIndex === index) {
      if (audio.paused) playAudio();
      else pauseAudio();
    } else {
      loadTrack(index);
    }
  });
});

if (mainPlayBtn) {
  mainPlayBtn.addEventListener('click', () => {
    if (!audio.src) return;
    if (audio.paused) playAudio();
    else pauseAudio();
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) loadTrack(currentIndex + 1);
    else loadTrack(0);
  });
}

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) loadTrack(currentIndex - 1);
    else loadTrack(cards.length - 1);
  });
}

audio.addEventListener('ended', () => {
  if (currentIndex < cards.length - 1) loadTrack(currentIndex + 1);
});

if (menuBtn && mobileMenu) {
  function toggleMenu() {
    const isHidden = mobileMenu.classList.toggle('hidden');
    menuBtn.innerHTML = isHidden 
      ? '<i data-lucide="menu" class="w-6 h-6 transition-transform duration-300"></i>' 
      : '<i data-lucide="x" class="w-6 h-6 transition-transform duration-300"></i>';
    lucide.createIcons();
  }

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener('click', (e) => {
    if (!mobileMenu.classList.contains('hidden') && !mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      mobileMenu.classList.add('hidden');
      menuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6 transition-transform duration-300"></i>';
      lucide.createIcons();
    }
  });
}