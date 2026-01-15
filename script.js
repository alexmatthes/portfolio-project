// ============================================
// NAVIGATION MODULE
// ============================================
const Navigation = {
	init() {
		this.setupClickOutside();
	},

	setupClickOutside() {
		document.addEventListener('click', (event) => {
			const menu = document.querySelector('.menu-links');
			const icon = document.querySelector('.hamburger-icon');

			if (!menu || !icon) return;

			if (menu.classList.contains('open') && !menu.contains(event.target) && !icon.contains(event.target)) {
				this.toggleMenu();
			}
		});
	},

	toggleMenu() {
		try {
			const menu = document.querySelector('.menu-links');
			const icon = document.querySelector('.hamburger-icon');

			if (menu && icon) {
				menu.classList.toggle('open');
				icon.classList.toggle('open');
			}
		} catch (error) {
			console.error('Error toggling menu:', error);
		}
	},
};

// ============================================
// THEME TOGGLE MODULE
// ============================================
const ThemeToggle = {
	init() {
		try {
			this.toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
			if (!this.toggleSwitch) return;

			this.loadTheme();
			this.toggleSwitch.addEventListener('change', (e) => this.switchTheme(e));
		} catch (error) {
			console.error('Error initializing theme toggle:', error);
		}
	},

	loadTheme() {
		try {
			const currentTheme = localStorage.getItem('theme');

			if (currentTheme === 'dark-mode') {
				document.body.classList.add('dark-mode');
				if (this.toggleSwitch) {
					this.toggleSwitch.checked = true;
				}
			}
		} catch (error) {
			console.error('Error loading theme:', error);
		}
	},

	switchTheme(e) {
		try {
			if (e.target.checked) {
				document.body.classList.add('dark-mode');
				localStorage.setItem('theme', 'dark-mode');
			} else {
				document.body.classList.remove('dark-mode');
				localStorage.setItem('theme', 'light-mode');
			}
		} catch (error) {
			console.error('Error switching theme:', error);
		}
	},
};

// ============================================
// SCROLL ANIMATIONS MODULE
// ============================================
const ScrollAnimations = {
	init() {
		try {
			const hiddenElements = document.querySelectorAll('.hidden');
			if (hiddenElements.length === 0) return;

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add('show');
						} else {
							entry.target.classList.remove('show');
						}
					});
				},
				{ threshold: 0.1 }
			);

			hiddenElements.forEach((el) => observer.observe(el));
		} catch (error) {
			console.error('Error initializing scroll animations:', error);
		}
	},
};

