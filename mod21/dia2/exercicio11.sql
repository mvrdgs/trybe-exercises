SELECT t1.title, t1.length_minutes, t2.title, t2.length_minutes FROM Pixar.Movies AS t1, Pixar.Movies AS t2
WHERE t1.director = t2.director;
