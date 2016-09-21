# Contributing

We welcome and truly appreciate contribution in all forms - issues, pull requests, questions, or fancy examples of apps/elements build on to of your elements.

## Filing bugs

Our team heavily uses Github for all of our software management. We use Github issues to track all bugs and features.

If you find an issue, please do file it on the repository.

We love examples for addressing issues - issues with a Plunkr, [jsFiddle](http://jsfiddle.net), or [jsBin](http://jsbin.com) will be much easier for us to work on quickly. You can start with [this jsbin](http://jsbin.com/capequ/edit?html,output) which sets up the basics to demonstrate a Juicy element.

Occasionally we'll close issues if they appear stale or are too vague - please don't take this personally! Please feel free to re-open issues we've closed if there's something we've missed and they still need to be addressed.

## Developing the element

If you would like to start to fiddle with element's code, here is the flow we use.

- Make a local clone of this repo: `git clone git@github.com:Juicy/juicy-filedrop.git`

In order to develop it locally we suggest to use [polyserve](https://npmjs.com/polyserve) tool to handle bower paths gently.

0. Go to the repo's directory: `cd juicy-filedrop`
1. Install [bower](http://bower.io/) & [polyserve](https://npmjs.com/polyserve): `$ npm install -g bower polyserve`
2. Install local dependencies: `$ bower install`
3. Start development server `$ polyserve -p 8000`
4. Open the demo/preview: [http://localhost:8000/components/juicy-filedrop/](http://localhost:8000/components/juicy-filedrop/)

## Contributing Pull Requests

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Open corresponding issue if needed
6. Submit a pull request :D

### Styleguide

`.jscs.json`/`.jscsrc`/`package.json` to be linked

### How to release a package

1. Install [Node.js](https://nodejs.org/).
2. Run `npm install` to install all dependencies.
3. Run `npm version ...` to bump the version. You can use `npm version 1.0.0`, `npm version major`, `npm version minor`, `npm version patch` or whatever else [npm version](https://docs.npmjs.com/cli/version) supports.
4. Run `git push && git push --tags` to push the changes made by `npm version`.
