CREATE FULLTEXT INDEX name_index ON sakila.category(name);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

-- query cost: 0.35

DROP INDEX name_index ON sakila.category;

SELECT *
FROM sakila.category
WHERE name LIKE '%action%';

-- query cost: 1.85
