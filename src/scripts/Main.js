import Icons from './utils/Icons';
/** Componsante Main de TimTools */
import Swiper from 'swiper/bundle';
import Cursor from './Cursor';

export default class Main {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;
    this.init();

    new Swiper('.swiper-container');
    new Cursor(document.querySelector('[data-component="Cursor"]'));
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    console.log('init');
    Icons.load();
  }
}
new Main();
