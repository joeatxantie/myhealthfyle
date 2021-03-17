import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lineChartBloodPressureData: ChartDataSets[] = [{ data: [75, 77, 78, 75, 77, 75, 78, 75, 74], label: 'Blood Pressure' },];
  lineChartHeartRateData: ChartDataSets[] = [{ data: [91, 90, 91, 92, 150, 80, 85, 86, 98], label: 'Heart Rate' },];
  lineChartTemperatureData: ChartDataSets[] = [{ data: [96.6, 98.6, 98.6, 98.6, 98.6, 102.3, 101.0, 99.9, 98.8], label: 'Temperature' },];


  lineChartBloodPressureLabels: Label[] = ['02/01/21', '02/08/21', '02/15/21', '02/22/21', '03/01/21', '03/08/21', '03/15/21'];
  lineChartHeartRateLabels: Label[] = ['02/01/21', '02/08/21', '02/15/21', '02/22/21', '03/01/21', '03/08/21', '03/15/21'];
  lineChartTemperatureLabels: Label[] = ['02/01/21', '02/08/21', '02/15/21', '02/22/21', '03/01/21', '03/08/21', '03/15/21'];

  lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#6F4E7C',
      backgroundColor: 'rgba(255,255,255,0.28)',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';

  constructor() { }

  ngOnInit(): void {
  }

}
