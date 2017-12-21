# 5 Minute Time Wasters

Website that hosts small 5 minute time wasters that I built. The goal of this project is to create projects that are slightly educational without the user realizing that they are. (and also to waste time)

The time wasters are built on p5.js, an easy-to-use graphics library in javascript. Most of the scripts are extremely small and pretty simply to understand.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Python 2.7 
* pip should already be installed if you are using python, but if you attempt to use pip and for some reason it does not work, follow the installation instructions located [here](https://pip.pypa.io/en/stable/installing/)
* The dependencies required in ```requirements.txt``` To do this, simply navigate to the project directory after you have downloaded it and run the command below in your shell.

```
pip install -r requirements.txt
```

### Installing

This will guide you to running the environment on your computer

First you will need to set up the Flask environment. If running on a Mac use:
```
export FLASK_APP=app.py
```

Windows:
```
set FLASK_APP=app.py
```

Next, enter:
```
flask run
```

By default the server runs on [http://127.0.0.1:5000/](http://127.0.0.1:5000/)

## Built With

* [Flask](http://flask.pocoo.org/) - The web framework used
* [Jinja 2](http://jinja.pocoo.org/) - Templating Engine
* [p5.js](https://p5js.org/) - Lightweight javascript graphics library

## Authors

* **Gavin Lifrieri** - *Initial work* - [CaelumTerrae](https://github.com/CaelumTerrae)

## License

This project is licensed under the MIT License file for details