#target illustrator

// renames pathItems

function pathName_serial()	{
	var doc = app.activeDocument;
	for (var i = 0; i < doc.pathItems.length; i++) {
		if(doc.pathItems[i].active) {
			doc.pathItems[i].name = "path"+(i+1);
		}
	}
}

function renamepathName_MAIN() {
	if (app.documents.length == 0) {
		alert ("no open / active paths found");
	} else{
		pathName_serial();
	}
}

renamepathName_MAIN();
