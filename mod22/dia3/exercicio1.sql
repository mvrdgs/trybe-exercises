SELECT * FROM sakila.film;
SELECT * FROM sakila.category;
SELECT * FROM sakila.film_category;

CREATE VIEW film_with_categories AS
SELECT f.title, fc.category_id, c.name FROM film_category AS fc
INNER JOIN film AS f
ON fc.film_id = f.film_id
INNER JOIN category AS c
ON c.category_id = fc.category_id
ORDER BY f.title;

CREATE VIEW film_with_categories AS
SELECT (SELECT title FROM film WHERE film_id = fc.film_id) AS title,
category_id,
(SELECT name FROM category WHERE category_id = fc.category_id) AS name FROM film_category AS fc
ORDER BY title;

DROP VIEW film_with_categories;

SELECT * FROM film_with_categories;
