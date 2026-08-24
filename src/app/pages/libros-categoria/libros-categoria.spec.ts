import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibrosCategoria } from './libros-categoria';

describe('LibrosCategoria', () => {
    let component: LibrosCategoria;
    let fixture: ComponentFixture<LibrosCategoria>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LibrosCategoria]
        }).compileComponents();

        fixture = TestBed.createComponent(LibrosCategoria);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});