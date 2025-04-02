const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.post('/companies', companyController.createCompany);
router.get('/companies/:id', companyController.getCompanyById);
router.get('/companies/isin/:isin', companyController.getCompanyByIsin);
router.get('/companies', companyController.getAllCompanies);
router.put('/companies/:id', companyController.updateCompany);

module.exports = router;
