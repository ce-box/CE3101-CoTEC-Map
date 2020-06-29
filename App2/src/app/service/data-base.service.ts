import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  patients = new BehaviorSubject([]);
  /**
   * Contact
   */
  contacts = new BehaviorSubject([]);
  /**
   * First method of the service
   * @param http Controller for the http Client
   * @param sqlite Controller for the sqlite
   * @param plt Controller for the platform
   * @param sqlitePorter Controller fro the porter of sql
   */
  constructor(
    private http: HttpClient,
    private sqlite: SQLite,
    private plt: Platform,
    private sqlitePorter: SQLitePorter) {
    console.log('ngInit database');
    this.plt.ready().then(() => {
      console.log('ready platform');
      const sql = this.sqlite.create({
        name: 'app.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        db.executeSql('create table danceMoves(name VARCHAR(32))', [])
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
    });
  }
  seedDatabase() {
    console.log('access');
    this.http.get('assets/data/seed.sql', { responseType: 'text' })
      .subscribe(sql => {
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(_ => {
            this.getContacts();
            this.getPatients();
            this.dbReady.next(true);
          })
          .catch(e => console.error(e));
      });
  }
  getDatabaseState() {
    return this.dbReady.asObservable();
  }
  getContacts(): Observable<any[]> {
    return this.contacts.asObservable();
  }
  getPatients(): Observable<any[]> {
    return this.patients.asObservable();
  }
  /**
   * Patient Management
   */
  loadpatient() {
    return this.database.executeSql('SELECT * FROM patient', []).then(data => {
      const patient: any[] = [];
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          patient.push({
            id: data.rows.item(i).id,
            name: data.rows.item(i).name,
            lastName: data.rows.item(i).lastName,
            age: data.row.item(i).age,
            region: data.row.item(i).region,
            status: data.row.item(i).status,
            hospitalize: data.row.item(i).hospitalize,
            uci: data.row.item(i).uci,
            nationality: data.row.item(i).nationality,
            pathology: data.row.item(i).pathology,
            medication: data.row.item(i).medication
          });
        }
      }
      this.patients.next(patient);
    });
  }

  addPatient(Name, LastName, Id, Age, Nationality, Region, Pathology, Status, Medication, Hospitalize, UCI) {
    const data = [Name, LastName, Id, Age, Nationality, Region, Pathology, Status, Medication, Hospitalize, UCI];
    return this.database.executeSql('INSERT INTO patient (Name, LastName, Id, Age, Nationality, Region, Pathology, Status, Medication, Hospitalize, UCI) VALUES (?, ?, ?)', data).then(dataR => {
      console.log('data add', dataR);
      this.loadpatient();
    });
  }

  getPatient(id): Promise<any> {
    return this.database.executeSql('SELECT * FROM patient WHERE id = ?', [id]).then(data => {
      return {
        id: data.rows.item(0).id,
        name: data.rows.item(0).name,
        lastName: data.rows.item(0).lastName,
        age: data.row.item(0).age,
        region: data.row.item(0).region,
        status: data.row.item(0).status,
        Hospitalize: data.row.item(0).Hospitalize,
        UCI: data.row.item(0).UCI,
        nationality: data.row.item(0).nationality,
        pathology: data.row.item(0).pathology,
        medication: data.row.item(0).medication
      };
    });
  }

  deletePatient(id) {
    return this.database.executeSql('DELETE FROM patient WHERE id = ?', [id]).then(_ => {
      this.loadpatient();
    });
  }

  updatePatient(dev: any) {
    // tslint:disable-next-line: max-line-length
    const data = [dev.name, dev.LastName, dev.Id, dev.Age, dev.Nationality, dev.Region, dev.Pathology, dev.Status, dev.Medication, dev.Hospitalize, dev.UCI];
    return this.database.executeSql(`UPDATE patient SET name = ?, LastName = ?, Age = ?, Nationality = ?, Region = ?, Status = ?, Medication = ?, Hospitalize = ?, UCI = ? WHERE Id = ${dev.id}`, data).then(dataR => {
      console.log('data update', dataR);
      this.loadpatient();
    });
  }

  /**
   * Contact management
   */
  loadContact() {
    // tslint:disable-next-line: max-line-length
    const query = 'SELECT * FROM contact';
    return this.database.executeSql(query, []).then(data => {
      const contact = [];
      if (data.rows.length > 0) {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < data.rows.length; i++) {
          contact.push({
            Id: data.rows.item(0).id,
            Name: data.rows.item(0).name,
            LastName: data.rows.item(0).lastName,
            Age: data.row.item(0).age,
            Address: data.row.item(0).Address,
            Nationality: data.row.item(0).nationality,
            Pathology: data.row.item(0).pathology,
            email: data.row.item(0).email
          });
        }
      }
      this.contacts.next(contact);
    });
  }

  addContact(Name, LastName, Id, Age, Nationality, Address, Pathology, email) {
    const data = [Name, LastName, Id, Age, Nationality, Address, Pathology, email];
    // tslint:disable-next-line: max-line-length
    return this.database.executeSql('INSERT INTO contact (Name, LastName, Id, Age, Nationality, Address, Pathology, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', data).then(dataR => {
      console.log('data add Contact', dataR);
      this.loadContact();
    });
  }
  updateContact(dev: any) {
    // tslint:disable-next-line: max-line-length
    const data = [dev.name, dev.LastName, dev.Id, dev.Age, dev.Nationality, dev.Address, dev.Pathology, dev.email];
    return this.database.executeSql(`UPDATE contact SET name = ?, LastName = ?, Age = ?, Nationality = ?, Address = ?, email = ? WHERE Id = ${dev.Id}`, data).then(dataR => {
      console.log('data update', dataR);
      this.loadpatient();
    });
  }
  deleteContact(id) {
    return this.database.executeSql('DELETE FROM contact WHERE id = ?', [id]).then(_ => {
      this.loadContact();
    });
  }
  getContact(id): Promise<any> {
    return this.database.executeSql('SELECT * FROM contact WHERE id = ?', [id]).then(data => {
      return {
        Id: data.rows.item(0).id,
        Name: data.rows.item(0).name,
        LastName: data.rows.item(0).lastName,
        Age: data.row.item(0).age,
        Address: data.row.item(0).Address,
        Nationality: data.row.item(0).nationality,
        Pathology: data.row.item(0).pathology,
        email: data.row.item(0).email
      };
    });
  }
}
