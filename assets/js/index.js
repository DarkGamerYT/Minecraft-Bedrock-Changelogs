const params = window.location.search.replace("?", "").split("&").map((i) => ({ name: i.split("=")[0], value: i.split("=")[1]?.replaceAll("%20", " ") }));
const paths = window.location.pathname.split("/");
(
	async () => {
		const betaText = (
			params.find((p) => p.name == "beta")?.value || "false" == true
				? "Beta and Preview Changelogs"
				: "Release Changelogs"
		);
		
		document.getElementById("articleTypesTitle").innerText = betaText;
		document.getElementById("articleTypes").innerText = betaText;
		document.title = betaText + " - Minecraft Bedrock Changelogs";
		
		const articles = await fetch(
			(
				params.find((p) => p.name == "beta")?.value || "false" == true
					? "./data/preview-articles.json"
					: "./data/stable-articles.json"
			),
		).then((response) => response.json());
		document.getElementById("articles").innerHTML = articles.map((article) => `<li class="article-list-item "><a href="./changelog?version=${article.version}&beta=${params.find((p) => p.name == "beta")?.value || "false" == true}" class="article-list-link">${article.article.title}</a></li>`).join("");
	}
)();
