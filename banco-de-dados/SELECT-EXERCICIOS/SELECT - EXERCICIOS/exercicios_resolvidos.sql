-- 
-- 

-- 01. Selecione todos os empregados;
SELECT *
FROM EMPREGADOS;

-- 02. Selecione todas as ocupações da tabela EMPREGADOS, sem repetições;
SELECT DISTINCT(OCUPACAO)
FROM EMPREGADOS;

-- 03. Selecione os mpregados ordenando pelo valor de seus salários – em ordem crescente;
SELECT *
FROM EMPREGADOS
ORDER BY SALARIO ASC;

-- 04. Selecione os mpregados ordenando pelo DEPARTAMENTO_ID (em ordem
-- crescente) e pela OCUPACAO (em ordem decrescente)
SELECT *
FROM EMPREGADOS
ORDER BY DEPARTAMENTO_ID ASC, OCUPACAO DESC;

-- 05. Selecione todas as ocupações da tabela EMPREGADOS, 
-- sem repetições – em ordem decrescente;
SELECT DISTINCT(OCUPACAO)
FROM EMPREGADOS
ORDER BY OCUPACAO DESC;

-- 06. Selecione todos os Gerentes.
SELECT *
FROM EMPREGADOS
WHERE OCUPACAO = 'Gerente';

-- 07. Selecione os empregados que foram contratados antes de 2020;
SELECT *
FROM EMPREGADOS
WHERE strftime('%Y-%m-%d', DATA_CONTRATACAO) < strftime('%Y-%m-%d', '2020-01-01');

-- 08. Selecione o NOME, OCUPACAO, DATA_CONTRATACAO de todos os Gerentes.
SELECT NOME, OCUPACAO, DATA_CONTRATACAO
FROM EMPREGADOS
WHERE OCUPACAO = 'Gerente';

-- 09. Selecione o NOME e SALARIO de todos os empregados que trabalham para o Gerente de ID = 3;
SELECT NOME, SALARIO, GERENTE_ID
FROM EMPREGADOS
WHERE GERENTE_ID = 3;

-- 10. Selecione todos os empregados cuja COMISSAO é maior que o SALARIO;
SELECT *
FROM EMPREGADOS
WHERE COMISSAO > SALARIO;

-- 11. Selecione os empregados – em ordem crescente de admissão – 
-- que foram admitidos na empresa depois da segunda metade de 2020;
SELECT *
FROM EMPREGADOS
WHERE strftime('%Y-%m-%d', DATA_CONTRATACAO) > strftime('%Y-%m-%d', '2020-06-30')
ORDER BY strftime('%Y-%m-%d', DATA_CONTRATACAO) ASC;

-- 12. Selecione os empregados que ganham mais de R$ 100 por dia;
SELECT *
FROM EMPREGADOS
WHERE (SALARIO / 30) > 100;

-- 13. Selecione os empregados que são Analistas ou Auxiliares – em ordem crescente de OCUPACAO;
SELECT *
FROM EMPREGADOS
WHERE OCUPACAO = 'Analista'
  OR OCUPACAO = 'Auxiliar'
ORDER BY OCUPACAO ASC;

-- 14. Selecione os empregados que foram admitidos nos dias 11/01/2019, 21/11/2020 e
-- 13/03/2019 – ordene por ordem crescente da DATA_CONTRATACAO;
SELECT *
FROM EMPREGADOS
WHERE DATA_CONTRATACAO IN ('2019-01-11', '2020-11-21', '2019-03-13')
ORDER BY strftime('%Y-%m-%d', DATA_CONTRATACAO) ASC;

-- 15. Selecione os empregados que foram admitidos no ano de 2019;
SELECT *
FROM EMPREGADOS
WHERE DATA_CONTRATACAO 
  BETWEEN strftime('%Y-%m-%d', '2019-01-01') 
    AND strftime('%Y-%m-%d', '2019-12-31');

