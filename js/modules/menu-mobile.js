import outsideClick from "./outside-click.js";

export default class MenuMobile {
  constructor(menuBtn, menuList, events = ["click", "touchstart"]) {
    this.menuBtn = document.querySelector(menuBtn);
    this.menuList = document.querySelector(menuList);
    this.events = events;
    this.activeClass = "active";

    // bind do this no evento de callback
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.menuBtn.classList.add(this.activeClass);

    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuBtn.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    if (this.menuBtn) {
      this.events.forEach((evento) =>
        this.menuBtn.addEventListener(evento, this.openMenu)
      );
    }
  }

  init() {
    if (this.menuBtn && this.menuList) {
      this.addMenuMobileEvents();
    }

    return this;
  }
}
