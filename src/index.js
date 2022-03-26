import "./css/main.scss";
import MyArticle from "./article";
import json from "../json/code-test.json";

const articles = json.articles;

customElements.define("my-article", MyArticle);

let text = "";
for (const art of articles) {
  text += `<my-article 
  headline="${art.headline}"
  src="${art.thumbnail.src}"
  alt-title="${art.thumbnail.title}"
  link="${art.link}"
  standfirst="${art.standfirst}"
  primary-section-route-name="${art.primarySectionRouteName}"
  ></my-article>`;
}
document.querySelector("body").innerHTML = text;
