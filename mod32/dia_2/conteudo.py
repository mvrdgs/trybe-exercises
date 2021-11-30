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
    print(f"Sum of valid values: {total}")


sum_numbers()

file = open("arquivo.txt", mode="w")
LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
file.writelines(LINES)
file.close()

# leitura
file = open("arquivo.txt", mode="r")
for line in file:
    # não esqueça que a quebra de linha também é um caractere da linha
    print(line)
file.close()

# escrita
file = open("arquivo.dat", mode="wb")
# o prefixo b em uma string indica que seu valor está codificado em bytes
file.write(b"C\xc3\xa1ssio 30")
file.close()

# leitura
file = open("arquivo.dat", mode="rb")
content = file.read()
print(content)  # saída: b'C\xc3\xa1ssio 30'
file.close()  # não podemos esquecer de fechar o arquivo
