def fibonacci(n):
    first = 0
    second = 1
    result = [first, second]

    for i in range(n):
        sum = first + second
        result.append(first + second)
        first = second
        second = sum

    return result


print(fibonacci(5))
