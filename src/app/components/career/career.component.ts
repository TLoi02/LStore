import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
