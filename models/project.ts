'use strict';
import {
  Model
} from 'sequelize';

interface ProjectAttributes {
  id: number;
  title: string;
  status: string;
  createdAt?: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Project extends Model<ProjectAttributes> implements ProjectAttributes {
    id!: number;
    title!: string;
    status!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      Project.belongsToMany(models.User, {
        through: 'ProjectAssignments',
      })
    }
  }
  Project.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,

    }

  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};