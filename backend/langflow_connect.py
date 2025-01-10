import requests
import os
BASE_API_URL = "https://api.langflow.astra.datastax.com"
LANGFLOW_ID = "27767f1a-0e03-44ce-9fc9-c47fbbb6a56a"
FLOW_ID = "2feb69cb-8d1e-480f-b542-5e83e4fa1473"
APPLICATION_TOKEN = os.getenv("APPLICATION_TOKEN")
ENDPOINT = ""  # You can set a specific endpoint name in the flow settings

def run_message(message: str) -> dict:
    """
    Run a flow with a given message.

    :param message: The message to send to the flow
    :return: The JSON response from the flow
    """
    api_url = f"{BASE_API_URL}/lf/{LANGFLOW_ID}/api/v1/run/{ENDPOINT or FLOW_ID}"
    
    payload = {
        "input_value": message,
        "output_type": "chat",
        "input_type": "chat"
    }
    headers = {"Authorization": "Bearer " + APPLICATION_TOKEN, "Content-Type": "application/json"}
    response = requests.post(api_url, json=payload, headers=headers)
    return response.json()
