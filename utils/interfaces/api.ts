export interface RegisterUserProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  company: string;
}

export interface User {
  blocked: boolean;
  confirmed: boolean;
  email: string;
  id: string;
  username: string;
}

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
