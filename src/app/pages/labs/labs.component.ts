import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola';
  tasks = signal([
    'Instalar el angular CLI',
    'Crear proyecto',
    'Crear componentes'
  ]);

  name = signal('Allan');
   age = 22;
   disabled = false;
   image = 'https://w3schools.com/howto/img_avatar.png'
   person = signal({
    name: 'allan',
    age: 18 ,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
   });

   clickHandler(){
    alert('Hola');
   }
   changeHandler(event: Event ){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
    console.log(input.value);
   }

   changeAge(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        age: parseInt(newValue, 10)
      }
    })

   }

   changeName(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value
    this.person.update(prevState => {
      return {
        ...prevState,
        name: newValue
      }
    })
   }

   keydownHandler(event: KeyboardEvent){
      const input = event.target as HTMLInputElement;
      console.log(input.value);
   }
}
