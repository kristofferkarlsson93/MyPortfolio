from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
@app.route('/hejsan')
def index():
  return 'Hej Kristoffer'

@app.route("/checkAnswer/<answer>")
def checkAnswer(answer):
    answer.strip()
    email = "kristoffer.karlsson93@hotmail.com"
    if answer.lower() == "programmer":
        return email
    return "wrong"

if __name__ == "__main__":
    app.run(host='localhost', port=3000, threaded=True)

