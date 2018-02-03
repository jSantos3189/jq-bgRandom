# jq-BgRandom

## Change full random background

### Installation

```sh
$   npm install jq-BgRandom
```

##### You need to load jQuery first

```html
<script src="/node_modules/jquery/dist/jquery.js"></script>
<script src="/node_modules/jq-bgRandom/src/index.js"</script>
```

Before using the Unsplash API, you need to register as developer then you must put the **CLIENT_ID** to be enable to get photos.

```js
window.BgRandom.setup(clientId);
```

#### How it works?

```html
<div id="bg-unsplash"></div>
```

```js
$(document).ready(function() {
	window.BgRandom.setup(clientId);
    $('#bg-unsplash').bgRandom({
      minHeight: '700px', // by default it´s 800px
      backgroundSize: 'contain', // by default it´s cover
      backgroundPosition: 'top center', // by default its center
      backgroundColor: 'red' // by default it´s black
    });
});
```