-- 16. Selecione os empregados que foram admitidos em Fevereiro de 2019;
SELECT *
FROM EMPREGADOS
WHERE DATA_CONTRATACAO 
  BETWEEN strftime('%Y-%m-%d', '2019-02-01') 
    AND strftime('%Y-%m-%d', '2019-02-28');

-- 17. Selecione os empregados cujo salário anual esteja entre R$ 25.000 e R$ 30.000;
SELECT *
FROM EMPREGADOS
WHERE (SALARIO * 12) BETWEEN 22000 AND 30000;

-- 18. Selecione os empregados que possuem um nome que começa com 'A';
SELECT *
FROM EMPREGADOS
WHERE NOME LIKE 'A%';

-- 19. Selecione os empregados que possuem um salário de 3 dígitos;
SELECT *
FROM EMPREGADOS
WHERE LENGTH(SALARIO) = 3;

-- 20. Selecione os empregados que possuem os caracteres 'lh' juntos;
SELECT *
FROM EMPREGADOS
WHERE NOME LIKE '%lh%';

-- 21. Selecione os empregados que não pertencem ao DEPARTAMENTO 2;
SELECT *
FROM EMPREGADOS
WHERE DEPARTAMENTO_ID != 2;

SELECT *
FROM EMPREGADOS
WHERE DEPARTAMENTO_ID <> 2;

SELECT *
FROM EMPREGADOS
WHERE DEPARTAMENTO_ID NOT IN (2);

SELECT *
FROM EMPREGADOS
WHERE DEPARTAMENTO_ID NOT LIKE '2';


-- 22. Selecione todos os empregados, com exceção do Presidente e dos Gerentes – em ordem
-- crescente dos seus salários;
SELECT *
FROM EMPREGADOS
WHERE OCUPACAO NOT IN ('Presidente', 'Gerente')
ORDER BY SALARIO ASC;

SELECT *
FROM EMPREGADOS
WHERE OCUPACAO NOT LIKE 'Presidente'
  AND OCUPACAO NOT LIKE 'Gerente'
ORDER BY SALARIO ASC;

SELECT *
FROM EMPREGADOS
WHERE OCUPACAO != 'Presidente'
  AND OCUPACAO != 'Gerente'
ORDER BY SALARIO ASC;

SELECT *
FROM EMPREGADOS
WHERE OCUPACAO <> 'Presidente'
  AND OCUPACAO <> 'Gerente'
ORDER BY SALARIO ASC;

-- 23. Selecione todos os empregados que entraram na empresa em qualquer mês
-- EXCETO no mês de Março.
SELECT *
FROM EMPREGADOS
WHERE DATA_CONTRATACAO NOT LIKE('%-03-%');

-- 24. Selecione todos os Auxiliares do Departamento ID 2;
SELECT *
FROM EMPREGADOS
WHERE OCUPACAO = 'Auxiliar'
  AND DEPARTAMENTO_ID = 2;

-- 25. Selecione todos os dados da Márcia Mieiro;
SELECT *
FROM EMPREGADOS
WHERE NOME = 'Márcia Mieiro';

-- 26. Selecione a Cidade onde a Márcia Mieiro está locada;
SELECT CIDADE
FROM EMPREGADOS, DEPARTAMENTOS
WHERE EMPREGADOS.DEPARTAMENTO_ID = DEPARTAMENTOS.ID
  AND EMPREGADOS.NOME = 'Márcia Mieiro';

-- 27. Selecione todos os dados dos empregados juntamente com o NOME e CIDADE 
-- do seu DEPARTAMENTO, filtrando pelos departamentos de Contabilidade 
-- e Pesquisa – em ordem crescente da CIDADE;
SELECT EMPREGADOS.*, DEPARTAMENTOS.NOME AS D_NOME, DEPARTAMENTOS.CIDADE
FROM EMPREGADOS, DEPARTAMENTOS
WHERE EMPREGADOS.DEPARTAMENTO_ID = DEPARTAMENTOS.ID
  AND DEPARTAMENTOS.NOME IN ('Contabilidade', 'Pesquisa')
