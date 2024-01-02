import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{

  contactoForm!: FormGroup;
  isSubmit = true;
  submitMessage = "";

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.contactoForm = this.formBuilder.group({
      name:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      message:[null,Validators.required]
    })
  }

  submitData(value: any){
    console.log(value);
    this.isSubmit = true;
    this.submitMessage= 'Mensaje enviado!';
    setTimeout(() => {
      this.isSubmit=false;
    }, 8000);
  }

}
