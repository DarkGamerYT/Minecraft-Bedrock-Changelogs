const params = window.location.search.replace("?", "").split("&").map((i) => ({ name: i.split("=")[0], value: i.split("=")[1].replaceAll("%20", " ") }));
const paths = window.location.pathname.split("/");
(
	async () => {
		const articles = await fetch("./data/preview-articles.json").then((response) => response.json());
		for (const article of articles)
			document.getElementById("articles").innerHTML = `<li class="article-list-item "><a href="/changelog?version=${article.version}&beta=true" class="article-list-link">${article.article.title}</a></li>`;
	}
)();