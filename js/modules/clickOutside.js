export default function clickOutside(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  function handleClickOutside(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleClickOutside);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleClickOutside));
    });
    element.setAttribute(outside, "");
  }
}
