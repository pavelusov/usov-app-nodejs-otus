export type User = {
  id: number
  name: string
}

export interface IClassRoom {
  id: string;
  title: string;
  description: string;
  date: string;
  link: string | null;
}

export interface ICourse {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  classrooms: IClassRoom[];
}
