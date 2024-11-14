import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TradingCallsComponent } from './pages/trading-calls/trading-calls.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TradingCallsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'trading-application-ui';
}
