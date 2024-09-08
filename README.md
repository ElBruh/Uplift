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
- Anthropic API key

## Installation

1. Clone the repository:

```
git clone https://github.com/ElBruh/Uplift.git
```

2. Install Python dependencies:

```
pip install flask requests anthropic
```

3. Set up your Anthropic API key as an environment variable:

```
export ANTHROPIC_API_KEY="your-api-key-here"
```

## Usage

### Python Version

1. Run the Flask application:

```
python app.py
```

2. Open a web browser and navigate to `http://localhost:5544`

## Configuration

- The Flask app runs on port 5544 by default
- Logging is configured to write to `app.log`

## Future Improvements

- Complete the image generation feature
- Enhance error handling and user feedback
- Implement user authentication and session management
- Optimize performance for handling multiple concurrent requests

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the GPL-3.0 license - see the LICENSE file for details.
