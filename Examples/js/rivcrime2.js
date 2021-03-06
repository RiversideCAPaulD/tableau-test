(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        var cols = [
		{ id : "npc",  alias : "POC", dataType : tableau.dataTypeEnum.string }
		];
		
		

        var tableSchema = {
            id: "riversideCrime",
            alias: "Riverside Crime JSON entries",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

    // Download the data
    myConnector.getData = function(table, doneCallback) {
        $.getJSON("https://riversideca.gov/transparency/data/dataset/json/27");

            // Iterate over the JSON object
            for (var i = 0; i < len; i++) {
                tableData.push({
                    
                    "npc": data[i]["npc"],
					
					                    
                });
            }

            table.appendRows(tableData);
            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = "Riverside Crime Report"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
