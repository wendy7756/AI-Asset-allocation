from model.news.News import News

from run import db
import traceback

class NewsDao(object):
    def get_all_news(self):
        try:
            session = db.session()
            news = session.query(News).all()[:30]
            session.close()
            return news
        except:
            print("error")
            traceback.print_exc()
        finally:
            session.close()
        pass

    def get_one_news(self, id):
        try:
            session = db.session()
            news = session.query(News).filter(News.id == id)[0]
            session.close()
            return news
        except:
            print("error")
            traceback.print_exc()
        finally:
            session.close()
        pass