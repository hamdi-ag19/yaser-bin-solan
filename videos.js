
    lucide.createIcons();

    // قاموس الترجمات الديناميكية
    const translations = {
      ar: {
        pageTitle: "الفيديو كليب | المكتبة المرئية الكاملة - ياسر بن صولان",
        "nav-home": "الرئيسية",
        "nav-quran": "القرآن الكريم",
        "nav-songs": "الأناشيد",
        "nav-videos": "الفيديو كليب",
        "nav-about": "عن الفنان",
        "nav-contact": "التواصل",
        "contact-artist": "التواصل مع الفنان",
        "badge-title": "الإنتاج المرئي والمصوّر",
        "main-heading-start": "فيديوهات",
        "main-title": "ياسر بن صولان",
        "main-subtitle": "جميع الأعمال المصورة الرسمية الخاصة بالمنشد ياسر بن صولان",
        
        // عناوين الفيديوهات
        "vid-graduation": "فيديو يوم التخرج",
        "vid-mohammed": "فيديو محمد",
        "vid-behappy": "فيديو كن سعيداً",
        "vid-whereareyou": "فيديو أين أنت",
        "vid-flyaway": "فيديو حلّق بعيداً",
        "vid-alienation": "فيديو الغربة",
        "vid-universallove": "فيديو الحب العالمي",
        "vid-alyoumeid": "فيديو اليوم عيد",
        "vid-dehkelhawa": "فيديو ضحك الهوى",
        "vid-ramadanelrouh": "فيديو رمضان الروح",
        "vid-abdulaziz": "فيديو عبد العزيز",
        "vid-zekrayati": "فيديو ذكرياتي",
        "vid-zewgty": "فيديو زوجتي",
        "vid-abdulrahman": "فيديو عبد الرحمن",
        "vid-taibah": "فيديو طيبة",
        "vid-qalbalom": "فيديو قلب الأم",
        "vid-yaboy": "فيديو يابوي",
        "vid-mabrok": "فيديو مبروك",
        "vid-henagena": "فيديو حنا جينا",

        // الفوتر
        "footer-desc": "الموقع الرسمي للمنشد والقارئ ياسر بن صولان لخدمة القرآن الكريم والأناشيد الإسلامية الهادفة.",
        "footer-quick-links": "روابط سريعة",
        "footer-about-artist": "عن الفنان",
        "footer-biography": "السيرة الذاتية",
        "footer-contact-us": "اتصل بنا",
        "footer-booking": "حجز الحفلات والفعاليات",
        "footer-social": "تابع المنشد عبر منصات التواصل",
        "copy-rights": "© جميع الحقوق محفوظة لياسر بن صولان",
        "developer-name": "تطوير حمدي اللقماني"
      },
      en: {
        pageTitle: "Music Videos | Complete Visual Library - Yaser Bin Solan",
        "nav-home": "Home",
        "nav-quran": "Holy Quran",
        "nav-songs": "Songs",
        "nav-videos": "Music Videos",
        "nav-about": "About Artist",
        "nav-contact": "Contact",
        "contact-artist": "Contact Artist",
        "badge-title": "Visual & Recorded Production",
        "main-heading-start": "Music Videos",
        "main-title": "Yaser Bin Solan",
        "main-subtitle": "All official recorded works by vocalist Yaser Bin Solan",
        
        // عناوين الفيديوهات بالإنجليزية
        "vid-graduation": "Graduation Day Video",
        "vid-mohammed": "Mohammed Video",
        "vid-behappy": "Be Happy Video",
        "vid-whereareyou": "Where Are You Video",
        "vid-flyaway": "Fly Away Video",
        "vid-alienation": "Alienation Video",
        "vid-universallove": "Universal Love Video",
        "vid-alyoumeid": "Al Youm Eid Video",
        "vid-dehkelhawa": "Dehk El-Hawa Video",
        "vid-ramadanelrouh": "Ramadan El-Rouh Video",
        "vid-abdulaziz": "Abdulaziz Video",
        "vid-zekrayati": "Zekrayati Video",
        "vid-zewgty": "Zewgty Video",
        "vid-abdulrahman": "Abdulrahman Video",
        "vid-taibah": "Taibah Video",
        "vid-qalbalom": "Qalb Alom Video",
        "vid-yaboy": "Yaboy Video",
        "vid-mabrok": "Mabrok Video",
        "vid-henagena": "Hena Gena Video",

        // الفوتر بالإنجليزية
        "footer-desc": "The official website of vocalist and reciter Yaser Bin Solan, dedicated to serving the Holy Quran and purposeful Islamic nasheed.",
        "footer-quick-links": "Quick Links",
        "footer-about-artist": "About Artist",
        "footer-biography": "Biography",
        "footer-contact-us": "Contact Us",
        "footer-booking": "Book Concerts & Events",
        "footer-social": "Follow the Vocalist on Social Media",
        "copy-rights": "© All rights reserved to Yaser Bin Solan",
        "developer-name": "Developed by Hamdi Al-Lugmani"
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

      document.getElementById('page-title').textContent = translations[lang].pageTitle;

      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
          element.textContent = translations[lang][key];
        }
      });

      const footerDesc = document.getElementById('footer-desc-elem');
      if (footerDesc) {
        if (lang === 'en') {
          footerDesc.style.textAlign = 'left';
        } else {
          footerDesc.style.textAlign = 'right';
        }
      }

      lucide.createIcons();
    }

    setLanguage(currentLang);

    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });

    // سكربت تشغيل فيديوهات اليوتيوب
    document.querySelectorAll('.video-card-container').forEach(container => {
      const videoId = container.getAttribute('data-video-id');

      container.addEventListener('click', () => {
        if (!videoId || videoId.includes('ضع_معرف')) {
          alert('يرجى وضع معرف فيديو يوتيوب الصحيح لهذا الكليب في الكود.');
          return;
        }

        const iframe = document.createElement('iframe');
        iframe.className = "w-full h-full border-0 absolute inset-0 z-20";
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
        iframe.title = "YouTube video player";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;

        container.appendChild(iframe);
      });
    });

    // تشغيل وإغلاق قائمة الهاتف المحمول
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
  