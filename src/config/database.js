module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gympoint',
  define: {
    timestamps: true, // Garante que na tabela havera: created_at e updated_at
    underscored: true, // padrao user_groups e ñ UserGroups nas tabelas
    underscoredAll: true, // Nos relacionamentos, etc.
  },
};