ORDER BY DEPARTAMENTOS.CIDADE ASC;

-- 28. Selecione ID (EMPREGADO), NOME (EMPREGADO), OCUPACAO, SALARIO, 
-- NOME (DEPARTAMENTO), CIDADE de todos os Gerentes e Analistas, 
-- que moram no Rio de Janeiro ou Belo Horizonte – ordenar pela CIDADE.
SELECT E.ID, E.NOME AS E_NOME, E.OCUPACAO, E.SALARIO, D.NOME AS D_NOME, D.CIDADE
FROM EMPREGADOS AS E, DEPARTAMENTOS AS D
WHERE E.DEPARTAMENTO_ID = D.ID
  AND E.OCUPACAO IN ('Gerente', 'Analista')
  AND D.CIDADE IN ('Rio de Janeiro', 'Belo Horizonte')
ORDER BY D.CIDADE ASC;

-- 29. Selecione ID (EMPREGADO), NOME (EMPREGADO), SALARIO, NOME (DEPARTAMENTO),
-- CIDADE, OCUPACAO dos empregados que moram em Belo Horizonte ou trabalham 
-- na Contabilidade tendo um SALARIO anual maior que R$ 24.000;
SELECT E.ID, E.NOME AS E_NOME, E.SALARIO,
  D.NOME AS D_NOME, D.CIDADE, E.OCUPACAO
FROM EMPREGADOS AS E, DEPARTAMENTOS AS D
WHERE E.DEPARTAMENTO_ID = D.ID
  AND (D.CIDADE = 'Belo Horizonte' OR D.NOME = 'Contabilidade')
  AND (E.SALARIO * 12) > 24000;

-- 30. Selecione todos os empregados que possuem um SALARIO 
-- maior que o da Miranda Soveral Vilela.
SELECT *
FROM EMPREGADOS
WHERE SALARIO > (
  SELECT SALARIO
FROM EMPREGADOS
WHERE NOME = 'Miranda Soveral Vilela'
);

-- 31. Selecione os empregados que possuem a mesma ocupação 
-- da Marie Manso Cerveira.
SELECT *
FROM EMPREGADOS
WHERE OCUPACAO = (
  SELECT OCUPACAO
FROM EMPREGADOS
WHERE NOME = 'Marie Manso Cerveira'
)

-- 32. Selecione os empregados que foram contratados 
-- antes do Danilo Gadelha.
SELECT *
FROM EMPREGADOS
WHERE strftime('%Y-%m-%d', DATA_CONTRATACAO) < (
	SELECT strftime('%Y-%m-%d', DATA_CONTRATACAO)
FROM EMPREGADOS
WHERE NOME = 'Danilo Gadelha'
);

-- 33. Selecione os empregados que foram contratados antes 
-- dos seus gerentes.
SELECT
  FUNCIONARIOS.OCUPACAO,
  FUNCIONARIOS.GERENTE_ID,
  FUNCIONARIOS.DATA_CONTRATACAO AS F_DATA_CONTRATACAO,
  GERENTES.DATA_CONTRATACAO AS G_DATA_CONTRATACAO
FROM EMPREGADOS AS FUNCIONARIOS, EMPREGADOS AS GERENTES
WHERE FUNCIONARIOS.GERENTE_ID = GERENTES.ID
  AND strftime('%Y-%m-%d', FUNCIONARIOS.DATA_CONTRATACAO) < 
	strftime('%Y-%m-%d', GERENTES.DATA_CONTRATACAO);


-- 34. Selecione os empregados que possuem o mesmo SALARIO 
-- do Abraão Brásio Bilhalva ou da Miranda Soveral Vilela,
-- ordene por ordem do maior salario para o menor;
SELECT *
FROM EMPREGADOS
WHERE SALARIO IN (
SELECT SALARIO
FROM EMPREGADOS
WHERE NOME IN ('Abraão Brásio Bilhalva', 'Miranda Soveral Vilela')
)
ORDER BY SALARIO DESC;

