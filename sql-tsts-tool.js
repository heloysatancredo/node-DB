// there are no marks associated with this file, it's just a simple
//      tool so you can test your queries

//*********************************************** */
// Loading NPM Modules
//*********************************************** */
const mysql = require('mysql')

// Database connection
const con = mysql.createConnection({
    host: 'test4.wmdd.ca',
    database: 'test4_4920',
    user: 'db-user-t4',
    password: 'wmdd_4920@uzr'
})

// listCust command
let listCustomers = () => {

    let q = 'SELECT firstName, middleInitial, lastName FROM customer WHERE active = true';

    con.query(q, (err, res) => {
        if (err) {
            throw err
        }

        console.log(res)
    })
    con.end()
    // console.log("test");
}

// listInactive command
let listInactiveCustomers = () => {

    let q = 'SELECT firstName, middleInitial, lastName FROM customer WHERE active = false';

    con.query(q, (err, res) => {
        if (err) {
            throw err
        }

        console.log(res)
    })
    con.end()

}

// primeEmail command
let listActivePrimaryEmailAddresses = () => {

    let q = 'SELECT firstName, lastName, emailAddr FROM customer, email WHERE customer.custID = email.custID AND email.active = true AND email.emailType = "primary"';

    con.query(q, (err, res) => {
        if (err) {
            throw err
        }

        console.log(res)
    })
    con.end()

}

// listCompanies command
let listCompanyNames = () => {

    let q = 'SELECT firstName, lastName, company FROM customer, email WHERE customer.custID = email.custID AND customer.active = true';

    con.query(q, (err, res) => {
        if (err) {
            throw err
        }

        console.log(res)
    })
    con.end()

}

// getCustEmail command
let getSpecificCustomerEmailAddress = (lName) => {

    let q = `SELECT firstName, lastName, emailAddr FROM customer, email WHERE customer.custID = email.custID AND customer.lastName = "${lName}"`;

    con.query(q, (err, res) => {
        if (err) {
            throw err
        }

        console.log(res)
    })
    con.end()

}

// getCustByID command
let getCustomerByCustID = (custID) => {

    let q = `SELECT firstName, lastName, company, emailAddr FROM customer, email WHERE customer.custID = ${custID} AND email.custID = ${custID}`;

    con.query(q, (err, res) => {
        if (err) {
            throw err
        }

        console.log(res)
    })
    con.end()

}


module.exports = {
    listCustomers, listInactiveCustomers, listActivePrimaryEmailAddresses, listCompanyNames, getSpecificCustomerEmailAddress, getCustomerByCustID
}