
# TO-DO

This React project creates a simple to-do list application. Users can add tasks, edit existing tasks, and delete tasks from the list. The tasks are stored locally using the browser's localStorage API and persist even after the user refreshes the page or closes the browser.
Here's a breakdown of its functionalities:

* Users can input tasks into an input field and add them to the list by clicking the "Add Task" button.

* Existing tasks are displayed as a list, each with an "Edit" and a "Delete" button.
* Clicking the "Edit" button allows users to edit the content of a task inline within the input field. After editing, users can click "Update Task" to save the changes.
* Clicking the "Delete" button removes the corresponding task from the list.
The application is suitable for individuals who need a simple to-do list manager for personal use, such as keeping track of tasks, goals, or reminders.

## Features

- Task Management
- LocalStorage Integration
- Add Task
- Edit Task
- Delete Task
- Responsive Design
- User-Friendly Interface


## Installation

 Install To-Do 

1. Clone this repository to your local machine:

```bash
  git clone https://github.com/Muhammedrazikkm/TO-DO.git

```
2. Navigate to the project directory:
 ```bash
  cd todo
```
2. Start the development server:
 ```bash
  npm start
```
4. Open your browser and navigate to `http://localhost:3000` to view the application.
## Usage/Examples

```javascript
import Add from './components/add'

function App() {
  return <Add />
}
```


## Acknowledgements

 

- React Community: https://react.dev/community

- Open Source Libraries: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

- Online Tutorials : https://youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&feature=shared , https://youtu.be/CgkZ7MvWUAA?feature=shared



Web Development Community: https://stackoverflow.com

Thank you all for your support and contributions.

## Appendix

- Code Structure

    The project follows a simple and organized structure to maintain readability and ease of use. Below is a high-level overview of the code structure.

project-root/  
├── src/  
│   ├── components/  
│   │   ├── Add.js          // Main component for the to-do list  
│   ├── styles/  
│   │   ├── App.css         // CSS file for styling the application    
│   ├── App.js            // Main entry point of the React application  
│   ├── index.js          // ReactDOM rendering and entry point  
│   ├── index.css         // Global styles  
├── public/  
│   ├── index.html        // HTML template  
├── package.json          // Project dependencies and scripts  
├── README.md             // Project documentation




State Management:

- taskadd: Stores the current task input.
- tasks: Stores the list of tasks.
- isEditing: Indicates whether a task is being edited.
- currentTaskIndex: Tracks the index of the task being edited.
Lifecycle Methods:

- useEffect for loading tasks from localStorage on component mount.
- useEffect for saving tasks to localStorage whenever the tasks state changes.
Event Handlers:

- formSubmit: Handles form submission to add or update tasks.
- inputdata: Updates taskadd state as the user types in the input field.
- deleteTask: Removes a task from the list.
- editTask: Sets up the component to edit a specific task.
Rendering:

Renders an input field for task entry, a button to add or update tasks, and a list of tasks with edit and delete options.
## Contributing

Contributions are always welcome!

- Create a new branch for your feature: ` git checkout -b feature/new-feature`.

- Commit your changes:                                    `git commit -m`  'Add new feature'.

- Push to the branch: `git push origin feature/new-feature`.

- Open a pull request.


## Screenshots

![TO-DO ](https://github.com/Muhammedrazikkm/TO-DO/blob/master/pic1.png)

![TASK ADDED ](https://github.com/Muhammedrazikkm/TO-DO/blob/master/PIC2.png)

![TASK UPDATED ](https://github.com/Muhammedrazikkm/TO-DO/blob/master/PIC3.png)

![TASK DELETED ](https://github.com/Muhammedrazikkm/TO-DO/blob/master/PIC4.png)

## Color Reference

| Element             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Form Container and Task Items | ![#fff](https://via.placeholder.com/10/0a192f?text=+) #fff |
| Box Shadow | ![rgba(0, 0, 0, 0.1)](https://via.placeholder.com/10/f8f8f8?text=+)rgba(0, 0, 0, 0.1) |
| Input and Task Items Border | ![#ddd](https://via.placeholder.com/10/00b48a?text=+) #ddd |
| Add/Update Task Button | ![#007bff](https://via.placeholder.com/10/00b48a?text=+) #007bff |
| Edit Button	 | ![#ffc107](https://via.placeholder.com/10/0a192f?text=+) #ffc107 |
| Delete Button	 | ![#dc3545](https://via.placeholder.com/10/0a192f?text=+) #dc3545 |



## Tech Stack

**Client:** React, useState, useEffect,localStorage

**Server:** Node


## 🛠 Skills
Javascript,HTML,CSS,SQL,MongoDB,Python,Django,Angular,React


## Authors

- [@Muhammed Razik](https://www.github.com/Muhammedrazikkm)


## Feedback

If you have any feedback, please reach out to us at muhdrazikkm@gmail.com


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://muhammedrazikportfolio.netlify.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/muhammed-razik-b5b266245)
[![Whatsapp](https://img.shields.io/badge/Whatsapp-1DA1F2?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.link/dgng9j)


## Support

For support,muhdrazikkm@gmail.com 

