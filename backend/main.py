from flask import Flask, request
from functions.todo_functions import Todo
from functions.todo_functions import Base
from sqlalchemy import create_engine
from sqlalchemy.orm import Session

app = Flask(__name__)

engine = create_engine(
    "postgresql+psycopg2://postgres:mdppostgres@localhost/postgres", echo=True
)
Base.metadata.create_all(engine)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.errorhandler(404)
def not_found(e):
    # defining function
    return "<p> T'as du te tromper de page poto </p>"


@app.delete("/todos")
def delete_all_todos():
    with Session(engine) as session:
        session.delete(Todo)

    return "table Todo cleared"


@app.get("/todo")
def get_todo():
    with Session(engine) as session:
        id = request.args.get("id")
        title = request.args.get("title")
        print(id, title)
        todoList = session.query(Todo).where((Todo.id == id) | (Todo.title == title))
        result = session.scalars(todoList)
    return [todoObject.as_dict() for todoObject in result]


@app.post("/todo")
def new_todo():
    with Session(engine) as session:
        myTodo = request.get_json()
        print(myTodo["Todo"]["title"])
        my_todo = Todo(title=myTodo["Todo"]["title"], date=myTodo["Todo"]["date"])
        session.add(my_todo)
        session.commit()
    return myTodo


@app.get("/todos")
def get_all_todo():
    with Session(engine) as session:
        todoList = session.query(Todo).all()
        return [todoObject.as_dict() for todoObject in todoList]
