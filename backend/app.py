from flask import Flask, request, jsonify,send_file
import pandas as pd
from flask_cors import CORS
import base64
app = Flask(__name__)
CORS(app)
usernames = ["@Dark-Knight499", "@GaneshMishra-lab", "@tech_guru", "@foodie_lover", "@CodeWithDubeyji", "@music_fanatic"]
data = pd.read_csv("final social media data.csv")
@app.route("/api/<username>/get_data", methods=["GET"])
def user_get_data(username):
    try:
        print(username)
        user_data = data[data["username"] == username]
        if user_data.empty:
            return jsonify({"error": "Username not found"})
        return jsonify(user_data.to_dict(orient="records"))
    except:
        return jsonify({"error": "Username not found"})

@app.route("/api/get_data", methods=["GET"])
def get_data():
    try:
        result = []
        for username in usernames:
            user_data = {
                "username": username,
                "image": None,
            }
            with open(f"static/{username}.jpeg", "rb") as image_file:
                user_data["image"] = base64.b64encode(image_file.read()).decode('utf-8')
            result.append(user_data)
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route("/api/chatbot", methods=["GET"])
def chatbot():
    try:
        return jsonify({"message": "Chatbot is working"})
    except Exception as e:
        return jsonify({"error": str(e)})
if __name__ == "__main__":
    app.run(debug=True, port=5000)
