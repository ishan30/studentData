import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.scss']
})
export class FormsDemoComponent  implements OnInit{

  // Reactive Forms
  // -FormControl : track value of the control & apply validation 
  // -FormGroup : track value of the group & validation status of all control that are part of the group
  // -FormArray : track value & validate array of form control
  // -ControlValueAccessor : middleware between formcontrol & native DOM element
  constructor(private formBuilder: FormBuilder) { }
  // Reactive
  // favColorControl = new FormControl('');

  // Template-driven
  favColor='Blue';

    
  studentProfileForm;
  ngOnInit(): void {
    // using FormBuider

    this.studentProfileForm = this.formBuilder.group({
      name: ['',Validators.required],
      email: [''],
      address: this.formBuilder.group({
        city: [''],
        state: ['']
      })
    });
  }

  // using FormGroup
  // studentProfileForm = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl('')
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl('')
  //   })
  // });


  

  onSubmit() {
    console.log(this.studentProfileForm.value);
  }
}
