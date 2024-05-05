import {useState} from 'react';
import {DEFAULT_TODO_TASK} from '../../constants';
import {ITodoTask} from '../../types';

export const useHomeScreenHook = (): Record<string, any> => {
  const [data, _] = useState<ITodoTask[]>(DEFAULT_TODO_TASK);

  return {
    data,
  };
};
