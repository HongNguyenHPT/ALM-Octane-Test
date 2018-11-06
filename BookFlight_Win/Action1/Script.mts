SystemUtil.Run("C:\Program Files (x86)\HP\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe")

'---đăng nhập
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john" @@ hightlight id_;_1901660816_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").SetSecure "5bdfedd5b2d17799db82" @@ hightlight id_;_1917913840_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click @@ hightlight id_;_1917919600_;_script infofile_;_ZIP::ssf4.xml_;_

'---book flight
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select "Paris" @@ hightlight id_;_1902199336_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select "Sydney" @@ hightlight id_;_1901661200_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfImage("WpfImage").Click 8,10 @@ hightlight id_;_1902216328_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfCalendar("Su").SetDate "8-Dec-2018" @@ hightlight id_;_1902221896_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("Class").Select "Business" @@ hightlight id_;_1901660528_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_1917922240_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1917923632_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 1,3 @@ hightlight id_;_1917923344_;_script infofile_;_ZIP::ssf16.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1902225928_;_script infofile_;_ZIP::ssf17.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set "Henrry" @@ hightlight id_;_1902226456_;_script infofile_;_ZIP::ssf18.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click @@ hightlight id_;_1902229144_;_script infofile_;_ZIP::ssf19.xml_;_

'---check order
wait (5)
order = (WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order 87 completed").GetROProperty("text"))
Environment("checkDelete") = Replace(order, "completed", "deleted")
MsgBox Environment("checkDelete")

'---delete book flight
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("WpfButton").Click @@ hightlight id_;_2074951560_;_script infofile_;_ZIP::ssf21.xml_;_

'---check thông báo

WpfWindow("HPE MyFlight Sample Applicatio").Dialog("Notification").Static("Are you sure you want").Check CheckPoint("Are you sure you want to delete this order?") @@ hightlight id_;_134214_;_script infofile_;_ZIP::ssf25.xml_;_
If (WpfWindow("HPE MyFlight Sample Applicatio").Dialog("Notification").Exist) Then
	Reporter.ReportEvent micPass, "Thông báo xóa chuyến bay", "Pass"
	else
	Reporter.ReportEvent micFail, "Thông báo xóa chuyến bay", "Fail"
End If
	
'-----
WpfWindow("HPE MyFlight Sample Applicatio").Dialog("Notification").WinButton("Yes").Click @@ hightlight id_;_199752_;_script infofile_;_ZIP::ssf26.xml_;_

'---check thông báo xóa thành công
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order 87 deleted").Check CheckPoint("Order 97 deleted") @@ hightlight id_;_2010082632_;_script infofile_;_ZIP::ssf27.xml_;_

'---tìm kiếm lại order flight đã xóa


WpfWindow("HPE MyFlight Sample Applicatio").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER" @@ hightlight id_;_2126464392_;_script infofile_;_ZIP::ssf28.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfRadioButton("byNumberRadio").Set @@ hightlight id_;_2132122440_;_script infofile_;_ZIP::ssf29.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("byNumberWatermark").Set "99" @@ hightlight id_;_2126465832_;_script infofile_;_ZIP::ssf30.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SEARCH").Click @@ hightlight id_;_2126465928_;_script infofile_;_ZIP::ssf31.xml_;_

WpfWindow("HPE MyFlight Sample Applicatio").Dialog("Error").Static("Order number does not").Check CheckPoint("Order number does not exist.") @@ hightlight id_;_1051830_;_script infofile_;_ZIP::ssf32.xml_;_
If (WpfWindow("HPE MyFlight Sample Applicatio").Dialog("Error").Exist) Then
	Reporter.ReportEvent micPass, "Thông báo chuyến bay không tồn tại", "Pass"
	else
	Reporter.ReportEvent micFail, "Thông báo chuyến bay không tồn tại", "Fail"
End If

WpfWindow("HPE MyFlight Sample Applicatio").Dialog("Error").WinButton("OK").Click @@ hightlight id_;_2624720_;_script infofile_;_ZIP::ssf33.xml_;_


'---thoát
WpfWindow("HPE MyFlight Sample Applicatio").Close @@ hightlight id_;_265526_;_script infofile_;_ZIP::ssf24.xml_;_
