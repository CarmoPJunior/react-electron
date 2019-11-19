module.exports = (sequelize, DataTypes) => {
    const Teste = sequelize.define('Teste', {
      descricao: DataTypes.STRING,
    });
  
    return Teste;
  }