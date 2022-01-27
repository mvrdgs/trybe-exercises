class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
            if item > self.last_element:
                self.last_element = item


A = [0, 10, 100, 1000]

if __name__ == "__main__":
    conjunto = Conjunto()

    for item in A:
        conjunto.add(item)
