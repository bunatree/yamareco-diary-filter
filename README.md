# yamareco-diary-filter

A Tampermonkey script to filter out diaries on Yamareco based on user IDs. This script allows users to hide diaries posted by specific users on Yamareco by adding their user IDs to a blacklist.

## Features
- Filter Yamareco diaries by user ID.
- Automatically hides diaries from blacklisted users.
- Simple and lightweight.

## Installation
1. Install [Tampermonkey](https://www.tampermonkey.net/) on your browser if you haven't already.
2. Copy the script from `yamareco-diary-filter.user.js` into a new Tampermonkey script.
3. Modify the `blacklist` array in the script to include the user IDs of users whose diaries you want to hide.

## Usage
1. Open the Yamareco diary page.
2. The script will automatically hide diaries from users in the blacklist.

## Customization
- You can modify the `blacklist` array by adding or removing user IDs.

```javascript
const blacklist = ['12345', '67890'];  // Add or remove user IDs here
