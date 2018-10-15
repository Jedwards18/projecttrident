# react-wordcloud-demo

[![Build Status](https://travis-ci.org/Purii/react-wordcloud-demo.svg?branch=master)](https://travis-ci.org/Purii/react-wordcloud-demo)
![Dependencies](https://img.shields.io/david/purii/react-wordcloud-demo.svg?style=flat)
![devDependencies](https://img.shields.io/david/dev/purii/react-wordcloud-demo.svg?style=flat)

**NOTE: This component is not published. It is just for [demonstration](http://purii.github.io/react-wordcloud-demo/) purposes.**

| | |
| :------------: | :---------------: |
| ![](https://raw.github.com/Purii/react-wordcloud-demo/master/assets/initialState.png) | ![](https://raw.github.com/Purii/react-wordcloud-demo/master/assets/selectedState.png) |

## Premise
* The component should be usable within an existing application. No routing needed.
* The data is already available. No fetching mechanism needed.
* The component should be distributable as `commonjs`, `umd` and `es6-module`.

[**Jump to the example!**](http://github.com/Purii/react-wordcloud-demo#example)

## Installation
Be sure to use the latest version of node.js and npm.
*Note: Currently the component is not published via npm.*

1. Install: `npm i --save react-wordcloud`
1. Install peerDependencies that are listed in `package.json`.

### Usage / Props
To run the component with the default props, it is enough to include the WordCloud component with some topics:

```javascript
  <WordCloud
    topics={topics}
  />
```

WordCloud inherits the components `Cloud` and `Sidebar`. If you want to be more flexible it is possible to load that components individually:

```javascript
import {
  WordCloud,
  Cloud,
  Sidebar
} from `react-wordcloud`
...
  render() {
    <Cloud
      fontName={"Impact"}
      fontSizes={[13, 16, 20, 26, 35, 49]}
      height={500}
      onSelectTopic={() => console.log('Topic selected!')}
      topics={topics}
      width={500}
    />
  }
...  
```

#### WordCloud
| Prop  | Default | Type | Description |
| :------------ | :---------------:| :---------------:| ---------------|
| fontName | `Sans-Serif` | `string` | Fontname used for the Cloud component |
| fontSizes | `[13, 16, 20, 26, 35, 49]` | `int[]` | Available fontsizes for the Cloud component |
| height | `400` | `int` | Height of component |
| topics | `[]` | `object[]` | Content of `topics.json` |
| width | `400` | `int` | Width of component |


#### Cloud
| Prop  | Default | Type | Description |
| :------------ | :---------------:| :---------------:| ---------------|
| fontName | - | `string` | Fontname used for the Cloud component |
| fontSizes | - | `int[]` | Available fontsizes for the Cloud component |
| height | - | `int` | Height of component |
| onSelectTopic | - | `function` | Eventhandler |
| selectedTopic | - | `object` | Selected item object |
| topics | - | `object[]` | Content of `topics.json` |
| width | - | `int` | Width of component |


#### Sidebar
| Prop  | Default | Type | Description |
| :------------ | :---------------:| :---------------:| ---------------|
| topic | `null` | `object` | Topic object |

## Development
To develop the component it is recommend to use the example.

1. Install dependencies
  * `npm i`
  * `cd example`
  * `npm i`
1. Start webpack-dev-server inside `/example`, which uses the sources if available: `npm start`
1. Open browser: [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/)

### Structure
* `/components:`
  * Individual components with isolated markup
  * Could contain each other
  * Rarely have their own state. Better to write as functional components

* `/utils:`
  * Functions which are used by some components
  * Could easily be tested

### Dependencies
Have a look at the `package.json`.

### Test
1. Install dependencies: `npm i`
1. Run tests: `npm test`

## Example
To run the example, open [http://purii.github.io/react-wordcloud-demo/](http://purii.github.io/react-wordcloud-demo/) or follow these steps:

1. Install dependencies
  * `npm i`
  * `cd example`
  * `npm i`
1. Start webpack-dev-server inside `/example`, which uses the sources if available: `npm start`
1. Open browser: [http://localhost:8080/](http://localhost:8080/)

## Publish
1. Install dependencies: `npm i`
1. Build bundles for `umd`, `commonjs` and `es6-module`: `npm run bundle`
1. The css file will be located in `/dist/wordcloud.min.css`
1. Note the peerDependencies
