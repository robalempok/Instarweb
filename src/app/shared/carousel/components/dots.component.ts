import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dots',
    template: `
    <div class="dot" *ngFor="let index of numbers" (click)="click(index)" [class.active]="activeDot === index"></div>
    `,
    styles : [`
        :host{
            position: absolute;
            display: inline-block;
            z-index: 1000;
        }
        :host(.left){
            bottom: 10px;
            left: 10px;
        }
        :host(.right){
            bottom: 10px;
            right: 10px;
        }
        :host(.middle){
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            -webkit-transform: translateX(-50%);
            -moz-transform: translateX(-50%);
            -o-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
        }
        .dot{
            height: 10px;
            width: 10px;
            border-radius: 5px;
            background: #6a6a6a;
            opacity: .6;
            margin: 0 4px;
            display: inline-block;
        }
        .dot:hover{
            opacity: 1;
            cursor: pointer;
        }
        .dot.active{
            opacity: 1;
        }
    `]
})

export class DotsComponent implements OnInit {
    numbers: Array<number>;

    // tslint:disable-next-line:no-input-rename
    @Input('active-dot') activeDot = 0;
    // tslint:disable-next-line:no-input-rename
    @Input('dots-count') dotsCount: number;

    @HostBinding('class')
    @Input() position = 'left';

    // tslint:disable-next-line:no-unused-expression
    // tslint:disable-next-line:no-output-rename
    @Output('on-click') onclick = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
        this.numbers = Array(this.dotsCount).fill(0).map((x, i) => i);
    }

    click(index: any) {
        this.onclick.emit(index);
        this.activeDot = index;
    }
}
