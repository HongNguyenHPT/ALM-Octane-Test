'--đăng nhập tài khoản đã tạo
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName").Set "a" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password").Set "a" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In").Click 38,10 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In")_;_script infofile_;_ZIP::ssf7.xml_;_

wait(10)
'--check
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebElement("SIGN-OFF").Check CheckPoint("SIGN-OFF") @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebElement("SIGN-OFF")_;_script infofile_;_ZIP::ssf8.xml_;_

'--đóng trình duyệt
wait (3)
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Sync @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Welcome: Mercury Tours").CloseAllTabs
