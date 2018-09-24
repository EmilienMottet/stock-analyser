from flask import Flask, jsonify, request
from flask_cors import CORS
from requests import get
import pandas_datareader.data as web
import bs4
from datetime import datetime, timedelta

app = Flask(__name__)
CORS(app)


@app.route('/tickers')
def tickers():
    resp = get('https://en.wikipedia.org/wiki/List_of_S%26P_500_companies')
    soup = bs4.BeautifulSoup(resp.text, 'lxml')
    table = soup.find('table', {'class': 'wikitable sortable'})
    tickers = []
    for row in table.findAll('tr')[1:]:
        ticker = row.findAll('td')[0].text
        name = row.findAll('td')[1].text
        tickers.append({'ticker': ticker, 'name': name})
    return jsonify(tickers)


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


@app.route('/price/<string:ticker>')
def price(ticker):
    data = web.DataReader(ticker, 'yahoo', datetime.now() - timedelta(days=1), datetime.now())
    return jsonify({'value': data['Adj Close'].values[0]})


if __name__ == "__main__":
    app.run(debug=True)
