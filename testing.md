# Testing Document

## Page Validation: 

![]('../../read_me_assets/app-validation.png')

### Components

![]('../../read_me_assets/avatar-validation.png')
![]('../../read_me_assets/navbar-validation.png')
![]('../../read_me_assets/progress-icon-validation.png')
![]('../../read_me_assets/sidebar-validation.png')

### Pages

![]('../../read_me_assets/profile-detail-validation.png')
![]('../../read_me_assets/project-edit-validation.png')
![]('../../read_me_assets/project-create-validation.png')
![]('../../read_me_assets/project-detail-validation.png')
![]('../../read_me_assets/task-create-validation.png')
![]('../../read_me_assets/task-edit-validation.png')
![]('../../read_me_assets/task-detail-validation.png')
![]('../../read_me_assets/sign-in-form-validation.png')
![]('read_me_assets/sign-up-form-validation.png')
![]('read_me_assets/sign-up-form-validation.png')
![]('read_me_assets/error-validation.png')

### Manual Testing:


#### Sign-Up Page : 


<table>
  <tr>
   <td>Feature
   </td>
   <td>Expected result
   </td>
   <td>Result 
   </td>
   <td>Pass/fail
   </td>
  </tr>
  <tr>
   <td>Error mapping
   </td>
   <td>When Incorrect or null data is entered the form returns errors for each field that is not correctly filled in.
   </td>
   <td>Incorrectly filled in fields return errors
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Submit form button
   </td>
   <td>When correct data is entered, the user is created and the user is redirected to the login page 
   </td>
   <td>Correctly entered signup data creates a user and redirects them to the login page
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Log in link
   </td>
   <td>When a user clicks on the link at the bottom of the sign-in page, they are redirected to the login page
   </td>
   <td>When the link is clicked, the user is redirected to the login page
   </td>
   <td>Pass
   </td>
  </tr>
</table>



#### Login Page: 


<table>
  <tr>
   <td>Feature
   </td>
   <td>Expected result
   </td>
   <td>Result 
   </td>
   <td>Pass/fail
   </td>
  </tr>
  <tr>
   <td>Error mapping
   </td>
   <td>When Incorrect or null data is entered the form returns errors for each field that is not correctly filled in.
   </td>
   <td>Incorrectly filled in fields return errors
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Submit form button
   </td>
   <td>When correct data is entered, the user is logged in and then redirected to the home page 
   </td>
   <td>Correctly entered and submitted login data logs in the user and redirects them to the home page
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Sign-up link
   </td>
   <td>When a user clicks on the link at the bottom of the login page, they are redirected to the sign-up page
   </td>
   <td>When the link is clicked, the user is redirected to the sign-up page
   </td>
   <td>Pass
   </td>
  </tr>
</table>



#### Navbar component:


<table>
  <tr>
   <td>Feature
   </td>
   <td>Expected result
   </td>
   <td>Result 
   </td>
   <td>Pass/fail
   </td>
  </tr>
  <tr>
   <td>Navbar expand
   </td>
   <td>When the app is in tablet or mobile mode, the navbar expands when the hamburger symbol is click, and retracts when clicked again
   </td>
   <td>The navbar expands and contracts when the appropriate actions are taken
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Icon/Home page link 
   </td>
   <td>When the logo is clicked, users are taken to the index page, wherever they started from
   </td>
   <td>When clicked, the users are taken to the home page
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td colspan="4" >Logged out users
   </td>
  </tr>
  <tr>
   <td>Sign up link
   </td>
   <td>When the users click the link, they are directed to the sign-up page 
   </td>
   <td>On click, the user is directed to the sign-up page
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Sign in link
   </td>
   <td>When the user clicks on the sign in link, they are taken to the sign in page
   </td>
   <td>On click, the user is directed to the sign-in page
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td colspan="4" >Logged in users
   </td>
  </tr>
  <tr>
   <td>Avatar
   </td>
   <td>When a user logs in, their profile picture is displayed on the navbar to let them know they’re logged in 
   </td>
   <td>When logged in, the user’s profile picture displays on the navbar
   </td>
   <td>pass
   </td>
  </tr>
  <tr>
   <td>Profile detail link
   </td>
   <td>When the user’s avatar is clicked in the navbar, they are taken to the user’s profile detail view
   </td>
   <td>When the avatar is clicked, the user is taken to the correct profile detail page
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Sign out link
   </td>
   <td>When the user clicks on the sign out link, they are logged out and redirected to the home page, as a logged out user
   </td>
   <td>On click, the user is logged out and sent back to the home page as a logged out user
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Home page link (secondary)
   </td>
   <td>When users are logged in, they have a secondary home page link in order to demonstrate their status. On click, this takes them to the home page
   </td>
   <td>When a user logs in, the logo displays correctly. When it is clicked, the user is redirected to the correct page.
   </td>
   <td>Pass
   </td>
  </tr>
