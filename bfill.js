console.log("Background.js Started .. "); //for debug purpose so i can see it in the console log

    chrome.browserAction.onClicked.addListener(function (tab) { //Starts when User Clicks on ICON



      chrome.tabs.executeScript(tab.id, {file: 'autofill.js'});

      console.log("Script Executed .. "); // Notification on Completion
    });