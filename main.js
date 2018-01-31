Vue.component('ah-article', {
	props: ['title', 'body'],

	data() {
		return {
			isVisible: true
		};
	},

	template: `
		<article class="message" v-show="isVisible">
			<div class="message-header">
				{{ title }}
				<button class="delete" aria-label="delete" @click="hideArticle"></button>
			</div>
			<div class="message-body">
				{{ body }}
			</div>
		</article>
	`,

	methods: {
		hideArticle() {
			this.isVisible = false;
		}
	}
});

new Vue({
	el: '#root'
});


				/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem. */