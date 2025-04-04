const Company = require('../models/company');

exports.createCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCompanyById = async (req, res) => {
  try {
    const company = await Company.findByPk(req.params.id);
    if (company) {
      res.status(200).json(company);
    } else {
      res.status(404).json({ error: 'The company with id ' + req.params.id + ' has not been found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getCompanyByIsin = async (req, res) => {
  try {
    const company = await Company.findOne({ where: { isin: req.params.isin } });
    if (company) {
      res.status(200).json(company);
    } else {
      res.status(404).json({ error: 'The company with id ' + req.params.isin + ' has not been found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll({order: [['id', 'ASC']],});
    res.status(200).json(companies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateCompany = async (req, res) => {
  try {
    const company = await Company.findByPk(req.params.id);
    if (company) {
      await company.update(req.body);
      res.status(200).json(company);
    } else {
      res.status(404).json({ error: 'The company with id ' + req.params.id + ' could not be found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.deleteCompany = async (req, res) => {
  try {
    const companyId = req.params.id;
    const deletedCount = await Company.destroy({ where: { id: companyId } });

    if (deletedCount > 0) {
      return res.status(204).send();
    } else {
      return res.status(404).json({ error: 'Company has not been found' });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

