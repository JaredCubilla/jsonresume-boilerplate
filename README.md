jsonresume-boilerplate
======================

A boilerplate for developing JSONResume themes.

## Usage

To start, copy the files of this folder into a folder named "jsonresume-theme-name", where the name is your desired theme name. Open up the `package.json`, and change the name to your desired theme name, as long as it starts with `jsonresume-theme-`. Use `cd` to get into this folder and run `npm install` to install the necessary node_modules for compilation.

Now, run `node server.js` and it will start your theme in localhost://8080. You will see a blank page with the title "Richard Hendriks", as your webpage is receiving data from the resumeSchema object, where a sample `resume.json` is located.

Now, open up your resume.template, and add in the `<h1>{{bio.firstName}} {{bio.lastName}}</h1>`. Save, and refresh localhost://8080. You will see an `<h1>` with the words "Richard Hendriks" on the screen.

In case you haven't noticed, we are using [Mustache](http://mustache.github.io/) for our theme. You can use ERB, or other templating systems if you like, as long as it is able to return HTML from the resume.json object.

You can even dive right into the `index.js` file to add properties to the object dynamically (such as month or year from the date).

## Publishing

If you already have an npm account, you could just go ahead and type `npm publish` and be done with it. You could update it like any other Node Package; constantly change the `package.json` version and run `npm publish` again.

If however, you are not familiar with NPM, take a look at [their docs](https://www.npmjs.org/doc/).

When your JSONResume Theme is published, you can easily view at http://themes.jsonresume.org/theme/themename, where themename is your theme name. Anyone will be able to use it now.

## Closing Remarks

If you have any questions about theme development feel free to ask the JSONResume team, or possibly submit an issue here.