import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @Output() showLoader = new EventEmitter<boolean>();
  @Output() finallyForm = new EventEmitter<boolean>();

  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      completed: [false]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.taskForm.valid) {
      this.showLoader.emit(true);
      const newTask: Task = this.taskForm.value;
      this.taskService.createTask(newTask).subscribe((result) => {
        this.taskForm.reset();
        this.showLoader.emit(false);
        this.finallyForm.emit(true);
      },
      (error) => {
        this.showLoader.emit(false);
        this.finallyForm.emit(false);
      }
      );
    }
  }
}

