# Mood-Based Uplifting Message Generator

This project is a web application that generates uplifting messages and Bible verses based on the user's current mood. It uses Flask for the backend, Anthropic's Claude AI for generating responses, and includes an image generation feature.

## Features

- User input for mood, mood description, and mood intensity
- AI-generated uplifting messages and Bible verses using Claude 3
- Image generation based on prompts (work in progress)
- Logging of user interactions and AI responses
- Static file serving for frontend assets

## Prerequisites

- Python 3.7+
- Node.js and npm (for the JavaScript version)
- Anthropic API key

## Installation

1. Clone the repository:

'''git clone https://github.com/ElBruh/Uplift.git'''

2. Install Python dependencies:

'''pip install flask requests anthropic'''

3. Set up your Anthropic API key as an environment variable:

'''export ANTHROPIC_API_KEY="your-api-key-here"'''

5. For the JavaScript version, install Node.js dependencies:

'''npm install express multer @anthropic-ai/sdk'''

## Usage

### Python Version

1. Run the Flask application:

'''python app.py'''

2. Open a web browser and navigate to `http://localhost:5544`

### JavaScript Version

1. Run the Express server:

'''node server.js'''

2. Open a web browser and navigate to `http://localhost:33787`

## API Endpoints

- `/send_message` (POST): Send user mood data and receive an uplifting message
- `/generate_image` (GET): Generate an image based on a prompt (work in progress)

## Configuration

- The Flask app runs on port 5544 by default
- The Express app runs on port 33787 by default
- Logging is configured to write to `app.log`

## Future Improvements

- Complete the image generation feature
- Enhance error handling and user feedback
- Implement user authentication and session management
- Optimize performance for handling multiple concurrent requests

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
