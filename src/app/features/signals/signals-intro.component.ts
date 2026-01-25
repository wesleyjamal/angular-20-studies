import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals-intro',
  standalone: true,
  templateUrl: './signals-intro.component.html',
  styleUrl: './signals-intro.component.scss'
})
export class SignalsIntroComponent {
  count = signal(0);
  lastEffectLog = signal('');
  doubleCount = computed(() => this.count() * 2);
  isEven = computed(() => this.count() % 2 === 0);
  parity = computed(() => this.isEven() ? 'Even' : 'Odd');

  constructor() {
    effect(() => {
      const log = `Count changed to: ${this.count()}`;
      console.log(log);
    });
  }

  increment() {
    this.count.update(v => v + 1);
    this.lastEffectLog.set(`Count updated to ${this.count()}`);
  }

  decrement() {
    this.count.update(v => v - 1);
    this.lastEffectLog.set(`Count updated to ${this.count()}`);
  }
}
