import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MateriiService } from 'src/app/services/materii/materii.service';
import { Materie } from '../class-timetable/models/materie';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-materii',
  templateUrl: './materii.component.html',
  styleUrls: ['./materii.component.scss'],
})
export class MateriiComponent implements OnInit {
  materii$: Observable<Materie[]>;

  constructor(private service: MateriiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.materii$ = this.service.getMaterii();
  }

  onDelete(event: string): void {
    let dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'true') {
        this.service
          .deleteMaterie(event)
          .subscribe((_) => (this.materii$ = this.service.getMaterii()));
      }
    });
  }

  onUpdate(event: Materie): void {
    let dialogRef = this.dialog.open(UpdateComponent);
    dialogRef.componentInstance.materie = event;
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        this.service
          .updateMaterie(result.materie)
          .subscribe((_) => (this.materii$ = this.service.getMaterii()));
      }
    });
  }
}
