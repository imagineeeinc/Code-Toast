# Code Toast
Code Toast is a embeddable code editor for the browser

# Install
add this to your html
```
https://cdn.jsdelivr.net/gh/imagineeeinc/code-toast/codetoast.js
```
Then add this to your script
```
toast(your element you want to turn into a text box)
```
or
```
var editor = toast(your element you want to turn into a text box)
```
and you are done.

You can add styling using your normal css

If you want to set the text of the text box run this
```
toast_settext(your element that has been turned in to a text box, the text)
```

And if you want to get the text from the text box run this
```
toast_gettext(your element that has been turned in to a text box)

//example
var text = toast_gettext(your element that has been turned in to a text box)
```
