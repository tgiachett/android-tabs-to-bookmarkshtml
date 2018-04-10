const fs = require('fs');

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const source = require('./source.txt');

//make source.txt into array and filter out garbage
let parsed = source.split("\r\n")
        .filter(x => x !== "")
        .filter(x => x !== "Inspect")
        .filter(x => x !== "View less tabs…");

//create the beginning of the template
let template = `<!DOCTYPE NETSCAPE-Bookmark-file-1>
<!-- This is an automatically generated file.
     It will be read and overwritten.
     DO NOT EDIT! -->
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks</H1>
<DL><p>
        <DT><H3 ADD_DATE="${Date.now()}" LAST_MODIFIED="${Date.now()}">Android_Tabs_${Date.now()}</H3>
        <DL><p>\n`;

//populate the template       
for(var i = 0; i < parsed.length; i++) {
    if(!parsed[i].includes("http")) {
        template += `<DT><A HREF="${parsed[i+1]}" ADD_DATE="${Date.now()}" ICON=" ">${parsed[i]}</A>\n`} 
        
};
// close the template
template += `</DL>
    </DL>
    `;
//name the file
let bookmarksFilename = 'androidTabsBookmarks'+ Date.now() + '.html'
// create the file
fs.appendFile(bookmarksFilename, template, 'utf8', (err) => {
    if (err) {console.log(err)};
    console.log(`Created ${bookmarksFilename}`);
});


