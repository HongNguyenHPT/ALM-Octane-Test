﻿
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Link("REGISTER").Click @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Link("REGISTER")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("firstName").Set "hong" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("firstName")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("lastName").Set "nguyen" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("lastName")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("phone").Set "0987654321" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("phone")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("userName").Set "hong@gmail.com" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("userName")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("address1").Set "hn" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("address1")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("address2").Set "vietnam" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("address2")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("city").Set "ha noi" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("city")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("state").Set "dong da" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("state")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("postalCode").Set "34" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("postalCode")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebList("country").Select "VIETNAM" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebList("country")_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("email").Set "hong" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("email")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("password").SetSecure "5bd02006259d58b8750b459c78be" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("password")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("confirmPassword").SetSecure "5bd0200bee88beeb1c8f8102bdba" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("confirmPassword")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").Image("register").Click 28,9 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").Image("register")_;_script infofile_;_ZIP::ssf15.xml_;_
wait (5)
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours_2").WebElement("Thank you for registering.").Check CheckPoint("Thank you for registering. You may now  sign-in using the user name and password you've just entered.") @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours 2").WebElement("Thank you for registering.")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours_2").Sync @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours_2")_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("Welcome: Mercury Tours").CloseAllTabs
