import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {jdyxMobileValidator, jdyxPasswordValidator} from '../jdyx-password/jdyx-password-validator.directive';
import {ParentComponent} from '../ParentComponent';
import {ActivatedRoute, Router} from '@angular/router';
import {JdyxDashboardService} from '../jdyx-dashboard/jdyx-dashboard.service';

@Component({
  selector: 'app-jdyx-email',
  templateUrl: './jdyx-email.component.html',
  styleUrls: ['./jdyx-email.component.css']
})
export class JdyxEmailComponent extends ParentComponent implements OnInit {
  @Input() isCreateNewEmail: boolean;
  @Output() emailChange = new EventEmitter<boolean>();
  userName: string;
  domain = 'jmu.edu.cn';

  ngOnInit(): void {
    this.getUserNameInfo();
  }

  constructor(private route: ActivatedRoute, private router: Router, private emailService: JdyxDashboardService) {
    super();
  }

  getUserNameInfo(): void{
    this.emailService.getUserNameInfo().subscribe(res => {
     this.userName = res;
     if (this.userName === ''){
       location.href = 'http://id.jmu.edu.cn/amserver/UI/Login?goto=http%3A%2F%2Fjzt.jmu.edu.cn%3A4200';
     }
    });
  }

  myForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16), jdyxPasswordValidator()]),
    multiPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16), jdyxPasswordValidator()]),
    mobile: new FormControl('', [jdyxMobileValidator()]),

  });

  cancel(): void {
    this.isCreateNewEmail = false;
    this.emailChange.emit(this.isCreateNewEmail);
  }

  createNewEmail(): void {
    const passwordValue: string = this.myForm.controls.password.value;
    const mobileValue: string = this.myForm.controls.mobile.value;
    this.emailService.createNewEmail(passwordValue, mobileValue).subscribe(next => {
      console.log(next);
    });
    this.isCreateNewEmail = false;
    this.emailChange.emit(this.isCreateNewEmail);
  }
}
