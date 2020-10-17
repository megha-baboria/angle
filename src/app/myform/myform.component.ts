import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MyformserveService } from '../myformserve.service';
import { Student } from '../formdata';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss']
})
// export class MyformComponent{
//   profileForm = new FormGroup({
//     firstName: new FormControl(''),
//     lastName: new FormControl(''),
//   });
// updateName() {
//   this.profileForm.firstName.setValue('Nancy');
// }
// }

// class MygetData {
//   public students: Student;
//   public errorMsg;
//   constructor(private _myformService: MyformserveService) { }

// ngOnInit(): void {
//   this._myformService.getStudents()
//     .subscribe(data => this.students = data.body,
//       error => this.errorMsg = error);
// }
// }

export class MyformComponent implements OnInit {
  public students: Student;
  myForm: FormGroup;
  message: string;
  errmessage: boolean;
  succmessage: boolean;

  constructor(private fb: FormBuilder, private _myformService: MyformserveService) { }
  ngOnInit(): void {
    this._myformService.getStudents()
      .subscribe(data => {
        this.students = data.body;
        this.myForm.patchValue({
          name: this.students.name,
          email: this.students.email,
          comment: this.students.comment
        });
      }
      );
    this.initializeForm();
    this.onChanges();
    // this.updateProfile();

  }
  initializeForm(): void {
    console.log('megha');
    console.log(this.students);
    this.myForm = this.fb.group({
      name: [''],
      email: [''],
      // feedback: this.fb.group({
      //   great: false,
      //   okay: false,
      //   Good: false
      // }),
      feedback: ['Good'],
      comment: ['']

    });
  }
  onSubmit() {
    console.log(this.myForm.value);
    this._myformService.postStudents(this.myForm.value).subscribe(
      response => {
        console.log('Success!', response)
      },
      error => console.log('Error!', error)
    );
  }

  // updateProfile() {
  //   this.myForm.patchValue({
  //     name: 'this.students.name',
  //     email: 'megha@gmail.com',
  //     comment: 'Great work'
  //   });
  // }

  onChanges(): void {
    this.myForm.valueChanges.subscribe(val => {
      this.message =
        `Hello, My name is ${val.name} and my email is ${val.email}. I would like to tell you that ${val.comment}.`;
    });
  }

}


