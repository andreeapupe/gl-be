const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const companyRoutes = require('./routes/companyRoutes');
const sequelize = require('./config/config');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', companyRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);

  try {
    await sequelize.authenticate();
    console.log('Connected to database successfully.');
    await sequelize.sync();
  } catch (error) {
    console.error('Database connection failed:', error);
  }
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
