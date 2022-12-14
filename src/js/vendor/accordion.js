class GraphAccordion {
	constructor(selector, options) {
		let defaultOptions = {
			isOpen: () => {},
			isClose: () => {},
			speed: 300
		};

		this.options = Object.assign(defaultOptions, options);
		this.accordion = document.querySelector(selector);
    if (document.querySelector('.accordion__control') && document.querySelector('.accordion__content')){
      this.control = this.accordion.querySelector('.accordion__control');
      this.content = this.accordion.querySelector('.accordion__content');
    }
		this.event();
	}

	event() {
		if (this.accordion) {
			this.accordion.addEventListener('click', (e) => {
				this.accordion.classList.toggle('open');

				if (this.accordion.classList.contains('open')) {
					this.open();
				} else {
					this.close();
				}
			});
		}
	}

	open() {
		this.accordion.style.setProperty('--accordion-time', `${this.options.speed / 1000}s`);
		this.accordion.classList.add('is-open');
		this.control.setAttribute('aria-expanded', true);
		this.content.setAttribute('aria-hidden', false);
		this.content.style.maxHeight = this.content.scrollHeight + 'px';
		this.options.isOpen(this);
	}

	close() {
		this.accordion.classList.remove('is-open');
		this.control.setAttribute('aria-expanded', false);
		this.content.setAttribute('aria-hidden', true);
		this.content.style.maxHeight = null;
		this.options.isClose(this);
	}
}

const accordion1 = new GraphAccordion('.accordion-1', {
	speed: 300,
});

const accordion2 = new GraphAccordion('.accordion-2', {
	speed: 300
});

const accordion3 = new GraphAccordion('.accordion-3', {
	speed: 300
});

const accordion4 = new GraphAccordion('.accordion-4', {
	speed: 300
});

const accordion5 = new GraphAccordion('.accordion-5', {
	speed: 300
});

const accordion6 = new GraphAccordion('.accordion-6', {
	speed: 300
});

const accordion7 = new GraphAccordion('.accordion-7', {
	speed: 300
});
