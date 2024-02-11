--
-- Cria as tabelas PESSOAS e CIDADES e 
-- insere alguns dados nelas.
-- 

CREATE TABLE CIDADES (
   ID INTEGER PRIMARY KEY AUTOINCREMENT,
   NOME TEXT NOT NULL
);

CREATE TABLE PESSOAS (
   ID INTEGER PRIMARY KEY AUTOINCREMENT,
   NOME TEXT NOT NULL,
   IDADE INTEGER,
   CIDADE_ID INTEGER NOT NULL
);

INSERT INTO CIDADES
   (NOME)
VALUES
   ('Brasília'),
   ('São Paulo'),
   ('São Joaquim');

INSERT INTO PESSOAS
   (NOME, IDADE, CIDADE_ID)
VALUES
   ('Maria Oliveira', 30, 1),
   ('Tiago da Silva', 30, 2),
   ('Raquel da Cruz', 39, 3),
   ('Ana Joaquina Silveira', 34, 2),
   ('José Dias', 35, 2),
   ('Ana Carolina Santos', 36, 1),
   ('João do Carmo', 80, 2),
   ('Marcos Alves', 90, 1),
   ('Maria das Dores', 83, 2),
   ('Priscila da Silva', 79, 1);
