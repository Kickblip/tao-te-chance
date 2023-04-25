import string

with open('source.txt', 'r') as file:
    # Read the text document and split it up by line
    lines = file.read().splitlines()

# Remove all punctuation from the strings
translator = str.maketrans('', '', string.punctuation)
lines = [line.translate(translator) for line in lines]

# Create a JavaScript-formatted array from the cleaned-up strings
js_array = '[' + ','.join(f'"{line}"' for line in lines) + ']'

# Write the JavaScript-formatted array to a new text file
with open('js_array.txt', 'w') as file:
    file.write(js_array)

