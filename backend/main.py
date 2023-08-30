from flask import Flask

from functions.todo_functions import TodoClass

print(TodoClass.get_todo("cc"))

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.errorhandler(404)
def not_found(e):
    # defining function
    return "<p> T'as du te tromper de page poto </p>"


@app.get("/todo")
def getTodo():
    return


@app.get("/todos")
def getAllTodo():
    return
