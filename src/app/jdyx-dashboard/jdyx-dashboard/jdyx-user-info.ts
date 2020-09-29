import {JdyxResultInfo} from './jdyx-result-info';

export interface JdyxUserInfo extends JdyxResultInfo{
  account_name: string;
  domain: string;
  job_no: string;
  nickname: string;
  mobile: string;

}
