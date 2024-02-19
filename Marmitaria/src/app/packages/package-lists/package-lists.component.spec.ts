import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageListsComponent } from './package-lists.component';

describe('PackageListsComponent', () => {
  let component: PackageListsComponent;
  let fixture: ComponentFixture<PackageListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageListsComponent]
    });
    fixture = TestBed.createComponent(PackageListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
