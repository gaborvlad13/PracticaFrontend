import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Materie } from '../class-timetable/models/materie';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  materie: Materie;
  materieForm: FormGroup;
  constructor(private dialogRef: MatDialogRef<UpdateComponent>) {}

  ngOnInit(): void {
    this.materieForm = new FormGroup({
      name: new FormControl(this.materie.name, Validators.required),
      teachers: new FormControl(this.materie.teachers, Validators.required),
      description: new FormControl(
        this.materie.description,
        Validators.required
      ),
    });
  }

  saveMaterie(): void {
    if (this.materieForm.valid) {
      this.materie.name = this.materieForm.get('name').value;
      this.materie.teachers = this.materieForm.get('teachers').value;
      this.materie.description = this.materieForm.get('description').value;

      this.dialogRef.close({ materie: this.materie });
    }
  }
}
