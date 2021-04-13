function push() {
    var numInput = document.getElementById("numInput");
    num = numInput.value;
    if (isNaN(num)) {
        numInput.setAttribute("required", "true");
    } else {
        numInput.setAttribute("required", "false");

        $.get("/push?num=" + num, function(data, status) {
            console.log("push: ", data);
            display();
        });
    }

}

function pop() {
    $.get("/pop", function(data, status) {
        console.log("pop: ", data);
        display();
    });
}

function display() {
    $.get("/display", function(data, status) {
        if (data.length == 0)
            document.getElementById("stackDisp").innerText = "Stack Empty";
        else
            document.getElementById("stackDisp").innerText = data;
        console.log("display: ", data);
    });
}

display();