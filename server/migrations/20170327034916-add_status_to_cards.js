'use strict';

module.exports = {
  up: function (migration, DataTypes, done) {


    migration.addColumn(
        'Cards',
        'status',
        DataTypes.STRING 
      )
  },

  down: function (migration, DataTypes, done) {
    migration.removeColumn('Cards', 'status');
  }
};
