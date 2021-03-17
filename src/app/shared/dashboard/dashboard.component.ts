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
  lineChartHeartRateData: ChartDataSets[] = [{ data: [75, 77, 78, 75, 77, 75, 78, 75, 74], label: 'Heart Rate' },];
  lineChartTemperatureData: ChartDataSets[] = [{ data: [75, 77, 78, 75, 77, 75, 78, 75, 74], label: 'Temperature' },];


  lineChartBloodPressureLabels: Label[] = ['02/01/21', '02/08/21', '02/15/21', '02/22/21', '03/01/21', '03/08/21', '03/15/21'];
  lineChartHeartRateLabels: Label[] = ['02/01/21', '02/08/21', '02/15/21', '02/22/21', '03/01/21', '03/08/21', '03/15/21'];
  lineChartTemperatureLabels: Label[] = ['02/01/21', '02/08/21', '02/15/21', '02/22/21', '03/01/21', '03/08/21', '03/15/21'];

  lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'orange',
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
