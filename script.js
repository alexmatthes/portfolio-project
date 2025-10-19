// ============================================
// NAVIGATION MODULE
// ============================================
const Navigation = {
  init() {
    this.setupHamburgerMenu();
    this.setupClickOutside();
  },

  setupHamburgerMenu() {
    // Only setup if hamburger nav exists
    const icon = document.querySelector(".hamburger-icon");
    if (!icon) return;

    icon.addEventListener('click', () => this.toggleMenu());
  },

  setupClickOutside() {
    document.addEventListener("click", (event) => {
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      
      if (!menu || !icon) return;

      if (menu.classList.contains("open") && 
          !menu.contains(event.target) && 
          !icon.contains(event.target)) {
        this.toggleMenu();
      }
    });
  },

  toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    if (menu && icon) {
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    }
  }
};

// ============================================
// THEME TOGGLE MODULE
// ============================================
const ThemeToggle = {
  init() {
    this.toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    if (!this.toggleSwitch) return;

    this.loadTheme();
    this.toggleSwitch.addEventListener('change', (e) => this.switchTheme(e));
  },

  loadTheme() {
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark-mode') {
      document.body.classList.add('dark-mode');
      this.toggleSwitch.checked = true;
    }
  },

  switchTheme(e) {
    if (e.target.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light-mode');
    }
  }
};

// ============================================
// SCROLL ANIMATIONS MODULE
// ============================================
const ScrollAnimations = {
  init() {
    const hiddenElements = document.querySelectorAll('.hidden');
    if (hiddenElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    hiddenElements.forEach((el) => observer.observe(el));
  }
};

// ============================================
// LIGHTBOX GALLERY MODULE
// ============================================
const LightboxGallery = {
  init() {
    this.modal = document.getElementById("lightbox-modal");
    if (!this.modal) return;

    this.modalImage = document.getElementById("lightbox-image");
    this.photoItems = document.querySelectorAll(".photo-item img");
    this.closeButton = document.querySelector(".close-button");

    this.setupEventListeners();
  },

  setupEventListeners() {
    // Click on images to open
    this.photoItems.forEach(item => {
      item.addEventListener("click", () => this.openModal(item.src));
    });

    // Close button
    this.closeButton.addEventListener("click", () => this.closeModal());

    // Click outside to close
    window.addEventListener("click", (event) => {
      if (event.target === this.modal) {
        this.closeModal();
      }
    });

    // ESC key to close
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.modal.style.display === 'flex') {
        this.closeModal();
      }
    });
  },

  openModal(src) {
    this.modal.style.display = "flex";
    this.modalImage.src = src;
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  },

  closeModal() {
    this.modal.style.display = "none";
    document.body.style.overflow = ''; // Restore scrolling
  }
};

// ============================================
// MAGNETIC ICONS MODULE
// ============================================
const MagneticIcons = {
  init() {
    const icons = document.querySelectorAll('#socials-container .icon');
    if (icons.length === 0) return;

    icons.forEach(icon => {
      icon.addEventListener('mousemove', (e) => this.handleMouseMove(e, icon));
      icon.addEventListener('mouseleave', (icon) => this.handleMouseLeave(icon));
    });
  },

  handleMouseMove(e, icon) {
    const { offsetX: x, offsetY: y } = e;
    const { offsetWidth: width, offsetHeight: height } = icon;
    const move = 25;
    const xMove = x / width * (move * 2) - move;
    const yMove = y / height * (move * 2) - move;
    icon.style.transform = `translate(${xMove}px, ${yMove}px)`;
  },

  handleMouseLeave(icon) {
    icon.target.style.transform = '';
  }
};

// ============================================
// STAGGERED TEXT REVEAL MODULE
// ============================================
const StaggeredReveal = {
  init() {
    this.animateElement('#main-title');
    this.animateElement('#sub-title');
  },

  animateElement(selector) {
    const element = document.querySelector(selector);
    if (!element) return;

    element.querySelectorAll("span").forEach((letter, i) => {
      const jitter = (Math.random() * 0.04).toFixed(3);
      letter.style.animationDelay = `${i * 0.1 + Number(jitter)}s`;
    });
  }
};

// ============================================
// INITIALIZE ALL MODULES
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  Navigation.init();
  ThemeToggle.init();
  ScrollAnimations.init();
  LightboxGallery.init();
  MagneticIcons.init();
  StaggeredReveal.init();
});

// Legacy function for onclick handlers (temporary - will refactor)
function toggleMenu() {
  Navigation.toggleMenu();
}