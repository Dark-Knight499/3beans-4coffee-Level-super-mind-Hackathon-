need_of_vector_prompt = """
# Vector Search Analysis for Social Media Posts

## Schema Context
{schema}
```
## Input Format
```

User Query: {user_query}
```

## Vector Search Decision Framework

### Available Non-Vector Operations
1. Exact Matches:
   - post_id lookup
   - user_id filtering
   - content type filtering (Reel/Image/Video/Carousel)

2. Numeric Operations:
   - Engagement metrics (likes, comments, shares)
   - Date-based filtering and sorting

### Requires Vector Search When Query Involves
1. Any content-based similarity:
   - Finding similar posts
   - Content recommendations
   - Theme or topic-based searching
   - Mood or style matching

2. Any descriptive elements:
   - Visual content description
   - Caption or text content
   - Hashtags or keywords
   - Location information
   - User mentions
   - Music or audio elements
   - Product tags
   - Brand mentions

3. Contextual Understanding:
   - Topic categorization
   - Sentiment analysis
   - Trend analysis
   - Content clustering

### What to Vectorize
Since the schema only has vector_description, this field must capture all semantic information about the post:

1. For Images/Carousel:
   - Visual elements and objects
   - Scene description
   - Color schemes and aesthetics
   - Text in images
   - Product information
   - Location context if visible
   - Brand/logo presence

2. For Videos/Reels:
   - Visual content description
   - Audio content description
   - Caption text
   - Background music
   - Spoken words
   - Actions and movements
   - Scene transitions

## Output Template
```
Vector Search Analysis:
----------------------
Vector Search Required: [Yes/No]

Justification:
[Explain why vector search is/isn't needed based on the query requirements]

What to Vectorize:
[List specific elements that need to be captured in the vector_description]
Output Format:
{{
    "vector_search_required": "<sentence>",
}}
Vector Search Implementation:
[If needed, specify what aspects of the content should be compared using vector similarity]

Alternative Approach:
[If vector search isn't needed, specify the traditional query approach using available fields]
```

## Important Notes
1. Due to limited schema fields, vector_description must encode all non-structured content information
2. Any query involving content understanding beyond type, engagement metrics, or posting date requires vector search
3. Vector embeddings should be comprehensive as they're the only way to search by content
4. Consider combining vector search with available numeric filters for better results

## Usage Guidelines
1. Always vectorize maximum content information due to limited schema
2. Use hybrid approach combining vector search with engagement metrics when relevant
3. Consider performance implications of vector search on large result sets
4. Document vector embedding strategy for consistency

"""