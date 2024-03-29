import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber: number = 0;

  ngOnInit(): void {

  }
  onStartGame(){
    this.interval = setInterval(()=> {
        this.intervalFired.emit(this.lastNumber + 1);
        this.lastNumber ++;
    },1000)
  }
  onGamePause(){
    clearInterval(this.interval);
  }
}
