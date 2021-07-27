USE sakila;
DELIMITER $$

CREATE FUNCTION countMoviesByCategory(category_name VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE films_qty INT;
    SELECT COUNT(fc.film_id) FROM film_category AS fc
	INNER JOIN category AS c
	ON c.category_id = fc.category_id
	WHERE c.`name` LIKE CONCAT('%', category_name, '%')
    INTO films_qty;
    RETURN films_qty;
END $$

DELIMITER ;
