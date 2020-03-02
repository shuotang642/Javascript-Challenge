// from data.js
var tableData = data;

// Select tbody with d3
var tbody = d3.select("tbody");
var tdata = document.getElementById("myTable");
// var ufotable = d3.select("#ufo-table");
// filter btn
var filterbtn = d3.select("#filter-btn");
var resetbtn = d3.select("#reset-btn");

function tableRender() {
    tableData.forEach(
        function(insertData) {
            var row = tbody.append("tr");
            Object.entries(insertData).forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
            });
        }
    );
    console.log(tableData);
    console.log("Data has been Rendered!");
};

function renderNewTable() {
    clear();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(`User is looking for ${inputValue}.`);
    var tableData = data.filter(tableData => tableData.datetime === inputValue);
    console.log(tableData);
    tableData.forEach(
        function(insertData) {
            var row = tbody.append("tr");
            Object.entries(insertData).forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
            });
        }
    );
};

function clear() {
    while (tdata.firstChild) {
        tdata.removeChild(tdata.firstChild);
    }
    console.log("Data has been Reset!");
};



// function react upon click
filterbtn.on("click", renderNewTable);

resetbtn.on("click", function() {
    clear();
    tableRender();
});

tableRender();