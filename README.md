# android-tabs-to-bookmarkshtml
Node application for converting android chrome tabs into bookmarks html file. Perhaps more of a workflow than an application.

## Instructions

1. Run this script in console of devtools chrome://inspect/#devices:
copy(Array.from(document.querySelectorAll('#HT7BL1A00102\\:chrome_devtools_remote > div.list.pages > div > div > div > div.subrow'), s => ({name: s.querySelector('.name').textContent, url: s.querySelector('.url').textContent})))
2. Create file called bookmarks_src.json and paste
3. Run converter.js using node: `node converter.js`
4. Output is a bookmarks html file called `androidTabsBookmarks[YYY-MM-DD].html`
5. This file is ready to import into the browser of your choice

NOTE: use `node converter.js overwrite` to overwrite the bookmarks file that's already in the folder. Use `node converter.js new [newFileName]` to create a new file instead of overwriting.

