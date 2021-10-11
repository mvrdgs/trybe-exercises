module.exports = {
  up: async (queryInterface, DataTypes) => queryInterface.createTable('Employees', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'first_name',
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'last_name',
    },
    age: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }),

  down: async (queryInterface, _DataTypes) => queryInterface.dropTable('Employees'),
}
