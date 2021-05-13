# challenge

## About the project
The BE is done with node.js and express.
The FE is done in React, the styles are not imported css sheets, all are aplied to every component when it is neccessary using React Styled Components library.

## Folders structure
Inside the project there are the following folders:

* Client: Front-end code
  - Components: Reusable React components
  - Styles: Common styles (styled componets)
  - api: services to get the BE requests
  - Pages: different main views
* Server: BE code in node.js
  - controllers: Read CSV files and process data before send it to the FE
  - routers: configure requests paths
  - data: CSV files to be read in order to send the property data to the FE
  
  ## Before run the BE and FE servers
  1. Open two console terminals, in one of them, navigate to the server folder, in the oder to the client one.
  2. In both run the command "npm install" to install the necessary dependencies required by the app (once they finish, a folder node_modules shoud appear in both)
  3. Start the BE server by the command "node server.js"
  4. Start the FE server by "npm start"
  
  IMPORTANT: the FE server has the port 8000 defined in the file package.json inside the client folder, but that command works only in Mac.
  If your are running the app on windows, replace what is in "start" with "set PORT=8000 && react-scripts start"
  * Another option is to start the BE server first, then the FE, it will show a message telling that the port 3000 is already in use, asking you to choose another port, choose yes 'Y'
  
  ## API
  Despite of there are two CSV files, the FE is doing only one request, in order to search the elements by the user email.
  In the BE inside this request both files are read, the data is filtered and the common data between both files, joined in just one JSON array that will be sent to the FE.
