import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsComponent } from './posts.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('PostsComponent', () => {
    let component: PostsComponent;
    let fixture: ComponentFixture<PostsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PostsComponent],
            providers: [provideZonelessChangeDetection()]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PostsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
