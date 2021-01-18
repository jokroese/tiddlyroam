# tiddlyroam

Built on [TiddlyWiki](tiddlywiki.com/).

Uses the plugins:

- [TiddlyMap](https://github.com/felixhayashi/TW5-TiddlyMap/)

## Create tiddlyroam.html

1. Set up [TiddlyWiki with node.js](https://tiddlywiki.com/static/Installing%2520TiddlyWiki%2520on%2520Node.js.html)

   1. Install [Node.js](https://tiddlywiki.com/static/Node.js.html).

      - either from your favourite package manager: typically `apt-get install nodejs` on Debian/Ubuntu Linux or [Termux for Android](https://tiddlywiki.com/static/Serving%20TW5%20from%20Android.html), or `brew install node` on a Mac

      - or directly from http://nodejs.org
      
   1. Install TiddlyWiki locally.

        - Open a command line terminal and type: `npm install -g tiddlywiki`.

        - If it fails with an error you may need to re-run the command as an administrator: `sudo npm install -g tiddlywiki` (Mac/Linux)

   1. Check [TiddlyWiki](https://tiddlywiki.com/static/TiddlyWiki.html) is installed.
      - Type `tiddlywiki --version`.

1. Clone the [tiddlyroam repository](https://github.com/joekroese/tiddlyroam) or Download ZIP.

1. Run `tiddlywiki . --rendertiddler $:/core/save/all tiddlyroam.html text/plain` ([Reference](https://tiddlywiki.com/static/How%2520to%2520build%2520a%2520TiddlyWiki5%2520from%2520individual%2520tiddlers.html).)

## Run tiddlyroam through node.js

1. Install node.js as in step 1. of 'Create tiddlyroam.html'
2. Create and run a server:
   1. `tiddlywiki . --init server` to create a folder for a new wiki that includes server-related components
   1. `tiddlywiki . --listen` to start
   1. Visit http://127.0.0.1:8080/ in your browser
   1. Try editing and creating tiddlers