import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonService } from './../../Shared/common.service';

@Component({
  selector: 'megagameplay-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact: FormGroup;
  name: FormControl;
  email: FormControl;
  subject: FormControl;
  message: FormControl;
  // tslint:disable-next-line: variable-name
  constructor(private fb: FormBuilder, private commonservice: CommonService) {

  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
  private createFormControls() {
    this.name = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required]);
    this.subject = new FormControl('', [Validators.required]);
    this.message = new FormControl('', [Validators.required]);
  }
  private createForm() {
    this.contact = this.fb.group({
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    });
  }

  sendMessage() {
    if (this.contact.valid) {
      this.commonservice.saveContactusDetails(this.contact.value).subscribe((res) => {
        console.log(res);
        if (res.status === 'ok' && res.body === 'Your Request Submitted Successfuly') {
          this.contact.reset();
        }
      });
    }
  }
  onFileChanged(event) {
    const file = event.target.files[0];
    console.log('file data', file);
  }
}
