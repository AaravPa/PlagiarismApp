from flask import Flask, jsonify, request
from pysimilar import compare

app = Flask(__name__)


@app.route('/', methods = ['GET','POST'])
def comparison():
    sentence_1=request.json["user_sentence"]
    #sentence_1="Space is an amazing place."
    sentence_2="Space is an interesting place."
    result=compare(sentence_1, sentence_2)
    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)
 
