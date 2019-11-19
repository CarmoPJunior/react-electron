module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      observation: DataTypes.STRING,
      dateHour:	DataTypes.DATE,
      duration:	DataTypes.STRING,
      completionDate:	DataTypes.DATE,      
      taskStatusId:	DataTypes.INTEGER,
      taskTypeId:	DataTypes.INTEGER,
      taskPeriodicityId:	DataTypes.INTEGER,
    });
    
      
    return Task;
  }

