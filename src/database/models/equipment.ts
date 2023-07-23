import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './index';

interface EquipmentAttributes {
  id: number;
  name: string;
  type: string;
  lvl?: string;
  statistics?: string | null;
  recipe?: string | null;
}

export interface EquipmentInput extends Optional<EquipmentAttributes, 'id'> {}
export interface EquipmentOutput extends Required<EquipmentAttributes> {}

class Equipment extends Model<EquipmentAttributes, EquipmentInput> implements EquipmentAttributes {
  public id!: number;
  public name!: string;
  public type!: string;
  public lvl!: string;
  public statistics!: string | null;
  public recipe!: string | null;
}

Equipment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lvl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    statistics: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    recipe: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  },
  {
    sequelize
  }
);
export default Equipment;