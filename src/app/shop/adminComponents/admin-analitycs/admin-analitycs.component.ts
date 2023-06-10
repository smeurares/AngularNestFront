import { Component, OnDestroy, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

type DataT = {
  name: string;
  value: [string, number];
};

@Component({
  selector: 'app-admin-analitycs',
  templateUrl: './admin-analitycs.component.html',
  styleUrls: ['./admin-analitycs.component.scss']
})
export class AdminAnalitycsComponent implements OnInit, OnDestroy {
  options!: EChartsOption;
  updateOptions!: EChartsOption;

  private oneDay = 24 * 3600 * 1000;
  private now!: Date;
  private value!: number;
  private data!: DataT[];
  private timer: any;

  constructor() {}

  ngOnInit(): void {
    // generate some random testing data:
    this.data = [];
    this.now = new Date();
    this.value = Math.random() * 1000;

    for (let i = 0; i < 1000; i++) {
      this.data.push(this.randomData());
    }

    // initialize chart options:
    this.options = {
      title: {
        text: 'Sales in time',
      },
      tooltip: {
        trigger: 'axis',
        formatter: (param1: any, param2: any) => {
          const date = new Date(param1.name);
          return (
            date.getDate() +
            '/' +
            (date.getMonth() + 1) +
            '/' +
            date.getFullYear() +
            ' : ' +
            param2
          );
        },
        axisPointer: {
          animation: false,
        },
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: 'Mocking Data',
          type: 'line',
          showSymbol: false,
          data: this.data,
        },
      ],
    };

    // Mock dynamic data:
    this.timer = setInterval(() => {
      for (let i = 0; i < 5; i++) {
        this.data.shift();
        this.data.push(this.randomData());
      }

      // update series data:
      this.updateOptions = {
        series: [
          {
            data: this.data,
          },
        ],
      };
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  randomData(): DataT {
    this.now = new Date(this.now.getTime() + this.oneDay);
    this.value = this.value + Math.random() * 21 - 10;
    return {
      name: this.now.toString(),
      value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
        Math.round(this.value),
      ],
    };
  }
}



