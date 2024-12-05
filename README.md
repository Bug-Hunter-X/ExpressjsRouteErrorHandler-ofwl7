# Unhandled Error in Express.js Route Handler

This repository demonstrates a common error in Express.js route handlers: the lack of error handling for invalid input.  The `bug.js` file showcases a route that's vulnerable to issues when an invalid `userId` is passed.  The `bugSolution.js` file provides a corrected version with appropriate error handling.

**Problem:**

The original code lacks checks to ensure the `userId` is valid before attempting to use it.  This could lead to errors if the `userId` is not a number, is missing, or otherwise malformed.  This could cause the application to crash or return unexpected results.

**Solution:**

The solution includes error handling to check the validity of `userId` before proceeding.  It uses `isNaN` to verify that `userId` is a valid number and returns an appropriate error response (HTTP 400 Bad Request) if it's not.