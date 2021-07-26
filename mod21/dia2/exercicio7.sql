SELECT bo.rating FROM Pixar.BoxOffice AS bo
INNER JOIN Pixar.Movies AS m
ON m.id = bo.movie_id
WHERE m.`year` > 2009;

SELECT rating FROM Pixar.BoxOffice
WHERE movie_id IN (SELECT id FROM Pixar.Movies WHERE `year` > 2009);
