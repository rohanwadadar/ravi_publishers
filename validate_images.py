import os
import re
import json

# Get all available PNG files
base_path = "public/assets"
available_images = set()

for root, dirs, files in os.walk(base_path):
    for file in files:
        if file.lower().endswith('.png'):
            rel_path = os.path.relpath(os.path.join(root, file), base_path)
            rel_path = rel_path.replace('\\', '/')
            # Store with CDN prefix
            cdn_path = f"https://ik.imagekit.io/rohanwadadar/assets/{rel_path}"
            available_images.add(cdn_path)

print(f"Found {len(available_images)} available images")

# Read data.js
with open('src/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all image URLs in data.js
image_pattern = r'image:\s*"(https://ik\.imagekit\.io/rohanwadadar/assets/[^"]+)"'
all_images_in_data = re.findall(image_pattern, content)

print(f"Found {len(all_images_in_data)} images referenced in data.js")

# Find images that don't exist
missing_images = []
for img in all_images_in_data:
    if img not in available_images:
        missing_images.append(img)

if missing_images:
    print(f"\n⚠️  Found {len(missing_images)} missing images:")
    for img in missing_images[:10]:  # Show first 10
        print(f"  - {img}")
    if len(missing_images) > 10:
        print(f"  ... and {len(missing_images) - 10} more")
else:
    print("\n✅ All images in data.js exist!")

# Extract book entries
book_pattern = r'\{[^}]*image:\s*"([^"]+)"[^}]*\}'
matches = list(re.finditer(book_pattern, content, re.DOTALL))

print(f"\nFound {len(matches)} book entries")

# Count valid vs invalid
valid_count = 0
invalid_count = 0

for match in matches:
    image_url = re.search(r'image:\s*"([^"]+)"', match.group(0))
    if image_url and image_url.group(1) in available_images:
        valid_count += 1
    else:
        invalid_count += 1

print(f"  ✅ Valid (image exists): {valid_count}")
print(f"  ❌ Invalid (image missing): {invalid_count}")

# Save report
with open('image_validation_report.txt', 'w', encoding='utf-8') as f:
    f.write(f"Image Validation Report\n")
    f.write(f"=" * 80 + "\n\n")
    f.write(f"Total available images: {len(available_images)}\n")
    f.write(f"Total books in data.js: {len(matches)}\n")
    f.write(f"Valid books: {valid_count}\n")
    f.write(f"Invalid books: {invalid_count}\n\n")
    
    if missing_images:
        f.write(f"Missing Images ({len(missing_images)}):\n")
        f.write("-" * 80 + "\n")
        for img in sorted(missing_images):
            f.write(f"{img}\n")

print("\n✅ Report saved to 'image_validation_report.txt'")
