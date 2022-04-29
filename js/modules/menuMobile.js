import clickOutside from "./clickOutside.js";

export default class MenuMobile {
  constructor(menuBtn, menuList, events = ["click", "touchstart"]) {
    this.menuBtn = document.querySelector(menuBtn);
    this.menuList = document.querySelector(menuList);
    this.nav = document.querySelector("#nav");
    this.events = events;
    this.activeClass = "active";

    // bind do this no evento de callback
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();

    this.menuList.classList.add(this.activeClass);
    this.menuBtn.classList.add(this.activeClass);
    this.nav.classList.add(this.activeClass);

    clickOutside(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuBtn.classList.remove(this.activeClass);
      this.nav.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    if (this.menuBtn) {
      this.events.forEach((event) =>
        this.menuBtn.addEventListener(event, this.openMenu)
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
