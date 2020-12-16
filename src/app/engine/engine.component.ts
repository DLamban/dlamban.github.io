import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EngineService } from './engine.service';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls:['./engine.component.css']
})
export class EngineComponent implements OnInit {

  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(private engServ: EngineService) { }

  ngAfterViewInit() {
    this.engServ.createScene(this.rendererCanvas);
    this.rendererCanvas.nativeElement.width=100;
    this.engServ.animate();
   
    
  }
  public ngOnInit(): void {

   
  }

}
