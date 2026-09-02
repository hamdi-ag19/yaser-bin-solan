lucide.createIcons();

    // قاموس النصوص للغتين (العربية والإنجليزية)
    const translations = {
      ar: {
        metaTitle: "اتصل بنا وحجز الفعاليات | ياسر بن صولان - Yaser Bin Solan",
        "nav-home": "الرئيسية",
        "nav-quran": "القرآن الكريم",
        "nav-songs": "الأناشيد",
        "nav-videos": "الفيديو كليب",
        "nav-about": "عن الفنان",
        "nav-contact": "التواصل",
        "contact-artist": "التواصل مع الفنان",
        "hero-badge": "تواصل مباشر وحجز الفعاليات",
        "hero-title-1": "تواصل معنا",
        "hero-title-2": "لحجز المشاركات والفعاليات",
        "hero-desc": "نسعد بالتواصل معكم للاستفسارات العامة، أو التنسيق لإقامة الحفلات والفعاليات الرسمية والخاصة.",
        "info-title": "معلومات التواصل",
        "info-subtitle": "يمكنكم التواصل معنا مباشرة من خلال إحدى الوسائل التالية:",
        "email-label": "البريد الإلكتروني",
        "phone-label": "إدارة الأعمال والحجوزات",
        "location-label": "المقر",
        "location-val": "المملكة العربية السعودية",
        "social-card-title": "تابع المنشد عبر منصات التواصل",
        "form-title": "نموذج التواصل وحجز الفعاليات",
        "form-subtitle": "يرجى ملء كافة البيانات المطلوبة وسيتم الرد عليكم في أقرب وقت.",
        "lbl-name": "الاسم الكامل",
        "ph-name": "أدخل اسمك الكريم",
        "lbl-email": "البريد الإلكتروني",
        "lbl-phone": "رقم الجوال / الواتساب",
        "lbl-type": "نوع الطلب",
        "opt-default": "اختر نوع الطلب",
        "opt-booking": "حجز فعالية / حفلة",
        "opt-inquiry": "استفسار عام",
        "opt-media": "استضافة إعلامية / صحفية",
        "opt-collab": "تعاون فني / إنتاجي",
        "lbl-date": "تاريخ المناسبة (إن وجد)",
        "lbl-city": "مدينة / مكان الفعالية",
        "ph-city": "مثال: الرياض، جدة...",
        "lbl-msg": "تفاصيل الرسالة أو الطلب",
        "ph-msg": "اكتب تفاصيل الطلب أو الاستفسار هنا...",
        "btn-submit": "إرسال الطلب",
        "footer-desc": "الموقع الرسمي للمنشد والقارئ ياسر بن صولان لخدمة القرآن الكريم والأناشيد الإسلامية الهادفة.",
        "footer-quick-links": "روابط سريعة",
        "footer-bio": "السيرة الذاتية",
        "footer-contact-us": "اتصل بنا",
        "footer-booking": "حجز الحفلات والفعاليات",
        "footer-social-title": " تابع المنشد عبر منصات التواصل",
        "rights": "© جميع الحقوق محفوظة لياسر بن صولان",
        "dev": "تطوير حمدي اللقماني",
        // Form Validation Messages (AR)
        requiredField: "هذا الحقل مطلوب",
        invalidEmail: "يرجى إدخال عنوان بريد إلكتروني صحيح",
        invalidPhone: "يجب أن يكون الهاتف 10 أرقام على الأقل (مثال: 05xxxxxxxx)",
        messageTooShort: "يجب أن تكون الرسالة 10 أحرف على الأقل",
        sending: "جاري الإرسال...",
        successTitle: "تم إرسال الطلب بنجاح!",
        successText: "شكراً لتواصلك، سيتم الرد عليكم في أقرب وقت.",
        errorTitle: "فشل الإرسال",
        errorText: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى."
      },
      en: {
        metaTitle: "Contact Us & Event Booking | Yaser Bin Solan",
        "nav-home": "Home",
        "nav-quran": "Holy Quran",
        "nav-songs": "Nasheeds",
        "nav-videos": "Music Videos",
        "nav-about": "About Artist",
        "nav-contact": "Contact",
        "contact-artist": "Contact Artist",
        "hero-badge": "Direct Contact & Event Booking",
        "hero-title-1": "Get in Touch",
        "hero-title-2": "To Book Performances & Events",
        "hero-desc": "We are delighted to connect with you for general inquiries or to coordinate official and private concerts and events.",
        "info-title": "Contact Information",
        "info-subtitle": "You can reach us directly through one of the following channels:",
        "email-label": "Email Address",
        "phone-label": "Business Management & Bookings",
        "location-label": "Location",
        "location-val": "Kingdom of Saudi Arabia",
        "social-card-title": "Follow Artist on Social Media",
        "form-title": "Contact & Event Booking Form",
        "form-subtitle": "Please fill out all required details and we will get back to you as soon as possible.",
        "lbl-name": "Full Name",
        "ph-name": "Enter your full name",
        "lbl-email": "Email Address",
        "lbl-phone": "Mobile Number / WhatsApp",
        "lbl-type": "Request Type",
        "opt-default": "Select Request Type",
        "opt-booking": "Event / Concert Booking",
        "opt-inquiry": "General Inquiry",
        "opt-media": "Media / Press Hosting",
        "opt-collab": "Artistic / Production Collaboration",
        "lbl-date": "Event Date (If applicable)",
        "lbl-city": "City / Event Location",
        "ph-city": "Example: Riyadh, Jeddah...",
        "lbl-msg": "Message Details or Request",
        "ph-msg": "Write your request or inquiry details here...",
        "btn-submit": "Send Request",
        "footer-desc": "The official website of vocalist and reciter Yaser Bin Solan to serve the Holy Quran and purposeful Islamic nasheeds.",
        "footer-quick-links": "Quick Links",
        "footer-bio": "Biography",
        "footer-contact-us": "Contact Us",
        "footer-booking": "Concert & Event Booking",
        "footer-social-title": "Follow Artist on Social Media",
        "rights": "© All rights reserved to Yaser Bin Solan",
        "dev": "Developed by Hamdi Al-Lugmani",
        // Form Validation Messages (EN)
        requiredField: "This field is required",
        invalidEmail: "Please enter a valid email address",
        invalidPhone: "Phone must be at least 10 digits (e.g., 05xxxxxxxx)",
        messageTooShort: "Message must be at least 10 characters",
        sending: "Sending...",
        successTitle: "Request sent successfully!",
        successText: "Thanks for reaching out! We will reply as soon as possible.",
        errorTitle: "Error",
        errorText: "Failed to send message. Please try again."
      }
    };

    let currentLang = 'ar';

    function toggleLanguage() {
      currentLang = currentLang === 'ar' ? 'en' : 'ar';
      const htmlRoot = document.getElementById('html-root');
      const langToggleBtn = document.getElementById('lang-toggle');
      const siteFooter = document.getElementById('site-footer');
      const logoContainer = document.querySelector('.logo-container');
      const footerLogoMargin = document.querySelector('.footer-logo-margin');
      const footerDescAlign = document.querySelector('.footer-desc-align');
      const contactArrow = document.getElementById('contact-arrow');
      const mobileArrow = document.querySelector('.mobile-arrow');
      const submitIcon = document.getElementById('submit-icon');
      const eventDateInput = document.getElementById('event-date-input');

      if (currentLang === 'en') {
        htmlRoot.setAttribute('lang', 'en');
        htmlRoot.setAttribute('dir', 'ltr');
        
        if (eventDateInput) {
          eventDateInput.style.direction = 'ltr';
          eventDateInput.placeholder = "YYYY/MM/DD";
          eventDateInput.value = ""; 
        }
        
        langToggleBtn.innerHTML = '<img id="lang-flag" src="https://flagcdn.com/w20/sa.png" alt="SA Flag" class="w-4 h-3 object-cover rounded-xs"> <span id="lang-text">AR</span>';
        siteFooter.setAttribute('dir', 'ltr');
        logoContainer.className = "flex items-center group -ml-2 sm:-ml-4 logo-container";
        footerLogoMargin.className = "inline-block -ml-2 sm:-ml-14 footer-logo-margin";
        footerDescAlign.className = "text-sm text-slate-400 leading-relaxed text-left footer-desc-align";
        contactArrow.setAttribute('data-lucide', 'arrow-right');
        submitIcon.setAttribute('data-lucide', 'send');
        if(mobileArrow) mobileArrow.setAttribute('data-lucide', 'arrow-right');

      } else {
        htmlRoot.setAttribute('lang', 'ar');
        htmlRoot.setAttribute('dir', 'rtl');
        
        if (eventDateInput) {
          eventDateInput.style.direction = 'rtl';
          eventDateInput.placeholder = "يوم / شهر / سنة";
          eventDateInput.value = "";
        }
        
        langToggleBtn.innerHTML = '<img id="lang-flag" src="https://flagcdn.com/w20/us.png" alt="US Flag" class="w-4 h-3 object-cover rounded-xs"> <span id="lang-text">EN</span>';
        siteFooter.setAttribute('dir', 'rtl');
        logoContainer.className = "flex items-center group -mr-2 sm:-mr-4 logo-container";
        footerLogoMargin.className = "inline-block -mr-2 sm:-mr-14 footer-logo-margin";
        footerDescAlign.className = "text-sm text-slate-400 leading-relaxed text-right footer-desc-align";
        contactArrow.setAttribute('data-lucide', 'arrow-left');
        submitIcon.setAttribute('data-lucide', 'send');
        if(mobileArrow) mobileArrow.setAttribute('data-lucide', 'arrow-left');
      }

      // تحديث النصوص العادية مع إدراج النجمة الحمراء تلقائياً للحقول المطلوبة في اللغتين
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
          let translatedText = translations[currentLang][key];
          const requiredKeys = ['lbl-name', 'lbl-email', 'lbl-phone', 'lbl-type', 'lbl-msg'];
          
          if (requiredKeys.includes(key)) {
            el.innerHTML = `${translatedText} <span class="text-red-500 text-sm font-bold inline-block align-middle ml-0.5">*</span>`;
          } else {
            el.innerText = translatedText;
          }
        }
      });

      // تحديث الـ placeholders للحقول الأخرى
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
          el.placeholder = translations[currentLang][key];
        }
      });

      // تحديث العنوان الرئيسي للوحة التصفح (Title)
      document.getElementById('meta-title').innerText = translations[currentLang].metaTitle;

      // تحديث عداد الأحرف عند تغيير اللغة
      const messageInput = document.getElementById('message');
      const charCounter = document.getElementById('char-counter');
      if (messageInput && charCounter) {
        const currentLength = messageInput.value.length;
        if (currentLang === 'ar') {
          charCounter.textContent = `${currentLength} / 500 حرف`;
        } else {
          charCounter.textContent = `${currentLength} / 500 characters`;
        }
      }

      lucide.createIcons();
    }

    // تشغيل وإغلاق قائمة الهاتف المحمول والتحول إلى علامة X
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

    // Form Validation and Submission Script Integration
    function showError(inputEl, message) {
        if (!inputEl) return;
        inputEl.classList.add('border-red-500');
        
        let errorDiv = inputEl.parentNode.querySelector('.error-message');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'error-message text-red-400 text-xs mt-1';
            inputEl.parentNode.appendChild(errorDiv);
        }
        errorDiv.textContent = message;
    }

    function clearError(inputEl) {
        if (!inputEl) return;
        inputEl.classList.remove('border-red-500');
        const errorDiv = inputEl.parentNode.querySelector('.error-message');
        if (errorDiv) errorDiv.remove();
    }

    function isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
    function isValidPhone(phone) { return /^\d{10,}$/.test(phone.replace(/[\s\-\(\)]/g, '')); }

    function validateContactForm() {
        const t = translations[currentLang];
        let isValid = true;

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const requestTypeInput = document.getElementById('request-type');
        const messageInput = document.getElementById('message');

        if (!nameInput.value.trim()) {
            showError(nameInput, t.requiredField);
            isValid = false;
        } else {
            clearError(nameInput);
        }

        if (!emailInput.value.trim()) {
            showError(emailInput, t.requiredField);
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, t.invalidEmail);
            isValid = false;
        } else {
            clearError(emailInput);
        }

        if (!phoneInput.value.trim()) {
            showError(phoneInput, t.requiredField);
            isValid = false;
        } else if (!isValidPhone(phoneInput.value.trim())) {
            showError(phoneInput, t.invalidPhone);
            isValid = false;
        } else {
            clearError(phoneInput);
        }

        if (!requestTypeInput || !requestTypeInput.value.trim() || requestTypeInput.value === "") {
            showError(requestTypeInput, t.requiredField);
            isValid = false;
        } else {
            clearError(requestTypeInput);
        }

        if (!messageInput.value.trim()) {
            showError(messageInput, t.requiredField);
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            showError(messageInput, t.messageTooShort);
            isValid = false;
        } else {
            clearError(messageInput);
        }

        return isValid;
    }

    document.addEventListener("DOMContentLoaded", () => {
        // تطبيق النجوم الحمراء عند تحميل الصفحة لأول مرة (باللغة العربية الافتراضية)
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                let translatedText = translations[currentLang][key];
                const requiredKeys = ['lbl-name', 'lbl-email', 'lbl-phone', 'lbl-type', 'lbl-msg'];
                if (requiredKeys.includes(key)) {
                    el.innerHTML = `${translatedText} <span class="text-red-500 text-sm font-bold inline-block align-middle ml-0.5">*</span>`;
                }
            }
        });

        const contactForm = document.getElementById("contact-form");
        if (!contactForm) return;

        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            
            if (document.getElementById('honeypot')?.value) return;
            if (!validateContactForm()) return;

            const t = translations[currentLang];
            const isDarkMode = document.documentElement.classList.contains('dark');

            Swal.fire({
                title: t.sending,
                background: isDarkMode ? '#090d16' : '#fff',
                color: isDarkMode ? '#f8fafc' : '#333',
                allowOutsideClick: false,
                didOpen: () => { Swal.showLoading(); }
            });

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    contactForm.reset();
                    document.getElementById('char-counter').textContent = currentLang === 'ar' ? '0 / 500 حرف' : '0 / 500 characters';
                    Swal.fire({
                        icon: 'success',
                        title: t.successTitle,
                        text: t.successText,
                        background: isDarkMode ? '#090d16' : '#fff',
                        color: isDarkMode ? '#f8fafc' : '#333',
                        confirmButtonColor: '#f59e0b'
                    });
                } else {
                    throw new Error();
                }
            } catch (e) {
                Swal.fire({
                    icon: 'error',
                    title: t.errorTitle,
                    text: t.errorText,
                    background: isDarkMode ? '#090d16' : '#fff',
                    color: isDarkMode ? '#f8fafc' : '#333',
                    confirmButtonColor: '#ef4444'
                });
            }
        });

        // Character Counter Logic
        const messageInput = document.getElementById('message');
        const charCounter = document.getElementById('char-counter');

        if (messageInput && charCounter) {
            messageInput.addEventListener('input', function() {
                const currentLength = messageInput.value.length;
                
                if (currentLang === 'ar') {
                    charCounter.textContent = `${currentLength} / 500 حرف`;
                } else {
                    charCounter.textContent = `${currentLength} / 500 characters`;
                }
                
                if (currentLength >= 500) {
                    charCounter.style.color = '#ef4444';
                    charCounter.style.fontWeight = '700';
                } else {
                    charCounter.style.color = '#64748b';
                    charCounter.style.fontWeight = '400';
                }
            });
        }
    });