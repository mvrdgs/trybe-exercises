SELECT m.*, t.* FROM Pixar.Theater AS t
RIGHT JOIN Pixar.Movies AS m
ON m.theater_id = t.id
ORDER BY t.`name`;
