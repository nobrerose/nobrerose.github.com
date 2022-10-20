const app = new Vue({
	el: "#root",
	data: {
		ui: {
			header: "Cantinho Nobre Rose",
			description: "Sua beleza é nosso dever e responsabilidade",
			contact_link: "https://bit.ly/cantinhonobrerose"
		},
		product: {
			cosmeticos: {
				prefix: "./img/cosmeticos/cp02-cosmeticos-v2-00",
				min: 1,
				max: 184,
			},
		}
	},
	methods: {
		getCatalog: function() {
			window.location.href="#catalog";
		}
	}
});
