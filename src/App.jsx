import { useState } from 'react';
import './App.css'

import { DndContext, closestCorners } from '@dnd-kit/core';
import { Column } from './components/Column/Column';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Fix styling" },
    { id: 3, title: "Learn how to center a div" },
  ]);

  return (
    <div className='App'>
      <h1> My Tasks </h1>
      <DndContext collisionDetection={closestCorners}>
        <Column tasks={tasks}></Column>
      </DndContext>
    </div>  
  );
}