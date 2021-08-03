SELECT * FROM sakila.actor;
SELECT * FROM sakila.film;
SELECT * FROM sakila.film_actor;

CREATE VIEW film_info AS
SELECT (SELECT CONCAT(first_name, ' ', last_name) FROM sakila.actor WHERE actor_id = fa.actor_id) AS actor,
actor_id,
(SELECT title FROM sakila.film WHERE film_id = fa.film_id) AS title FROM film_actor AS fa
ORDER BY actor;

SELECT * FROM film_info;
