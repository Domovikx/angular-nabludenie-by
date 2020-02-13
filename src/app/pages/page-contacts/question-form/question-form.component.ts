import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent {
  public formQuestion: FormGroup;

  constructor() {
    //
  }

  ngOnInit(): void {
    this.createForm();
  }
  private createForm(): void {
    this.formQuestion = new FormGroup({
      formName: new FormControl(null),
      formEmail: new FormControl(null),
      formTopic: new FormControl(null),
      formMessage: new FormControl(null)
    });
  }
}
