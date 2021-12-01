def fizz_buzz(limit):
    result = []
    for n in limit:
        if (n % 3 == 0 and n % 5 == 0):
            result.append('FizzBuzz')
        elif (n % 3 == 0):
            result.append('Fizz')
        elif (n % 5 == 0):
            result.append('Buzz')
        else:
            result.append(n)
    return result


print(fizz_buzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))
