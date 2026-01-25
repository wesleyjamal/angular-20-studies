import { Component, resource, signal } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
}

@Component({
  selector: 'app-resource-demo',
  standalone: true,
  templateUrl: './resource-demo.component.html',
  styleUrl: './resource-demo.component.scss'
})
export class ResourceDemoComponent {
  // The 'resource' API handles the async loading lifecycle automatically.
  // It provides .value() (data), .status() (idle/loading/error/resolved), and .error().
  usersResource = resource({
    loader: async () => {
      // Simulate network delay for demo purposes (optional)
      await new Promise(r => setTimeout(r, 1000));

      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error('Network error');
      return (await res.json()) as User[];
    }
  });
}
