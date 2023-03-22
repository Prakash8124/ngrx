import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { studentInterface } from '../ngrx/interface';
import { ADD_REMOVE_STUDENT } from '../ngrx/table.action';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  studentData!:Observable<studentInterface[]>
  
  constructor(private store:Store<any>) { 
    this.studentData = store.select('studentData')
  }

  removeFromTable(index: number) {
    this.store.dispatch(ADD_REMOVE_STUDENT.remove_student({index})); 
  }

}
