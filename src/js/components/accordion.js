const accordion1 = new GraphAccordion('.accordion-1', {
	speed: 300,
	isOpen: (acc) => {
		console.log(acc);
	},
	isClose: (acc) => {
		console.log(acc);
	}
});

const accordion2 = new GraphAccordion('.accordion-2', {
	speed: 300
});