</table>



#### Index Page


<table>
  <tr>
   <td>Feature
   </td>
   <td>Expected result
   </td>
   <td>Result 
   </td>
   <td>Pass/fail
   </td>
  </tr>
  <tr>
   <td colspan="4" >Logged out Users
   </td>
  </tr>
  <tr>
   <td>Logged out user content, displaying the logo and hero text for the website
   </td>
   <td>Upon page load, the correct content is displayed to logged-out users
   </td>
   <td>Logged out users are shown the correct icons when the website loads
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>The sign up link at the bottom of the page
   </td>
   <td>The sign up button at the bottom of the page takes logged out users to the sign-up page
   </td>
   <td>When clicked, logged out users are taken to the sign up page
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td colspan="4" >Logged In Users
   </td>
  </tr>
  <tr>
   <td>Sidebar project display - No projects found
   </td>
   <td>When no projects are returned from the api, a simple statement saying ‘no projects found’ is shown to the user
   </td>
   <td>When no projects are returned, the statement displays correctly
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Sidebar project display - Projects found
   </td>
   <td>When the page loads, a list of projects are displayed for the user to click on an go the detail page  
   </td>
   <td>When the page and component loads, the user is presented with a list of their projects, which can be used to go to the detail page of the project
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Sidebar Projects - Project detail Link
   </td>
   <td>When a project card is clicked on, it takes the user to the correct project detail page
   </td>
   <td>When clicked, the user is taken to the corresponding project detail page 
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Add project button - Sidebar
   </td>
   <td>When a logged in user clicks the ‘Add project’ button, they are taken to the add project page
   </td>
   <td>When clicked, the user is redirected to the correct page
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Add project button - bottom of page 
   </td>
   <td>When a logged in user clicks the ‘Add Project’ button they are taken to the add project page
   </td>
   <td>When clicked, the user is redirected to the correct page
   </td>
   <td>Pass
   </td>
  </tr>
</table>



#### Create New Project Page


<table>
  <tr>
   <td>Feature
   </td>
   <td>Expected result
   </td>
   <td>Result 
   </td>
   <td>Pass/fail
   </td>
  </tr>
  <tr>
   <td colspan="4" >Logged out Users
   </td>
  </tr>
  <tr>
   <td>The logged out content 
   </td>
   <td>When a logged out user attempts to load the page, the content loading in tells them that only logged in users may create projects
   </td>
   <td>When a logged out user tries to access the page, the are not shown the form, instead the logged out user content
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>The ‘Sign In’ button
   </td>
   <td>Logged out users are presented with a link to the sign in page, when clicked they are redirected to the sign in page
   </td>
   <td>When clicked, the logged out user is redirected to the correct page 
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>The ‘Sign Up’ button
   </td>
   <td>Logged out users are presented with a link to the sign up page, when clicked they are redirected to the sign in page
   </td>
   <td>When clicked, the logged out user is redirected to the correct page
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td colspan="4" >Logged In Users
   </td>
  </tr>
  <tr>
   <td>Form validation 
   </td>
   <td>If a user attempts to submit a form with no data, they are returned a warning at the bottom of the page and asked to resubmit correctly
   </td>
   <td>When an empty form is submitted, a warning pops up at the bottom asking them to resubmit correctly
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Form submission 
   </td>
   <td>When correct data is inputted, the form submits and the user is then redirected to the project detail page for their new project
   </td>
   <td>On a correct submission, the project detail page is created and they are redirected there
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Cancel button
   </td>
   <td>When the user clicks cancel, they are returned back to the previous page
   </td>
   <td>On click, they are taken back to the page which they came from 
   </td>
   <td>Pass
   </td>
  </tr>
</table>



#### Project Detail Page


