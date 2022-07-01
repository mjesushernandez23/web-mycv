//generals
export interface ImagesProps {
  name: string;
  formats: ImageFormatsProps;
}
export interface ImageFormatsProps {
  thumbnail: ImageProps;
  sm: ImageProps;
  md: ImageProps;
  lg: ImageProps;
  xl: ImageProps;
  "2xl": ImageProps;
}
export interface ImageProps {
  hash: string;
  ext: string;
  width: number;
  height: number;
}

export type KeysFormats = "thumbnail" | "sm" | "md" | "lg" | "xl" | "2xl";
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
  id: number;
  blocked: boolean;
  company: string;
  confirmed: boolean;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface CreateConferencieProps {
  time: string;
  url?: string;
  comments?: string;
  users_permissions_user: string;
}

export interface ResumeResponseProps {
  firstName: string;
  lastName: string;
  position: string;
  description: string;
  skills: string;
  workExperience: string;
  study: string;
  objective: string;
  additional: string;
  contact: ContactProps[];
  photo: ImagesProps;
}

export interface ContactProps {
  type: "email" | "tel" | "whatsapp" | "repository";
  value: string;
}
