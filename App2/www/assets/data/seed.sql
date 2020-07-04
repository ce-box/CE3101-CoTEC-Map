CREATE TABLE IF NOT EXISTS patientStatus(
    Id INTEGER PRIMARY KEY,
    Name TEXT KEY,
);
CREATE TABLE IF NOT EXISTS patient(
    Dni TEXT PRIMARY KEY, 
    Name TEXT KEY,
    LastName TEXT KEY,
    BoD NUMERIC KEY,
    Status INTEGER ,
    Hospitalized NONE KEY,
    UCI NONE KEY,
    Hospital_ID INTEGER,
    Region TEXT,
    COUNTRY TEXT,
    FOREIGN KEY (Status) REFERENCES patientStatus (Id)
     );
INSERT or IGNORE INTO patient VALUES (304980524,'Alberto','Brenes Brenes',17,'costarricense', 'Cartago',"['asthmatic', 'hypertensive']", 'ACTIVE', 'Ibuprofen', TRUE,TRUE);
 
CREATE TABLE IF NOT EXISTS contact(
    Dni TEXT PRIMARY KEY AUTOINCREMENT,
    Name TEXT KEY, 
    LastName TEXT KEY, 
    DoB NUMERIC KEY, 
    Region TEXT, 
    COUNTRY TEXT, 
    Email TEXT KEY
);

CREATE TABLE IF NOT EXISTS contact(
    PatientDni TEXT PRIMARY KEY,
    ContactDni TEXT PRIMARY KEY,
    MeetingDate NUMERIC KEY,
    FOREIGN KEY (PatientDni) REFERENCES patient (Dni),
    FOREIGN KEY (ContactDni) REFERENCES contact (Dni)
);

INSERT or IGNORE INTO contact VALUES (302980150,'Marta',  'Brenes Fernandez', 58, 'costarricense', 'tucurrique', "['asthmatic', 'hypertensive']", 'bertacaro1996@gmail.com');
