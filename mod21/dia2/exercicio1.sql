SELECT m.title, bo.domestic_sales, bo.international_sales FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS bo
ON m.id = bo.movie_id;
