## Design

The wireframes for this project can be found here: [the figma file for this project](https://www.figma.com/file/Xy7IknEYiA9DK80qsBmh1f/Task-Manager?type=design&node-id=0-1&mode=design&t=m6P73NpDVyaUjUIy-0)

## Features

### Nav bar - Logged out 
![]('../../read_me_assets/Navbar-logged-out.jpg)
- The navbar, when logged out displays the logo and title, which both work as links to take the user back to the home page
- The Navbar also features the log in and sign up buttons - which direct users to either log in or sign up, depending on theiraccount status

### Nav bar - logged in 
![]('../../read_me_assets/Navbar-logged-in.jpg)
- The logged in navbar also has the logos and title, along with another logo to show users that they are logged in even when the navbar is not fully extended
- Replacing the logged in icon is the user's profile picture which also demonstrates that they are logged in
- The logged out logo replaces the signup icon and allows users to log out when needed

### Nav bar - Collapsed
![]('../../read_me_assets/nav-collapse.jpg')
- When the navbar is collapsed, the icons move underneath the main bar, and the bar may be collapsed further to keep the screen clear

### Sign up page 
![]('../../read_me_assets/sign-up-page.jpg')
- The sign up page features fields for the user to create an account through
- If the data is enetered incorrectly, the are given warnings and asked to resubmit

### Log In page
![]('../../read_me_assets/login-page.jpg')
- The log in page allows users to input valid log in data to login and access their account 
- Similar to the sign up page, if the data is incorrect and the server returns a 400 error, the user will recieve an error and be asked to resubmit

## Features that will not be implemented 
- While the backend feature has the ability to support adding users to projects, due to time constraints, the front end app will not have this feature
- The profile model was built out into a full detail view, however 
- ![]('../../read_me_assets/profile-detail.jpg')