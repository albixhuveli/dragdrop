import "./Task.css";
import { useSortable } from "@dnd-kit/sortable";


export const Task = ({ id, title }) => {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id});

    return ( 
        <div ref = {setNodeRef} {...attributes} {...listeners} className="task">
            <input type="checkbox" className="checkbox"/>
            {title}
        </div>
    );
};
