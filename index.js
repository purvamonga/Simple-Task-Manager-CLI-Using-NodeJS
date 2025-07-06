const fs=require('fs');
const path=require('path');

filePath=path.join(__dirname,'tasks.json');

function fileexists(){
    try{
    return fs.existsSync(filePath);
    }catch(err){
        console.error("error creating file",err.message);
        process.exit();
    }
}

function createEmptyfile(){
    fs.writeFileSync(filePath,'[]','utf-8');
}

function loadTasks(){
    try{
    if(!fileexists()){
        createEmptyfile();
    }

    const data=fs.readFileSync("tasks.json",'utf-8');
    try{
        return JSON.parse(data);
    }   
    catch(err){
        console.log("Error parsing JSON");
        createEmptyfile();
        return [];
    }
}
catch{
    console.log("File read error:");
    process.exit();
}
}

function saveTasks(tasks) {
    try{
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf-8');
    }catch(err){
        console.log("Error writing file");
    }
}

const tasks = loadTasks();
// console.log("Loaded tasks:", tasks);


const [,, command, ...args] = process.argv;


if(command=='add'|| command=='ADD'||command=='Add'){
    const title=args.join(' ').trim();

    if(!title){
        console.log("Enter valid Task");
        process.exit();
    }

    const task=loadTasks();

    const ID= task.length>0 ? Math.max(...task.map(t=>t.id))+1:1;
    
    const newTask={
        id: ID,
        title: title,
        status: "pending",
        Creation_Time: new Date().toISOString(),
        updatedAt: new Date().toISOString()

    };

    const updatedTasks = [...tasks, newTask];

    try {
        fs.writeFileSync(filePath, JSON.stringify(updatedTasks, null, 2), 'utf-8');
        console.log(`New Task- [${ID}] added: "${title}"`);
        } catch (err) {
        console.error("cannot write to file", err.message);
        }
}

else if(command=='List'|| command=='LIST'|| command=='list'){
    const task=loadTasks();
    if(task.length===0){
        console.log("No Task Found");
        process.exit();
    }
    console.log("----------YOUR TASKS----------");
    task.forEach(task => {
    console.log(`Task ID ${task.id}`);
    console.log(`Title : ${task.title}`);
    console.log(`Added : ${task.Creation_Time || 'N/A'}`);
    console.log(`Updated : ${task.updatedAt || 'N/A'}`);
    console.log(`Status: ${task.status}\n`);
  });
}

else if(command=='Update'|| command=='UPDATE'|| command=='update'){
    const ID = parseInt(args[0]);
    const newTitle = args.slice(1).join(' ').trim();
        if (isNaN(ID)) {
        console.log("Invalid Task ID");
        process.exit();
    }

    if (!newTitle) {
        console.log("Please enter a task description.");
        process.exit();
    }
    const task = loadTasks();
    let updatetask = null;
    for (let i = 0; i < task.length; i++) {
    if (task[i].id === ID) {
        updatetask = task[i];
        break;
    }
    }
    if(!updatetask){
        console.log(`Task with ${task.ID} not found`);
        process.exit();
    }
    updatetask.title = newTitle;
    updatetask.updatedAt = new Date().toISOString();
    saveTasks(task);
    console.log(`Task with ${ID} updated successfully.`);

}