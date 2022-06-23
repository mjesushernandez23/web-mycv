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

export interface ErrorResponseProps {
  data: {
    statusCode: number;
    error: string;
    message: MessageErrorProps[];
  };
}

export interface MessageErrorProps {
  id: string;
  message: string;
}
