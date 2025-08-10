from run import db
from datetime import datetime
from sqlalchemy import VARCHAR, DATETIME, Integer

from model.Enumeration import Mode


class Notice(db.Model):
    """
    交易建议
    通过里面的request_id和每个配置方案相挂钩
    """

    __tablename__ = 'Notice'

    type = db.Column(db.Enum(Mode), default='STOCK')
    time = db.Column(DATETIME, default=datetime.today())

    id = db.Column(Integer, primary_key=True)
    content = db.Column(VARCHAR(100), default="")
    username = db.Column(VARCHAR(100), db.ForeignKey('User.username'))

    def __init__(self, content, username):
        self.time = datetime.today()
        self.content = content
        self.username = username