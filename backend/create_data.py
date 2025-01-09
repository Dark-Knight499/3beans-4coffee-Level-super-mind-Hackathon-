from langchain_ollama.chat_models import ChatOllama
from dotenv import load_dotenv
import random
import pandas as pd
load_dotenv()



llm = ChatOllama(
    model = "llama3.2")
list_of_types = ["food", "movies", "music", "books", "sports", "technology"]
usernames = ["@Dark-Knight499", "@GaneshMishra-lab", "@tech_guru", "@foodie_lover", "@CodeWithDubeyji", "@music_fanatic"]



data = pd.read_csv("social media data.csv")

prompt = """
Write a social media post description about {post_type}. Make it engaging and interesting as if you were a person sharing this on your social media platform.

You can make any assumtions about the post type and the content of the post.

#The post content is about {post_type}
#Final output SHOULD be just description of the post and nothing else.
#keep it short
"""
random_choices = [random.choice(list_of_types) for _ in range(len(data))]
for i in range(len(data)):
    data["description"][i] = llm.invoke(prompt.format(post_type=random_choices[i])).content
    data["username"][i] = random.choice(usernames)
    data["datetime"][i] = random.choice(pd.date_range(start="2024-09-15", end="2025-01-10", freq="H"))
    print(f"\r{i+1}",end="")

data.to_csv("final social media data.csv", index=False)

