#target illustrator  
  
// deletes pathItems smaller than the supplied length  
  
var idoc = app.activeDocument;  
var howLong = prompt ("Enter the size in points of small paths to be deleted", 25, "Delete Small Paths");  
  
for (i=0 ; i< idoc.pathItems.length; i++)  
     {  
          var ipath = idoc.pathItems[i]  
               if ( ipath.width < howLong && ipath.height < howLong)  
                    {  
                         ipath.selected = true;  
                    }  
     }  
  
app.redraw();   
  
if(confirm ("Proceed to delete selected items?", "yes", "Confirm Delete"))  
     {  
          app.cut();  
     }  