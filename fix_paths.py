
import re

file_path = 'src/data.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Function to replace spaces with underscores inside image paths
def replace_spaces(match):
    full_match = match.group(0) # e.g. image: "/path/to/File Name.png"
    # We want to replace spaces only inside the quote
    key = match.group(1) # "image: "
    quote = match.group(2) # "
    path = match.group(3) # /path/to/File Name.png
    
    new_path = path.replace(' ', '_')
    return f'{key}{quote}{new_path}{quote}'

# Regex to find image: "path"
# Handles image: "..." or image : "..."
updated_content = re.sub(r'(image\s*:\s*)(["\'])(.*?)(["\'])', replace_spaces, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(updated_content)
