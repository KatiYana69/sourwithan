import { Component} from '@angular/core';
import { RouterModule, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BodyComponent } from './body/body.component';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SideNavComponent, BodyComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';

  isSideNavCollapsed = true;
  screenWidth = 0;
  
  onToggleSideNav(event: { collapsed: boolean; screenWidth: number }): void {
    this.isSideNavCollapsed = event.collapsed;
    this.screenWidth = event.screenWidth;
  }
}
