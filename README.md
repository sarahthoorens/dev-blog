# Web Dev Blog

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

 **Visit the [Deployed Site here.]( https://git.heroku.com/sarahthoorensdevblog.git)**

  **Deployment Date:**  11/15/22 <br>
 
  **Technologies used:**  Node.js, MySql2, Handlebars, Sequelize, DotEnv, JavaScript, Express.js, Bcrypt, Express-Session, nodemon, Heroku, Bootstrap<br>

  **Project goal:** Create a CMS style blog for web developers that allows a user to signup and log in, allows posting, editing and deleting of posts, as well as commenting on posts. <br>


  ## Table of Contents
  1. [Project Description](#Description)
  2. [Usage](#Usage)
  3. [Challenges Encounted](#Challenges)
  4. [Tests](#Tests)
  5. [License](#License)
  <br>
  
  ## Description
Using Handlebars for Views, Sequelize for MySql2 Models and Express.js for Controllers, I created a blog site where users can sign up and log in, view, add, edit and delete posts, and can navigate to other posts to post comments. Although fully functioning, the blog is extremely simplistic in design. 

The application’s folder structure follows the Model-View-Controller paradigm. It uses

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Usage 
Users are greeted with a landing page of all blog posts,which indicate name and date of post. Users can sign up, then log in to gain access to detailed posts where they may add comments and create blog entries of their own. 

## Deployed Screenshots
![landing-homepage-view](/assets/homepage.png)
_<p align="center">landing page view </p>_
_<p align="center">(user may click on linked title to view entry and add comments if logged in or will be prompted to log in upon click.)</p>_
</br>

![view-entry-and-comments](/assets/view%20one%20entry.png)
_<p align="center">entry detailed view with comments</p>_
</br>

![dashboard-view-all](/assets/dashboard-all.png)
_<p align="center">all user posts in dashboard</p>_
<br>

![edit-from-dashboard](/assets/dashboard-edit.png)
_<p align="center">edit post view</p>_
<br>

  ![add-blog-entry-view](/assets/add-entry.png)
  _<p align="center">add new blog post view</p>_

  ## Challenges
 This was one of the most challenging projects for me as a new developer. Handling so many routes, views and models at once proved to be a rather steep learning curve. I originally approached the project with the idea of creating each componenent of the MVC paradigm separately and linking later. This was not a winning approach. I quickly realized that the better approach was to complete an entire view from front to back end and then iterate until all views were complete. 

 I'm quite satisfied with the end product, which is something I never would have dreamed of creating when I was an avid blogger earlier in life. I would like to return to this app to make it more intuitive for the user and give it a sharper look. 

  ## Tests

  No tests were written for this program.

  ## License

  Click the badge to learn more about the license used for this project.
  <br>[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Questions?

  Find me on GitHub at: https://github.com/sarahthoorens

  You can also send any questions about this project to: s.thoorens@gmail.com

