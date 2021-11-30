def vertical_print(word):
    for letter in word:
        print(letter)


vertical_print("palavra")


def sum_numbers(numbers):
    total = 0
    for number in numbers.split(" "):
        if str.isdigit(number):
            total += int(number)
        else:
            print(f"Error: {number} is not a number")
    print(f'Sum of valid values: {total}')


sum_numbers("1 2 3 4 5 6 7 8 b")
