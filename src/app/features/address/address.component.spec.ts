import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressFormComponent } from './address.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('AddressFormComponent', () => {
    let component: AddressFormComponent;
    let fixture: ComponentFixture<AddressFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AddressFormComponent],
            providers: [provideZonelessChangeDetection()]
        })
            .compileComponents();

        fixture = TestBed.createComponent(AddressFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
