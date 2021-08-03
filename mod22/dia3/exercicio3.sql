CREATE VIEW address_info AS
SELECT
address_id,
address,
district,
city_id,
(SELECT city FROM sakila.city WHERE city_id = a.city_id) AS city
FROM address AS a
ORDER BY city_id;

SELECT * FROM address_info;
