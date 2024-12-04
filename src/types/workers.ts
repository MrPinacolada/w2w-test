export interface TableColumn<T> {
  key: keyof T;
  label: string;
}

export interface Worker {
  id: number;
  fullName: string;
  department: number;
  role: number;
  isHead: boolean;
}
