from models.Todo import Todo


class TodoClass:
    color: str = "yellow"

    def __init__(self, title, creation_date):
        self.title = title
        self.creation_date = creation_date

    @staticmethod
    def new_todo(
        title: str,
    ):
        """Function returning the todoObject that had the given creationDate arg."""
        return "prout"

    @staticmethod
    def get_todo(creation_date):
        """Function returning the todoObject that had the given creationDate arg."""
        return creation_date
