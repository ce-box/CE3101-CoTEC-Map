CREATE TABLE IF NOT EXISTS patient(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,lastName TEXT, age INTEGER, nationality TEXT, region TEXT, pathology TEXT, status TEXT, medication TEXT, Hospitalize BOOLEAN, UCI BOOLEAN);
INSERT or IGNORE INTO patient VALUES (304980524,'Alberto','Brenes Brenes',17,'costarricense', 'Cartago',"['asthmatic', 'hypertensive']", 'ACTIVE', 'Ibuprofen', TRUE,TRUE);
INSERT or IGNORE INTO patient VALUES (306980824,'Bertha','Brenes Brenes',23,'costarricense', 'Cartago',"['asthmatic', 'hypertensive']", 'ACTIVE', 'Ibuprofen', TRUE,FALSE);
INSERT or IGNORE INTO patient VALUES (303020181,'Ivannia','Brenes Fernandez',52,'costarricense', 'Cartago',"['asthmatic', 'hypertensive']", 'ACTIVE', 'Ibuprofen', FALSE,FALSE);
 
CREATE TABLE IF NOT EXISTS contact(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT, lastName TEXT, age INTEGER, nationality TEXT, address TEXT, pathology TEXT, email TEXT);
INSERT or IGNORE INTO contact VALUES (302980150,'Marta',  'Brenes Fernandez', 58, 'costarricense', 'tucurrique', "['asthmatic', 'hypertensive']", 'bertacaro1996@gmail.com');
INSERT or IGNORE INTO contact VALUES (301980150,'Vivian',  'Bermudez Bermudez', 59, 'costarricense', 'tucurrique', "['asthmatic', 'hypertensive']", 'bertacaro1996@hotmail.com');
INSERT or IGNORE INTO contact VALUES (305980150,'Moncho',  'Brenes Fernandez', 59, 'costarricense', 'tucurrique', "['asthmatic', 'hypertensive']", 'bertacaro1996@yahoo.com');;