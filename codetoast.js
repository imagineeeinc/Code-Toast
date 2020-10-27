var style = document.createElement("style")
style.innerHTML = "*[codetoast='stylethis'] {box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);font-family: 'Space Mono', Source Code Pro'', monospace;font-size: 14px;font-weight: 400;letter-spacing: normal;line-height: 20px;tab-size: 4;}"
document.body.append(style)

function toast(editor) {
    editor.setAttribute("contentEditable", "plaintext-only");
    editor.setAttribute("spellcheck", "false");
    editor.setAttribute("codetoast", "stylethis");
//    document.getElementById("id1").setAttribute("style", "");
    editor.style.outline = "none";
    editor.style.overflowWrap = "break-word";
    editor.style.overflowY = "auto";
    editor.style.overflowX = "auto";
    editor.style.resize = "vertical";
    editor.style.whiteSpace = "pre-wrap";
    return editor
}
function toast_settext(editor, text) {
    editor.innerHTML = text
}
function toast_gettext(editor) {
    return editor.textContent
}