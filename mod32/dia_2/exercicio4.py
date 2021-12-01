import json
import csv

category_counter = {}
category_percentage = []

with open("books.json") as file:
    books = json.load(file)
    for book in books:
        for category in book["categories"]:
            if category in category_counter:
                category_counter[category] += 1
            else:
                category_counter[category] = 1


# for category in category_counter:
#     category_percentage.append(
#         [category, category_counter[category] / len(books)
# ])

category_percentage = [
    [category, num_books / len(books)]
    for category, num_books in category_counter.items()
]


headers = ["category", "percent"]

with open('category_percentage.csv', 'w') as file:
    writer = csv.writer(file)
    writer.writerow(headers)
    writer.writerows(category_percentage)
