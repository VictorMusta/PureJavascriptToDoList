from datetime import datetime
from sqlalchemy import String
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from models.Base import Base


class Todo(Base):
    __tablename__ = "todo"
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(50))
    date: Mapped[datetime]
    resolved: Mapped[bool] = mapped_column(default=False)
    truc: Mapped[bool] = mapped_column(default=False)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    # def __repr__(self) -> str:
    #     return f"Todo(id={self.id!r}, title={self.title!r}, date={self.date!r}, resolved={self.resolved!r})"
