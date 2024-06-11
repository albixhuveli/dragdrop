import { useState } from 'react';
import './App.css'

import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from '@dnd-kit/core';
import { Column } from './components/Column/Column';
import { Input } from "./components/Input/Input";

import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Fix styling" },
    { id: 3, title: "Learn how to center a div" },
  ]);

  const addTask = (title) => {
    setTasks((tasks) => [...tasks, {id: tasks.length + 1, title }])
  };

  const getTaskPos = (id) => tasks.findIndex(task => task.id === id);

  const handleDragend = event => {
    const {active, over} = event;
    if (active.id === over.id) return;
    
    setTasks(tasks => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);
      
      return arrayMove(tasks, originalPos, newPos);
    })
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <div className='App'>
      <h1> My Tasks </h1>
      
      <DndContext 
        sensors={sensors} 
        onDragEnd={handleDragend} 
        collisionDetection={closestCorners}
      >
        <Input onSubmit = {addTask}/>
        <Column tasks={tasks}></Column>
      </DndContext>
    </div>  
  );
}