import React from "react"
import TaskCard from "./TaskCard"
import { useSelector } from "react-redux"
import { ref } from "firebase/storage"
const BoardView = ({ tasks  }) => {

    const { user } = useSelector((state) => state.auth)
    console.log("board",user)
    console.log(tasks)



    if(user.role == "admin")
    {
        return (
            <div className="w-full py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 2xl:gap-10">
                {tasks.map((task, index) => (
                    <TaskCard task={task} key={index}  />
                ))}
            </div>
        )
    }else{

        const newtasks = tasks.filter(task => 
            task.team.some(teamMember => user._id === teamMember._id)
          );
        console.log(newtasks)
        return (
            <div className="w-full py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 2xl:gap-10">
                {  
                
                newtasks.map((task, index) => (
                    <TaskCard task={task} key={index} />
                ))}
            </div>
        )

    }


    
}

export default BoardView
