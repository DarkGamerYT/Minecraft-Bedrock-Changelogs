const params = window.location.search.replace("?", "").split("&").map((i) => ({ name: i.split("=")[0], value: i.split("=")[1] }));
const paths = window.location.pathname.split("/");
const articles = fetch("./data/preview-articles.json");

const article = articles.find((a) => a.version == params.find((p) => p.name == "version")?.value);
if (article) {
	document.getElementById("articleTitle").innerText = article.article.title;
	document.getElementById("articleBody").innerHTML = article.article.body;
} else {
	document.getElementById("articleTitle").innerText = "Version not found!";
	document.getElementById("articleBody").innerHTML = "This version is not found, try searching for a different version.";
	document.getElementById("articleBody").style = "text-align: center;";
};

console.log("Version:", article?.version || "???");
console.log("Beta:", params.find((p) => p.name == "beta")?.value || "false" == true);
console.log(article);