# android-tabs-to-bookmarkshtml
Node application for converting android chrome tabs into bookmarks html file.

## Instructions

1. Create a source.txt file in the same folder as converter.js
2. Follow instructions here: https://developers.google.com/web/tools/chrome-devtools/remote-debugging/
* Expand the list of tabs to get the full list
* Highlight and copy everything that's shown
* Paste into source.txt
3. Run converter.js using node: `node converter.js`
4. Output is a bookmarks html file called `androidTabsBookmarks[curUnixTime].html`
5. This file is ready to import into the browser of your choice

