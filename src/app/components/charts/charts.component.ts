import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})



export class ChartsComponent implements OnInit {
  public submitted = false;
  public chartTypesForm = this.fb.group({ name: ['', [Validators.required]] });
  public title: string;
  public type: string;
  public data: any;
  public columnNames: any;
  public width: number;
  public height: number;
  public options: any;
  public chartTypes: any = [
    'AreaChart',
    'BarChart',
    'BubbleChart',
    'CandlestickChart',
    'ColumnChart',
    'ComboChart',
    'Histogram',
    'LineChart',
    'OrgChart',
    'PieChart',
    'Sankey',
    'ScatterChart',
    'SteppedAreaChart',
    'Table',
    'TreeMap',
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.drawCharts();
  }


  onSubmit() {
    this.submitted = true;
    // alert(JSON.stringify(this.chartTypesForm.value));
    this.type = this.chartTypesForm.value.name;
    // this.drawCharts();
  }

  /* Select Dropdown error handling */
  public handleError = (controlName: string, errorName: string) => {
    return this.chartTypesForm.controls[controlName].hasError(errorName);
  }

  drawCharts() {
    if (this.type !== '') {
      this.title = 'Browser market shares at a specific website, 2014';
      this.type = 'PieChart';
      this.data = [
        ['Firefox', 45.0],
        ['IE', 26.8],
        ['Chrome', 12.8],
        ['Safari', 8.5],
        ['Opera', 6.2],
        ['Others', 0.7],
      ];
      this.columnNames = ['Browser', 'Percentage'];
      this.options = {
        /*colors: [/*'#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], */ is3D: true,
      };
      this.width = 800;
      this.height = 600;
    } else {
      alert('Please select chart type');
    }
  }
}
