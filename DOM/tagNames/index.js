function byTagName(node, string) {
    let fin = [];
    function checkNode(node) {
        if(node.nodeName === string.toUpperCase()) {
            fin.push(node);
        }
    }

    for(let child of node.children) {
            checkNode(child)
        if(child.children) {
            for(let kid of child.children) {
                checkNode(kid);
            }
        }
    }

    return fin;
}




  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2