from flask import Flask, request, jsonify, send_from_directory
import requests
import base64
import os
from anthropic import Anthropic
from datetime import datetime
import logging
from flask import request

# Set up logging
logging.basicConfig(filename='app.log', level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

app = Flask(__name__, static_url_path='')
url = "http://127.0.0.1:7860"

# Initialize the Anthropic client with your API key
client = Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))

#def get_client_ip(request):
#    x_forwarded_for = request.environ.get('HTTP_X_FORWARDED_FOR')
#    if x_forwarded_for:
#        ip = x_forwarded_for.split(',')[0]
#    else:
#        ip = request.environ.get('REMOTE_ADDR')
#    return ip

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('.', path)

@app.route('/send_message', methods=['POST'])

def send_message():
    data = request.json
    mood = data['mood']
    mood_description = data['moodDescription']
    mood_intensity = data['moodIntensity']
    #user_ip = get_client_ip(request)  # Get the user's IP address
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")  # Get the current date and time

    # Construct the message
    message = f"Hi Claude, today I am feeling {mood} with an intensity of {mood_intensity}. {mood_description} Can you give me an uplifting message and accompanying Bible verses that will complement my mood or help me feel better? Have the response flow naturally without feeling too preachy please."

    try:
        # Use the Anthropic client to create a new message to Claude 3 model
        response = client.messages.create(
            max_tokens=1024,
            messages=[
                {
                    "role": "user",
                    "content": message,
                }
            ],
            model="claude-3-sonnet-20240229",  # Ensure this model ID matches what's available/required
        )

        # Assuming the response structure allows direct access like this; adjust based on actual structure
        if response and response.content:
            ai_response = response.content[0].text  # Extract the text from the first TextBlock
            # Print the information to the console in a pleasing view
            print(f"Date: {current_time}")
            #print(f"User IP: {user_ip}")
            print(f"User Input: {message}")
            print(f"AI Response: {ai_response}")
            print("-" * 50)

            # Log the information
            logging.info(f"Date: {current_time}, User Input: {message}, AI Response: {ai_response}")
            return jsonify({"text": ai_response})
        else:
            return jsonify({"error": "No response from AI"}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/generate_image')

def generate_image(prompt):
   payload = {
    "prompt": prompt,
    "steps": 30, 
    "seed": -1,
    "width": 832,
    "height": 1216,
    
}



if __name__ == '__main__':
    app.run(debug=True, host = "0.0.0.0", port=5544)