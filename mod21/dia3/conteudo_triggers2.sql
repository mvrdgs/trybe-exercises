USE betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER trigger_car_update
	BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'ATUALIZACAO';
END $$

DELIMITER ;
