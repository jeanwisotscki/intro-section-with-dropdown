import MenuMobile from "./modules/menu-mobile.js";
import DropdownMenu from "./modules/dropdown-menu.js";

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();
