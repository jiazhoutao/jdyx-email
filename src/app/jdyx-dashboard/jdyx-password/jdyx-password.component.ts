import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {AbstractControlOptions, FormControl, FormGroup, Validators} from '@angular/forms';
import { jdyxPasswordValidator} from './jdyx-password-validator.directive';
import {ParentComponent} from '../ParentComponent';
import {ActivatedRoute, Router} from '@angular/router';
import {JdyxDashboardService} from '../jdyx-dashboard/jdyx-dashboard.service';

@Component({
  selector: 'app-jdyx-password',
  templateUrl: './jdyx-password.component.html',
  styleUrls: ['./jdyx-password.component.css']
})
export class JdyxPasswordComponent extends ParentComponent  implements OnInit {
  @Input() isPassWordReset: boolean;
  @Output() passWordResetChange = new EventEmitter<boolean>();

  myForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16),  jdyxPasswordValidator()]),
    multiPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16),  jdyxPasswordValidator()]),
  });
  ngOnInit(): void {
  }

  constructor(private route: ActivatedRoute, private router: Router, private emailService: JdyxDashboardService) {
    super();
  }

  passWordReset(): void {
    const passwordValue: string = this.myForm.controls.password.value;
    this.emailService.passWordReset(passwordValue).subscribe(next => {
      console.log(next);
    });

    this.isPassWordReset = false;
    this.passWordResetChange.emit(this.isPassWordReset);
  }
  cancel(): void {
    this.isPassWordReset = false;
    this.passWordResetChange.emit(this.isPassWordReset);
  }
}
