SELECT location FROM Pixar.Theater AS t
WHERE NOT EXISTS (SELECT * FROM Pixar.Movies WHERE theater_id = t.id);
