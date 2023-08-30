from sqlalchemy import String
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
import datetime


class Base(DeclarativeBase):
    pass


class Todo(Base):
    __tablename__ = "todo"
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(50))
    date: Mapped[datetime.date]
    resolved: Mapped[bool] = mapped_column(default=False)

    def __repr__(self) -> str:
        return f"User(id={self.id!r}, title={self.title!r}, date={self.date!r}, resolved={self.resolved!r})"


class TodoClass:
    color = "yellow"

    def __init__(self, title, creation_date):
        self.title = title
        self.creation_date = creation_date

    @staticmethod
    def new_todo(title, creation_date):
        """Function returning the todoObject that had the given creationDate arg."""
        return creation_date

    @staticmethod
    def get_todo(creation_date):
        """Function returning the todoObject that had the given creationDate arg."""
        return creation_date


TodoClass.get_todo("cc")