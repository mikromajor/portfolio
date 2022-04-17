export interface UserType {
  name: { title: string; first: string; last: string };
  picture: { large: string };
  id: { value: string };
  login: { uuid: string };
  another: UserType[];
}
export interface CardProps {
  user: UserType;
  users: UserType[];
  setUsers: (val: UserType[]) => void;
  setDraggingUser: (u: UserType | undefined) => void;
  draggingUser: UserType | undefined;
  i: number;
}

export type E = React.DragEvent<HTMLDivElement>;
export type O = { name: string; reducer: any[] };
