import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  input1 : number;
  input2: number;
  cleared= true;
  result: number;
  constructor() { }

  ngOnInit() {
  }

  clear(){
    this.cleared = true;
    this.input1 = 0;
    this.input2 = 0;
  }
  add(){
    this.cleared = false;
    this.result = this.input1 + this.input2;
  }
  subtract(){
    this.cleared = false;
    this.result = this.input1 - this.input2;
  }
  multiply(){
    this.cleared = false;
    this.result = this.input1 * this.input2;
  }
  divide(){
    this.cleared = false;
    this.result = this.input1 / this.input2;
  }
}
