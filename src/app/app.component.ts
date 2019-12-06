import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArray =[];
  addTodo(item){
    this.todoArray.push(item);
    document.getElementById('enttodo').value = ''
    console.log(this.todoArray);
  }

  deleteItem(item){
    for(let i=0; i<=this.todoArray.length; i++){
      if (item == this.todoArray[i]){
        this.todoArray.splice(i, 1)
      }
    }
    console.log(this.todoArray);
  }

  
}
