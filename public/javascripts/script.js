function push() {
    num = document.getElementById("numInput").value;
    $.get("/push?num=" + num, function(data, status) {
        console.log("push: ", data);
        display();
    });
}

function pop() {
    $.get("/pop", function(data, status) {
        console.log("pop: ", data);
        display();
    });
}

function display() {
    $.get("/display", function(data, status) {
        document.getElementById("stackDisp").innerText = data;
        console.log("display: ", data);
    });
}

display();