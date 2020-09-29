import { Component, OnInit } from '@angular/core';
import {JdyxDashboardService} from './jdyx-dashboard.service';
import {ActivatedRoute, Router} from '@angular/router';
import {JdyxUserInfo} from './jdyx-user-info';

@Component({
  selector: 'app-jdyx-dashboard',
  templateUrl: './jdyx-dashboard.component.html',
  styleUrls: ['./jdyx-dashboard.component.css']
})
export class JdyxDashboardComponent implements OnInit {

  iPlanetDirectoryPro: string;
  isUserEmailExist: boolean;
  emailInfo: JdyxUserInfo = {} as JdyxUserInfo;
  isResetPassword = false;
  isSetPhone = false;
  isCreateNewEmail = false;

  constructor(private route: ActivatedRoute, private router: Router, private emailService: JdyxDashboardService) { }

  ngOnInit(): void {
    this.iPlanetDirectoryPro = this.emailService.getCookie('iPlanetDirectoryPro');
    if (!this.iPlanetDirectoryPro){
      location.href = 'http://id.jmu.edu.cn/amserver/UI/Login?goto=http%3A%2F%2Fjzt.jmu.edu.cn%3A4200';
    }else{
      this.getEmail();
    }
  }


  getEmail(): void{
    const id = this.iPlanetDirectoryPro;
    if (id){
      this.emailService.getEmail(id).subscribe(res => {
        if (res.suc){
          this.isUserEmailExist = true;
          this.emailInfo = res.con as JdyxUserInfo;
          this.getMobile(id);
        }
        else{
          if (res.error){
            location.href = 'http://id.jmu.edu.cn/amserver/UI/Login?goto=http%3A%2F%2Fjzt.jmu.edu.cn%3A4200';
          }
          this.isUserEmailExist = false;
        }
      });
    }
  }

  getMobile(accountName: string): void{
    // const id = this.iPlanetDirectoryPro;
    if (accountName){
      this.emailService.getMobile(accountName).subscribe(res => {
        if (res.suc){
          this.emailInfo.mobile = (res.con as JdyxUserInfo) .mobile;

        }
        else{
          if (res.error){
            location.href = 'http://id.jmu.edu.cn/amserver/UI/Login?goto=http%3A%2F%2Fjzt.jmu.edu.cn%3A4200';
          }
          this.emailInfo.mobile = '';
        }
      });
    }
  }



  reSetPhone(): void  {
    this.isSetPhone = true;
    this.isResetPassword = false;
    this.isCreateNewEmail = false;
  }

  createNewEmail(): void  {
    this.isSetPhone = false;
    this.isResetPassword = false;
    this.isCreateNewEmail = true;
  }

  reSetPassword(): void {
    this.isResetPassword = true;
    this.isSetPhone = false;
    this.isCreateNewEmail = false;
  }

  cancel(): void {
    this.isResetPassword = false;
    this.isSetPhone = false;
    this.isCreateNewEmail = false;
  }
}
