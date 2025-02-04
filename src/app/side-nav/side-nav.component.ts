import { Component, Output, EventEmitter, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = true;
  screenWidth = 0;
  // List of all navigations in the side bar
  navList = [
    {routerLink: '', icon: '../../assets/icons/home.ico', label: 'Homepage' },
    {routerLink: '/resume', icon: '../../assets/icons/resume.ico', label: 'Resume' },
    {routerLink: '/python', icon: '../../assets/icons/python.ico', label: 'Python Projects' },
    {routerLink: '/calc', icon: '../../assets/icons/calculator.ico', label: 'Calculator' }
  ];

  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({
          collapsed: this.collapsed,
          screenWidth: this.screenWidth
        }
      );
    }
  }
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;
    }
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth
      }
    );
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth
      }
    );
  }
}
