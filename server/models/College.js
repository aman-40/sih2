import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const College = sequelize.define('College', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING },
  type: { type: DataTypes.STRING },
  website: { type: DataTypes.STRING },
  // Add more fields as needed
}, {
  tableName: 'colleges',
  timestamps: false,
});

export default College;
