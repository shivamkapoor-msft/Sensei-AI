# Using flask to make an api
# import necessary libraries and functions
import pandas as pd
from flask import Flask, jsonify, request
import pickle
from xgboost import XGBClassifier
from pandas import json_normalize
from flask import Flask, jsonify, request
from flask_cors import CORS


filename = 'finalized_model.sav'


# creating a Flask app
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

  
# on the terminal type: curl http://127.0.0.1:5000/
# returns hello world when we use GET.
# returns the data that we send when we use POST.
@app.route('/FHL', methods = ['POST'])
def get_model_results():
    data = request.get_json(force=True)
    data["Gender"] = 1 if data["Gender"] == "Female" else 0
    
    df = json_normalize(data)
    print(df.head())
    clf = pickle.load(open(filename,'rb'))
    print(clf.predict(df).tolist())
    learnerArray = clf.predict(df).tolist()[0]
    learner=""
    if (learnerArray[0]==1.0):
        learner="A"
    if (learnerArray[1]==1.0):
        learner="K"
    if (learnerArray[2]==1.0):
        learner="V"
    
    return jsonify({'data': learner})
  
# driver function
if __name__ == '__main__':
  
    app.run(debug = True)