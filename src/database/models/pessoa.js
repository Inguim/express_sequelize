'use strict';
const { Model } = require('sequelize');
const isValidCpf = require('../../utils/helpers/validateCpf.js');

module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
      Pessoa.hasMany(models.Curso, {
        foreignKey: 'docente_id',
      });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        scope: { status: 'matriculado' },
        as: 'aulasMatriculadas',
      });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        as: 'todasMatriculadas',
      });
    }
  }
  Pessoa.init(
    {
      nome: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [3, 30],
            msg: 'o campo \'nome\' deve ter no mínimo 3 caracteres',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: 'formato do e-mail inválido',
          },
        },
      },
      cpf: {
        type: DataTypes.STRING,
        validate: {
          isValid: (value) => {
            if (!isValidCpf(value)) throw new Error('número de \'cpf\' inválido');
            return true;
          }
        },
      },
      ativo: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Pessoa',
      tableName: 'pessoas',
      paranoid: true,
      defaultScope: {
        where: {
          ativo: true,
        },
      },
      scopes: {
        allDatas: {
          where: {},
        },
      },
    }
  );
  return Pessoa;
};
