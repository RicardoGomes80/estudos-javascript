DROP TABLE DEPARTAMENTOS;
DROP TABLE EMPREGADOS;

CREATE TABLE DEPARTAMENTOS (
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  NOME TEXT NOT NULL,
  CIDADE TEXT NOT NULL
);

CREATE TABLE EMPREGADOS (
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  NOME TEXT NOT NULL,
  OCUPACAO TEXT NOT NULL,
  SALARIO INTEGER NOT NULL,
  COMISSAO INTEGER,
  DATA_CONTRATACAO TEXT,
  DEPARTAMENTO_ID INTEGER NOT NULL,
  GERENTE_ID INTEGER
);

INSERT INTO DEPARTAMENTOS
  (NOME, CIDADE)
VALUES
  ('Contabilidade', 'São Paulo'),
  ('Pesquisa', 'Rio de Janeiro'),
  ('Vendas', 'Belo Horizonte'),
  ('Operações', 'Brasília');


INSERT INTO EMPREGADOS
  (
  NOME,
  OCUPACAO,
  SALARIO,
  COMISSAO,
  DATA_CONTRATACAO,
  DEPARTAMENTO_ID,
  GERENTE_ID
  )
VALUES
  ('Alexander Beiriz Belmonte', 'Auxiliar', 900, NULL, '2019-01-11', 1, 16),
  ('Miranda Soveral Vilela', 'Analista', 3000, NULL, '2019-02-22', 2, 6),
  ('Nayla Canto Coronel', 'Gerente', 4000, NULL, '2019-03-13', 3, 13),
  ('Luan Leal Bogado', 'Vendedor', 2000, 2500, '2020-04-14', 3, 3),
  ('Marie Manso Cerveira', 'Auxiliar', 1100, NULL, '2020-05-15', 2, 6),
  ('Danilo Gadelha', 'Gerente', 4100, NULL, '2020-06-16', 2, 13),
  ('Alexandru Valadão Pêcego', 'Vendedor', 1900, 200, '2019-07-17', 3, 3),
  ('Enoque Prado Tristão', 'Vendedor', 2100, 100, '2019-02-18', 3, 3),
  ('Felipe Bezerril Pimenta', 'Vendedor', 2050, 300, '2020-09-19', 3, 3),
  ('Layra Lameirinhas Parracho', 'Analista', 3000, NULL, '2020-10-20', 2, 6),
  ('Lian Berenguer Nogueira', 'Analista', 3000, NULL, '2020-11-21', 2, 6),
  ('Núria Quinterno Castanho', 'Vendedor', 1800, 1700, '2020-11-21', 3, 3),
  ('Oscar Teodoro Barrico', 'Presidente', 20000, NULL, '2018-01-01', 1, NULL),
  ('Arian Viana', 'Vendedor', 2300, 50, '2020-02-22', 3, 3),
  ('Valentina Barroca Trindade', 'Vendedor', 2500, 200, '2020-03-23', 3, 3),
  ('Márcia Mieiro', 'Gerente', 4200, NULL, '2020-04-24', 1, 13),
  ('Nicole Duarte Bivar', 'Auxiliar', 950, NULL, '2020-05-25', 3, 3),
  ('Abraão Brásio Bilhalva', 'Vendedor', 2000, 0, '2020-06-26', 3, 3),
  ('Leo Dourado Velasques', 'Auxiliar', 1200, NULL, '2020-07-27', 3, 3);

