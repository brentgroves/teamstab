https://learn.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/create-personal-tab?pivots=node-java-script

pushd ~/src/teamstab

# Create a personal tab with Node.js
At the command prompt, install the Yeoman and gulp-cli packages by entering the following command after installing the Node.js:

Copy
npm install yo gulp-cli --global

At the command prompt, install Microsoft Teams app generator by entering the following command:

Copy
npm install generator-teams --global

# Generate your application with a personal tab
At the command prompt, create a new directory for your personal tab.
Enter the following command in your new directory to start the Microsoft Teams app generator:

yo teams

Provide your values to a series of questions prompted by Microsoft Teams app generator to update your manifest.json file.

What is your solution name?

The solution name is your project name. You can accept the suggested name by selecting Enter.

Where do you want to place the files?

You're currently in your project directory. Select Enter.

Title of your Microsoft Teams app project?

The title is your app package name and is used in the app manifest and description. Enter a title or select Enter to accept the default name.

Your (company) name? (max 32 characters)

Your company name will be used in the app manifest. Enter a company name or select Enter to accept the default name.

Which manifest version would you like to use?

Select the default schema.

Quick scaffolding? (Y/n)

The default is yes; enter n to enter your Microsoft Partner ID.

Enter your Microsoft Partner Id, if you have one? (Leave blank to skip)

This field isn't required and must be used only if you're already part of the Microsoft Partner Network.

What do you want to add to your project?

Select ( * ) A Tab.

The URL where you will host this solution?

By default, the generator suggests an Azure website URL. You're only testing your app locally, so a valid URL isn't necessary.

Would you like show a loading indicator when your app/tab loads?

Choose not to include a loading indicator when your app or tab loads. The default is no, enter n.

Would you like personal apps to be rendered without a tab header-bar?

Choose not to include personal apps to be rendered without a tab header-bar. Default is no, enter n.

Would you like to include Test framework and initial tests? (y/N)

Choose not to include a test framework for this project. The default is no, enter n.

Would you like to include ESLint support? (y/N)

Choose not to include ESLint support. The default is no, enter n.

Would you like to use Azure Applications Insights for telemetry? (y/N)

Choose not to include Azure Application Insights. The default is no; enter n.

Default Tab Name (max 16 characters)? teamstab

Name your tab. This tab name is used throughout your project as a file or URL path component.

What kind of Tab would you like to create?

Use the arrow keys to select Personal (static).

Do you require Microsoft Azure Active Directory (Azure AD) Single-Sign-On support for the tab?

Choose not to include Azure AD Single-Sign-On support for the tab. The default is yes, enter n.

Build your application
Enter the following command at the command prompt to transpile your solution into the ./dist folder:

gulp build
# run 
gulp serve

http://localhost:3007/
http://localhost:3007/teamstabTab/
http://localhost:3007/teamstabTab/personal.html
https://learn.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/create-personal-tab?pivots=node-java-script
#signin to dev account
brentgroves@1hkt5t.onmicrosoft.com
brentgroves@1hkt5t.onmicrosoft.com
SmVzdXNMaXZlczEh
Establish a secure tunnel to your tab
At the command prompt exit the localhost and enter the following command to establish a secure tunnel to your tab:

gulp ngrok-serve
After your tab is uploaded to Microsoft Teams through ngrok and successfully saved, you can view it in Teams until your tunnel session ends.

PUBLIC_HOSTNAME set to: 26fc-64-184-36-239.ngrok.io


After your tab is uploaded to Microsoft Teams through ngrok and successfully saved, you can view it in Teams until your tunnel session ends.

Upload your application to Teams

