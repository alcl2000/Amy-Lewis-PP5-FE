# Testing Document

## Page Validation 
## Manual Testing:

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
   <td>When users are logged in, they have a secondary home page link in order to demonstrate their status. 
   </td>
   <td>
   </td>
   <td>Pass
   </td>
  </tr>
</table>