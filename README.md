# android-tabs-to-bookmarkshtml
Node application for converting android chrome tabs into bookmarks html file. Perhaps more of a workflow than an application.

## Instructions

1. Create a source.txt file in the same folder as converter.js
2. Follow instructions here for getting a list of open Android Chrome tabs (should be directly below step 2): https://developers.google.com/web/tools/chrome-devtools/remote-debugging/
* Expand the list of tabs to get the full list
* Highlight and copy the list of open chrome tabs
* Paste into source.txt
3. Run converter.js using node: `node converter.js`
4. Output is a bookmarks html file called `androidTabsBookmarks[YYY-MM-DD].html`
5. This file is ready to import into the browser of your choice

NOTE: use `node converter.js overwrite` to overwrite the bookmarks file that's already in the folder. Use `node converter.js new [newFileName]` to create a new file instead of overwriting.

