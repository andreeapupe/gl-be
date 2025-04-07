// __tests__/companyRoutes.int.test.js
const express = require('express');
const request = require('supertest');
const companyRoutes = require('../routes/companyRoutes');
const Company = require('../models/company');

jest.mock('../models/company');

const app = express();
app.use(express.json());
app.use('/api', companyRoutes);

describe('Company Routes (Integration)', () => {
  describe('GET /api/companies/:id', () => {
    it('should return a company if found', async () => {
      Company.findByPk.mockResolvedValue({ id: 1, name: 'TestCo' });

      const res = await request(app).get('/api/companies/1');

      expect(res.statusCode).toBe(200);
      expect(res.body.name).toBe('TestCo');
    });

    it('should return 404 if not found', async () => {
      Company.findByPk.mockResolvedValue(null);

      const res = await request(app).get('/api/companies/999');

      expect(res.statusCode).toBe(404);
    });
  });

  describe('POST /api/companies', () => {
    it('should create a company', async () => {
      const mockCompany = { name: 'NewCo' };
      Company.create.mockResolvedValue(mockCompany);

      const res = await request(app).post('/api/companies').send(mockCompany);

      expect(res.statusCode).toBe(201);
      expect(res.body.name).toBe('NewCo');
    });
  });
});