// ============================================
// LIGHTBOX GALLERY MODULE
// ============================================
const LightboxGallery = {
	init() {
		try {
			this.modal = document.getElementById('lightbox-modal');
			if (!this.modal) return;

			this.modalImage = document.getElementById('lightbox-image');
			if (!this.modalImage) {
				console.warn('Lightbox image element not found');
				return;
			}

			this.photoItems = document.querySelectorAll('.photo-item img');
			this.closeButton = document.querySelector('.close-button');

			this.setupEventListeners();
		} catch (error) {
			console.error('Error initializing lightbox gallery:', error);
		}
	},

	setupEventListeners() {
		try {
			// Click on images to open
			this.photoItems.forEach((item) => {
				item.addEventListener('click', () => this.openModal(item.src));
			});

			// Close button
			if (this.closeButton) {
				this.closeButton.addEventListener('click', () => this.closeModal());
			}

			// Click outside to close
			window.addEventListener('click', (event) => {
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
		} catch (error) {
			console.error('Error setting up lightbox event listeners:', error);
		}
	},

	openModal(src) {
		try {
			if (!this.modal || !this.modalImage) return;
			this.modal.style.display = 'flex';
			this.modalImage.src = src;
			document.body.style.overflow = 'hidden'; // Prevent scrolling
		} catch (error) {
			console.error('Error opening modal:', error);
		}
	},

	closeModal() {
		try {
			if (!this.modal) return;
			this.modal.style.display = 'none';
			document.body.style.overflow = ''; // Restore scrolling
		} catch (error) {
			console.error('Error closing modal:', error);
		}
	},
};

// ============================================
// MAGNETIC ICONS MODULE
// ============================================
const MagneticIcons = {
	init() {
		try {
			const icons = document.querySelectorAll('#socials-container .icon');
			if (icons.length === 0) return;

			icons.forEach((icon) => {
				icon.addEventListener('mousemove', (e) => this.handleMouseMove(e, icon));
				icon.addEventListener('mouseleave', (e) => this.handleMouseLeave(e));
			});
		} catch (error) {
			console.error('Error initializing magnetic icons:', error);
		}
	},

	handleMouseMove(e, icon) {
		try {
			const { offsetX: x, offsetY: y } = e;
			const { offsetWidth: width, offsetHeight: height } = icon;
			const move = 25;
			const xMove = (x / width) * (move * 2) - move;
			const yMove = (y / height) * (move * 2) - move;
			icon.style.transform = `translate(${xMove}px, ${yMove}px)`;
		} catch (error) {
			console.error('Error handling mouse move:', error);
		}
	},

	handleMouseLeave(e) {
		try {
			if (e.target && e.target.style) {
				e.target.style.transform = '';
			}
		} catch (error) {
			console.error('Error handling mouse leave:', error);
		}
	},
};

// ============================================
// STAGGERED TEXT REVEAL MODULE
// ============================================
const StaggeredReveal = {
	init() {
		try {
			this.animateElement('#main-title');
			this.animateElement('#sub-title');
		} catch (error) {
			console.error('Error initializing staggered reveal:', error);
		}
	},

	animateElement(selector) {
		try {
			const element = document.querySelector(selector);
			if (!element) return;

			element.querySelectorAll('span').forEach((letter, i) => {
				const jitter = (Math.random() * 0.04).toFixed(3);
				letter.style.animationDelay = `${i * 0.1 + Number(jitter)}s`;
			});
		} catch (error) {
			console.error(`Error animating element ${selector}:`, error);
		}
	},
};

// ============================================
// EVENT HANDLER MODULE
// ============================================
const EventHandler = {
	init() {
		// Use event delegation for all data-action handlers
		document.addEventListener('click', (event) => {
			const target = event.target.closest('[data-action]');
			if (!target) return;

			const action = target.getAttribute('data-action');
			if (!action) return;

			try {
				this.handleAction(action, target, event);
			} catch (error) {
				console.error(`Error handling action "${action}":`, error);
			}
		});

		// Handle keyboard events for interactive elements
		document.addEventListener('keydown', (event) => {
			if (event.key !== 'Enter' && event.key !== ' ') return;

			const target = event.target.closest('[data-action]');
			if (!target) return;

			const action = target.getAttribute('data-action');
			if (!action) return;

			try {
				event.preventDefault();
				this.handleAction(action, target, event);
			} catch (error) {
				console.error(`Error handling action "${action}":`, error);
			}
		});
	},

	handleAction(action, element, event) {
		switch (action) {
			case 'toggle-menu':
				Navigation.toggleMenu();
				break;

			case 'close-menu':
				Navigation.toggleMenu();
				// Allow default link behavior
				break;

			case 'open-resume':
				window.open('./assets/Alex_Matthes_Resume.pdf', '_blank');
				break;

			case 'scroll-contact':
				event.preventDefault();
				this.scrollToSection('#contact');
				break;

			case 'scroll-to':
				event.preventDefault();
				const target = element.getAttribute('data-target');
				if (target) {
					this.scrollToSection(target);
				}
				break;

			case 'external-link':
				const url = element.getAttribute('data-url');
				if (url) {
					window.open(url, '_blank');
				}
				break;

			case 'navigate':
				const navUrl = element.getAttribute('data-url');
				if (navUrl) {
					window.location.href = navUrl;
				}
				break;

			case 'open-page':
				const pageUrl = element.getAttribute('data-url');
				const targetWindow = element.getAttribute('data-target') || '_self';
				if (pageUrl) {
					window.open(pageUrl, targetWindow);
				}
				break;
			case 'translate-text':
				this.handleTranslation();
				break;

			default:
				console.warn(`Unknown action: ${action}`);
		}
	},

	scrollToSection(selector) {
		try {
			const element = document.querySelector(selector);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		} catch (error) {
			console.error(`Error scrolling to ${selector}:`, error);
		}
	},

	async handleTranslation() {
		const inputField = document.getElementById('jargon-input');
		const outputField = document.getElementById('translation-output');
		const button = document.querySelector('[data-action="translate-text"]');

		if (!inputField || !outputField) return;

		const originalText = inputField.value.trim();
		if (!originalText) {
			outputField.innerText = 'Please input text to leverage this paradigm.';
			return;
		}

		// 1. UI Loading State
		const originalBtnText = button.innerText;
		button.innerText = 'Synergizing...';
		button.disabled = true;
		outputField.style.opacity = '0.5';

		try {
			// 2. Call your Python Backend
			// Ensure your backend is running on port 8000!
			const response = await fetch('https://corporate-translator-api.onrender.com/translate', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ text: originalText }),
			});

			if (!response.ok) throw new Error('API Error');

			const data = await response.json();

			// 3. Update Output
			outputField.innerText = data.translated_text;
		} catch (error) {
			console.error(error);
			outputField.innerText = 'Error: The server is currently offline (circling back later).';
		} finally {
			// 4. Restore UI
			button.innerText = originalBtnText;
			button.disabled = false;
			outputField.style.opacity = '1';
		}
	},
};

// ============================================
// CHAT WIDGET MODULE
// ============================================
const ChatWidget = {
	init() {
		try {
			this.btn = document.getElementById('chat-widget-btn');
			this.modal = document.getElementById('chat-modal');
			this.closeBtn = document.querySelector('.close-chat');

			if (!this.btn || !this.modal) return;

			this.setupEventListeners();
		} catch (error) {
			console.error('Error initializing chat widget:', error);
		}
	},

	setupEventListeners() {
		// Toggle Modal on FAB Click
		this.btn.addEventListener('click', () => {
			this.modal.classList.toggle('open');
			// Optional: Change icon to 'X' when open
		});

		// Close Button
		if (this.closeBtn) {
			this.closeBtn.addEventListener('click', () => {
				this.modal.classList.remove('open');
			});
		}

		// Close if clicking outside (optional, but tricky with iframes)
		document.addEventListener('click', (e) => {
			if (!this.modal.contains(e.target) && !this.btn.contains(e.target) && this.modal.classList.contains('open')) {
				// this.modal.classList.remove('open'); // Uncomment if you want click-outside-to-close
			}
		});
	}
};

// ============================================
// INITIALIZE ALL MODULES
// ============================================
document.addEventListener('DOMContentLoaded', () => {
	try {
		EventHandler.init();
		Navigation.init();
		ThemeToggle.init();
		ScrollAnimations.init();
		LightboxGallery.init();
		MagneticIcons.init();
		StaggeredReveal.init();
		ChatWidget.init();
	} catch (error) {
		console.error('Error initializing modules:', error);
	}
});
