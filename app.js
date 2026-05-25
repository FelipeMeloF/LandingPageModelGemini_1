document.addEventListener('DOMContentLoaded', () => {
    
    // --- STICKY HEADER ---
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- MOBILE MENU (HAMBURGER) ---
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navItems = document.querySelectorAll('.nav-item');

    const toggleMenu = () => {
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('mobile-active');
    };

    hamburgerMenu.addEventListener('click', toggleMenu);

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navMenu.classList.contains('mobile-active')) {
                toggleMenu();
            }
        });
    });

    // --- INTERSECTION OBSERVER FOR REVEAL ANIMATIONS ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Unobserve once animated
            }
        });
    }, revealOptions);

    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });

    // --- DYNAMIC NAV LINK ACTIVE STATES ---
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 120; // offset

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === currentSectionId) {
                item.classList.add('active');
            }
        });
    });

    // --- PROPERTIES FILTERING (TABS) ---
    const filterButtons = document.querySelectorAll('.tab-btn');
    const propertyCards = document.querySelectorAll('.property-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            propertyCards.forEach(card => {
                // Smooth transition fade out
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    if (filterValue === 'todos' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'flex';
                        // Small timeout to allow browser to register display change before animating opacity
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                }, 300);
            });
        });
    });

    // --- SIMULATED DOWNLOAD INTERACTION (PREMIUM TOAST) ---
    const downloadButtons = document.querySelectorAll('.store-btn, #header-cta, .property-action');
    
    // Create Toast Container
    const toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);

    // Dynamic styles for the Toast Notification (Pure JS to keep CSS clean)
    const style = document.createElement('style');
    style.innerHTML = `
        .toast-container {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            gap: 12px;
            pointer-events: none;
        }
        .toast {
            background: rgba(18, 18, 21, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid #D4AF37;
            padding: 16px 24px;
            border-radius: 12px;
            color: #ffffff;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 15px rgba(212, 175, 55, 0.2);
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 12px;
            transform: translateY(50px);
            opacity: 0;
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            pointer-events: auto;
        }
        .toast.show {
            transform: translateY(0);
            opacity: 1;
        }
        .toast-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: rgba(212,175,55,0.15);
            color: #D4AF37;
            font-weight: bold;
            font-size: 0.8rem;
        }
    `;
    document.head.appendChild(style);

    const showDownloadToast = (e) => {
        e.preventDefault();
        
        // Remove active menu if clicking a cta from mobile menu
        if (navMenu.classList.contains('mobile-active')) {
            toggleMenu();
        }

        // Create individual toast
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <div class="toast-icon">✓</div>
            <div>
                <strong style="color: #D4AF37; display: block; margin-bottom: 2px;">Iniciando Download</strong>
                Obrigado pelo seu interesse! O aplicativo da Extremo Oriente está sendo baixado.
            </div>
        `;
        
        toastContainer.appendChild(toast);
        
        // Show
        setTimeout(() => {
            toast.classList.add('show');
        }, 50);

        // Auto Hide & Remove
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 500);
        }, 4000);
    };

    downloadButtons.forEach(btn => {
        // Prevent default hash scrolling if store buttons or download anchors
        btn.addEventListener('click', showDownloadToast);
    });
});
