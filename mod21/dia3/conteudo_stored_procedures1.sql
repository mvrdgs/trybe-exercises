USE sakila;
DELIMITER $$

CREATE PROCEDURE showTenMostPopularActors()
BEGIN
	SELECT a.first_name, COUNT(fa.film_id) AS participations FROM film_actor AS fa
	INNER JOIN actor AS a
	ON a.actor_id = fa.actor_id
	GROUP BY fa.actor_id
	ORDER BY participations DESC LIMIT 10;
END $$

DELIMITER ;
