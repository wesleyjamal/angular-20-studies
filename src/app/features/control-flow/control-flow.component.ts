import { Component, signal } from '@angular/core';

interface User {
  id: number;
  name: string;
  role: 'admin' | 'user' | 'guest';
}

@Component({
  selector: 'app-control-flow',
  standalone: true,
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
  isLoggedIn = signal(false);
  userRole = signal<'admin' | 'user' | 'guest'>('guest');

  users = signal<User[]>([
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'user' },
    { id: 3, name: 'Charlie', role: 'user' }
  ]);

  toggleLogin() {
    this.isLoggedIn.update(v => !v);
  }

  setRole(role: 'admin' | 'user' | 'guest') {
    this.userRole.set(role);
  }

  addUser() {
    const newId = Math.max(...this.users().map(u => u.id), 0) + 1;
    this.users.update(list => [
      ...list,
      { id: newId, name: `User ${newId}`, role: 'guest' }
    ]);
  }

  removeUser(id: number) {
    this.users.update(list => list.filter(u => u.id !== id));
  }

  shuffleUsers() {
    this.users.update(list => [...list].sort(() => Math.random() - 0.5));
  }
}
