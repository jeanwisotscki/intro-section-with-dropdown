import clickOutside from "./clickOutside.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events = ["touchstart", "click"]) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = "active";
    this.events = events;

    // bind do this
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // ativa o dropdown menu e adiciona a
  // função que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);

    clickOutside(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventos ao dropdown menu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }

    return this;
  }
}
