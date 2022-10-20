# Small Gif App

## Set Up

```
git clone git@github.com:the-other-mariana/giphy-app.git
```

Make sure you have nodejs version 16.13.0 (last LTS), because 17.x or higher causes build problems.

```
sudo npm cache clean -f
sudo npm install -g n
sudo n 16.13.0
hash -r
```

Then, install all dependencies.

```
npm install
npm start
```

Install the build server.

```
npm run build
sudo npm i -g serve
serve -s build -p 8000
```

Now you can go to localhost:8000 and check the build version locally.

## Deploy

Create an app in heroku, the login in your computer:

```
sudo snap install heroku --classic
heroku login
heroku git:remote -a gifs-mariana
```

Push latest code into heroku remote

```
git add .
git commit -s -m 'delete yarn.lock'
git push heroku master
```

If you get error: error:0308010C:digital envelope routines::unsupported when pushing to heroku, add this to the package.json file:

```
"engines": {
    "node": "16.13.0"
}
```

This ensures heroku runs your app with the nodejs version 16.13.0 with which we build it locally.