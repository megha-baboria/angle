import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss']
})
export class  MyformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

  // updateName() {
  //   this.name.setValue('Nancy');
  // }
//   constructor(private fb: FormBuilder) { }
//   profileForm = this.fb.group({
//     firstName: ['',Validators.required,Validators.minLength(4)],
//     lastName: [''],
//     address: this.fb.group({
//       street: [''],
//       city: [''],
//       state: [''],
//       zip: ['']
//     }),
//   });

//   onSubmit() {
//     // TODO: Use EventEmitter with form value
//     console.warn(this.profileForm.value);
//   }

//   updateProfile() {
//     this.profileForm.patchValue({
//       firstName: 'Nancy',
//       address: {
//         street: '123 Drew Street'
//       }
//     });
//   }

// }
