export default class Cursor {
  constructor(element) {
    this.element = element;
    this.init();
    document.documentElement.classList.add('custom-cursor');
  }
  init() {
    document.addEventListener('mousemove', this.followCursor.bind(this));
    document.addEventListener('mousedown', this.onMouseDown.bind(this));
    document.addEventListener('mouseup', this.onMouseUp.bind(this));

    this.initHoverAnimation();
  }
  initHoverAnimation() {
    const links = document.querySelectorAll('a, button, .swiper-wrapper');

    for (let i = 0; i < links.length; i++) {
      const link = links[i];

      link.addEventListener('mouseenter', this.onLinkHover.bind(this));
      link.addEventListener('mouseleave', this.onLinkOut.bind(this));
    }
  }

  followCursor(evt) {
    const mouseX = evt.pageX;
    const mouseY = evt.pageY;

    this.element.style.left = `${mouseX}px`;
    this.element.style.top = `${mouseY}px`;
  }
  onLinkHover() {
    this.element.classList.add('hover');
  }
  onLinkOut() {
    this.element.classList.remove('hover');
  }
  onMouseDown() {
    this.element.classList.add('down');
  }
  onMouseUp() {
    this.element.classList.remove('down');
  }
}
