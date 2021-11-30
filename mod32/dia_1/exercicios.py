def highest_number(n1, n2):
    print(n1 if n1 > n2 else n2)


highest_number(10, 5)
highest_number(5, 10)


def media(numbers):
    media = sum(numbers) / len(numbers)
    print(media)


media([1, 2, 3, 4, 5])


def asterisks_square(n):
    for index in range(n):
        print("*" * n)


asterisks_square(10)


def biggest_word(list):
    list.sort(key=len)
    print(list[-1])


biggest_word(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
