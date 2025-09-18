import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const Timeline = sequelize.define('Timeline', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  event: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  // Add more fields as needed
}, {
  tableName: 'timelines',
  timestamps: false,
});

export default Timeline;
