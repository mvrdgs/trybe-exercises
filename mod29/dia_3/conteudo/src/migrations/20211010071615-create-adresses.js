module.exports = {
  up: async (queryInterface, DataTypes) => queryInterface.createTable('Addresses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    street: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    number: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    employeeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      field: 'employee_id',
      references: {
        model: 'Employees',
        key: 'id',
      },
    },
  }),

  down: async (queryInterface, _DataTypes) => queryInterface.dropTable('Addresses'),
}
