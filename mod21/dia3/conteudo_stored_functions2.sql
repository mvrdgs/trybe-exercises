USE sakila;
DELIMITER $$

CREATE FUNCTION findFilmByInventoryId(id INT)
RETURNS VARCHAR(50) READS SQL DATA
BEGIN
	DECLARE movie_name VARCHAR(50);
    SELECT f.title FROM film AS f
	INNER JOIN inventory AS i
	ON i.film_id = f.film_id
	WHERE inventory_id = id
    INTO movie_name;
    RETURN movie_name;
END $$

DELIMITER ;