<table>
  <tr>
   <td>Feature
   </td>
   <td>Expected result
   </td>
   <td>Result 
   </td>
   <td>Pass/fail
   </td>
  </tr>
  <tr>
   <td>Correct page data 
   </td>
   <td>When the page loads, the correct data for the correct project loads in
   </td>
   <td>When loaded, the correct project data displays
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Task List - Tasks found
   </td>
   <td>When the page loads, if a list of tasks is returned from the API, the tasks are displayed in cards
   </td>
   <td>When the page loads, if a list of tasks is returned from the API, the tasks are listed on the page
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Task List - Tasks not found 
   </td>
   <td>If no tasks are returned from the API, the page displays a ‘Tasks not found’ message
   </td>
   <td>When no tasks are returned from the API, the message ‘Tasks not found’ is displayed
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td colspan="4" >Logged In User (Owner of Project)
   </td>
  </tr>
  <tr>
   <td>DropDown 
   </td>
   <td>When the logged in user is the owner of the page and accessing the page, the dropdown is displayed in the corner
   </td>
   <td>When the owner of the project accesses the project detail page, the dropdown is displayed in the corner
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Edit Project Button
   </td>
   <td>When the owner clicks the dropdown, they are presented with the option to ‘Edit Project’, if they click that they are taken to an edit project form 
   </td>
   <td>When the owner of a project clicks the corner dropdown, they are given the option to edit their project, if clicked they are taken to the edit project form
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Delete Project Button
   </td>
   <td>When the owner clicks the dropdown, they are presented with the option to ‘Delete Project’, if they click that they are given an alert that they cannot undo their delete action 
   </td>
   <td>When the owner clicks the dropdown they are given the option to delete their project, and presented with the pop-up to delete their project
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Delete Project popup
   </td>
   <td>When the user clicks the delete project button, a pop-up appears to ask the user for confirmation, when they confirm that they would like to delete, the project is deleted
   </td>
   <td>When the user selects the button to delete their project, the site prompts them to confirm, and when they do the project is deleted
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Add Task Button
   </td>
   <td>If the user is the owner of the project, the ‘Add Task’ button is present, when clicked they are taken to the add task form
   </td>
   <td>When the logged in user is the owner of the project, the ‘Add Task’ button is displayed and the user is taken to the correct form when they click it
   </td>
   <td>Pass
   </td>
  </tr>
</table>



#### Project Edit Form


<table>
  <tr>
   <td>Feature
   </td>
   <td>Expected result
   </td>
   <td>Result 
   </td>
   <td>Pass/fail
   </td>
  </tr>
  <tr>
   <td colspan="4" >Logged out user -Logged in user not owner of the project
   </td>
  </tr>
  <tr>
   <td>Rendered content
   </td>
   <td>If the user is not logged in, or not the owner of the project, the form does not render
   </td>
   <td>If the owner of the project is not logged in, the form does not render
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Return home link
   </td>
   <td>When the user clicks the return home page, they are taken back to the home page
   </td>
   <td>When the user clicks the link, they are redirected home
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Log-In link
   </td>
   <td>When the user clicks the link they are redirected to the login page
   </td>
   <td>When clicks, the user is taken to the login page
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td colspan="4" >Logged in user, project owner
   </td>
  </tr>
  <tr>
   <td>Form submission, incorrect data
   </td>
   <td>When a user attempts to submit the form without filling in all the fields correctly, they are prompted to re-enter the data
   </td>
   <td>When a user enters incorrect data they are prompted to re-enter the data
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Form submission correct data
   </td>
   <td>When the user submits the form correctly, they are taken to the project’s detail page
   </td>
   <td>When the user submits the form correctly, they are taken to the updated detail page
   </td>
   <td>Pass
   </td>
  </tr>
</table>



#### Task Detail Page


