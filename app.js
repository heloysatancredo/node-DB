/******************** Load Core Modules Here **********************/
/******************** Load NPM Modules Here ***********************/
const yargs = require('yargs') // npm i yargs@13.2.2 ... @ is for loading most current version
/******************** Load Custom Modules Here ********************/
const utils = require('./utils.js') // this is a local file
/******************** End of Modules ******************************/

// Get a List of all Active Customers
yargs.command({
  command: 'listCust',
  describe: 'Get a List of Active Customers from the db', // firstName, middleInitial, lastName
  handler() {
    utils.listCustomers()
  },
})

// Get a List of all Inactive Customers
yargs.command({
  command: 'listInactive',
  describe: 'Get a List of Inactive Customers from the db', // firstName, middleInitial, lastName
  handler() {
    utils.listInactiveCustomers()
  },
})

// Get a list of Active Primary Email Addresses for all Active Customers
yargs.command({
  command: 'primeEmail',
  describe: 'Get a List of Primary Email Addresses for Active Customers', // firstName, lastName, emailAddr
  handler() {
    utils.listActivePrimaryEmailAddresses()
  },
})

// Get a list of Companies for all Active Customers
yargs.command({
  command: 'listCompanies',
  describe: 'Get a List of Companies for Active Customers', // firstName, lastName, company
  handler() {
    utils.listCompanyNames()
  },
})

// Get the Email Address for Specified Customer (by lastName)
yargs.command({
  command: 'getCustEmail',
  describe: 'Get the Email Address of a Specific Customer', // firstName, lastName, emailAddr
  builder: {
    lName: {
      describe: "Customer's Last Name",
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    utils.getSpecificCustomerEmailAddress(argv.lName)
  },
})

// Get a Customer Info by their custID
yargs.command({
  command: 'getCustByID',
  describe: 'Get a Customer Info by their custID', // firstName, lastName, company, emailAddr (active primary)
  builder: {
    custID: {
      describe: "Customer's ID",
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    utils.getCustomerByCustID(argv.custID)
  },
})

yargs.parse()
