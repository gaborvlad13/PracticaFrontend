import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Materie } from './models/materie';

@Component({
  selector: 'app-class-timetable',
  templateUrl: './class-timetable.component.html',
  styleUrls: ['./class-timetable.component.scss'],
})
export class ClassTimetableComponent implements OnInit {
  @Input() id: string = 'test';
  @Input() name: string = '';
  @Input() teachers: string;
  @Input() description: string;
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter();
  @Output() updateEvent: EventEmitter<Materie> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  delete(): void {
    this.deleteEvent.emit(this.id);
  }

  update(): void {
    let materie: Materie = {
      id: this.id,
      name: this.name,
      teachers: this.teachers,
      description: this.description,
    };
    this.updateEvent.emit(materie);
  }
}
