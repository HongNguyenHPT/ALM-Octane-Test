
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").Link("sign-in").Click @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").Link("sign-in")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Welcome: Mercury Tours").Page("Sign-on: Mercury Tours").WebEdit("userName").Set "mai" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Sign-on: Mercury Tours").WebEdit("userName")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Welcome: Mercury Tours").Page("Sign-on: Mercury Tours").WebEdit("password").SetSecure "5bd025f0660e3501c633c003" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Sign-on: Mercury Tours").WebEdit("password")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Welcome: Mercury Tours").Page("Sign-on: Mercury Tours").Image("Login").Click 39,10 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Sign-on: Mercury Tours").Image("Login")_;_script infofile_;_ZIP::ssf8.xml_;_
wait (5)
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebElement("SIGN-OFF").Check CheckPoint("SIGN-OFF") @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebElement("SIGN-OFF")_;_script infofile_;_ZIP::ssf9.xml_;_


Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Sync @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Welcome: Mercury Tours").CloseAllTabs
