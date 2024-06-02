# Email Editor Task with Cypress

## Overview

This repository contains a Cypress test suite for the Email Editor Task. The test suite automates the testing of an email editor web application using Cypress, ensuring its functionality meets the specified requirements.

## Requirements

- Node.js installed on your machine
- Access to the email editor web application

## Installation

1. **Clone this repository to your local machine:**

    ```bash
    git clone <repository-url>
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

### Opening Cypress Test Runner

To open the Cypress Test Runner, run:

```bash
npm run cy:open
```

### Running Tests in Headless Mode

To run tests in headless mode, use:

```bash
npm run cy:run
```

## Test Cases

The test suite includes the following test cases:

- Loading the website and verifying the correct title.
- Verifying the editor frame is loaded.
- Dragging a text block to the editor and verifying its presence.
- Changing text alignment to center and verifying the change.
- Capturing and verifying console output after exporting HTML.

## Custom Commands and Helpers

The test suite utilizes the following dependencies to enhance test readability and maintainability:

- **cypress-iframe**: Allows interacting with elements within iframes.
- **cypress-real-events**: Provides support for real mouse events in Cypress tests.



## CI/CD Pipeline

This project includes a CI/CD pipeline to automate testing and deployment processes. The pipeline is configured to run tests on every pull request made to the `main` branch. The pipeline named "run test" is utilized for this purpose. you can find the configuration for it in this file: .gihub/workflows/test.yml
