USE betrybe_automoveis;
SELECT * FROM carros;

DELIMITER $$
CREATE TRIGGER trigger_car_insert
	BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.disponivel_em_estoque = 1;
END $$

DELIMITER ;
