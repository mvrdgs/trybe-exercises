class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
            if item > self.last_element:
                self.last_element = item

    def __str__(self):
        string = "{"

        for index, present in enumerate(self.set):
            if present:
                string += str(index)
                if index < self.last_element:
                    string += ", "
                else:
                    string += "}"

        return string


A = [0, 10, 100, 1000]

if __name__ == "__main__":
    conjunto = Conjunto()

    for item in A:
        conjunto.add(item)

    print(conjunto)