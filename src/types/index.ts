export interface ITodoTaskProgress {
  progressName: string;
  done: boolean;
}

export interface ITodoTask {
  id: string;
  title: string;
  description: string;
  taskProgress: ITodoTaskProgress[];
}
