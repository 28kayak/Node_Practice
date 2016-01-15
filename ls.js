/**
 * Created by kaya on 1/15/16.
 */
var fs = require('fs');
var files = fs.readdirSync('.');
for(fn in files)
{
    console.log(files[fn]);
}
