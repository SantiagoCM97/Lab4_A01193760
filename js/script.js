window.onload = function() {
    var postBtn = document.getElementsByClassName("submitButton")[0];
    var list = document.getElementsByClassName("list")[0];
    var deleteBtn = document.getElementsByClassName("deleteButton btn-danger")[0];
    var clearBtn = document.getElementsByClassName("clearButton btn-info")[0];
    var markbtn = document.getElementsByClassName("markAllButton btn-success")[0];

    postBtn.addEventListener("click", ( event ) => {
        event.preventDefault();
        let item = document.createElement("li");
        let textArea = document.getElementsByClassName("newTodo form-control")[0];
        let text = document.createTextNode(textArea.value);
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        item.appendChild(checkbox);
        item.appendChild(text);
        list.appendChild(item);
        textArea.value = "";
    });

    deleteBtn.addEventListener("click", (event) => {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
          }
    });

    clearBtn.addEventListener("click", ( event )=> {
        let items = list.getElementsByTagName("li");
        for (var i = 0; i < items.length; ++i) {
            let element = items[i];
            let checkbox = element.getElementsByTagName("input")[0];
            checkbox.checked = false;
          }
    });

    markbtn.addEventListener("click", ( event )=> {
        let items = list.getElementsByTagName("li");
        for (var i = 0; i < items.length; ++i) {
            let element = items[i];
            let checkbox = element.getElementsByTagName("input")[0];
            checkbox.checked = true;
          }
    });
};

