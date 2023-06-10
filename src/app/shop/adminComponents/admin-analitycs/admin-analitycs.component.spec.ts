import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnalitycsComponent } from './admin-analitycs.component';

describe('AdminAnalitycsComponent', () => {
  let component: AdminAnalitycsComponent;
  let fixture: ComponentFixture<AdminAnalitycsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAnalitycsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAnalitycsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
