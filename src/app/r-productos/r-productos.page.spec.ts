import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RProductosPage } from './r-productos.page';

describe('RProductosPage', () => {
  let component: RProductosPage;
  let fixture: ComponentFixture<RProductosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
