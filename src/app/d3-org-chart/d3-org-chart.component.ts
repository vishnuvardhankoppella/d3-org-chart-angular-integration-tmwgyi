import {
  OnChanges,
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef
} from "@angular/core";
import  TreeChart from "d3-org-chart";

@Component({
  selector: "app-d3-org-chart",
  templateUrl: "./d3-org-chart.component.html",
  styleUrls: ["./d3-org-chart.component.css"]
})
export class D3OrgChartComponent implements OnInit, OnChanges {
  @ViewChild("chartContainer") chartContainer: ElementRef;
  @Input() data: any[];
  chart;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (!this.chart) {
      this.chart = new TreeChart();
    }
    this.updateChart();
  }

  ngOnChanges() {
    this.updateChart();
  }
  updateChart() {
    if (!this.data) {
      return; 
    }
    if (!this.chart) {
      return; 
    }
    this.chart
      .container(this.chartContainer.nativeElement)
      .data(this.data)
      .svgWidth(500)
      .initialZoom(0.4)
      .onNodeClick(d => console.log(d + " node clicked"))
      .render();
  }
}
