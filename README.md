# Code Toast
Code Toast is a embeddable code editor for the browser

# Install
add this to your html
```html
<script src="https://cdn.jsdelivr.net/gh/imagineeeinc/code-toast/codetoast.js"></script>
```
Then add this to your script
```js
toast(your element you want to turn into a text box)
```
or
```js
var editor = toast(your element you want to turn into a text box)
```
and you are done.

You can add styling using your normal css

If you want to set the text of the text box run this
```js
toast_settext(your element that has been turned in to a text box, the text)
```

And if you want to get the text from the text box run this
```js
toast_gettext(your element that has been turned in to a text box)

//example
var text = toast_gettext(your element that has been turned in to a text box)
```

## example
```html
<html>
  <div id="editor"></div>
  <script src="https://cdn.jsdelivr.net/gh/imagineeeinc/code-toast/codetoast.js"></script>
  <script>
    var editor = toast(document.getElementById("editor"))
    toast_settext(editor, "hello world")
    console.log(toast_gettext(editor))
  </script>
</html>
```
