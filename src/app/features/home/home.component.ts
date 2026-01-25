import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink],
    template: `
    <div class="space-y-12 fade-in">
      
      <!-- Hero Section -->
      <section class="text-center py-12 relative">
        <div class="absolute inset-0 flex justify-center -top-24 opacity-30 pointer-events-none">
          <div class="w-[600px] h-[400px] bg-purple-600 rounded-full blur-[120px]"></div>
          <div class="w-[600px] h-[400px] bg-pink-600 rounded-full blur-[120px] -ml-24"></div>
        </div>

        <div class="relative z-10">
          <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span class="text-white">Mastering </span>
            <span class="angular-gradient-text">Angular 20</span>
          </h1>
          <p class="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explorando o futuro da reatividade com <span class="text-pink-400 font-mono">Signals</span>, 
            arquitetura <span class="text-purple-400 font-mono">Zoneless</span> e o novo fluxo de controle.
          </p>
          
          <div class="mt-8 flex justify-center gap-4">
            <a routerLink="/signals" class="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-pink-500/25 transform hover:-translate-y-1 transition-all">
              Começar Agora
            </a>
            <a href="https://angular.dev" target="_blank" class="px-8 py-3 bg-[#1e2025] text-white border border-[#333] font-bold rounded-full hover:bg-[#25282e] transition-all">
              Docs Oficiais
            </a>
          </div>
        </div>
      </section>

      <!-- Cards Grid -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Card 1 -->
        <a routerLink="/signals" class="group block p-6 bg-[#181a1f] border border-[#2a2d35] rounded-2xl hover:border-pink-500/50 transition-all card-hover">
          <div class="h-10 w-10 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">
            📡
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Signals Primitives</h3>
          <p class="text-gray-400 text-sm">
            Core building blocks: <code>signal()</code>, <code>computed()</code>, and <code>effect()</code>. The foundation of modern reactivity.
          </p>
        </a>

        <!-- Card 2 -->
        <a routerLink="/linked-signal" class="group block p-6 bg-[#181a1f] border border-[#2a2d35] rounded-2xl hover:border-purple-500/50 transition-all card-hover">
          <div class="h-10 w-10 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">
            🔗
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Linked Signal</h3>
          <p class="text-gray-400 text-sm">
            Advanced state that resets based on dependencies. Perfect for forms and dynamic UI selections.
          </p>
        </a>

        <!-- Card 3 -->
        <a routerLink="/control-flow" class="group block p-6 bg-[#181a1f] border border-[#2a2d35] rounded-2xl hover:border-indigo-500/50 transition-all card-hover">
          <div class="h-10 w-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">
            🔀
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Control Flow</h3>
          <p class="text-gray-400 text-sm">
            New syntax for <code>&#64;if</code>, <code>&#64;for</code>, and <code>&#64;switch</code>. Cleaner templates with built-in performance.
          </p>
        </a>

      </section>

    </div>
  `,
    styles: [`
    .fade-in {
      animation: opacity 0.6s ease-out forwards;
    }
    @keyframes opacity {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class HomeComponent { }
