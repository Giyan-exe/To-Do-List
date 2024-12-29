const addBtn = document.getElementById("add");

const taskList = document.getElementById("task-list");

const editNameSpace = "http://www.w3.org/2000/svg";

const checkNameSpace = "http://www.w3.org/2000/svg";

const delNameSpace = "http://www.w3.org/2000/svg";



addBtn.addEventListener('click',  function() {
    const inputTask = document.getElementById("task-input");      
    const inputValue = inputTask.value;

    if(inputTask.value.length >= "8") {
        alert("Content cannot be more than 8 characters")

    }
   
        else if(inputValue) {
          taskList.style.display = 'flex';
   
         

            const tasks = document.createElement("li"); 
             taskList.appendChild(tasks);
              const taskContainer = document.createElement("div"); //This contains the edit button and the text in the input
               taskContainer.className = "edit-text";
                tasks.appendChild(taskContainer); 
                    const editSvg = document.createElementNS(editNameSpace, "svg");
                        editSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                        editSvg.setAttribute("height", "35px");
                        editSvg.setAttribute("width", "35px");
                        editSvg.setAttribute("viewBox", "0 -960 960 960");
                        editSvg.setAttribute("fill", "#5f6368");
                        editSvg.setAttribute("class", "edit-btn");
                        editSvg.setAttribute("id", "edit");

                    const editPath = document.createElementNS(editNameSpace, "path");
                        editPath.setAttribute(
                        "d",
                        "M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"
                        );

                        editSvg.appendChild(editPath);

                            taskContainer.appendChild(editSvg);

                            
                             
                            const taskAssign = document.createElement("p");
                                taskAssign.setAttribute("class", "task");
                                taskContainer.appendChild(taskAssign);
                                 taskAssign.textContent = inputValue;

                            //edit button
                            //needs confirmation once edited
                                    editSvg.addEventListener('click', function(){
                                        taskAssign.contentEditable = 'true';
                                        taskAssign.style.whiteSpace = 'nowrap';
                                        taskAssign.focus();
                                        
                                    taskAssign.addEventListener('keydown', function(event) {
                                            if (event.key === "Enter") {
                                                event.preventDefault();
                                            }
                                        });

                                    taskAssign.addEventListener('blur', function(){
                                        taskAssign.contentEditable = 'false';
                                      
                                       
                                         if (taskAssign.textContent.trim() === "" ){
                                            alert("Content cannot be empty");
                                            taskAssign.textContent = inputValue;
                                         }
                                        
                                            if (taskAssign.textContent.length >= "8"){
                                                alert("Content cannot be more than 8 characters");
                                                taskAssign.textContent = inputValue;
                                            }

                                    });
                                });
                        

                                const statContainer = document.createElement("div"); //Check box and delete button container
                                 statContainer.className = "rec-del";
                                  tasks.appendChild(statContainer);
                                    const checkSvg = document.createElementNS(checkNameSpace, "svg");
                                            checkSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                                            checkSvg.setAttribute("height", "35px");
                                            checkSvg.setAttribute("width", "35px"); 
                                            checkSvg.setAttribute("viewBox", "0 -960 960 960");
                                            checkSvg.setAttribute("fill", "#5f6368");
                                            checkSvg.setAttribute("class", "check-btn");
                                            checkSvg.setAttribute("id", "check");

                                    const checkPath = document.createElementNS(checkNameSpace, "path");
                                            checkPath.setAttribute(
                                                "d",
                                                "m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"
                                            );
                                
                                            checkSvg.appendChild(checkPath);
                                            
                                             statContainer.appendChild(checkSvg);

                                    const delSvg = document.createElementNS(delNameSpace, "svg");
                                            delSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                                            delSvg.setAttribute("height", "35px");
                                            delSvg.setAttribute("width", "35px"); 
                                            delSvg.setAttribute("viewBox", "0 -960 960 960");
                                            delSvg.setAttribute("fill", "#5f6368");
                                            delSvg.setAttribute("class", "del-btn");
                                            delSvg.setAttribute("id", "delete");

                                    const delPath = document.createElementNS(delNameSpace, "path");
                                            delPath.setAttribute(
                                                "d",
                                                "m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"
                                            );
                                            
                                            delSvg.appendChild(delPath);

                                             statContainer.appendChild(delSvg);

                                             //check then styled as done but reverts to normal if the list is clicked
                                             //create an invisible block where it can toggle to switch back to normal

                                             

                                                checkSvg.addEventListener('click', function() {                                                  
                                                    tasks.style.backgroundColor = "#545566";
                                                    tasks.style.border = "none";
                                                    tasks.style.opacity = "0.5";
                                                    taskAssign.style.textDecoration = "line-through"
                                                    taskAssign.style.width = "314px";
                                                    taskAssign.style.paddingLeft = "34px";
                                                    editSvg.style.display = "none";
                                                    checkSvg.style.display = "none";
                                                    delSvg.style.visibility = "visible";   
                                                    delSvg.style.position = "relative";
                                                
                                                                                           
                                                });
                                                 
                                                taskAssign.addEventListener('click', function() {                                                  
                                                    tasks.style.backgroundColor = "#34354E";
                                                    tasks.style.border = "2px solid black";
                                                    tasks.style.opacity = "1";
                                                    taskAssign.style.textDecoration = "none";
                                                    taskAssign.style.width = "100px"
                                                    taskAssign.style.paddingLeft = "0";
                                                    editSvg.style.display = "block";
                                                    checkSvg.style.display = "block";
                                                    delSvg.style.visibility = "visible";
                                                    delSvg.style.position = "static";
                                                    
                                                   
                                                });
                                                   
                                                    delSvg.addEventListener('click', function() {
                                                        tasks.remove();

                                                         if(taskList.childElementCount === 0){
                                                            taskList.style.display = "none"                                                         
                                                         }
                                                    });

                                                       

                     
    }     
                else {
                    alert("Please enter a task!")
                }

         
        
});
//fix input design and make it more responsive
