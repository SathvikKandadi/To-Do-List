let todo_Values=[{}];
//let m = new Map();
let todoElement=document.querySelector('.data');
let dateElement=document.querySelector('.date');
let dispElement=document.querySelector('.disp');
let i=0;
function render()
{
    //i=0;
    let html='';
    dispElement.innerHTML='';
    for(i =0;i < todo_Values.length;i++)
    {
        const value = todo_Values[i];
        const v=`<div>${value.name}</div> <div> ${value.date}</div><div><button class="delete_button" onclick="todo_Values.splice(${i},1); render();"> Delete </button></div>`;
        html+=v;
        //i++;
    }
    dispElement.innerHTML+=html;
}
function add()
{
    //m.set(todoElement.value,i);
    let name=todoElement.value ;
    let date=dateElement.value;
    console.log(name);
    console.log(date);
    if( name && date)
    {
        todo_Values.push({
            name : todoElement.value,
            date : dateElement.value
        });
        render();
    }
        

    todoElement.value="";
    // while(i<todo_Values.length)
    // {
    //     dispElement.innerHTML='';
    //     if(todo_Values[i]!='')
    //         dispElement.innerHTML+=todo_Values[i] +'<button class="del" onclick="todo_Values.splice(i-1,1)">Delete</button> <br>';
    //     i++;
    // }
}
// function check(key)
// {
//     // if(key === 'Enter')
//     //     add();
// }