<img src="https://github.com/jakub-michalczyk/Billora/blob/master/public/images/logo.svg" width="200"/>

**Billora** is an application that features a dynamic form, allowing users to freely add and remove rows. It enables the creation of new invoices, which can later be viewed on the /summary page, where the total value of all invoices is also calculated and displayed.

## Features

- **New**: 
  - Dynamic form with the ability to add and remove rows (invoice items)
  - Full form validation to ensure all required fields are correctly filled
  - Error handling for user input and edge cases

- **Summary**:
  - Data retrieval via router state passed from the /new page
  - HTTP request to load invoice data from a local JSON file
  - Summary view displaying all invoice entries
  - Automatic total value calculation based on the listed invoices
 
<br />
<img src="https://github.com/jakub-michalczyk/Billora/blob/master/public/images/new_invoice.png" width="600"/>

## Technologies Used

- **Angular 19**: For the front-end framework.
- **Tailwind CSS**: For styling.
- **RxJS**: For reactive programming and handling asynchronous data flows.

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js**: Recommended version 16 or higher.
- **Angular CLI**: If not installed, you can install it globally using the command:

```bash
npm install -g @angular/cli
```

## Setup
- **Clone repository:**
```bash
git clone https://github.com/jakub-michalczyk/Billora
```

- **Navigate to the project folder:**
```bash
cd billora
```

- **Install the dependencies:**
```bash
npm install
```

- **Run the development server:**
```bash
ng serve
```

The app will be available at [http://localhost:4200](http://localhost:4200).

## Build for Production ##
To build the project for production, use the following command:
```bash
ng build --configuration=production
```
The build artifacts will be stored in the dist/ directory.

## License ##
This project is licensed under the MIT License - see the LICENSE file for details.
