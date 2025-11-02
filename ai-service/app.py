from flask import Flask, request, jsonify
import random

app = Flask(__name__)

@app.route('/categorize', methods=['POST'])
def categorize():
    data = request.json
    description = data.get('description', '')
    # Dummy logic
    categories = ['Hardware', 'Software', 'Network', 'VPN']
    category = random.choice(categories)
    return jsonify({'category': category})

@app.route('/prioritize', methods=['POST'])
def prioritize():
    data = request.json
    description = data.get('description', '')
    # Dummy logic
    priorities = ['High', 'Medium', 'Low']
    priority = random.choice(priorities)
    return jsonify({'priority': priority})

if __name__ == '__main__':
    app.run(port=5001)
