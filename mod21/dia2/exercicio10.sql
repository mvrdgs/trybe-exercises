SELECT m.* FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS bo
ON m.id = bo.movie_id
WHERE bo.rating > 8; 
