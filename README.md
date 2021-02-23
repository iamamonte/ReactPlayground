This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Welcome to the React Playground

Make sure you have the prerequisites installed for running a React app, i.e. node and npm.

https://nodejs.org/en/download/


### TurnUp Coding Test

The below is a series of tasks which will allow you to become exposed to the stack at TurnUP. It will also force you to gain some expertise with Git. Completing this test is a prerequisite for consideration for the software development internship at TurnUP. However, you can reach out with questions.

##### Task 1 - Git - Forking the Repository and Creating Pull Request

Check online resources for assistance with any of the below:

- Fork the repository. 
- The “head” branch will be development. Be sure to always fetch and pull down changes from development before beginning work.
- When you start making code changes, be sure that you are a new branch that is appropriately named (reflects the task you're working on).

The task is as follows:

- Edit the interns.md file, adding your name, github handle, whethere you're working on mac or windows, time zone, start/stop date for your internship. Make sure this is done on a branch that is appropriately named, i.e. "task-one-*yourname*" or something similar.
- Commit your changes, publish your branch and open a pull request against this upstream repository.
- When your PR is merged in, you can move on to the next task.

##### Task 2 - Run the application and make changes to the application

Familiarize yourself with the application structure. Make sure you can run the application (see below instructions on running the app). 

There is a React component in use in the application called InternInfoDisplay. Replicate using that component to display information about yourself on the site. Run the application and make sure your information displays properly.

Commit your changes under an appropriately named branch, i.e. "task-two-*yourname*". Publish your branch and make a pull request against this upstream repository.


### Running Tests

```console
npm test 
```

This will run any tests in the __tests__ folder, as long as they end in test.js or .js. Place your test files here. 

Note: the tests run on Jest (not Mocha). 

Once you've run this command, you'll have to kill the process with ctrl + C. 

Otherwise, it will keep running and any changes you make a file will cause the tests to re-run.


### Running the App

REMEMBER TO NPM INSTALL FIRST TO MAKE SURE YOUR DEPENDENCIES ARE UP TO DATE.

To start, run 'npm start' in your preferred terminal.

Note: Any changes you make to the code while this action is running will cause the app to rebuild. This allows for modifying the code and being able to immediately see the changes in the browser. To kill this process, hit ctrl + C in the terminal.

