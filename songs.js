lucide.createIcons();

    // قاموس الترجمات (عربي / إنجليزي)
    const translations = {
      ar: {
        page_title: "الأناشيد والأعمال الصوتية | ياسر بن صولان",
        nav_home: "الرئيسية",
        nav_quran: "القرآن الكريم",
        nav_songs: "الأناشيد",
        nav_videos: "الفيديو كليب",
        nav_about: "عن الفنان",
        nav_contact: "التواصل",
        contact_artist: "التواصل مع الفنان",
        hero_badge: "المكتبة الصوتية الأصلية",
        hero_title_prefix: "أناشيد",
        hero_title_name: "ياسر بن صولان",
        hero_desc: "اضغط على أي نشيد للاستماع",
        song_1: "يوم التخرج",
        song_2: "محمد",
        song_3: "كن سعيداً",
        song_4: "أين أنت",
        song_5: "حلّق بعيداً",
        song_6: "حلقة الغربة",
        song_7: "الحب العالمي",
        song_8: "اليوم عيد",
        song_9: "ضحك الهوى",
        song_10: "رمضان الروح",
        song_11: "عبد العزيز",
        song_12: "ذكرياتي",
        song_13: "زوجتي",
        song_14: "يامنزل",
        song_15: "عبد الرحمن",
        song_16: "قلب الام",
        song_17: "يا بوي",
        song_18: "طيبة",
        song_19: "حناجينا",
        song_20: "غذوتك",
        song_21: "مبروك",
        footer_desc: "الموقع الرسمي للمنشد والقارئ ياسر بن صولان لخدمة القرآن الكريم والأناشيد الإسلامية الهادفة.",
        footer_quick_links: "روابط سريعة",
        footer_about_artist: "عن الفنان",
        footer_bio: "السيرة الذاتية",
        footer_contact_us: "اتصل بنا",
        footer_events: "حجز الحفلات والفعاليات",
        footer_social_title: "تابع المنشد عبر منصات التواصل",
        footer_rights: "© جميع الحقوق محفوظة لياسر بن صولان",
        footer_dev: "تطوير حمدي اللقماني"
      },
      en: {
        page_title: "Nasheeds & Audio Works | Yaser Bin Solan",
        nav_home: "Home",
        nav_quran: "Holy Quran",
        nav_songs: "Nasheeds",
        nav_videos: "Video Clips",
        nav_about: "About Artist",
        nav_contact: "Contact",
        contact_artist: "Contact Artist",
        hero_badge: "Original Audio Library",
        hero_title_prefix: "Nasheeds of",
        hero_title_name: "Yaser Bin Solan",
        hero_desc: "Click on any nasheed to listen",
        song_1: "Graduation Day",
        song_2: "Muhammad ﷺ",
        song_3: "Be Happy",
        song_4: "Where Are You",
        song_5: "Fly Away",
        song_6: "Alienation",
        song_7: "Universal Love",
        song_8: "Al Youm Eid",
        song_9: "Dehk El-Hawa",
        song_10: "Ramadan El-Rouh",
        song_11: "Abdulaziz",
        song_12: "Zekrayati",
        song_13: "Zawgty",
        song_14: "Yamonzel",
        song_15: "Abdulrahman",
        song_16: "Qalb Al-Om",
        song_17: "Ya Boy",
        song_18: "Tiabah",
        song_19: "Hena Gena",
        song_20: "Ghazwitak",
        song_21: "Mabrok",
        footer_desc: "The official website of chanter and reciter Yaser Bin Solan dedicated to the Holy Quran and meaningful Islamic nasheeds.",
        footer_quick_links: "Quick Links",
        footer_about_artist: "About Artist",
        footer_bio: "Biography",
        footer_contact_us: "Contact Us",
        footer_events: "Bookings & Events",
        footer_social_title: "Follow on Social Media",
        footer_rights: "© All Rights Reserved to Yaser Bin Solan",
        footer_dev: "Developed by Hamdi Al-Luqmani"
      }
    };

    let currentLang = 'ar';

    const langToggleBtn = document.getElementById('langToggleBtn');
    const htmlRoot = document.getElementById('html-root');

    function switchLanguage(lang) {
      currentLang = lang;
      htmlRoot.setAttribute('lang', lang);
      htmlRoot.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      
      if (lang === 'ar') {
        langToggleBtn.innerHTML = '<img id="lang-flag" src="https://flagcdn.com/w20/us.png" alt="US Flag" class="w-4 h-3 object-cover rounded-xs"> <span id="lang-text">EN</span>';
      } else {
        langToggleBtn.innerHTML = '<img id="lang-flag" src="https://flagcdn.com/w20/sa.png" alt="SA Flag" class="w-4 h-3 object-cover rounded-xs"> <span id="lang-text">AR</span>';
      }

      document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });

      cards.forEach(card => {
        const titleEl = card.querySelector('h3');
        if (titleEl) {
          titleEl.textContent = lang === 'en' ? card.getAttribute('data-title-en') : card.getAttribute('data-title');
        }
      });

      if (currentIndex !== -1 && cards[currentIndex]) {
        playerTitle.textContent = lang === 'en' ? cards[currentIndex].getAttribute('data-title-en') : cards[currentIndex].getAttribute('data-title');
        playerArtist.textContent = lang === 'en' ? cards[currentIndex].getAttribute('data-artist-en') : cards[currentIndex].getAttribute('data-artist');
      }
    }

    langToggleBtn.addEventListener('click', () => {
      switchLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });

    const audio = document.getElementById('globalAudio');
    const playerBar = document.getElementById('globalAudioPlayer');
    const playerTitle = document.getElementById('playerTitle');
    const playerArtist = document.getElementById('playerArtist');
    const playerImg = document.getElementById('playerImg');
    const mainPlayBtn = document.getElementById('mainPlayBtn');
    const progressBar = document.getElementById('progressBar');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');
    const volumeBar = document.getElementById('volumeBar');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const closePlayerBtn = document.getElementById('closePlayerBtn');

    const cards = Array.from(document.querySelectorAll('.song-card'));
    let currentIndex = -1;

    function formatTime(seconds) {
      if (isNaN(seconds)) return '00:00';
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function showPlayer() {
      playerBar.classList.remove('translate-y-full');
    }

    function hidePlayer() {
      audio.pause();
      audio.currentTime = 0;
      updatePlayButton(false);
      playerBar.classList.add('translate-y-full');
      currentIndex = -1;
    }

    if (closePlayerBtn) {
      closePlayerBtn.addEventListener('click', hidePlayer);
    }

    function loadTrack(index, autoPlay = true) {
      if (index < 0 || index >= cards.length) return;
      currentIndex = index;
      const card = cards[currentIndex];
      
      playerTitle.textContent = currentLang === 'en' ? card.getAttribute('data-title-en') : card.getAttribute('data-title');
      playerArtist.textContent = currentLang === 'en' ? card.getAttribute('data-artist-en') : card.getAttribute('data-artist');
      playerImg.src = card.getAttribute('data-img');
      audio.src = card.getAttribute('data-audio');

      showPlayer();
      if (autoPlay) playAudio();
    }

    function playAudio() {
      audio.play().then(() => {
        updatePlayButton(true);
      }).catch(err => console.log('Audio Play Error:', err));
    }

    function pauseAudio() {
      audio.pause();
      updatePlayButton(false);
    }

    function updatePlayButton(isPlaying) {
      const iconName = isPlaying ? 'pause' : 'play';
      mainPlayBtn.innerHTML = `<i data-lucide="${iconName}" class="w-5 h-5 fill-current ${isPlaying ? '' : 'ml-0.5'}"></i>`;
      lucide.createIcons();
    }

    cards.forEach((card, index) => {
      card.addEventListener('click', () => {
        if (currentIndex === index && audio.src) {
          if (audio.paused) playAudio();
          else pauseAudio();
        } else {
          loadTrack(index, true);
        }
      });
    });

    mainPlayBtn.addEventListener('click', () => {
      if (!audio.src && cards.length > 0) {
        loadTrack(0, true);
        return;
      }
      if (audio.paused) playAudio();
      else pauseAudio();
    });

   // تحديث شريط التقدم بمرونة تامة مع اتجاه الصفحة (RTL / LTR)
audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progressPercent;
    
    const isRtl = htmlRoot.getAttribute('dir') === 'rtl';
    
    if (isRtl) {
      // في وضع الـ RTL: اجعل اتجاه الشريط والمؤشر يتطابقان مع الاتجاه العربي
      progressBar.style.direction = 'rtl';
      progressBar.style.background = `linear-gradient(to left, #f59e0b ${progressPercent}%, #1e293b ${progressPercent}%)`;
    } else {
      // في وضع الـ LTR: الاتجاه الإنجليزي القياسي
      progressBar.style.direction = 'ltr';
      progressBar.style.background = `linear-gradient(to right, #f59e0b ${progressPercent}%, #1e293b ${progressPercent}%)`;
    }

    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
  }
});

    progressBar.addEventListener('input', () => {
      if (audio.duration) {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
      }
    });

    volumeBar.addEventListener('input', () => {
      audio.volume = volumeBar.value / 100;
    });

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) loadTrack(currentIndex - 1);
      else loadTrack(cards.length - 1);
    });

    nextBtn.addEventListener('click', () => {
      if (currentIndex < cards.length - 1) loadTrack(currentIndex + 1);
      else loadTrack(0);
    });

    audio.addEventListener('ended', () => {
      if (currentIndex < cards.length - 1) loadTrack(currentIndex + 1);
      else updatePlayButton(false);
    });

    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

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