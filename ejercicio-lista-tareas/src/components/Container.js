import React, { useState } from 'react';
import FormTodo from './FormTodo';
import TaskList from './TaskList';


const Container = () => {
    const [list, setList] = useState([]);

    const handleAddItem = addItem => {
        setList([...list, addItem]);
    };
    
    return (
        <div>
            <h1>Listado de tareas</h1>
            <TaskList list={list} setList={setList}/>
            <FormTodo handleAddItem={handleAddItem}/>
            
        </div>
    )
}

export default Container;
