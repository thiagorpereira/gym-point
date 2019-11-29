module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('students', 'weigth', 'weight');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('students');
  },
};
