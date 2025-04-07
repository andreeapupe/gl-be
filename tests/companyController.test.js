// __tests__/companyController.test.js
const companyController = require('../controllers/companyController');
const Company = require('../models/company');

jest.mock('../models/company');

describe('Company Controller', () => {
  let req, res;

  beforeEach(() => {
    req = { params: {}, body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };
  });

  describe('createCompany', () => {
    it('should create a company and return 201', async () => {
      const mockCompany = { id: 1, name: 'NewCo' };
      Company.create.mockResolvedValue(mockCompany);
      req.body = mockCompany;

      await companyController.createCompany(req, res);

      expect(Company.create).toHaveBeenCalledWith(mockCompany);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(mockCompany);
    });

    it('should return 400 on error', async () => {
      Company.create.mockRejectedValue(new Error('Invalid'));
      await companyController.createCompany(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Invalid' });
    });
  });

  describe('getCompanyById', () => {
    it('should return a company if found', async () => {
      const mockCompany = { id: 1 };
      Company.findByPk.mockResolvedValue(mockCompany);
      req.params.id = 1;

      await companyController.getCompanyById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockCompany);
    });

    it('should return 404 if not found', async () => {
      Company.findByPk.mockResolvedValue(null);
      req.params.id = 999;

      await companyController.getCompanyById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });

    it('should return 500 on error', async () => {
      Company.findByPk.mockRejectedValue(new Error('Error'));
      await companyController.getCompanyById(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });

  describe('getAllCompanies', () => {
    it('should return all companies', async () => {
      const companies = [{ id: 1 }, { id: 2 }];
      Company.findAll.mockResolvedValue(companies);

      await companyController.getAllCompanies(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(companies);
    });
  });

  describe('updateCompany', () => {
    it('should update and return the company', async () => {
      const company = { update: jest.fn(), id: 1 };
      Company.findByPk.mockResolvedValue(company);
      req.params.id = 1;
      req.body = { name: 'Updated' };

      await companyController.updateCompany(req, res);

      expect(company.update).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(company);
    });

    it('should return 404 if not found', async () => {
      Company.findByPk.mockResolvedValue(null);
      req.params.id = 2;

      await companyController.updateCompany(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });

  describe('deleteCompany', () => {
    it('should delete company and return 204', async () => {
      Company.destroy.mockResolvedValue(1);
      req.params.id = 1;

      await companyController.deleteCompany(req, res);

      expect(res.status).toHaveBeenCalledWith(204);
      expect(res.send).toHaveBeenCalled();
    });

    it('should return 404 if nothing deleted', async () => {
      Company.destroy.mockResolvedValue(0);
      req.params.id = 1;

      await companyController.deleteCompany(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});
