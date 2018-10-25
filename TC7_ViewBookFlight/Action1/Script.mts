Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName").Set "a" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password").SetSecure "5bd13967c5620d9c" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In").Click 12,10 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In")_;_script infofile_;_ZIP::ssf3.xml_;_
wait (5) @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In")_;_script infofile_;_ZIP::ssf4.xml_;_
 
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Link("ITINERARY").Click @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Link("ITINERARY")_;_script infofile_;_ZIP::ssf5.xml_;_

wait (5)
Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").Check CheckPoint("Select a Flight: Mercury Tours") @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").Check CheckPoint("Select a Flight: Mercury Tours_2") @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").Check CheckPoint("Select a Flight: Mercury Tours_3") @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury")_;_script infofile_;_ZIP::ssf8.xml_;_

wait (3)
Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").Sync
Browser("Welcome: Mercury Tours").CloseAllTabs
