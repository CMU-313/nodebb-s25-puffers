# User Guide

## Feature 1: Emoji Reactions Feature

### Overview

The Emoji Reactions feature allows users to react to posts with a selection of emojis. Users can add, remove, and view reactions in real-time, enhancing engagement on the platform.

This guide covers how to use the feature, how to test it, and where to find the automated tests.

---

## User Testing Instructions

To ensure the feature functions as expected, follow these testing steps:

### **1. Test Adding Reactions**
- React to a post and confirm your reaction appears immediately.
- Ensure your reaction is counted correctly.

### **2. Test Removing Reactions**
- Remove your reaction and verify that it disappears.

### **3. Test Multiple Users Reacting**
- Use multiple accounts to react to the same post.
- Confirm reactions from different users are displayed correctly.

### **4. Test Reaction Updates**
- Open the same post in multiple browser windows.
- Add or remove reactions in one window and confirm that the update is reflected in the other window in real-time.

### **5. Test Invalid Inputs**
- Try adding an invalid emoji (e.g., plain text) and verify the system handles the error correctly.
- Attempt to react to a non-existent post and confirm an error message appears.

### **6. Test User Permissions**
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

---

## Feature 2: Word Count Feature

### Overview

The Word Count feature provides users with real-time feedback on the number of words in their post. It helps users stay within character limits and ensures content clarity.

---

## User Testing Instructions

To verify that the Word Count feature works correctly, follow these steps:

### **1. Test Word Counting**
- Type a sentence in the composer and confirm the word count updates correctly.
- Delete words and verify that the count decreases accurately.

### **2. Test Edge Cases**
- Enter an empty post and ensure the word count remains at 0.
- Add multiple spaces between words and confirm that the count remains accurate.
- Type a single word and verify that it registers correctly.

### **3. Test UI Visibility**
- Ensure the word count display appears correctly in the composer UI.
- Confirm the word count disappears when the text area is empty.

---

## Automated Tests

The following tests ensure that the Word Count feature functions properly:

### **Frontend Tests**
- **Word count accuracy**: Checks if the word count updates as the user types.
- **Handling empty content**: Ensures an empty post displays a count of 0.
- **Managing extra spaces**: Confirms that extra spaces do not affect the count.
- **Single-word handling**: Tests whether a single word is counted correctly.

### **Integration Tests**
- **Ensures UI updates correctly**: Verifies that the word count display appears in the correct location.
- **Error handling**: Confirms that the system does not break when encountering unusual inputs.

---

## Where to Find the Tests

- **Frontend tests**: `tests/posts/wordCount.js`

---

## Conclusion

The Word Count feature ensures that users receive real-time feedback on their post length. This functionality helps improve content quality and readability.

---

## Feature 3: Dark Mode Feature

### Overview

The Dark Mode feature allows users to switch between light and dark themes, enhancing usability and reducing eye strain in low-light environments.

---

## User Testing Instructions

To test the Dark Mode functionality, follow these steps:

### **1. Test Dark Mode Toggle**
- Navigate to user settings and locate the Dark Mode toggle.
- Enable Dark Mode and confirm that the UI updates immediately.
- Disable Dark Mode and ensure the UI returns to the default light theme.

### **2. Test LocalStorage Persistence**
- Enable Dark Mode, refresh the page, and confirm the setting persists.
- Disable Dark Mode, refresh the page, and verify that it does not revert to dark.

### **3. Test Cross-Browser Functionality**
- Test Dark Mode in multiple browsers to confirm consistency.
- Ensure the setting persists across sessions.

---

## Automated Tests

### **Frontend Tests**
- **Toggle button functionality**: Ensures the button properly enables and disables Dark Mode.
- **LocalStorage handling**: Confirms that the preference is stored and retrieved correctly.
- **CSS application**: Verifies that the correct styles are applied when Dark Mode is enabled.

### **Integration Tests**
- **User settings update**: Ensures that toggling Dark Mode updates the user settings in the database.
- **Page reload handling**: Confirms that the correct theme is applied upon reloading.

---

## Where to Find the Tests

- **Frontend tests**: `tests/darkmode.test.js`

---

## Conclusion

The Dark Mode feature enhances the user experience by offering a visually comfortable viewing option. With thorough testing, we ensure the feature is fully functional and consistent across different platforms.


