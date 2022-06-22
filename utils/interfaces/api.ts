export interface RegisterUserProps {
  company: string;
  email: string;
  firstName: string;
  lastName: string;
  numberPhone: string;
  password: string;
  username: string;
}

export interface RegisterResponseProps {
  jwt: string;
  user: User;
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
