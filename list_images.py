import os
import json

# Get all PNG files from public/assets
base_path = "public/assets"
image_files = []

for root, dirs, files in os.walk(base_path):
    for file in files:
        if file.lower().endswith('.png'):
            # Get relative path from assets folder
            rel_path = os.path.relpath(os.path.join(root, file), base_path)
            # Convert to forward slashes and replace spaces with underscores
            rel_path = rel_path.replace('\\', '/')
            image_files.append(rel_path)

# Sort the list
image_files.sort()

# Print all available images
print(f"Found {len(image_files)} image files:")
print("=" * 80)
for img in image_files:
    print(f"  assets/{img}")

# Save to a file for reference
with open('available_images.txt', 'w', encoding='utf-8') as f:
    for img in image_files:
        f.write(f"https://ik.imagekit.io/rohanwadadar/assets/{img}\n")

print("\n" + "=" * 80)
print(f"✅ List saved to 'available_images.txt'")
