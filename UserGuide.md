# User Guide

## Feature 1: Emoji Reactions Feature

### Overview

The Emoji Reactions feature allows users to react to posts with a selection of emojis. Users can add, remove, and view reactions in real time, enhancing engagement on the platform.

This guide covers how to use the feature, how to test it, and where to find the automated tests.

---


## User Testing Instructions

To ensure the feature functions as expected, follow these testing steps:

1. **Test adding reactions**  
   - React to a post and confirm your reaction appears immediately.
   - Ensure your reaction is counted correctly.

2. **Test removing reactions**  
   - Remove your reaction and verify that it disappears.

3. **Test multiple users reacting**  
   - Use multiple accounts to react to the same post.
   - Confirm reactions from different users are displayed correctly.

4. **Test reaction updates**  
   - Open the same post in multiple browser windows.
   - Add or remove reactions in one window and confirm that the update is reflected in the other window in real time.

5. **Test invalid inputs**  
   - Try adding an invalid emoji (e.g., plain text) and verify the system handles the error correctly.
   - Attempt to react to a non-existent post and confirm an error message appears.

6. **Test user permissions**  
   - Ensure that only logged-in users can react to posts.
   - Verify that users can only remove their own reactions.

---

## Automated Tests

The following test cases ensure that the Emoji Reactions feature meets the acceptance criteria:

### **Backend Tests**
- **Adding reactions**: Ensures that users can successfully add emoji reactions to posts.
- **Removing reactions**: Confirms that users can remove their reactions.
- **Viewing reactions**: Verifies that users can see all reactions and the correct count.
- **Handling errors**: Ensures invalid inputs and non-existent posts return appropriate errors.
- **Real-time updates**: Tests `Socket.IO` events for instant UI updates.

### **Frontend Tests**
- **UI interaction**: Ensures reaction buttons and menus function correctly.
- **Real-time updates**: Verifies that reactions update instantly when added or removed.
- **Tooltip functionality**: Confirms that hovering over reactions shows who reacted.

### **HTTP API Tests**
- **Adding reactions via API**: Ensures reactions can be added using an HTTP request.
- **Removing reactions via API**: Verifies that reactions can be removed through the API.
- **Fetching reactions via API**: Confirms that the API correctly returns all reactions for a post.

---

## Where to Find the Tests

The automated tests can be found in the following locations:

- **Backend tests**: `tests/api/posts.js`
- **Frontend tests**: `tests/frontend/reactions.test.js`
- **Socket.IO tests**: `tests/socket/reactions.test.js`
- **HTTP API tests**: `tests/http/posts.test.js`

These tests cover the full functionality of the feature and ensure that it works across different environments.

---

## Conclusion

The Emoji Reactions feature enhances user interaction by allowing real-time reactions to posts. With extensive automated tests, we ensure the feature works reliably and meets the acceptance criteria. If you encounter any issues, refer to the automated tests or report a bug.

