import { Component, OnInit } from '@angular/core';
import { TeaModel} from '../Models/TeaModel';
import {TeaService } from '../Services/tea.service';
import { FormGroup, FormBuilder, Validators,FormArray, FormControl } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-edit-tea',
  templateUrl: './edit-tea.component.html',
  styleUrls: ['./edit-tea.component.css']
})
export class EditTeaComponent implements OnInit {
TeaForm : FormGroup;
public teamodel :any = [];
public Id: string;
public reterivedata = [];
  constructor(private teaservice: TeaService, private router: Router) { }

  ngOnInit(): void {
    this.Id = localStorage.getItem('Id');
    this.teaservice.EditById(this.Id).subscribe(data => this.teamodel = data );
  }

  back(){
    this.router.navigate(['/TeaForm']);
  }

}
