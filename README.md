# Crowd-Drawing

Implements a simple drawing app. It was written for my workshop about *Crowdsourcing and the Interwebs*, held at the EFPSA 2014 [Congress](http://more.efpsa.org/congress2014/) in Romania.
This little freudian experiment was inspired by [drawtogether](https://github.com/NYUCCL/drawtogether).

To get the code, run
```
git clone https://github.com/dostodabsi/crowd-drawing
```
If you have Heroku not yet setup, run
```
heroku create
```

and to rename your app
```
heroku apps:rename your-awesome-name
```

to add the database layer
```
heroku addons:add cloudant
```

and to go live
```
git push heroku master
```

Your app is now on the Interwebs, look at it with
```
heroku open
```
