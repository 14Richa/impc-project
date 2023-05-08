## Heatmap App

This app displays data in a heatmap format using the Nivo library. The heatmap displays genes on the Y axis and top-level phenotype terms on the X axis. The data can be filtered by a list of genes or top-level phenotype terms.


## Requirements

-   Node.js v12.0 or higher
-   NPM v6.0 or higher

##  Installation

1.  Clone the repository:  `git clone git@github.com:14Richa/impc-project.git`
2.  Install dependencies:  ` npm install`

## Usage

1.  Start the development server:  `npm start`
2.  Open the app in your browser:  `http://localhost:3000`
3.  Use the filters to display data for specific genes or top-level phenotype terms.
4.  Use the slider to adjust the percentage of genes displayed based on their  highest count  of phenotype associations.

## Deployment 

This app has been deployed to Netlify and can be accessed at: https://14richa-impc.netlify.app/#/admin/default.

## Technologies Used

-   React:  [https://reactjs.org/](https://reactjs.org/)
-   Material UI:  [https://material-ui.com/](https://material-ui.com/)
-   Chakra UI:  [https://chakra-ui.com/](https://chakra-ui.com/)
-   Nivo:  [https://nivo.rocks/](https://nivo.rocks/)

## Conceptual and Technical Decisions

For this project, I decided to use React and TypeScript to build the web application. React's component-based architecture and declarative programming model allowed me to create reusable UI components and manage the state of my application in an efficient and predictable way. TypeScript's static typing also helped me catch errors early in the development process and improve the overall reliability of my code.
For styling, I chose to use Material UI and Chakra UI, two popular and well-documented UI component libraries for React. Both libraries allowed me to create a consistent and visually appealing UI for my application with minimal effort.
Overall, these decisions allowed me to build a robust and user-friendly web application that can be easily maintained and extended over time.

