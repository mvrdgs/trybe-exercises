SELECT m.title, bo.rating FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS bo
ON m.id = bo.movie_id
ORDER BY rating DESC;
