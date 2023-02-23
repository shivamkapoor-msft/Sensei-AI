import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score
from sklearn.metrics import precision_score
from xgboost import XGBClassifier

import pickle

 
 
# Load the VARK Excel data
data = pd.read_csv("C:/Users/annikumari/chatgpt/Data.csv")


 
 
# Split the data into training and testing sets
X = data.drop("Learner", axis=1) # drop the target variable
y = data["Learner"]

dummies = pd.get_dummies(data['Gender'])

dummy2=pd.get_dummies(data['Learner'])

print(dummy2)

y=pd.concat([y, dummy2], axis=1)
y=y.drop("Learner", axis=1)
# Concatenate the original DataFrame with the dummy variables

df = pd.concat([data, dummies], axis=1)
df=df.drop("Gender", axis=1)
df=df.drop("Learner", axis=1)
df=df.drop("Male", axis=1)
df.rename(columns = {'Female':'Gender'}, inplace = True)


X_train, X_test, y_train, y_test = train_test_split(df, y, test_size=0.4,random_state=5)





# Train the decision tree classifier
clf = XGBClassifier(random_state=1)
clf.fit(X_train, y_train)
 

 
# Test the model on the testing set and calculate accuracy
y_pred = clf.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test,y_pred,average="macro")




 
 
# Print the accuracy score
print("Accuracy:", accuracy)
print("Precision:",precision)

filename = 'finalized_model.sav'
pickle.dump(clf, open(filename, 'wb'))