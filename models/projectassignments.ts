'use strict';
import {
  Model
} from 'sequelize';

interface ProjectAssignmentsAttributes {
  UserId: string;
  ProjectId: number;
  createdAt?: Date;
  updatedAt?: Date;
}


module.exports = (sequelize: any, DataTypes: any) => {
  class ProjectAssignments extends Model<ProjectAssignmentsAttributes> implements ProjectAssignmentsAttributes {
    UserId!: string;
    ProjectId!: number;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  ProjectAssignments.init({
    UserId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
    ,
    ProjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Projects',
        key: 'id'
      }
    }
    ,
  }, {
    sequelize,
    modelName: 'ProjectAssignments',
  });
  return ProjectAssignments;
};