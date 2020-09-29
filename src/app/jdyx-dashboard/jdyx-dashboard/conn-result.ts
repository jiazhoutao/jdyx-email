import {JdyxResultInfo} from './jdyx-result-info';

export interface ConnResult {
  con: JdyxResultInfo;
  suc: boolean;
  ver: number;
  error: string;
}
