USE sakila;
DELIMITER $$

CREATE PROCEDURE checkCustomerActivity(INOUT customer_email VARCHAR(100))
BEGIN
	SELECT IF (active, 'O cliente está ativo', 'O cliente está inativo') INTO customer_email
    FROM sakila.customer WHERE email LIKE customer_email;
END $$

DELIMITER ;
