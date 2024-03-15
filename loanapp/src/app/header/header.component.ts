import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  currentDate: string = new Date().toLocaleDateString();

  constructor() { }
  
  ngOnInit(): void {
      
  }
}
