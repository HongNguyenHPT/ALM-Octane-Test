﻿'--đăng nhập
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName").Set "a" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password").Set "a" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In").Click 37,11 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In")_;_script infofile_;_ZIP::ssf3.xml_;_
wait (10)
'---tìm kiếm chuyến bay
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromPort").Select "London" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromPort")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromMonth").Select "August" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromMonth")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromDay").Select "27" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromDay")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toPort").Select "Portland" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toPort")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebRadioGroup("servClass").Select "Business" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebRadioGroup("servClass")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("airline").Select "Blue Skies Airlines" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("airline")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Image("findFlights").Click 41,12 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Image("findFlights")_;_script infofile_;_ZIP::ssf10.xml_;_
wait (10)
'--chọn chuyến bay
Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").WebRadioGroup("outFlight").Select "Pangea Airlines$362$274$9:17" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").WebRadioGroup("outFlight")_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").WebRadioGroup("inFlight").Select "Pangea Airlines$632$282$16:37" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").WebRadioGroup("inFlight")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").Image("reserveFlights").Click 71,9 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").Image("reserveFlights")_;_script infofile_;_ZIP::ssf13.xml_;_
