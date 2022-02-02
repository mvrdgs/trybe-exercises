def check_expression(expression):
    stack = []
    openers = ["{", "[", "("]
    closers = ["}", "]", ")"]

    for item in expression:
        try:
            if item in openers:
                stack.append(item)
            else:
                if closers.index(item) == openers.index(stack[-1]):
                    stack.pop()
                else:
                    return False
        except IndexError:
            return False

    return True


print(check_expression("(){}"))
