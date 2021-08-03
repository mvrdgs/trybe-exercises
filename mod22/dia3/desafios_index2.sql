SELECT * FROM address;

CREATE INDEX postal_code_index ON sakila.address(postal_code);

-- query cost: 0.95

SELECT *
FROM sakila.address
WHERE postal_code = '36693';

DROP INDEX postal_code_index ON sakila.address;

-- query cost: 65.40
