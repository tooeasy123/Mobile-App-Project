const path = require("path")

class API{
    constructor(){
        this.DB = require('better-sqlite3')(path.join(__dirname, "./database/database.db"), {});
        this.runRetrieveSQL = (sql) => 
        {
            const SQL_STATEMENT = this.DB.prepare(sql) //processes from database
            return SQL_STATEMENT.all() //returns an array of objects
        }
        this.retrieveDepartments = () => 
        {
            const sql = 
            `SELECT * FROM Departments;`
            return this.runRetrieveSQL(sql);
        }
        this.retrievepeople = () =>
        {
            const sql =
            'SELECT * FROM People;'
            return this.runRetrieveSQL(sql);
        }
        this.insertDepartments = (insert) =>
        {
            const sql = `INSERT INTO Departments ('Name') VALUES ('${insert}');`
            this.runChangeSQL(sql);
        }
        this.insertPeople = (Name, Phone, DepartmentID, Suburb, Address, State, Postcode, Country) =>
        {
            const sql = `INSERT INTO People (Name, Phone, DepartmentID, Address, Suburb, State, Postcode, Country) VALUES ('${Name}','${Phone}', ${DepartmentID}, '${Suburb}', '${Address}', '${State}', '${Postcode}', '${Country}');`
            this.runChangeSQL(sql);
        }
        this.UpdatePeople = (Name, Phone, DepartmentID, Address, Suburb, State, Postcode, Country, ID) =>
        {
            const sql = `UPDATE People
            SET Name = '${Name}',
            Phone = '${Phone}' ,
            DepartmentID = '${DepartmentID}',
            Address = '${Address}',
            Suburb = '${Suburb}',
            State = '${State}',
            Postcode = '${Postcode}',
            Country = '${Country}'
            WHERE  PeopleID = ${ID}; `
            console.log(sql);
            console.log('bbbbbbbbbb');
            this.runChangeSQL(sql);
        }
        this.UpdateDepartments = (Name, ID) =>
        {
            const sql = `UPDATE Departments
            SET Name = '${Name}'
            WHERE  DepartmentID = ${ID};`
            console.log(sql);


            this.runChangeSQL(sql);
        }
        this.runChangeSQL = (sql) => 
        {
            const SQL_STATEMENT = this.DB.prepare(sql)
            SQL_STATEMENT.run();
        }
        
        
    }
}



//var test = new API() //creates object from class calling constructor above
//var run = test.runRetrieveSQL('Select * FROM People')
//var run2 = test.runRetrieveSQL('Select * FROM Departments')//selects and shows all data from people table
//console.log(run2)
//test.runChangeSQL(`INSERT INTO Departments ('NAME') values ('Communications')`)// inserts new value for table
//run2 = test.runRetrieveSQL('Select * FROM Departments')
//console.log(run) //ouputs in console people table


//copy paste each function and write sql 


//this.deletePeople = (id) => //delete function for future reference
//{
    //const sql = 
    //`DELETE FROM People WHERE PeopleID = ${id};` //${} evaluates whatever conditions inside and converts to a string 
    //this.runChangeSQL(sql);
//}

module.exports = { API }