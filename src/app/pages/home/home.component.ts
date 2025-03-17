import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import {Task} from './../models/task.models';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([  
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false

    },
    {
      id: Date.now(),
      title: 'Crear componentes',
      completed: false

    },
   
  ]);

  changeHandler(event: Event){
        const input =  event.target as HTMLInputElement;
        const newTask = input.value;
        this.addTask(newTask);
        input.value = '';
  }

  addTask(title: string){
      const newTask = {
        id: Date.now(),
        title,
        completed: false,
      };
      this.tasks.update((tasks) => [...tasks, newTask]);
      
  }

  ///Paradigma de no mutar el array que es lo que conseguimos con el signals inmutable no cambiar el array si no crear uno con diferente estado
  updateTask(index: number){
    this.tasks.update((task)=> {
      return task.map((task, position)=>{
        if(position === index){
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }

  deleteTask(index: number){
        this.tasks.update((task)=> task.filter((task, position)=> position!== index));

  }
}
