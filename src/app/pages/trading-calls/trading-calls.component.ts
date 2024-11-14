import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
interface StrategyCount {
  name: string;
  count: number;
}

interface ViewData {
  [date: string]: StrategyCount[];
}

interface TransformedData {
  [view: string]: ViewData;
}

interface StrategyArrayItem {
  view: string;
  value: { [date: string]: string[] };
}

@Component({
  selector: 'app-trading-calls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trading-calls.component.html',
  styleUrl: './trading-calls.component.scss',
})
export class TradingCallsComponent implements OnInit {
  // base date array given
  dateArray = [
    '24-Apr-2024',
    '02-May-2024',
    '09-May-2024',
    '31-May-2024',
    '21-Jun-2024',
  ];
  // base strategy array given
  strategyArray: StrategyArrayItem[] = [
    {
      view: 'Bullish',
      value: {
        '24-Apr-2024': [
          'Bull Call Spread',
          'Bull Put Spread',
          'Bull Put Spread',
          'Long Call',
          'Bull Put Spread',
          'Bull Call Spread',
          'Strategy1',
          'Bull Call Spread',
          'Strategy1',
          'Strategy1',
          'SpreadStrategy',
          'Bull Call Spread',
        ],
        '02-May-2024': [
          'Bull Call Spread',
          'Bull Call Spread',
          'Bull Put Spread',
          'Long Call',
          'Long Call',
          'Long Call',
          'Bull Put Spread',
          'Bull Call Spread',
          'Strategy1',
          'Bull Call Spread',
          'Strategy2',
          'Strategy1',
          'Strategy2',
          'Bull Call Spread',
        ],
        '09-May-2024': [
          'Strategy Put',
          'Strategy Call',
          'Strategy Call',
          'Strategy Call',
          'Strategy Put',
        ],
      },
    },
    {
      view: 'Bearish',
      value: {
        '24-Apr-2024': [
          'Bear Call Spread',
          'Bear Call Spread',
          'Bear Call Spread',
          'Long Put',
          'Long Put',
          'Long Put',
          'Bear Call Spread',
        ],
        '31-May-2024': [
          'Long Put',
          'Long Put',
          'Long Put',
          'Long Put',
          'Long Put',
        ],
        '21-Jun-2024': [
          'Strategy3',
          'Strategy3',
          'Bear Put Spread',
          'Strategy3',
          'Long Put',
          'Long Put',
        ],
      },
    },
    {
      view: 'Rangebound',
      value: {
        '24-Apr-2024': [
          'Short Straddle',
          'Short Strangle',
          'Short Strangle',
          'Iron Butterfly',
          'Short Strangle',
          'Short Straddle',
          'Strategy1',
          'Short Straddle',
          'Strategy1',
          'Strategy1',
          'SpreadStrategy',
          'Short Straddle',
        ],
        '02-May-2024': [
          'Short Straddle',
          'Short Straddle',
          'Short Strangle',
          'Iron Butterfly',
          'Iron Butterfly',
          'Iron Butterfly',
          'Short Strangle',
          'Short Straddle',
          'Strategy1',
          'Short Straddle',
          'Strategy2',
          'Strategy1',
          'Strategy2',
          'Short Straddle',
        ],
        '21-Jun-2024': [
          'Iron Condor',
          'Iron Butterfly',
          'Iron Butterfly',
          'Iron Butterfly',
          'Iron Condor',
        ],
      },
    },
    {
      view: 'Volatile',
      value: {
        '02-May-2024': [
          'Long Straddle',
          'Long Strangle',
          'Long Strangle',
          'Long Strangle',
          'Long Straddle',
          'Strategy1',
          'Long Straddle',
          'Strategy1',
          'Strategy1',
          'Spread-Strategy',
          'Long Straddle',
        ],
        '09-May-2024': [
          'Long Straddle',
          'Long Straddle',
          'Long Strangle',
          'Long Strangle',
          'Long Straddle',
          'Strategy1',
          'Long Straddle',
          'Strategy2',
          'Strategy1',
          'Strategy2',
          'Long Straddle',
        ],
        '31-May-2024': [
          'Long Straddle',
          'Long Strangle',
          'Long Strangle',
          'Long Strangle',
          'Long Straddle',
        ],
      },
    },
  ];

  views: string[] = []; //
  dateSelectorActivated = false;

  selectedView: string = '';
  selectedDate: string = '';

  transformedData: TransformedData = {};

  ngOnInit() {
    this.views = this.strategyArray.map((s) => s.view);
    this.selectedView = this.views[0];
    this.selectedDate = this.dateArray[0];

    this.strategyArray.forEach(({ view, value }) => {
      this.transformedData[view] = Object.entries(value).reduce(
        (acc, [date, strategies]) => {
          acc[date] = Object.entries(
            strategies.reduce((strategyCount, strategy) => {
              strategyCount[strategy] = (strategyCount[strategy] || 0) + 1;
              return strategyCount;
            }, {} as Record<string, number>)
          ).map(([name, count]) => ({ name, count }));

          return acc;
        },
        {} as ViewData
      );
    });
  }

  onDateSelected(d: string) {
    this.selectedDate = d;
    this.onDateSelectorClicked();
  }

  onDateSelectorClicked() {
    this.dateSelectorActivated = !this.dateSelectorActivated;
  }

  onViewSelected(view: string) {
    this.selectedView = view;
  }
}
