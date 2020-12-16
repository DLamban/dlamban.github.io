import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProfilepicService } from './profilepic.service';

@Component({
  selector: 'app-profilepic',
  templateUrl: './profilepic.component.html'
 
})
export class ProfilepicComponent implements OnInit {

  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(private profilepicService: ProfilepicService) { }

  public ngOnInit(): void {
    this.profilepicService.createScene();
    this.profilepicService.animate();
  }

}
