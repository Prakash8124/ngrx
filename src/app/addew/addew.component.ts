import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { studentInterface } from '../ngrx/interface';
import { ADD_REMOVE_STUDENT } from '../ngrx/table.action';


@Component({
  selector: 'app-addew',
  templateUrl: './addew.component.html',
  styleUrls: ['./addew.component.scss']
})
export class AddewComponent implements OnInit {

  constructor(private store: Store<studentInterface[]>) { }

  addToStore(nameL: string, genderL: string) {
    this.store.dispatch(ADD_REMOVE_STUDENT.add_student({
      name: nameL,
      gender: genderL
    }))
  }

  ngOnInit() {
  }


}
