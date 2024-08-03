import TodoItem from './TodoItem';
function Todolist(props){
    const activityArr=props.activityArr
    const setActivityArr=props.setActivityArr
    return(
        <div className="bg-indigo-300 p-2 border rounded-md flex-grow ">
        <h1 className="text-2xl font-bold">Today's Activity</h1>
        {activityArr.length===0?<p>You have not add any activity yet</p>:""}
        {
            activityArr.map(function(item,index){
                return<TodoItem id={item.id} activity={item.activity} index={index} activityArr={activityArr} setActivityArr={setActivityArr}/>
            })
        }
    </div>  
    )
}
export default Todolist