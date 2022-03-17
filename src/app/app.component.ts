import { Component, OnDestroy, OnInit } from '@angular/core';
import { CvDataService } from './cv-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  constructor(private cvDataService: CvDataService) {}
  
  cvData: any;

  ngOnInit(): void {
    this.cvDataService.getCvData().subscribe( (data) => {
      this.cvData = data;
    });
  }
  ngOnDestroy(): void {
    
  }
  title = 'cv';
}
