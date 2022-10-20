const app = new Vue({
	el: "#root",
	data: {
		ui: {
			header: "Cantinho nobre rose",
			description: "Sua beleza é nosso dever e responsabilidade",
			contact_link: "https://bit.ly/cantinhonobrerose"
		},
		product: {
			cosmeticos: {
				prefix: "./img/cosmeticos/",
				min: 1,
				max: 184,
			},
		},
		ready: false,
	},
	methods: {
		getCatalog: function() {
			window.location.href="#catalog";
		}
	},
	mounted: function() {
		var elems = document.querySelectorAll('.materialboxed');
		var instances = M.Materialbox.init(elems, {});
	}
});
