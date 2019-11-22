#pre requisites:
Nodejs should be installed. 7 + versions is preferred.

#check 
    node -v // it should give the node version
       
    npm -v // it should give the npm version
    
   
#Installation
Grunt is used to trigger the tests. The below command installs grunt command line which must should be installed globally. To know more about grunt visit https://gruntjs.com
    
    npm install -g grunt-cli
    
Pre-setup commands are configured in package.json. The below commands will the required node_modules for the framework and will also download selenium standalone jar.
   
    npm run setup
    
    
#Running the tests

We use grunt commands to trigger the test. The tasks are registered in gruntfile.js. to run tests in local, perform
     
     grunt local
     
To execute the test in saucelabs, perform 
    
     grunt saucelabs
     
#Notes

grunt local will trigger 'confLocal.js', grunt saucelabs will trigger 'confSauceLabs.js'. please make sure to add tests before running th tests.


