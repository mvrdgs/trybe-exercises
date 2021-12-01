import pytest
from conteudo import divide, is_odd


def test_is_odd_return_true_when_number_is_odd():
    assert is_odd(3) is True


def test_is_odd_return_false_when_number_is_not_odd():
    assert is_odd(2) is False


def test_divide_by_zero_returns_error():
    with pytest.raises(ZeroDivisionError, match='division by zero'):
        divide(5, 0)
