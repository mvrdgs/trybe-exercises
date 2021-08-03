CREATE VIEW movies_languages AS
SELECT title, language_id,
(SELECT name FROM sakila.language WHERE language_id = f.language_id) AS language
FROM sakila.film AS f
ORDER BY title;

SELECT * FROM movies_languages;