-- 35. Selecione os empregados que possuem a mesma OCUPACAO do Luan Leal Bogado
-- ou o SALARIO é maior do que o da Nayla Canto Coronel.
SELECT *
FROM EMPREGADOS
WHERE OCUPACAO IN (
	SELECT OCUPACAO
  FROM EMPREGADOS
  WHERE NOME = 'Luan Leal Bogado'
)
  OR SALARIO > (
	SELECT SALARIO
  FROM EMPREGADOS
  WHERE NOME = 'Nayla Canto Coronel'
);

-- 36. Selecione os empregados que possuem um SALARIO maior do que a 
-- remuneração total (SALARIO + COMISSAO) do Valentina Barroca Trindade.
SELECT *
FROM EMPREGADOS
WHERE SALARIO > (
	SELECT (SALARIO + COMISSAO)
FROM EMPREGADOS
WHERE NOME = 'Valentina Barroca Trindade'
);

-- 37. Selecione os empregados que foram admitidos na empresa antes 
-- do Arian Viana e trabalham no Rio de Janeiro e Belo Horizonte.
SELECT E.NOME, E.DATA_CONTRATACAO, D.CIDADE
FROM EMPREGADOS AS E, DEPARTAMENTOS AS D
WHERE strftime('%Y-%m-%d', DATA_CONTRATACAO) < (
	SELECT strftime('%Y-%m-%d', DATA_CONTRATACAO)
  FROM EMPREGADOS
  WHERE NOME = 'Arian Viana'
)
  AND E.DEPARTAMENTO_ID = D.ID
  AND D.CIDADE IN ('Rio de Janeiro', 'Belo Horizonte')
ORDER BY strftime('%Y-%m-%d', DATA_CONTRATACAO) DESC;

-- 38. Selecione os empregados que possuem as mesmas Ocupações que o 
-- Alexander Beiriz Belmonte e a Valentina Barroca Trindade;
SELECT *
FROM EMPREGADOS
WHERE OCUPACAO IN (
	SELECT OCUPACAO
FROM EMPREGADOS
WHERE NOME IN (
      'Alexander Beiriz Belmonte', 
      'Valentina Barroca Trindade'
    )
);

-- 39. Selecione o empregado com o maior SALARIO;
SELECT *
FROM EMPREGADOS
WHERE SALARIO = (
	SELECT MAX(SALARIO)
FROM EMPREGADOS
);

-- 40. Selecione o vendedor com a maior remuneracao (SALARIO + COMISSAO);
SELECT *
FROM EMPREGADOS
WHERE (SALARIO + COMISSAO) = (
	SELECT MAX(SALARIO + COMISSAO)
FROM EMPREGADOS
);

-- 41. Selecione o último empregado contratado da empresa;
SELECT *
FROM EMPREGADOS
WHERE strftime('%Y-%m-%d', DATA_CONTRATACAO) = (
	SELECT MAX(strftime('%Y-%m-%d', DATA_CONTRATACAO))
FROM EMPREGADOS
);

-- 42. Selecione o último Vendedor contratado na empresa;
SELECT *
FROM EMPREGADOS
WHERE strftime('%Y-%m-%d', DATA_CONTRATACAO) = (
	SELECT MAX(strftime('%Y-%m-%d', DATA_CONTRATACAO))
  FROM EMPREGADOS
)
  AND OCUPACAO = 'Vendedor';

-- 43. Selecione o último empregado contratado de Belo Horizonte;
SELECT E.*, D.CIDADE
FROM EMPREGADOS AS E, DEPARTAMENTOS AS D
WHERE E.DEPARTAMENTO_ID = D.ID
  AND strftime('%Y-%m-%d', E.DATA_CONTRATACAO) = (
	SELECT MAX(strftime('%Y-%m-%d', DATA_CONTRATACAO))
  FROM EMPREGADOS
)
  AND D.CIDADE = 'Belo Horizonte';

