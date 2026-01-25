import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  standalone: true,
  template: `
    <div class="max-w-4xl mx-auto space-y-8 animate-fade-in">

      <div class="pb-6 border-b border-[#2a2d35]">
        <h2 class="text-3xl font-bold text-white mb-2">LinkedSignal</h2>
        <p class="text-gray-400">Advanced state synchronization that allows manual overrides.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
        
        <!-- Controls Column -->
        <div class="md:col-span-2 space-y-8">
          
          <!-- Country -->
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Select Context (Source)</label>
            <div class="space-y-2">
              @for (c of countries; track c) {
                <button 
                  (click)="country.set(c)"
                  class="w-full text-left px-4 py-3 rounded-lg border transition-all duration-200 flex justify-between items-center group"
                  [class.bg-pink-600]="country() === c"
                  [class.border-pink-500]="country() === c"
                  [class.text-white]="country() === c"
                  [class.bg-[#181a1f]]="country() !== c"
                  [class.border-[#2a2d35]]="country() !== c"
                  [class.text-gray-400]="country() !== c"
                  [class.hover:border-gray-500]="country() !== c"
                >
                  <span>{{ c }}</span>
                  @if (country() === c) {
                    <span class="text-white">●</span>
                  }
                </button>
              }
            </div>
          </div>

        </div>

        <!-- Result Column -->
        <div class="md:col-span-3">
           <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Dependent State (Linked)</label>
           
           <div class="p-6 bg-[#181a1f] border border-[#2a2d35] rounded-xl shadow-lg relative min-h-[300px]">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-xl pointer-events-none"></div>

              <h3 class="text-white font-medium mb-4">Shipping Options for <span class="text-pink-400">{{ country() }}</span></h3>
              
              <div class="space-y-3">
                @for (option of options(); track option) {
                  <label 
                    class="flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-all duration-200"
                    [class.bg-purple-600]="shippingMethod() === option"
                    [class.border-purple-500]="shippingMethod() === option"
                    [class.bg-[#0f1115]]="shippingMethod() !== option"
                    [class.border-[#2a2d35]]="shippingMethod() !== option"
                  >
                    <div class="relative flex items-center justify-center w-5 h-5">
                      <input 
                        type="radio" 
                        name="shipping" 
                        [value]="option"
                        [checked]="shippingMethod() === option"
                        (change)="shippingMethod.set(option)"
                        class="appearance-none w-5 h-5 rounded-full border border-gray-500 checked:border-white transition-colors cursor-pointer"
                      >
                      @if (shippingMethod() === option) {
                        <div class="absolute w-2.5 h-2.5 bg-white rounded-full"></div>
                      }
                    </div>
                    <span [class.text-white]="shippingMethod() === option" [class.text-gray-400]="shippingMethod() !== option">{{ option }}</span>
                  </label>
                }
              </div>

              <div class="mt-8 pt-6 border-t border-[#2a2d35] flex items-center justify-between">
                <span class="text-sm text-gray-500">Current Selection</span>
                <span class="text-lg font-bold text-white">{{ shippingMethod() }}</span>
              </div>
           </div>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .animate-fade-in { animation: fadeIn 0.5s ease-out; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  `]
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
