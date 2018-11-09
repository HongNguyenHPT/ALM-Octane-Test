'---đăng nhập
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName").Set "a" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password").SetSecure "5bd2b84e328386dd" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In").Click 15,8 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In")_;_script infofile_;_ZIP::ssf3.xml_;_
wait (3)

'---chọn chuyến bay
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebRadioGroup("tripType").Select "oneway" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebRadioGroup("tripType")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("passCount").Select "3" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("passCount")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromPort").Select "New York" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromPort")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromMonth").Select "September" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromMonth")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromDay").Select "27" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromDay")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toPort").Select "Sydney" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toPort")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toMonth").Select "November" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toMonth")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toDay").Select "28" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toDay")_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebRadioGroup("servClass").Select "Business" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebRadioGroup("servClass")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("airline").Select "Blue Skies Airlines" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("airline")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Image("findFlights").Click

'--đặt chuyến bay
'--check hiện màn hình Select Flight
If (Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").Image("mast_selectflight").Check (CheckPoint("mast_selectflight"))) = True Then
	Reporter.ReportEvent micPass, "Check hiện màn hình Select Flight", "Pass"
	else
	Reporter.ReportEvent micFail, "Check hiện màn hình Select Flight", "Fail"
End If
 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").Image("mast selectflight")_;_script infofile_;_ZIP::ssf31.xml_;_
'---

Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").WebRadioGroup("outFlight").Select "Unified Airlines$363$281$11:24" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").WebRadioGroup("outFlight")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").WebRadioGroup("inFlight").Select "Pangea Airlines$632$282$16:37" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").WebRadioGroup("inFlight")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").Image("reserveFlights").Click  @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury").Image("reserveFlights")_;_script infofile_;_ZIP::ssf17.xml_;_

'--thông tin hành khách
'---check hiện màn hình Book a flight
If (Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury_2").Image("mast_book").Check (CheckPoint("mast_book"))) = True Then
	Reporter.ReportEvent micPass, "Check hiện màn hình Book a Flight", "Pass"
	else
	Reporter.ReportEvent micFail, "Check hiện màn hình Book a Flight", "Fail"
End If

'---

Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passFirst0").Set "Mai" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passFirst0")_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passLast0").Set "Nguyen" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passLast0")_;_script infofile_;_ZIP::ssf19.xml_;_
Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebList("pass.0.meal").Select "Hindu" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebList("pass.0.meal")_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passFirst1").Set "A" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passFirst1")_;_script infofile_;_ZIP::ssf21.xml_;_
Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passLast1").Set "AAA" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passLast1")_;_script infofile_;_ZIP::ssf22.xml_;_
Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passFirst2").Set "AB" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passFirst2")_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passLast2").Set "AB" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("passLast2")_;_script infofile_;_ZIP::ssf24.xml_;_
Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("creditnumber").Set "123467687" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").WebEdit("creditnumber")_;_script infofile_;_ZIP::ssf25.xml_;_
Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").Image("buyFlights").Click @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Book a Flight: Mercury").Image("buyFlights")_;_script infofile_;_ZIP::ssf26.xml_;_
wait (5)

'check chuyến bay đặt thành công
'---check hiện màn hình Flight confirmation
If (Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury_2").Image("mast_book").Check (CheckPoint("mast_book_2"))) = True Then
	Reporter.ReportEvent micPass, "Check hiện màn hình Flight confirmation", "Pass"
	else
	Reporter.ReportEvent micFail, "Check hiện màn hình Flight confirmation", "Fail"
End If

Browser("Welcome: Mercury Tours").Page("Flight Confirmation: Mercury").WebElement("Your itinerary has been").Check CheckPoint("Your itinerary has been booked!") @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Flight Confirmation: Mercury").WebElement("Your itinerary has been")_;_script infofile_;_ZIP::ssf27.xml_;_
Browser("Welcome: Mercury Tours").Page("Flight Confirmation: Mercury").Image("backtoflights").Click @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Flight Confirmation: Mercury").Image("backtoflights")_;_script infofile_;_ZIP::ssf28.xml_;_
 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Link("ITINERARY")_;_script infofile_;_ZIP::ssf29.xml_;_
'---đóng 
Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury_2").Sync @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Select a Flight: Mercury_2")_;_script infofile_;_ZIP::ssf30.xml_;_
Browser("Welcome: Mercury Tours").CloseAllTabs
