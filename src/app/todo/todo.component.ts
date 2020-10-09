import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor() { 
    let savedTasks=localStorage.getItem('tasks');
    if(savedTasks){
      this.tasks=JSON.parse(savedTasks);
    }else{
      this.tasks=[];
    }
  }
  task;
  tasks=[];
  saveAll(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
  addTask(task){
    this.tasks.push(task);
    this.saveAll();
  }
  deleteTask(i){
    this.tasks.splice(i,1);
    this.saveAll();
  }
  
  

  ngOnInit(): void {
  }

}
