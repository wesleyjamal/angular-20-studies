import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="flex h-screen bg-[#0f1115] text-gray-300 font-sans selection:bg-pink-500 selection:text-white">
      
      <!-- Sidebar (Desktop) -->
      <aside class="w-72 bg-[#181a1f] border-r border-[#2a2d35] flex flex-col shadow-2xl z-20">
        <!-- Brand -->
        <div class="p-6 border-b border-[#2a2d35] flex items-center gap-3">
          <div class="h-8 w-8 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-pink-500/20">
            20
          </div>
          <div>
            <h1 class="text-lg font-bold text-white tracking-tight">Angular Studies</h1>
            <p class="text-xs text-gray-500 font-mono">v20.0.0-next.0</p>
          </div>
        </div>
        
        <!-- Navigation -->
        <nav class="flex-1 overflow-y-auto p-4 space-y-1">
          <p class="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-4">Core Concepts</p>
          
          <a routerLink="/" 
             routerLinkActive="bg-[#2a2d35] text-white border-l-4 border-pink-500"
             [routerLinkActiveOptions]="{exact: true}"
             class="group flex items-center px-4 py-2.5 text-sm font-medium rounded-r-lg hover:bg-[#22252b] hover:text-white transition-all border-l-4 border-transparent">
            <span class="mr-3 text-lg opacity-70 group-hover:opacity-100 transition-opacity">🏠</span>
            Dashboard
          </a>

          <a routerLink="/signals" 
             routerLinkActive="bg-[#2a2d35] text-white border-l-4 border-pink-500"
             class="group flex items-center px-4 py-2.5 text-sm font-medium rounded-r-lg hover:bg-[#22252b] hover:text-white transition-all border-l-4 border-transparent">
            <span class="mr-3 text-lg opacity-70 group-hover:opacity-100 transition-opacity">📡</span>
            Signals Intro
          </a>

          <a routerLink="/linked-signal" 
             routerLinkActive="bg-[#2a2d35] text-white border-l-4 border-pink-500"
             class="group flex items-center px-4 py-2.5 text-sm font-medium rounded-r-lg hover:bg-[#22252b] hover:text-white transition-all border-l-4 border-transparent">
            <span class="mr-3 text-lg opacity-70 group-hover:opacity-100 transition-opacity">🔗</span>
            Linked Signal
          </a>

          <a routerLink="/control-flow" 
             routerLinkActive="bg-[#2a2d35] text-white border-l-4 border-pink-500"
             class="group flex items-center px-4 py-2.5 text-sm font-medium rounded-r-lg hover:bg-[#22252b] hover:text-white transition-all border-l-4 border-transparent">
            <span class="mr-3 text-lg opacity-70 group-hover:opacity-100 transition-opacity">🔀</span>
            Control Flow
          </a>

          <a routerLink="/resource" 
             routerLinkActive="bg-[#2a2d35] text-white border-l-4 border-pink-500"
             class="group flex items-center px-4 py-2.5 text-sm font-medium rounded-r-lg hover:bg-[#22252b] hover:text-white transition-all border-l-4 border-transparent">
            <span class="mr-3 text-lg opacity-70 group-hover:opacity-100 transition-opacity">⚡</span>
            Resource API
          </a>
        </nav>

        <!-- Footer / Status -->
        <div class="p-4 bg-[#131519] border-t border-[#2a2d35]">
          <div class="flex items-center gap-2 text-xs text-gray-400 mb-1">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>Zoneless Enabled</span>
          </div>
          <p class="text-[10px] text-gray-600">Built with Angular 20 & Tailwind</p>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 flex flex-col relative overflow-hidden">
        <!-- Top Bar Decorator -->
        <div class="h-1 w-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500"></div>
        
        <!-- Content Scroll Area -->
        <div class="flex-1 overflow-auto p-8 relative">
           <!-- Subtle Grid Background -->
           <div class="absolute inset-0 pointer-events-none opacity-[0.03]" 
                style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 24px 24px;">
           </div>

           <div class="relative z-10 max-w-5xl mx-auto">
             <router-outlet></router-outlet>
           </div>
        </div>
      </main>
    </div>
  `
})
export class AppComponent { }