-- 44. Selecione o último empregado contratado no ano de 2019;
SELECT *
FROM EMPREGADOS AS E
WHERE strftime('%Y-%m-%d', E.DATA_CONTRATACAO) = (
	SELECT MAX(strftime('%Y-%m-%d', DATA_CONTRATACAO))
FROM EMPREGADOS
WHERE strftime('%Y-%m-%d', DATA_CONTRATACAO)
    BETWEEN strftime('%Y-%m-%d', '2019-01-01')
      AND strftime('%Y-%m-%d', '2019-12-31')
);

-- 45. Selecione os empregados que possuem a mesma OCUPACAO
-- do último empregado contratado no ano de 2019;
SELECT *
FROM EMPREGADOS
WHERE OCUPACAO = (
	  SELECT OCUPACAO
FROM EMPREGADOS
WHERE strftime('%Y-%m-%d', DATA_CONTRATACAO) = (
          SELECT MAX(strftime('%Y-%m-%d', DATA_CONTRATACAO))
FROM EMPREGADOS
WHERE strftime('%Y-%m-%d', DATA_CONTRATACAO)
                BETWEEN strftime('%Y-%m-%d', '2019-01-01')
                AND strftime('%Y-%m-%d', '2019-12-31')
    )
);

-- 46. Exiba a soma dos salários dos Gerentes;
SELECT SUM(E.SALARIO)
FROM EMPREGADOS AS E
WHERE E.OCUPACAO = 'Gerente';

-- 47. Exiba a soma dos salários pagos em 2019;
SELECT SUM(E.SALARIO)
FROM EMPREGADOS AS E
WHERE strftime('%Y-%m-%d', E.DATA_CONTRATACAO) IN (
	SELECT DATA_CONTRATACAO
FROM EMPREGADOS
WHERE strftime('%Y-%m-%d', DATA_CONTRATACAO)
    	BETWEEN strftime('%Y-%m-%d', '2019-01-01')
      	AND strftime('%Y-%m-%d', '2019-12-31')
);

-- 48. Exiba o SALARIO médio dos Auxiliares;
SELECT AVG(E.SALARIO)
FROM EMPREGADOS AS E
WHERE E.OCUPACAO = 'Auxiliar';

-- 49. Selecione os empregados que possuem um SALARIO maior que 
-- o salário médio dos Auxiliares;
SELECT *
FROM EMPREGADOS
WHERE SALARIO > (
  SELECT AVG(E.SALARIO)
FROM EMPREGADOS AS E
WHERE E.OCUPACAO = 'Auxiliar'
)

-- 50. Selecione os empregados que não trabalham no DEPARTAMENTO de Vendas;
SELECT *
FROM EMPREGADOS AS E
WHERE E.OCUPACAO NOT IN ('Vendas');

SELECT *
FROM EMPREGADOS AS E
WHERE E.OCUPACAO != 'Vendas'

SELECT *
FROM EMPREGADOS AS E
WHERE E.OCUPACAO <> 'Vendas'


-- 51. Selecione os empregados que não possuem gerentes;
SELECT *
FROM EMPREGADOS AS E
WHERE E.GERENTE_ID IS NULL;

-- 52. Selecione os empregados que são geridos pela Nayla Canto Coronel;
SELECT *
FROM EMPREGADOS AS E
WHERE E.GERENTE_ID = (
	SELECT ID
FROM EMPREGADOS
WHERE NOME = 'Nayla Canto Coronel'
)

-- 53. Selecione os empregados que tem o SALARIO maior 
-- que R$ 2.500 após um aumento de 20%;
SELECT *
FROM EMPREGADOS AS E
WHERE (E.SALARIO * 1.2) > 2500;

-- 54. Exiba o número de empregados de cada OCUPACAO;
SELECT E.OCUPACAO, COUNT(E.OCUPACAO)
FROM EMPREGADOS AS E
GROUP BY E.OCUPACAO;
