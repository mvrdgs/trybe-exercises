array = [1, 2, 3, 4, 5, 10]


def reverse(array):
    if (len(array) < 1):
        return array
    else:
        return [array.pop(-1)] + reverse(array)


print(reverse(array))
