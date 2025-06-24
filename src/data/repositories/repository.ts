export interface ITask {
  id: string;
  user_id: string;
  project_id: string | null;
  name: string;
  description: string | null;
  dueDate: Date | null;
  completedOn: Date | null;
  createdAt: Date;
}

export interface IProject {
  id: string;
  user_id: string;
  name: string;
  description: string | null;
  createdAt: Date;
}

interface IQueryParameters {
  limit?: number;
  offset?: number;
}

export interface ITaskQueryParameters extends IQueryParameters {
  projectId?: string;
}

export interface IProjectQueryParameters extends IQueryParameters {}

export interface ITaskRepository {
  listTasks(query: ITaskQueryParameters, userId?: string): Promise<ITask[]>;
  getTask(id: string, userId?: string): Promise<ITask>;
  createTask(payload: Partial<ITask>, userId?: string): Promise<ITask>;
  updateTask(
    id: string,
    payload: Partial<ITask>,
    userId?: string,
  ): Promise<ITask>;
}

export interface IProjectRepository {
  listProjects(query: IQueryParameters, userId?: string): Promise<IProject[]>;
  getProject(id: string, userId?: string): Promise<IProject>;
}
