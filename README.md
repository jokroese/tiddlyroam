# TiddlyRoam

_Your open-source external brain._

## Description

TiddlyRoam is an open-source tool for organising your thoughts, ideas, and research by building your own personal wiki. It’s designed to capture your knowledge in small, interconnected notes and help you discover new patterns through bi-directional links.

The project provides a free and open-source alternative to the popular [Roam](https://roamresearch.com/), built on the highly customisable [TiddlyWiki](https://tiddlywiki.com/).

## Key Features

- **Bi-directional Links**: See not only the pages you link to but also the pages that link back to the current page, helping you build a web of interconnected ideas.
- **Graph Maps**: Visualise the structure of your wiki with interactive maps, allowing you to explore relationships between your notes visually.

## How to Use TiddlyRoam

**TiddlyRoam is designed for everyone**—no technical skills required! You can start using it right away by following the steps below:

1. **Download the latest version of TiddlyRoam**:
   - Get the [tiddlyroam.html](https://github.com/jokroese/tiddlyroam/releases/download/v1.1/tiddlyroam.html) file from our GitHub releases page.
1. **Download TiddlyDesktop**:
   - Install [TiddlyDesktop](https://github.com/Jermolene/TiddlyDesktop/releases), which allows you to save your changes easily.
1. **Run TiddlyRoam**:
   - Open TiddlyDesktop.
   - Drag the tiddlyroam.html file into the TiddlyDesktop window or use the file picker to open it.
   - Start adding your notes, and TiddlyRoam will help you organise them!

### Quickstart for Development

If you’re a developer interested in customising or contributing to TiddlyRoam, follow these steps to set up the development environment using a modular, Node.js-based workflow.

1. Clone the repository:
   ```bash
   git clone https://github.com/jokroese/tiddlyroam.git
   cd tiddlyroam
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to [http://localhost:8080](http://localhost:8080) to see the live TiddlyWiki.
5. To build the distributable single HTML file:
   ```bash
   npm run build
   ```
   This will generate the `tiddlyroam.html` file for distribution.

## Acknowledgements

TiddlyRoam combines the amazing work of the following open-source projects:

- [TiddlyWiki](https://tiddlywiki.com/) by [Jeremy Ruston](http://jermolene.com)
- [TiddlyMaps](http://tiddlymap.org/) by [Felix Hayashi](https://github.com/felixhayashi)
- [TiddlyBlink](https://giffmex.org/gifts/tiddlyblink.html) by [Dave Gifford](https://giffmex.org/)

I hope this is useful for you [Ellis](https://transmascstudies.com/).

## License

This project is licensed under the BSD 2-Clause License. You are free to use, modify, and distribute the software with attribution, as long as you follow the license terms.
