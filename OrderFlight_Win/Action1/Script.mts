SystemUtil.Run("C:\Program Files (x86)\HP\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe")

'---đăng nhập
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john" @@ hightlight id_;_1903111424_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").SetSecure "5be24fc3f1e635a52689" @@ hightlight id_;_1904782280_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click @@ hightlight id_;_1883536392_;_script infofile_;_ZIP::ssf4.xml_;_

'---tìm chuyến bay
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select "San Francisco" @@ hightlight id_;_1903111616_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select "Sydney" @@ hightlight id_;_1884828544_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfImage("WpfImage_2").Click 12,7 @@ hightlight id_;_1904129184_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfCalendar("Su").SetDate "8-Dec-2018" @@ hightlight id_;_1904129280_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("Class").Select "Business" @@ hightlight id_;_1883481144_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_1904788040_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1904130000_;_script infofile_;_ZIP::ssf15.xml_;_

'---check hiện màn hình Select flight
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("SELECT FLIGHT").Check CheckPoint("SELECT FLIGHT") @@ hightlight id_;_1902512448_;_script infofile_;_ZIP::ssf16.xml_;_

If ((WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("SELECT FLIGHT").GetROProperty("enabled")) = "True") Then
	Reporter.ReportEvent micPass, "Check hiện màn hình Select Flight", "Pass"
	else
	Reporter.ReportEvent micFail, "Check hiện màn hình Select Flight", "Fail"
End If

'---chọn chuyến bay
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 2,0
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1904788088_;_script infofile_;_ZIP::ssf18.xml_;_

'---check màn hình Flight details
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("FLIGHT DETAILS").Check CheckPoint("FLIGHT DETAILS") @@ hightlight id_;_2010378752_;_script infofile_;_ZIP::ssf19.xml_;_
If (WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("FLIGHT DETAILS").Check (CheckPoint("FLIGHT DETAILS"))) = True Then
	Reporter.ReportEvent micPass, "Check hiện màn hình Flight Details", "Pass"
	else
	Reporter.ReportEvent micFail, "Check hiện màn hình Flight Details", "Fail"
End If

'---đặt chuyến bay
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set "David" @@ hightlight id_;_1904135232_;_script infofile_;_ZIP::ssf20.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click @@ hightlight id_;_1883493816_;_script infofile_;_ZIP::ssf21.xml_;_

wait (5)

'---check đặt chuyến bay thành công
If (WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("FLIGHT DETAILS").Check ((CheckPoint("ORDER DETAILS")))) = True Then
	Reporter.ReportEvent micPass, "Check hiện màn hình Order Details", "Pass"
	else
	Reporter.ReportEvent micFail, "Check hiện màn hình Order Details", "Fail"
End If

WpfWindow("HPE MyFlight Sample Applicatio").Check CheckPoint("HPE MyFlight Sample Application") @@ hightlight id_;_134542_;_script infofile_;_ZIP::ssf23.xml_;_

'--đóng
WpfWindow("HPE MyFlight Sample Applicatio").Close @@ hightlight id_;_134542_;_script infofile_;_ZIP::ssf24.xml_;_
