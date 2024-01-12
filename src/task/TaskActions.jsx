import ActionButton from "./ActionButton";

export default function TaskActions({ onAddClick, onDeleteClick }){
    return (
        <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <div className="flex items-center space-x-5">
                <ActionButton bgColor={"bg-blue-500"} name={"Add Task"} onActionClick={onAddClick} />
                <ActionButton bgColor={"bg-red-500"} name={"Delete All"} onActionClick={onDeleteClick} />
            </div>
        </div>
    );
}