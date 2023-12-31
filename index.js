const express = require('express')
const app = require('./src/server')
const bodyParser = require('body-parser')
const cors = require('cors')
const routerUser = require('./src/user/controllers/UserControllers')
const routerProposal = require('./src/proposal/controllers/proposalControllers')
const routerAccepted = require('./src/accepted/controllers/acceptedControllers')
const routerBankAccount = require('./src/bankaccount/controllers/bankaccountControllers')
const routerNotification = require('./src/notification/controllers/notificationControllers')
const routerPayments = require('./src/payments/controllers/paymentsControllers')
const routerWithdrawal = require('./src/withdrawal/controllers/withdrawalControllers')
const routerCategories = require('./src/categories/controllers/categoriesControllers')
const routerLogin = require('./src/login/controllers/loginControllers')
const routerLogout = require('./src/logout/controllers/logoutControllers')
const routerRedefinePassword = require('./src/redefinepassword/controllers/redefinepasswordControllers')
const routerBankbalance = require('./src/bankbalance/controllers/bankbalanceControllers')
const routerUpload = require('./src/files/controllers/filesControllers')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

// Routes
app.use(routerUser)
app.use(routerProposal)
app.use(routerAccepted)
app.use(routerBankAccount)
app.use(routerNotification)
app.use(routerPayments)
app.use(routerWithdrawal)
app.use(routerCategories)
app.use(routerLogin)
app.use(routerLogout)
app.use(routerRedefinePassword)
app.use(routerBankbalance)
app.use(routerUpload)



