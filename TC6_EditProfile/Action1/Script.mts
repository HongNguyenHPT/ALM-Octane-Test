﻿'---đăng nhập
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName").Set "a" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password").SetSecure "5bd137d620821b10" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In").Click 12,6 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In")_;_script infofile_;_ZIP::ssf3.xml_;_
wait (5)

'--update profile
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Link("PROFILE").Click @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Link("PROFILE")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("firstName").Set "A" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("firstName")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("lastName").Set "A" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("lastName")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("phone").Set "1234" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("phone")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("email").Set "a@gmail.com" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("email")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("address1").Set "a" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("address1")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("address2").Set "a" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("address2")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("city").Set "a" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("city")_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("state").Set "a" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("state")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("postalCode").Set "1223" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("postalCode")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebList("country").Select "VIETNAM" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebList("country")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").Image("profile_submit").Click @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").Image("profile submit")_;_script infofile_;_ZIP::ssf15.xml_;_
wait (5)
 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours 2").Image("Sign-In")_;_script infofile_;_ZIP::ssf18.xml_;_
 
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours_2").WebEdit("userName").Set "a" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours 2").WebEdit("userName")_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours_2").WebEdit("password").SetSecure "5be2a03453c3bf86" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours 2").WebEdit("password")_;_script infofile_;_ZIP::ssf21.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours_2").Image("Sign-In").Click 24,8 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours 2").Image("Sign-In")_;_script infofile_;_ZIP::ssf22.xml_;_

wait (80)
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Link("PROFILE").Click @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Link("PROFILE")_;_script infofile_;_ZIP::ssf23.xml_;_

'---check lại thông tin update
If (Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("firstName").Check (CheckPoint("firstName"))) = True Then
	Reporter.ReportEvent micPass, "Kiểm tra thông tin update firstName", "Pass"
	else
	Reporter.ReportEvent micFail, "Kiểm tra thông tin update firstName", "Fail"
End If

If (Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("lastName").Check (CheckPoint("lastName"))) = True Then
	Reporter.ReportEvent micPass, "Kiểm tra thông tin update lastName", "Pass"
	else
	Reporter.ReportEvent micFail, "Kiểm tra thông tin update lastName", "Fail"
End If
 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("lastName")_;_script infofile_;_ZIP::ssf25.xml_;_
'--đóng
Browser("Welcome: Mercury Tours").CloseAllTabs() @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours 2").Image("Sign-In")_;_script infofile_;_ZIP::ssf19.xml_;_
