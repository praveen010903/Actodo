import { useState } from "react"
function Addtodoform(props){
    const activityArr=props.activityArr
    const setActivityArr=props.setActivityArr
    const [newactivity,setnewactivity]= useState("")
    function handlechange(evt){
        setnewactivity(evt.target.value)
    }
    function addactivity(){
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setnewactivity("")
    }
    
    return(
        <div>
        <h1 className="font-bold text-2xl">Manage Your Activities</h1>
        <input type="text" placeholder="Next Activity"  onChange={handlechange} value={newactivity} className=" border border-black bg-transparent p-2 my-3"></input>
        <button onClick={addactivity}  className="bg-black text-white p-2 ">Add</button>
    </div>
    )
}
export default Addtodoform