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
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order 87 completed").Check CheckPoint("Order 87 completed") @@ hightlight id_;_1916299656_;_script infofile_;_ZIP::ssf20.xml_;_

'---delete book order
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("WpfButton").Click @@ hightlight id_;_2074951560_;_script infofile_;_ZIP::ssf21.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").Dialog("Notification").WinButton("Yes").Click @@ hightlight id_;_134542_;_script infofile_;_ZIP::ssf22.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order 87 deleted").Check CheckPoint("Order 87 deleted") @@ hightlight id_;_1916300432_;_script infofile_;_ZIP::ssf23.xml_;_

'---thoát
WpfWindow("HPE MyFlight Sample Applicatio").Close @@ hightlight id_;_265526_;_script infofile_;_ZIP::ssf24.xml_;_
