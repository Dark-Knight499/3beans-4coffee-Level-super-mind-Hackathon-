from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_openai import ChatOpenAI
from langchain.prompts import PromptTemplate
import prompts
llm = ChatGoogleGenerativeAI(
    model="gemini-1.5-flash",
    api_key=""
)

schema = """
CREATE TABLE IF NOT EXISTS posts (
    post_id UUID PRIMARY KEY,
    user_name UUID,
    type UNION(Reel, Image, Video, Carousel),
    likes INT,
    comments INT,
    shares INT,
    date_posted TIMESTAMP,
    vector_description VECTOR<FLOAT>
);
"""

def need_of_vector_search(user_query):
    return llm.invoke(
        PromptTemplate(
            template=prompts.need_of_vector_prompt,
        ).format(schema=schema, user_query=user_query)
    ).content

prompt = """
    username : harsh
    this is the schema
    {schema}
    generate cql query for astra db
    based on user query
    {user_query}
"""

def generate_cql_query(user_query):
    return llm.invoke(
        PromptTemplate(
            template=prompt,
        ).format(schema=schema, user_query=user_query)
    ).content


if __name__ == "__main__":
    while True:
        user_query = input("Enter your query: ")
        print(need_of_vector_search(user_query))