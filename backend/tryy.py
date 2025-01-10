import pandas as pd
import json

# Load the original CSV
input_csv = "final social media data.csv"  # Replace with your file path
output_csv = "transformed_posts.csv"

# Read the CSV
df = pd.read_csv(input_csv)

# Add the 'content' column (copying from the 'description' column)
df['content'] = df['description']

# Add the 'metadata' column as a JSON-like string
df['metadata'] = df.apply(lambda row: json.dumps({
    "username": row['username'],
    "datetime": row['datetime'],
    "post_type": row['post_type'],
    "post_id": row['post_id'],
    "likes": row['likes'],
    "shares": row['shares'],
    "comments": row['comments'],
    "views": row['views']
}), axis=1)

# Save the transformed CSV
df.to_csv(output_csv, index=False)

print(f"Transformed CSV saved to {output_csv}")
