export interface ErrorResponseErrorProps {
  statusCode: number;
  error: string;
  message: Datum[];
  data: Datum[];
}

export interface Datum {
  messages: Message[];
}

export interface Message {
  id: string;
  message: string;
}

export interface LoginResponseProps {
  jwt: string;
  user: UserInfoProps;
}

export interface UserInfoProps {
  _id: string;
  blocked: boolean;
  company: string;
  confirmed: boolean;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}
