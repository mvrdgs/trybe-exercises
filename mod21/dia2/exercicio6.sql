SELECT m.title FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS bo
ON bo.movie_id = m.id
WHERE rating > 7.5;

SELECT title FROM Pixar.Movies
WHERE id IN (SELECT movie_id FROM Pixar.BoxOffice WHERE rating > 7.5);
