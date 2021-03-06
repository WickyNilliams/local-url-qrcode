# local-url-qrcode

Print URL of your local IP to terminal as a QR code.

## Why?

I don't have static local IP. I often want to open a website on my phone during devleopment. I got fed up of looking up my IP, then typing it into the phone's browser. So I slapped this together.

## Installation

Install via npm:

```bash
# install locally to use API
npm install local-url-qrcode --save[-dev]

# install globally to use in CLI via terminal
npm install -g local-url-qrcode
```

## Usage

### API

```js
var urlQrcode = require("local-url-qrcode");
urlQrcode.print();
```

### Terminal

```bash
local-url-qrcode
```

Port can be supplied as an optional argument:

```bash
local-url-qrcode 4000
```

## Screenshot

![Example of URL as QR code output to terminal](http://i.imgur.com/4DcCXmF.png)

## License

Licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
