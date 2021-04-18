import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import {ChartOptions, ChartType} from 'chart.js';
import {ServiceOffreService} from '../../_services/service-offre.service';
import {Statistique, Statistique2} from '../../Models/statistique';
import {TokenStorageService} from '../../_services/token-storage.service';
import {StageService} from '../../_services/stage.service';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';











public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartColors: Array < any > = [{
    backgroundColor: ['#F8E018', '#E91E0A', '#C0E135','#41D456'],
    borderColor: ['rgba(252, 235, 89, 0.2)', 'rgba(77, 152, 202, 0.2)','rgba(77, 152, 202, 0.2)', 'rgba(241, 107, 119, 0.2)']
  }];
  public pieChartLegend = true;
  public pieChartPlugins = [];


  public pieChartLabels1= [];
  public pieChartType: ChartType = 'pie';
  public pieChartData1 = [];
  public pieChartLabels2= [];
  public pieChartData2 = [];
  // 2eme
  equipes: Array<any>;
  user: Statistique;
  user2:Statistique2;
  public chartColors: Array<any> = [
    { // second color
      backgroundColor: '#C0C0C0',
      borderColor: '#008080',
      pointBackgroundColor: '#008080',
      pointBorderColor: '#CF1625',
      pointHoverBackgroundColor: '#FFCE56',
      pointHoverBorderColor: '#CF1622'
    },
   ];
  data: any;

  constructor(private token:TokenStorageService,private stageService: StageService ) {
    this.stageService.anneestat().subscribe(data => {
      this.user2 = data as Statistique2;
      //for (const c of this.user) {
      this.data = {
        labels: [ this.user2.lab1,this.user2.lab2, this.user2.lab3,this.user2.lab4],
        datasets: [
          {
            data: [this.user2.n1, this.user2.n2, this.user2.n3,this.user2.n4],
            backgroundColor: [
              "#8EE452",
              "#36A2EB",
              "#FFCE56",
              '#CF1622'
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              '#CF1622'  ]
          }]
      };
    });
  }
  showFiller = false;

  users: Array<any>;
  id: number;
  currentUser: any;
  roles: string[];
  isLoggedIn = false;
  username: string;
data1:any;

  ngOnInit() {
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;
      this.username = user.username;
      this.id = user.id;
    }
    this.currentUser = this.token.getUser();
  this.stageService.statutstat().subscribe(data => {
      this.user = data as Statistique;
      //for (const c of this.user) {
       this.pieChartLabels1.push(this.user.label1);
       this.pieChartData1.push(this.user.nb1);
        this.pieChartLabels1.push(this.user.label2);
        this.pieChartData1.push(this.user.nb2);
        this.pieChartLabels1.push(this.user.label3);
        this.pieChartData1.push(this.user.nb3);
      this.pieChartLabels1.push(this.user.label4);
      this.pieChartData1.push(this.user.nb4);
      });
    this.stageService.anneestat().subscribe(data1 => {
      this.user2 = data1 as Statistique2;
      //for (const c of this.user) {
      this.pieChartLabels2.push(this.user2.lab1);
      this.pieChartData2.push(this.user2.n1);
      this.pieChartLabels2.push(this.user2.lab2);
      this.pieChartData2.push(this.user2.n2);
      this.pieChartLabels2.push(this.user2.lab3);
      this.pieChartData2.push(this.user2.n3);
      this.pieChartLabels2.push(this.user2.lab4);
      this.pieChartData2.push(this.user2.n4);

    });

}












}
