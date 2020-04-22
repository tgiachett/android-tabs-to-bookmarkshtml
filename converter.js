const fs = require('fs');


// console script: tabs = Array.from(document.querySelectorAll('#HT7BL1A00102\\:chrome_devtools_remote > div.list.pages > div > div > div > div.subrow'), s => ({name: s.querySelector('.name').textContent, url: s.querySelector('.url').textContent}))
// copy(tabs)
// paste into json file

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};
// Source the data from the json file
const source = require('./bookmarks_src.json');
console.log(source.length);

(function () {
    //simplified date (for filenaming compatibility)
    const curDate = new Date().toISOString();
    const simpDate = curDate.split("T")[0];
    const bookmarksFilename = process.argv[2] === "new" ? `${process.argv[3]}.html` : `andTabsBookm${simpDate}.html`
    let exist = fs.existsSync(bookmarksFilename)


    //create the beginning of the template
    let template = `<!DOCTYPE NETSCAPE-Bookmark-file-1>
    <!-- This is an automatically generated file.
        It will be read and overwritten.
        DO NOT EDIT! -->
    <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
    <TITLE>Bookmarks</TITLE>
    <H1>Bookmarks</H1>
    <DL><p>
            <DT><H3 ADD_DATE="${curDate}" LAST_MODIFIED="${curDate}">andTbs_${curDate}</H3>
            <DL><p>\n`;

    //populate the template
    for(var i = 0; i < source.length; i++) {
            template += `       
            <DT><A HREF="${source[i].url}" ADD_DATE="${curDate}" ICON=" ">${source[i].name}</A>\n`
    };
    // close the template
    template += `</DL>
        </DL>
        `;
        // create the file
    if(process.argv[2] === "overwrite" || !exist)  {
        try {fs.appendFileSync(bookmarksFilename, template, 'utf8')
            exist ? console.log(`${bookmarksFilename} Overwritten`) : console.log(`Created ${bookmarksFilename}`);
        } catch (err) {
            console.log(err)
        }

    } else {

        console.log("File name already exists. Use `node converter.js overwrite` to override. Use `node converter.js new [desiredFileName]` to add new filename");
        return;
    } 

})();
