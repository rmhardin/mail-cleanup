function cleanUp3Mo() {  
var delayDays = 90;  
var maxDate = new Date(); 
maxDate.setDate(maxDate.getDate()-delayDays);    
var label = GmailApp.getUserLabelByName("Receipts/Shipping Updates");  
var threads = label.getThreads();  
for (var i = 0; i < threads.length; i++) {  
  if (threads[i].getLastMessageDate()<maxDate)
  {  
    threads[i].moveToTrash();
  } 
} 
}

function cleanUp6Mo() {  
var delayDays = 180;  
var maxDate = new Date(); 
maxDate.setDate(maxDate.getDate()-delayDays);    
var label = GmailApp.getUserLabelByName("6mo Delete");  
var threads = label.getThreads();  
for (var i = 0; i < threads.length; i++) {  
  if (threads[i].getLastMessageDate()<maxDate)
  {  
    threads[i].moveToTrash();
  } 
} 
}

function cleanUpWeek() {  
var delayDays = 7;  
var maxDate = new Date(); 
maxDate.setDate(maxDate.getDate()-delayDays);    
var label = GmailApp.getUserLabelByName("Weekly Delete");  
var threads = label.getThreads();  
for (var i = 0; i < threads.length; i++) {  
  if (threads[i].getLastMessageDate()<maxDate)
  {  
    threads[i].moveToTrash();
  } 
} 
}