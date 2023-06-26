# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: you will need to generate a migration to add the foreign key 

Researched answer: To fix the mistake and add the foreign key in the association between the Cohort and Student models in Rails, you can generate and run a migration to add the foreign key column. The foreign key column name is cohort_id, which is added to the students table.

2. Which RESTful routes must always be passed params? Why?

Your answer:create route, update route, and delete route

Researched answer: create, update, and delete routes usually require parameters to be passed to perform the corresponding operations accurately. These parameters provide the necessary data or identification required to create, update, or delete the resources in a RESTful system.

3. Name three rails generator commands. What is created by each?

Your answer: 
generate model- creates a ruby class, database table
generate controller- creates a ruby class that handles actions 
generate migration- create and modify database tables


Researched answer:
Model- This command generates a model file in the app/models directory, along with a migration file in the db/migrate directory. It creates a Ruby class representing a database table and defines the attributes (columns) of that table.

Controller- This command generates a controller file in the app/controllers directory. It creates a Ruby class that handles the logic and actions related to a specific resource or functionality in the application. The specified actions can be methods within the controller, such as index, show, create, etc., that handle different HTTP requests.

Migration- This command generates a migration file in the db/migrate directory. It allows you to create and modify database tables and their columns. You can specify the changes you want to make to the database schema, such as adding or removing columns, renaming tables, or creating indexes.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
index- retrieves and displays a list of all students

action: "POST" location: /students
create- creates a new student

action: "GET" location: /students/new
new- creates a new student

action: "GET" location: /students/2
show- displays specific student with id: 2

action: "GET" location: /students/2/edit
edit- edits the details of sutudent id: 2

action: "PATCH" location: /students/2
update- updates details of student id: 2 

action: "DELETE" location: /students/2
delete- deletes student with id: 2


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

1-As a user, I want to be able to create a new task with a title and description.
2-As a user, I want to be able to mark a task as complete incomplete or in progress.
3-As a user, I want to be able to set a due date for a task.
4-As a user, I want to be able to prioritize tasks by assigning them a priority level.
5-As a user, I want to be able to categorize tasks into different lists or categories.
6-As a user, I want to be able to view all my tasks in a single list.
7-As a user, I want to be able to filter tasks by completion status, due date, priority, or category.
8-As a user, I want to be able to edit the details of a task.
9-As a user, I want to be able to delete a task that I no longer need.
10-As a user, I want to be able to receive reminders or notifications for upcoming or overdue tasks.