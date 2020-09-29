import {FormGroup} from '@angular/forms';

export class ParentComponent {
  myForm: FormGroup;
  isSubmitable = false;
  getPassWordErrorMessage(controlName: string): string {
    const errMsg = this.myForm.controls[controlName].hasError('required') ? '你必须输入密码' : ((this.myForm.controls[controlName].hasError('minlength') || this.myForm.controls[controlName].hasError('maxlength')) ? '密码长度必须为6-16位' : (this.myForm.controls[controlName].hasError('jdyxPasswordValidator') ? '至少为字母、数字、符号两种组成，不包含空格,不能输入中文' : ''));
    if (errMsg === ''){
      this.isSubmitable = true;
    }else{
      this.isSubmitable = false;
    }
    return errMsg;
  }

  getPhoneErrorMessage(): string {
    const errMsg = this.myForm.controls['mobile'].hasError('jdyxMobileValidator') ? '手机号码有误，请重新输入' : '';
    if (errMsg === ''){
      this.isSubmitable = true;
    }else{
      this.isSubmitable = false;
    }
    return errMsg;
  }

  equalPasswordAndMultiPassWord(controlName: string, controlName2: string): string {
    const controlValue1 = this.myForm.controls[controlName].value;
    const controlValue2 = this.myForm.controls[controlName2].value;
    let errMsg = '';
    if (controlValue1 && controlValue2){
       errMsg = (controlValue1 === controlValue2) ? '' : '两次密码输入不一致';
    }

    const invalid1 = !this.myForm.controls[controlName].invalid;
    const invalid2 = !this.myForm.controls[controlName2].invalid;
    if (errMsg === '' && invalid1 && invalid2){
      this.isSubmitable = true;
    }else{
      this.isSubmitable = false;
    }
    return errMsg;
  }
}
