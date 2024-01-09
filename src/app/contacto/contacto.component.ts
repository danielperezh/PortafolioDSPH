import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{

  form: FormGroup = this.fb.group({
    from_name: "",
    to_name: "Sebastian Perez",
    from_email: "",
    message: "",
  });

  constructor(private fb: FormBuilder,private toastr: ToastrService){}

  ngOnInit(): void {

  }

  async send() {
    try {
      emailjs.init("23Zwzi1efbGDgjYwB");
      let response = await emailjs.send("service_tjbefzf", "template_ujy530l", {
        from_name: this.form.value.from_name,
        to_name: this.form.value.to_name,
        from_email: this.form.value.from_email,
        message: this.form.value.message,
      });

      if (response && response.status === 200) {
        this.toastr.success('Mensaje enviado!', 'Éxito');
        this.form.reset();
      } else {
        this.toastr.error('Hubo un problema al enviar el mensaje', 'Error');
      }
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      this.toastr.error('Hubo un error al enviar el mensaje', 'Error');
    }
  }

}
