# def fibonacci(n):
#     first = 0
#     second = 1
#     result = [first, second]

#     for i in range(n):
#         sum = first + second
#         result.append(first + second)
#         first = second
#         second = sum

#     return result


def fibonacci(n):
    if n < 2:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)


print(fibonacci(5))
