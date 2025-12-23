export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

type StatusLabel = 'Total Tasks' | 'Completed' | 'Pending';

type filterLabel = 'all' | 'completed' | 'pending';

export interface filterItem {
  readonly label: filterLabel;
  isSelected: boolean;
}

export interface filterItemProps {
  filterItems: filterItem[];
}

export interface StatusItem {
  readonly count: number;
  readonly label: StatusLabel;
}

export interface StatusItemProps {
  statusBar: StatusItem[];
}

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export type NotifyType = 'positive' | 'negative' | 'info' | 'warning';