<table>
  <tr>
   <td>Feature
   </td>
   <td>Expected result
   </td>
   <td>Result 
   </td>
   <td>Pass/fail
   </td>
  </tr>
  <tr>
   <td>Data retrieval
   </td>
   <td>When the page loads, the correct data is loaded and displayed from the api
   </td>
   <td>On page load, the correct data is retrieved and displayed
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td colspan="4" >Logged in user - Owner of task
   </td>
  </tr>
  <tr>
   <td>Task edit button
   </td>
   <td>When the owner of the page clicks on the ‘Edit page’ link, they are taken to the edit task form with that tasks’s data loaded
   </td>
   <td>When the owner of a task clicks the ‘Edit page’ link, they are taken to the edit page
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Task delete button
   </td>
   <td>When the owner of the tasks clicks the delete link a pop-up appears asking them to confirm to delete
   </td>
   <td>When the owner of the task clicks the delete link the pop-up asks them to confirm deletion
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Task delete pop-up
   </td>
   <td>When the task owner clicks the delete link, they are shown a pop-up asking to confirm deletion, when they click confirm, the task is deleted and they are redirected to the project the task belonged to
   </td>
   <td>When the task owner clicks the delete task link they are presented with the popup, when they click to confirm the task is deleted and they are redirected 
   </td>
   <td>Pass
   </td>
  </tr>
</table>



#### Task Create Form


<table>
  <tr>
   <td>Feature
   </td>
   <td>Expected result
   </td>
   <td>Result 
   </td>
   <td>Pass/fail
   </td>
  </tr>
  <tr>
   <td colspan="4" >Logged out users
   </td>
  </tr>
  <tr>
   <td>Logged out content
   </td>
   <td>When the page loads, the content explaining the user must log in is displayed, along with the buttons
   </td>
   <td>Content renders correctly when page is loaded
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Signin button
   </td>
   <td>Logged out users are presented with a link to the sign in page, when clicked they are redirected to the sign in page
   </td>
   <td>When the user clicks the signin link they are redirected to the signin page 
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>SignUp button
   </td>
   <td>Logged out users are presented with a link to the sign in page, when clicked they are redirected to the sign in page
   </td>
   <td>When the user clicks the signup link they are redirected to the signup page 
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td colspan="4" >Logged in user - Not allowed to Create Task
   </td>
  </tr>
  <tr>
   <td>Logged in User, not Project owner content
   </td>
   <td>When the page loads, the content explaining the user cannot create a task in this project is displayed, with the return button
   </td>
   <td>When an unauthorised user attempts to create a task in a project they don’t own, the correct page loads
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Return button
   </td>
   <td>When the return button is clicked, they are taken back to the page they came from 
   </td>
   <td>When clicked, the return button takes them back to the page they were previously on
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td colspan="4" >Logged in User - Allowed to Create Task
   </td>
  </tr>
  <tr>
   <td>Form Submission, form not filled in correctly
   </td>
   <td>If a user attempts to create a task without filling in all of the marked fields, the api sends a 400 response, and the user is prompted to fill in all the marked fields
   </td>
   <td>If a user attempts to create a task without filling in all the marked fields, they are prompted to try again
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Form submission, correct submission
   </td>
   <td>When the form is filled in correctly, the form submits and the user is redirected to their newly created task
   </td>
   <td>When the form is filled in correctly, the user is redirected to their new task after submission
   </td>
   <td>Pass
   </td>
  </tr>
</table>



#### Task Edit form


<table>
  <tr>
   <td>Feature
   </td>
   <td>Expected result
   </td>
   <td>Result 
   </td>
   <td>Pass/fail
   </td>
  </tr>
  <tr>
   <td colspan="4" >Logged out user -Logged in user not owner of the task
   </td>
  </tr>
  <tr>
   <td>Rendered content
   </td>
   <td>If the user is not logged in, or not the owner of the task, the form does not render
   </td>
   <td>If the owner of the project is not logged in, the form does not render
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Return home link
   </td>
   <td>When the user clicks the return home page, they are taken back to the home page
   </td>
   <td>When the user clicks the link, they are redirected home
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Log-In link
   </td>
   <td>When the user clicks the link they are redirected to the login page
   </td>
   <td>When clicks, the user is taken to the login page
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td colspan="4" >Logged in user, task owner
   </td>
  </tr>
  <tr>
   <td>Form submission, incorrect data
   </td>
   <td>When a user attempts to submit the form without filling in all the fields correctly, they are prompted to re-enter the data
   </td>
   <td>When a user enters incorrect data they are prompted to re-enter the data
   </td>
   <td>Pass
   </td>
  </tr>
  <tr>
   <td>Form submission correct data
   </td>
   <td>When the user submits the form correctly, they are taken to the task’s detail page
   </td>
   <td>When the user submits the form correctly, they are taken to the updated detail page
   </td>
   <td>Pass
   </td>
  </tr>
</table>