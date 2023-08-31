from sqlalchemy import String
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column


class Base(DeclarativeBase):
    pass


class Todo(Base):
    __tablename__ = "todo"
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(50))
    date: Mapped[str] = mapped_column(String(10))
    resolved: Mapped[bool] = mapped_column(default=False)
    truc: Mapped[bool] = mapped_column(default=False)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    # def __repr__(self) -> str:
    #     return f"Todo(id={self.id!r}, title={self.title!r}, date={self.date!r}, resolved={self.resolved!r})"


class TodoClass:
    color: str = "yellow"

    def __init__(self, title, creation_date):
        self.title = title
        self.creation_date = creation_date

    @staticmethod
    def new_todo(title: str, creation_date: str) -> Todo:
        """Function returning the todoObject that had the given creationDate arg."""
        return creation_date

    @staticmethod
    def get_todo(creation_date):
        """Function returning the todoObject that had the given creationDate arg."""
        return creation_date
