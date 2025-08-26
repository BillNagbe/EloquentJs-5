function byTagName(node, string) {
    let fin = [];
    function checkNode(node) {
        if(node.nodeName === string.toUpperCase()) {
            fin.push(node);
        }
    }
    let children = Array.from(node.children);
    for(let child of children) {
        if(child.childNodes) {
            let kids = Array.from(child.children);
            for(let kid of kids) {
                checkNode(kid);
            }
        }
        else {
            checkNode(child);
        }
    }
}




  console.log(byTagName(document.body, "h1"));
  // → 1
 