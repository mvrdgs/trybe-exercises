SELECT m.title FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS bo
ON bo.movie_id = m.id
WHERE (bo.domestic_sales + bo.international_sales) >= 500000000
AND m.length_minutes > 110;
