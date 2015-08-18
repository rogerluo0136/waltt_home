## Hackathon WebDev Setup
* nodejs: express, serve-static
* gulp: less, jade, jshint, browsersync
* minification of css, js, images
* creation of app and vendor css/js
* bower.json, package.json

## Gulpfile Commands

| Command  		| Output 		|
| ------------- | ------------- |
| default  		| runs BrowserSync + watches only changed files (except jade files, which may depend on partials) |
| build			| cleans dist folder + regenerates everything from scratch |
| check  		| checks validity of gulpfile using jshint  |

## Tips to be Fast
* use CDN links rather than bower