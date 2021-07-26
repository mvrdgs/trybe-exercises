SELECT location FROM Pixar.Theater AS t
WHERE EXISTS (SELECT * FROM Pixar.Movies WHERE theater_id = t.id);
