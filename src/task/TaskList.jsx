import { FaHeart } from "react-icons/fa";
import TableHead from "./TableHead";

export default function TaskList({ tasks, onEdit, onDelete, onFav }) {
    return (
        <>
            <div className="overflow-auto">
                <table className="table-fixed overflow-auto xl:w-full">
                    <TableHead />
                    <tbody>
                        {tasks.map(task => (
                            <tr key={task.id} className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                                <td><button onClick={() =>onFav(task.id)}>
                                    {task.isFavorite ? (
                                        <FaHeart color="red" />
                                    ) : (
                                        <FaHeart color="gray" />
                                    )}
                                </button></td>
                                <td>{task.title}</td>
                                <td>
                                    <div>
                                        {task.description}
                                    </div>
                                </td>
                                <td>
                                    <ul className="flex justify-center gap-1.5 flex-wrap">
                                        {task.tags.map((tag) => (
                                            <li key={tag}>
                                                <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                                                    {tag}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="text-center">{task.priority}</td>
                                <td>
                                    <div className="flex items-center justify-center space-x-3">
                                        <button 
                                        className="text-red-500"
                                        onClick={()=>onDelete(task.id)}
                                        >
                                            Delete
                                        </button>
                                        <button 
                                        className="text-blue-500"
                                        onClick={()=>onEdit(task)}// full task send to task board
                                        >
                                            Edit
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    );
}