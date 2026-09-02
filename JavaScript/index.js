 lucide.createIcons();

    const translations = {
      ar: {
        "page-title": "ياسر بن صولان | Yaser Bin Solan - الموقع الرسمي",
        "nav-home": "الرئيسية",
        "nav-quran": "القرآن الكريم",
        "nav-songs": "الأناشيد",
        "nav-videos": "الفيديو كليب",
        "nav-about": "عن الفنان",
        "nav-contact": "التواصل",
        "btn-contact": "التواصل مع الفنان",
        "hero-badge": "من أجمل أصوات العالم العربي",
        "hero-title-1": "أناشيد هادفة..",
        "hero-title-2": "ونفحات روحانية",
        "hero-desc": "الموقع الرسمي للمنشد ياسر بن صولان. استمع إلى أحدث الإنتاجات الصوتية، الأناشيد الهادفة، والتلاوات الخاشعة بأعلى جودة.",
        "btn-listen-all": "استمع للأعمال الكاملة",
        "btn-quran": "القرآن الكريم",
        "section-latest-audio": "أحدث الأعمال الصوتية",
        "section-latest-audio-desc": "باقة من أحدث الأناشيد والتسجيلات",
        "view-all": "عرض الكل",
        "track-1-title": "يوم التخرج",
        "track-1-sub": "Graduation Day",
        "track-2-title": " محمد",
        "track-2-sub": "Mohammed",
        "track-3-title": "كن سعيداً",
        "track-3-sub": "Be happy",
        "stat-1": "عمل إنشادي مميز",
        "stat-2-num": "صوت نقي",
        "stat-2-desc": "بجودة استديو عالية",
        "stat-3-num": "المصحف",
        "stat-3-desc": "تلاوات خاشعة",
        "stat-4-num": "حجز فعاليات",
        "stat-4-desc": " سنوات من العطاء",
        "video-section-title": "أحدث الفيديو كليب",
        "video-section-desc": "شاهد أحدث الإنتاجات المرئية من قناة الفنان (YaserBinSolan@)",
        "all-videos": "جميع الفيديوهات",
        "video-badge": "يوتيوب YaserBinSolan@",
        "video-title": "كليب يوم التخرج - إبداع بصري وصوتي",
        "footer-about": "الموقع الرسمي للمنشد والقارئ ياسر بن صولان لخدمة القرآن الكريم والأناشيد الإسلامية الهادفة.",
        "footer-links": "روابط سريعة",
        "footer-artist": "عن الفنان",
        "footer-bio": "السيرة الذاتية",
        "footer-contact": "اتصل بنا",
        "footer-booking": "حجز الحفلات والفعاليات",
        "footer-social-title": "تابع المنشد عبر منصات التواصل",
        "footer-rights": "© جميع الحقوق محفوظة لياسر بن صولان",
        "footer-dev": "تطوير حمدي اللقماني"
      },
      en: {
        "page-title": "Yaser Bin Solan | Official Website",
        "nav-home": "Home",
        "nav-quran": "Quran",
        "nav-songs": "Nasheeds",
        "nav-videos": "Music Videos",
        "nav-about": "About",
        "nav-contact": "Contact",
        "btn-contact": "Contact Artist",
        "hero-badge": "One of the Finest Voices in the Arab World",
        "hero-title-1": "Meaningful Nasheeds..",
        "hero-title-2": "Spiritual Melodies",
        "hero-desc": "The official website of vocalist Yaser Bin Solan. Listen to the latest audio releases, purposeful nasheeds, and heartfelt Quran recitations in highest quality.",
        "btn-listen-all": "Listen to All Tracks",
        "btn-quran": "Holy Quran",
        "section-latest-audio": "Latest Audio Releases",
        "section-latest-audio-desc": "A collection of the latest nasheeds and recordings",
        "view-all": "View All",
        "track-1-title": "Graduation Day",
        "track-1-sub": "Graduation Day",
        "track-2-title": "Mohammed",
        "track-2-sub": "Mohammed",
        "track-3-title": "Be Happy",
        "track-3-sub": "Be happy",
        "stat-1": "Featured Nasheeds",
        "stat-2-num": "Pure Voice",
        "stat-2-desc": "High Studio Quality",
        "stat-3-num": "The Quran",
        "stat-3-desc": "Heartfelt Recitations",
        "stat-4-num": "Event Booking",
        "stat-4-desc": "Years of Dedication",
        "video-section-title": "Latest Music Video",
        "video-section-desc": "Watch the latest visual releases from the artist's channel (YaserBinSolan@)",
        "all-videos": "All Videos",
        "video-badge": "YouTube YaserBinSolan@",
        "video-title": "Graduation Day Clip - Visual & Audio Creativity",
        "footer-about": "The official website of vocalist and reciter Yaser Bin Solan, serving the Holy Quran and purposeful Islamic nasheeds.",
        "footer-links": "Quick Links",
        "footer-artist": "About Artist",
        "footer-bio": "Biography",
        "footer-contact": "Contact Us",
        "footer-booking": "Concerts & Events Booking",
        "footer-social-title": "Follow Artist on Social Media",
        "footer-rights": "© All rights reserved to Yaser Bin Solan",
        "footer-dev": "Developed by Hamdi Al-Lugmani"
      }
    };

    const langToggleBtn = document.getElementById('lang-toggle');
    const htmlRoot = document.getElementById('html-root');
    let currentLang = localStorage.getItem('site_lang') || 'ar';

    function setLanguage(lang) {
      currentLang = lang;
      localStorage.setItem('site_lang', lang);
      
      htmlRoot.setAttribute('lang', lang);
      htmlRoot.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      
      if (lang === 'ar') {
        langToggleBtn.innerHTML = '<img id="lang-flag" src="https://flagcdn.com/w20/us.png" alt="US Flag" class="w-4 h-3 object-cover rounded-xs"> <span id="lang-text">EN</span>';
      } else {
        langToggleBtn.innerHTML = '<img id="lang-flag" src="https://flagcdn.com/w20/sa.png" alt="SA Flag" class="w-4 h-3 object-cover rounded-xs"> <span id="lang-text">AR</span>';
      }

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });

      document.querySelectorAll('.icon-dir').forEach(icon => {
        if (lang === 'en') {
          icon.setAttribute('data-lucide', 'arrow-right');
        } else {
          icon.setAttribute('data-lucide', 'arrow-left');
        }
      });

      document.querySelectorAll('.video-info-box').forEach(box => {
        if (lang === 'en') {
          box.style.direction = 'ltr';
          box.style.textAlign = 'left';
        } else {
          box.style.direction = 'rtl';
          box.style.textAlign = 'right';
        }
      });

      document.querySelectorAll('footer .text-right').footerDesc = document.querySelectorAll('footer .footer-desc');
      document.querySelectorAll('.footer-desc').forEach(desc => {
        if (lang === 'en') {
          desc.style.textAlign = 'left';
        } else {
          desc.style.textAlign = 'right';
        }
      });

      lucide.createIcons();
    }

    setLanguage(currentLang);

    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'ar' ? 'en' : 'ar');
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

    document.addEventListener("DOMContentLoaded", () => {
      const videoPoster = document.getElementById('video-poster');
      const ytWrapper = document.getElementById('youtube-iframe-wrapper');
      const ytPlayer = document.getElementById('yt-player');
      const youtubeVideoId = "v5rx5ix9zxo"; 

      if (videoPoster && ytPlayer) {
        videoPoster.addEventListener('click', () => {
          ytPlayer.src = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`;
          videoPoster.style.display = 'none';
          ytWrapper.classList.remove('hidden');
        });
      }
    });

    document.querySelectorAll('.group').forEach(card => {
      const audio = card.querySelector('.track-audio');
      const playBtn = card.querySelector('.play-btn');
      const progressFill = card.querySelector('.progress-fill');
      const progressBar = card.querySelector('.progress-bar-container');
      const currentTimeEl = card.querySelector('.current-time');
      const durationEl = card.querySelector('.duration-time');

      if (!audio || !playBtn) return;

      function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
      }

      audio.addEventListener('loadedmetadata', () => {
        if (!isNaN(audio.duration)) {
          durationEl.textContent = formatTime(audio.duration);
        }
      });

      playBtn.addEventListener('click', () => {
        document.querySelectorAll('.track-audio').forEach(otherAudio => {
          if (otherAudio !== audio) {
            otherAudio.pause();
            const otherBtn = otherAudio.closest('.group').querySelector('.play-btn');
            if (otherBtn) {
              otherBtn.innerHTML = '<i data-lucide="play" class="w-5 h-5 fill-current play-icon"></i>';
              lucide.createIcons();
            }
          }
        });

        if (audio.paused) {
          audio.play();
          playBtn.innerHTML = '<i data-lucide="pause" class="w-5 h-5 fill-current play-icon"></i>';
        } else {
          audio.pause();
          playBtn.innerHTML = '<i data-lucide="play" class="w-5 h-5 fill-current play-icon"></i>';
        }
        lucide.createIcons();
      });

      audio.addEventListener('timeupdate', () => {
        if (audio.duration) {
          const progressPercent = (audio.currentTime / audio.duration) * 100;
          progressFill.style.width = `${progressPercent}%`;
          currentTimeEl.textContent = formatTime(audio.currentTime);
        }
      });

      audio.addEventListener('ended', () => {
        playBtn.innerHTML = '<i data-lucide="play" class="w-5 h-5 fill-current play-icon"></i>';
        progressFill.style.width = '0%';
        currentTimeEl.textContent = '00:00';
        lucide.createIcons();
      });

      if (progressBar) {
        progressBar.addEventListener('click', (e) => {
          const rect = progressBar.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const width = rect.width;
          if (audio.duration) {
            audio.currentTime = (clickX / width) * audio.duration;
          }
        });
      }
    });
  
    // دالة تحريك الأرقام عند الوصول إليها
    document.addEventListener("DOMContentLoaded", () => {
      const counters = document.querySelectorAll('.counter');
      let animated = false;

      function runCounters() {
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          let count = 0;
          const speed = target / 70; // سرعة العداد

          function updateCount() {
            count += speed;
            if (count < target) {
              counter.innerText = Math.ceil(count);
              setTimeout(updateCount, 30);
            } else {
              counter.innerText = target;
            }
          }
          updateCount();
        });
      }

      // مراقبة متى يظهر قسم الإحصائيات على الشاشة
      const statsSection = document.querySelector('.py-8.bg-slate-950\\/40');
      if (statsSection) {
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
              runCounters();
              animated = true;
              observer.disconnect();
            }
          });
        }, { threshold: 0.5 });

        observer.observe(statsSection);
      }
    });