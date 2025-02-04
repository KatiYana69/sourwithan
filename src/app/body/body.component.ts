import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnChanges {
  @Input() collapsed: boolean = true;
  @Input() screenWidth: number = 0;

  bodyClass: string = 'body';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['collapsed'] || changes['screenWidth']) {
      this.updateBodyClass();
    }
  }
  
  private updateBodyClass(): void {
    this.bodyClass = this.collapsed ? 'body-trimmed' : 'body';
  }
}