import { IAuthInput } from "./authInput";

export interface IAuthentiation {
  image: string;
  title: string;
  description: string;
  inputs: IAuthInput[];
}

export interface IAuth {
  pending: boolean;
}
