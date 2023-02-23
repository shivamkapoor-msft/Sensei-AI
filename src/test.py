from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/process-data', methods=['POST'])
def process_data():
    data = request.get_json()
    # Do some processing on the data
    result = {'processed_data': data['input_data'] + ' processed'}
    return jsonify(result)
