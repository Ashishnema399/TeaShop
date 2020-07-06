import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormArray, FormControl, FormsModule } from '@angular/forms';
import { TeaModel } from '../Models/teamodel';
import { TeaService } from '../Services/tea.service';
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-tea-form',
  templateUrl: './tea-form.component.html',
  styleUrls: ['./tea-form.component.css']
})
export class TeaFormComponent implements OnInit {

  TeaForm : FormGroup;
  public teamodel = [];
  submitted = false;
  

  constructor(private teaservice : TeaService, private router:Router, private formBuilder :FormBuilder) { }

  ngOnInit(): void {
    this.TeaForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Description: [null, [Validators.required, Validators.maxLength(100)]],
      Price: ['', Validators.required],
    });

//console.log(this.teamodel);
    this.getTeaInfo();
  }
  

  onSubmit(){
    
    //Here TeaForm is a name of reative Form.
    this.submitted = true;
    if (this.TeaForm.invalid) {
      return;
  }
    console.log(this.TeaForm.value); 
    let teaform = this.TeaForm.value;
    this.teaservice.InsertTeaDetails(teaform).subscribe(
      response => console.log("Success !", response),
      response => console.error("Error !", response)
     );
     alert("New Tea  is successfully Added !")
     this.TeaForm.reset();
     this.getTeaInfo();
  }
  
  onClose(){
    this.submitted = false;
    this.TeaForm.reset();
  }
getTeaInfo(){
   this.teaservice.GetAllTeaInfo().
   subscribe(data => this.teamodel = data);
}

EditTeaForm(userId) : void{

console.log(userId);
localStorage.setItem('Id',userId);
this.router.navigate(['/EditTeaForm']);
//this.teaservice.EditById(Id).subscribe(data =>this.teamodel = data);
}

DeleteCurrentTea(Id) : void{
    console.log(Id);
  this.teaservice.DeleteTeaById(Id).
  subscribe(response => console.log("Success !",response),
  response => console.error("Error !",response)
  );
  alert("Data deleted sucessfully !");
  this.getTeaInfo();
  
}
}
