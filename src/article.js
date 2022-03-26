export default class MyArticle extends HTMLElement {
  static get observedAttributes() {
    return [
      "headline",
      "src",
      "link",
      "standfirst",
      "primary-section-route-name",
      "alt-title",
    ];
  }

  connectedCallback() {}

  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case "alt-title":
        this.altTitle = newVal;
        break;
      case "primary-section-route-name":
        this.primarySectionRouteName = newVal;
        break;
      default:
        this[attrName] = newVal;
    }    
    this.innerHTML = this.render();
  }

  render() {    
    return `   
    <div class="container">
        <div class="news">
            <div class="text">
                <div class="category">${this.primarySectionRouteName}</div>
                <div><a href="${this.link}" target=”_blank”><h2>${this.headline}</h2></a></div>
                <div><a href="${this.link}" target=”_blank”><h3>${this.standfirst}</h3></a></div>
            </div>
            <div class="img" style="">
                <a href="${this.link}" target=”_blank”>
                    <img src="${this.src}" alt="${this.altTitle}" />
                </a>                
            </div>
        </div>
        <div class="border"></div>
    </div> 
    
    `;
  }
}
