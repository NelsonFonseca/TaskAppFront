import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers: [MessageService]
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filters: string[] = ['Todas', 'Completadas', 'Pendientes'];
  visible: boolean = false;
  @Output() hiddenloading = new EventEmitter<boolean>();
  filterOption: string = 'Todas';

  constructor(private taskService: TaskService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {

      switch(this.filterOption){
        case 'Completadas':
          this.tasks = tasks.filter(item => item.completed === true);
        break;
        case 'Pendientes':
          this.tasks = tasks.filter(item => item.completed === false);
        break;
        default:
          this.tasks = tasks;
        break;
      }
  });
  }

  toggleCompletion(task: Task): void {
    
    task.completed = !task.completed;
    this.showLoader(true);
    this.taskService.updateTask(task).subscribe(()=>{
      this.loadTasks();
      this.showLoader(false);
      this.showMessage("Tarea actualizada");
    }, error => {
      this.loadTasks();
      this.showLoader(false);
      this.showErrorMessage("No se logró actualizar la tarea");
    });
  }

  deleteTask(id: number): void {
    this.showLoader(true);
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
      this.showLoader(false);
      this.showMessage("Tarea eliminada correctamente");
    },
    err => {
      this.showLoader(false);
      this.showErrorMessage("No se logró eliminar la tarea");
    }
  );
  }

  showLoader(event: boolean){
    this.hiddenloading.emit(event);
  }

  showMessage(message: string) {
    this.messageService.add({ severity: 'success', summary: 'OK', detail: message });
  }

  showErrorMessage(message : string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }

  finallyForm(data: boolean){
    if(data){
      this.loadTasks();
      this.showMessage("Tarea creada");
    }else{
      this.showErrorMessage("No se ha podido crear la tarea");
    }
  }
}
