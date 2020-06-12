export type User = {
  id: number
  name: string
}

export interface ILink {
  id: string;
  type: string;
  title: string;
  link: string;
}

export interface IClassRoom {
  id: string;
  courseId: string;
  title: string;
  description: string;
  date: string;
  link?: string | null;
  links: ILink[];
}

export interface ICourse {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  classrooms: IClassRoom[];
}

export interface ILink {
  id: string;
  title: string;
  link: string;
}

export interface ResponseError {
  location: string;
  msg: string;
  param: string;
  value: string;
}
