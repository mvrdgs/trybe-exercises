USE sakila;
DELIMITER $$

CREATE FUNCTION totalPaymentQuantity(id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE totalPayments INT;
    SELECT COUNT(*) FROM payment WHERE customer_id = ID
    INTO totalPayments;
    RETURN totalPayments;
END $$

DELIMITER ;