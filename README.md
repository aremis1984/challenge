# challenge

## About the project
The BE is done with node.js and express.
The FE is done in React, the styles are not imported css sheets, all are aplied to every component when it is neccessary using React Styled Components library.

## Folders structure
Inside the project there are the following folders:

* Client: Front-end code

  *Inside src folder:
    - Components: Reusable React components
    - Styles: Common styles (styled componets)
    - api: services to get the BE requests
    - Pages: different main views
    - unit: unit tests
    
  *Cypress: integration tests

* Server: BE code in node.js
  - controllers: Read CSV files and process data before send it to the FE
  - routers: configure requests paths
  - data: CSV files to be read in order to send the property data to the FE
  
  ## Before run the BE and FE servers
  1. Open two console terminals, in one of them, navigate to the server folder, in the oder to the client one.
  2. In both folders, run the command `npm install` to install the dependencies required by the app (once they finish, a folder called node_modules will appear in both)
  3. Start the BE server by the command `node server.js`
  4. Start the FE server by `npm start`
  
  ## API
  Despite of there are two CSV files, the FE is doing only one request, in order to search the elements by the user email.
  In the BE inside this request both files are read, the data is filtered and the common data between both files, joined in just one JSON array that will be sent to the FE.

  ## Running tests
  # Integration tests
  The tests are done with Cypress.
  In order to run the integration tests execute `npm run integration` in the console on the client folder, a browser window will be openned, the first time it'll take a while to start, `be sure that the server is running`.
  You will se a lists of tests, on the right side you will see "Run X integration specs", click here in order to run everything.
  Test can also be run individually by clicking on it inside the list 

  # Unit tests
  In order to execute unit tests please use this command `npm test` in the console, inside client folder.
  If this message is displayed "No tests found related to files changed since last commit. Press `a` to run all tests, or run Jest with `--watchAll`.", please press `a` in oder to run all the unit test or better introduce directly this command `npm test  -- --watchAll=false`.

  # How to display order data
  Please in order to see the orders list, in the email form which is displayed in / enter julian@parcellab.com, then click on the item cards to see the details. 
  To display the error page (orders not found) enter other email address, as they don't have any order in the data .csv files will redirect to the error page.

