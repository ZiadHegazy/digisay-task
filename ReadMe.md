## Installation With Docker

clone the repo by writing in terminal

`git clone https://github.com/ZiadHegazy/digisay-task.git  `

open terminal in the root folder then write these commands

` docker-compose build`

`docker-compose up -d `

## Installation Without Docker
clone the repo by writing in terminal

`git clone https://github.com/ZiadHegazy/digisay-task.git  `

open new terminal for the frontend then

`cd frontend`

`npm install`

`npm start`

open new terminal for the backend then

`cd backend`

`python -m venv venv`

`venv/Scripts/activate`

`pip install -r requirements.txt`

`python manage.py runserver`



