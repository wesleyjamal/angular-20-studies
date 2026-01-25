import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  standalone: true,
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.scss'
})
export class LinkedSignalComponent {
  countries = ['USA', 'Canada', 'Brazil'];
  country = signal('USA');

  shippingMethod = linkedSignal({
    source: this.country,
    computation: (newCountry, previous) => {
      if (newCountry === 'Brazil') return 'Express';
      if (newCountry === 'Canada') return 'Standard International';
      return 'Ground';
    }
  });

  options = signal(['Ground', 'Express', 'Standard International', 'Overnight']);
}
