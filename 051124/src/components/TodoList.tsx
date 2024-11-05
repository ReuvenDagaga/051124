import { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { toggleCompletion } from '../store/featuares/todos/TodoSlice';

export const TodoList : FC = (): JSX.Element => {
    const [copletedCounter, setCompletedCounter] = useState<number>(0);
    const todos = useSelector((state: RootState) => state.todos.tasks);
    const dispatch = useDispatch(); 
    
    useEffect(() => {
        
    }, [])

    const hundleTuggle = (id: number) => {
        dispatch(toggleCompletion(id))
        setCompletedCounter(copletedCounter + 1)

    }
  return (
    <div>
        <h1>Todo</h1>
        <ul>
            {todos.map(todo => 
                <li key={todo.id}>{`${todo.text} ${todo.completed}`} 
                
                <button onClick={() => hundleTuggle(todo.id)}>V</button>
                </li>
                
            )}
        </ul>
        <p>{copletedCounter}</p>
    </div>
  )
}



