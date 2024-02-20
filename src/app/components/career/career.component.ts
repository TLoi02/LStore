import { Component, OnInit } from '@angular/core';
import { CareerService } from '../../services/career.service';
import { Job } from '../../models/job.model';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent implements OnInit{
  items = [
    { label: 'Option 1', checked: false },
    { label: 'Option 2', checked: false },
    { label: 'Option 3', checked: false },
  ];
  listJob : Job[] = [];

  constructor(private careerService:CareerService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.listJob = this.careerService.getJobs();
  }
}
