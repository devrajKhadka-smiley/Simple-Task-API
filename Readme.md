## Task API
The Simple Task API is a RESTful service that allows users to manage tasks. It provides endpoints to create, retrieve, update, and delete tasks, with additional features such as task status updates and task filtering.

### How To Setup the Program
1. Install the Modules that require to run the project
    
        npm install express, cors, nodemon

2. Then head over to the directory "__Task_API/src__". Then

        node --watch node.app

### Test API ENDPOINTS
* Get all notes: `api/tasks`
* Get a Note By ID: `api/tasks/:id`
* Add Note: `api/tasks`
* Update a Note: `api/tasks/:id`
* Delete a Note: `api/tasks/:id`

### Postman URL and Body Request

        http://localhost:3000/api/tasks