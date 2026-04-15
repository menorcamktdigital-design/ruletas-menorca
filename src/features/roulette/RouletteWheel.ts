import { gsap } from 'gsap';
import type { Premio } from '../../types';

export class RouletteWheel {
  private container: HTMLElement;
  private spinner: HTMLElement;
  private premios: Premio[];
  private currentAngle = 0;
  private spinning = false;

  constructor(containerElement: HTMLElement, premios: Premio[]) {
    this.container = containerElement;
    this.spinner = containerElement.querySelector('.spinner') as HTMLElement;
    this.premios = premios;
  }

  updatePremios(premios: Premio[]): void {
    this.premios = premios;
  }

  spin(onEnd: (premio: Premio) => void): void {
    if (this.spinning) return;

    this.spinning = true;
    this.container.classList.add('busy');

    const index = Math.floor(Math.random() * this.premios.length);
    const segmentAngle = 360 / this.premios.length;
    const targetAngle = this.currentAngle + 1440 + index * segmentAngle;

    gsap.to(this.spinner, {
      rotation: targetAngle,
      duration: 6,
      ease: 'power4.out',
      onComplete: () => {
        this.currentAngle = targetAngle % 360;
        this.spinning = false;
        this.container.classList.remove('busy');
        onEnd(this.premios[index]);
      },
    });
  }
}
