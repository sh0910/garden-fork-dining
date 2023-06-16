import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../sass/main.scss';

const btnHome = document.querySelector('.nav-link__home');
const btnMenu = document.querySelector('.nav-link__menu');
const btnContact = document.querySelector('.nav-link__contact');

const hours = {
	Sunday: {
		openTime: '8:00 AM',
		closeTime: '4:00 PM',
	},
	Monday: {
		openTime: '9:00 AM',
		closeTime: '8:00 PM',
	},
	Tuesday: {
		openTime: '9:00 AM',
		closeTime: '8:00 PM',
	},
	Wednesday: {
		openTime: '9:00 AM',
		closeTime: '8:00 PM',
	},
	Thursday: {
		openTime: '9:00 AM',
		closeTime: '8:00 PM',
	},
	Friday: {
		openTime: '9:00 AM',
		closeTime: '8:00 PM',
	},
	Saturday: {
		openTime: '8:00 AM',
		closeTime: '8:00 PM',
	},
};

const beverages = [
	{
		name: 'Orange Juice',
		description: 'Freshly-squeezed orange juice',
		price: '$3.00',
		image: 'juice-orange.jpg',
		alt: 'orange juice',
	},
	{
		name: 'Healthy Greens Juice',
		description: 'Green apple, kiwi, cucumber, mint',
		price: '$6.50',
		image: 'juice-green.jpg',
		alt: 'healthy greens juice',
	},
];

const salads = [
	{
		name: 'Simple Green',
		description: 'Romaine lettuce, tomatoes, croutons',
		price: '$9.00',
		image: 'salad-green.jpg',
		alt: 'bowl of salad',
	},
	{
		name: 'Colorful Salad',
		description:
			'Read leaf, salmon, tomatoes, eggs, red beets, cucumber, corn, edamame',
		price: '$10.00',
		image: 'salad-colorful.jpg',
		alt: 'bowl of salad',
	},
	{
		name: 'Shrimpy Delight',
		description: 'Romaine, shrimp, tomatoes, parmasean cheese',
		price: '$11.00',
		image: 'salad-shrimp.jpg',
		alt: 'bowl of salad',
	},
];

class View {
	_parentEl = document.querySelector('.container-bottom');

	render() {
		const markup = this._generateMarkup();
		this._parentEl.innerHTML = '';
		this._parentEl.insertAdjacentHTML('afterbegin', markup);
	}

	_clear() {}
}

class Home extends View {
	_hours = hours;

	_generateMarkup() {
		return `
      <section class="section-about">
			<h2 class="heading-secondary">Dig into Deliciousness!</h2>
			<p class="paragraph">
			Discover pure awesomeness at Garden Fork, where vibrant flavors and
			unrivaled freshness converge. Our garden-inspired ambiance sets the
			stage for an extraordinary salad experience. Delight in the
			harmonious fusion of crisp vegetables, hand-picked ingredients, and
            delectable dressings meticulously crafted by our passionate culinary
            artisans. From refreshing classics to seasonal masterpieces, each
            salad creation is a work of art, celebrating nature's bounty.
            Indulge in a culinary adventure that will leave you craving for
            more.
         </p>
      </section>
      <section class="section-hours">
         <h2 class="heading-secondary">Hours</h2>
         <div class="hours__details">
            <ul>
               ${this._generateHoursMarkup()}
            </ul>
         </div>
      </section>
      `;
	}

	_generateHoursMarkup() {
		const hoursEntries = Object.entries(this._hours);
		return hoursEntries
			.map(day => {
				const weekday = day[0];
				const { openTime, closeTime } = day[1];
				return `
            <li>${weekday}: ${openTime} - ${closeTime}</li>`;
			})
			.join('');
	}
}

class Menu extends View {
	_generateMarkup() {
		return `
      <section class="section-menu">
			<div class="beverages">
            <h2 class="heading-secondary">Beverages</h2>
               ${this._generateMenuMarkup(beverages)}
         </div>

         <div class="salads">
				 <h2 class="heading-secondary">Salads</h2>
				 ${this._generateMenuMarkup(salads)}
         </div>
				 </section>
				 `;
	}

	_generateMenuMarkup(mealType) {
		return mealType
			.map(type => {
				const { name, description, price, image, alt } = type;
				return `
            <div class="menu">
             <div class="menu__text">
						 <p class="menu__text--name">${name}</p>
						 <p class="menu__text--desc">${description}</p>
						 <p class="menu__text--price">${price}</p>
						 </div>
						 <img class="menu-item" src="src/img/${image}" alt="${alt}"/>
						 </div>
						 `;
			})
			.join('');
	}
}

class Contact extends View {
	_generateMarkup() {
		return `
			<section class="section-contact">
						<h2 class="heading-secondary">Contact Us</h2>
						<p>Garden Fork Team</p>
						<p>555-555-5555</p>
						<p>contact@gardenforkdelicious.com</p>
					</section>
			`;
	}
}

const tabHome = new Home();
const tabMenu = new Menu();
const tabContact = new Contact();

// EVENT LISTENERS
window.addEventListener('load', () => tabHome.render());
btnHome.addEventListener('click', () => tabHome.render());
btnMenu.addEventListener('click', () => tabMenu.render());
btnContact.addEventListener('click', () => tabContact.render());
