def vertical_print():
    word = input("Digite uma palavra: ")
    for letter in word:
        print(letter)


vertical_print()


def sum_numbers():
    numbers = input('Digite os números a serem somados separados por " ": ')
    total = 0
    for number in numbers.split(" "):
        if str.isdigit(number):
            total += int(number)
        else:
            print(f"Error: {number} is not a number")
    print(f'Sum of valid values: {total}')


sum_numbers()
