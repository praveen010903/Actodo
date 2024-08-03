import { useState } from "react"
import Addtodoform from "./Addtodoform"
import Todolist from "./Todolist"
function Todocontainer() {
    const [activityArr,setActivityArr]=useState([
        {
            id:1,
            activity:"go for a walk"
        },
        {
            id:2,
            activity:"Do strength Trainimg"
        },

        {
            id:3,
            activity:"Eat More protiens"
        }


    ])
    return (
        <div>
            <div className="flex gap-3 flex-wrap">
              <Addtodoform  activityArr={activityArr} setActivityArr={setActivityArr}/>
               <Todolist activityArr={activityArr} setActivityArr={setActivityArr}/>
            </div>
        </div>
    )
}
export default Todocontainer