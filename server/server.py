from flask import Flask, jsonify, request
from flask_cors import CORS
from requests import get

app = Flask(__name__)
CORS(app)


@app.route('/coinlist')
def coinlist():
    data = []
    object_data = get('https://www.cryptocompare.com/api/data/coinlist/').json()['Data']
    for key in object_data.keys():
        data.append({
            'symbol': object_data[key]['Symbol'],
            'coin_name': object_data[key]['CoinName']
        })
    return jsonify(data)


@app.route('/price')
def price():
    request_params = request.query_string.decode("utf-8")
    url = 'https://min-api.cryptocompare.com/data/price?' + request_params
    data = get(url).json()
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
