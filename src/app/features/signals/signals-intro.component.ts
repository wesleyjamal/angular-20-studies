import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals-intro',
  standalone: true,
  template: `
    <div class="max-w-4xl mx-auto space-y-8 animate-fade-in">
      
      <div class="pb-6 border-b border-[#2a2d35]">
        <h2 class="text-3xl font-bold text-white mb-2">Signals Primitives</h2>
        <p class="text-gray-400">The fundamental blocks of Angular's reactivity system.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Counter Section -->
        <div class="p-6 bg-[#181a1f] border border-[#2a2d35] rounded-xl shadow-lg relative overflow-hidden group">
          <div class="h-1 w-full absolute top-0 left-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <h3 class="font-semibold text-lg text-white mb-4 flex items-center gap-2">
            <span class="text-pink-500">1.</span> Basic Signal (State)
          </h3>
          
          <div class="flex items-center justify-between bg-[#0f1115] p-4 rounded-lg border border-[#2a2d35]">
            <button (click)="decrement()" class="h-10 w-10 flex items-center justify-center bg-[#2a2d35] hover:bg-[#32363e] text-pink-500 rounded-lg transition-colors text-xl font-bold">-</button>
            <span class="text-3xl font-mono text-white tracking-widest">{{ count() }}</span>
            <button (click)="increment()" class="h-10 w-10 flex items-center justify-center bg-[#2a2d35] hover:bg-[#32363e] text-green-500 rounded-lg transition-colors text-xl font-bold">+</button>
          </div>
        </div>

        <!-- Computed Section -->
        <div class="p-6 bg-[#181a1f] border border-[#2a2d35] rounded-xl shadow-lg relative overflow-hidden group">
          <div class="h-1 w-full absolute top-0 left-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <h3 class="font-semibold text-lg text-white mb-4 flex items-center gap-2">
            <span class="text-purple-500">2.</span> Computed (Derived)
          </h3>

          <div class="space-y-3">
            <div class="flex justify-between items-center bg-[#0f1115] p-3 rounded-lg border border-[#2a2d35]">
              <span class="text-gray-400 text-sm">Double Value</span>
              <span class="font-mono text-purple-400 font-bold">{{ doubleCount() }}</span>
            </div>
            <div class="flex justify-between items-center bg-[#0f1115] p-3 rounded-lg border border-[#2a2d35]">
              <span class="text-gray-400 text-sm">Parity Check</span>
              <span class="font-mono font-bold" [class.text-green-400]="isEven()" [class.text-amber-400]="!isEven()">
                {{ parity() }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Effect Log -->
      <div class="p-6 bg-[#181a1f] border border-[#2a2d35] rounded-xl shadow-lg">
        <h3 class="font-semibold text-lg text-white mb-4 flex items-center gap-2">
          <span class="text-indigo-500">3.</span> Effect (Side Effects)
        </h3>
        <div class="bg-black/50 p-4 rounded-lg border border-[#2a2d35] text-xs font-mono text-gray-300">
          <div class="flex gap-2">
             <span class="text-green-500">➜</span>
             <span>Last Console Log:</span>
          </div>
          <div class="mt-2 text-indigo-300">
             {{ lastEffectLog() || 'Waiting for changes...' }}
          </div>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.4s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
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
