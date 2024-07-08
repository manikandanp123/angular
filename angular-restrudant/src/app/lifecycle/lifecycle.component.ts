import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() inp: string = "PMani";
  @Input() addr: string;
  @Input() age: string;
  privateInp: string = "";

  constructor() {                           // Every time it calls when component mounted
    this.inp = "manikandan";                // It wont changes because value comes from the parent to child it renders parent value
    this.privateInp = "constructor privateInp";
    console.log("constructor called! ", this.inp, this.privateInp);
  }

  // Total 8 LIFE CYCLE HOOKS ARE THERE IN ANGULAR  ********-----------************

  ngOnChanges(changes: SimpleChanges): void { // it changes the initial value This hook is called for first time renders of component and when there is changes in Input() (i.e)Parent to child input it compares previous value and current value
    // this.inp = "manikandan";          // it changes the initial value
    this.privateInp = "onchanges privateInp";
    console.log("ngOnChanges 1nd hooks called! ", changes, this.inp, this.privateInp);
  }

  ngOnInit(): void {                    // called only one time during the initalises or comp. mounted stage, For initialise the values to the variables
    this.inp = "Mass";          // it changes the initial value
    this.privateInp = "ngOnInit privateInp";
    console.log("ngOnInit 2rd hooks called!", this.inp, this.privateInp);
  }

  ngDoCheck(): void {                   //  Called for every event happens
    // this.inp = "HIIIIIIIIIII";          // it changes the initial value
    console.log("ngDoCheck 3th hooks called!", this.age);
  }

  ngAfterContentInit(): void {  // called for one only change detection cycle and for ng-content initialise for first time
    console.log("ngAfterContentInit 4th hooks called!");
  }

  ngAfterContentChecked(): void {   // called whenever there is value changes in the ng-content part
    console.log("ngAfterContentChecked 5th hooks called!");
  }

  ngAfterViewInit(): void {         // called for 1st change detection cycle after all components and child components rendered.
    console.log("ngAfterViewInit 6th hook called!");
  }

  ngAfterViewChecked(): void {      // called for every change detection cycle
    console.log("ngAfterViewChecked 7th hook called!");
  }

  ngOnDestroy(): void {             // called before the component remove from DOM
    console.log("ngOnDestroy 8th hook called!");
  }
}
