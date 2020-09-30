import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {jdyxMobileValidator} from '../jdyx-password/jdyx-password-validator.directive';
import {ParentComponent} from '../ParentComponent';
import {ActivatedRoute, Router} from '@angular/router';
import {JdyxDashboardService} from '../jdyx-dashboard/jdyx-dashboard.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-jdyx-mobile',
  templateUrl: './jdyx-mobile.component.html',
  styleUrls: ['./jdyx-mobile.component.css']
})
export class JdyxMobileComponent  extends ParentComponent  implements OnInit {
  @Input() isMobileset: boolean;
  @Output() mobilesetChange = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  constructor(private route: ActivatedRoute, private router: Router, private emailService: JdyxDashboardService, private dialog: MatDialog) {
    super();
  }

  myForm = new FormGroup({
    mobile: new FormControl('', [jdyxMobileValidator()]),

  });

  mobileSet(): void {
    const mobileValue: string = this.myForm.controls.mobile.value;

    this.emailService.mobileSet(mobileValue).subscribe(next => {
      if (next.suc){

      }
      else{}

      console.log(next);
    });

    this.isMobileset = false;
    this.mobilesetChange.emit(this.isMobileset);
  }

  cancel(): void {
    this.isMobileset = false;
    this.mobilesetChange.emit(this.isMobileset);
  }

}
