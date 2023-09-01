from flask import Flask, request
from models.Todo import Todo
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from datetime import datetime

app = Flask(__name__)

engine = create_engine(
    "postgresql+psycopg2://todoAdmin:mdppostgres@localhost/postgres", echo=True
)


@app.route("/")
def hello_world():
    return "<p>This is my pure Javascript's Flask's api! I Hope you enjoy it.</p>"


@app.errorhandler(404)
def not_found(e):
    # defining function
    return "<p>T'as du te tromper de requete</p>"


@app.post("/todo")
def new_todo():
    with Session(engine) as session:
        my_todo = request.get_json()
        todoObject = Todo(title=my_todo["Todo"]["title"], date=datetime.now())
        session.add(todoObject)
        session.commit()
        return todoObject.as_dict()


@app.get("/todo")
def get_todo():
    with Session(engine) as session:
        todoList = session.query(Todo).where(Todo.id == request.get_json()["id"])
        return session.scalar(todoList).as_dict()


@app.get("/todos")
def get_all_todo():
    with Session(engine) as session:
        todoList = [todoObject.as_dict() for todoObject in session.query(Todo).all()]
        if todoList == []:
            return "No Todo Found"
        return todoList


@app.delete("/todo")
def delete_todo():
    with Session(engine) as session:
        content = request.get_json()
        deletedTodos = session.query(Todo).where(Todo.id == content["id"]).delete()
        if deletedTodos > 0:
            session.commit()
            return "todo n°" + str(content["id"]) + " successfully deleted"
        else:
            return "No Todo found."


@app.delete("/todos")
def delete_all_todos():
    with Session(engine) as session:
        number_of_todos_found = session.query(Todo).delete()
        if number_of_todos_found > 0:
            session.commit()
            return str(number_of_todos_found) + " Todo(s) cleared"
        return "No todos found"
