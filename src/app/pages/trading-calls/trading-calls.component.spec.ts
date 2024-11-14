import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingCallsComponent } from './trading-calls.component';

describe('TradingCallsComponent', () => {
  let component: TradingCallsComponent;
  let fixture: ComponentFixture<TradingCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradingCallsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TradingCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
