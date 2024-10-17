import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablissementByIdComponent } from './etablissement-by-id.component';

describe('EtablissementByIdComponent', () => {
  let component: EtablissementByIdComponent;
  let fixture: ComponentFixture<EtablissementByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtablissementByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtablissementByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
