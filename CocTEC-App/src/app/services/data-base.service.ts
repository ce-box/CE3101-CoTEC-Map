import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  constructor(private http: HttpClient, private sqlite: SQLite) {

  }
  createDataBase() {
    this.sqlite.create({
      name: 'dataCoTECApp.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('create table CoTECApp(name VARCHAR(32))', [])
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }
}
