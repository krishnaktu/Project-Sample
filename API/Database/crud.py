from user import studentUserAccount
from base import Session, engine, Base, dbURI

Base.metadata.create_all(engine)

#create session and add sample user and commit
session = Session()
krishna_example_user = studentUserAccount('krishna', 'k@gmail.com', '1234', '1234', 'abc','abc')
session.add(krishna_example_user)
session.commit()

#get all
accounts = session.query(studentUserAccount).all()
for account in accounts:
    print(account)

#get by id
account = session.query(studentUserAccount).filter(studentUserAccount.email == 's@gmail.com').first()
print(account)

#update account
account.password = '12345'
account.isClosed = True
session.commit()
session.close()


session = Session()
account = session.query(studentUserAccount).filter(studentUserAccount.email == 'k@gmail.com').first()
print(account.name)
session.commit()
session.close()


#delete account
session = Session()
session.delete(account)
session.commit()

accounts = session.query(studentUserAccount).all()
for account in accounts:
    print(account.name)

session.close()



