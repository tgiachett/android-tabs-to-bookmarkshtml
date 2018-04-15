const fs = require('fs');

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const source = require('./source.txt');

(function () {
    //simplified date (for filenaming compatibility)
    const curDate = new Date().toISOString();
    const simpDate = curDate.split("T")[0];
    const bookmarksFilename = process.argv[2] === "new" ? `${process.argv[3]}.html` : `andTabsBookm${simpDate}.html`
    let exist = fs.existsSync(bookmarksFilename)

    //make source.txt into array and filter out garbage
    const parsed = source.split("\r\n");

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
    for(var i = 0; i < parsed.length; i++) {
        if(parsed[i].includes("http")) {
            template += `       
            <DT><A HREF="${parsed[i]}" ADD_DATE="${curDate}" ICON=" ">${parsed[i-1]}</A>\n`};
            
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

})()
