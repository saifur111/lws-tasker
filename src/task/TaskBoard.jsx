import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import NoTasksFound from "./NoTaskFound";


export default function TaskBoard() {
    const initialTask = {
        "id": crypto.randomUUID(),
        "title": "Learn React",
        "description": "React is a webdevelopment tool which use to interactive the UI.",
        "tags": ["web", "react", "js"],
        "priority": "High",
        "isFavorite": false,
    }
    const [tasks, setTasks] = useState([initialTask])
    const [showAddModal, setShowAddModal] = useState(false);
    const [taskToUpdate, setTaskToUpdate] = useState(null);
   
    const handleAddTask=(newTask,isAdd)=>{
        if(isAdd){
            setTasks([...tasks, newTask])
        }else{
            setTasks(
                tasks.map((task)=>{
                    if(task.id === newTask.id){
                        return newTask;
                    }
                    return task;
                })
            )
        }
        setShowAddModal(false);
    }
    
    const handleEditTask = (task)=>{
        setTaskToUpdate(task);
        setShowAddModal(true);
    }
    const handleCloseClick =()=>{
        setShowAddModal(false);
        setTaskToUpdate(null);
    }

    const handleDeleteTask = (taskId) => {
        const taskAfterDelete = tasks.filter(task=>task.id!==taskId);
        setTasks(taskAfterDelete);
    }
   const handleDeleteAllClick=()=> {
        tasks.length = 0;
        setTasks([...tasks]);
    }
    const handleSearch=(searchTerm)=> {
        const filtered = tasks.filter((task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setTasks([...filtered]);
    }
    const handleFavorite=(taskId)=> {
        const taskIndex = tasks.findIndex((task) => task.id === taskId);
        const newTasks = [...tasks];
        newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;//toggle tru/false
        setTasks(newTasks);
    }
    
    return (
        <>
            <section className="mb-20" id="tasks">
                {showAddModal && <AddTaskModal  
                onSave={handleAddTask}
                taskToUpdate={taskToUpdate}
                onCloseClick={handleCloseClick}
                />}
                <div>
                    <div className="p-2 flex justify-end">
                        <SearchTask onSearch={handleSearch}/>
                    </div>
                    <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                        <TaskActions 
                        onAddClick={() => setShowAddModal(true)} 
                        onDeleteClick={handleDeleteAllClick} 
                        />
                        {
                            tasks.length > 0 ?
                                (<TaskList
                                    tasks={tasks}
                                    onEdit={handleEditTask}
                                    onDelete={handleDeleteTask}
                                    onFav={handleFavorite}
                                />) : (<NoTasksFound />)
                        }
                    </div>
                </div>
            </section>
        </>
    );
}