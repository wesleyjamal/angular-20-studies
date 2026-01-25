import { Component, resource } from '@angular/core';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

@Component({
    selector: 'app-posts',
    standalone: true,
    templateUrl: './posts.component.html',
    styleUrl: './posts.component.scss'
})
export class PostsComponent {

    // Using the 'resource' API for clean async data fetching
    postsResource = resource({
        loader: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            return (await response.json()) as Post[];
        }
    });

}
