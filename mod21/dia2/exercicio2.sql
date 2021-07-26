SELECT m.title, bo.international_sales FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS bo
ON bo.movie_id = m.id
WHERE bo.domestic_sales < bo.international_sales;
