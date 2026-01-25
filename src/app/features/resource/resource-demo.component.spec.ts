import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourceDemoComponent } from './resource-demo.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

describe('ResourceDemoComponent', () => {
    let component: ResourceDemoComponent;
    let fixture: ComponentFixture<ResourceDemoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ResourceDemoComponent],
            providers: [
                provideZonelessChangeDetection(),
                provideHttpClient()
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ResourceDemoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
