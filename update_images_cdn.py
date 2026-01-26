import re

file_path = 'src/data.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all /ravi_publishers/assets/ with ImageKit CDN URL
updated_content = content.replace(
    '"/ravi_publishers/assets/',
    '"https://ik.imagekit.io/rohanwadadar/assets/'
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(updated_content)

print("✅ Successfully updated all image paths to use ImageKit CDN!")
print("Changed: /ravi_publishers/assets/ → https://ik.imagekit.io/rohanwadadar/assets/")
