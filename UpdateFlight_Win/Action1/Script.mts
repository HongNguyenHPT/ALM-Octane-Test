RunAction "Copy of Action1", oneIteration

'--tìm kiếm
WpfWindow("HPE MyFlight Sample Applicatio").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER" @@ hightlight id_;_1894376592_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfRadioButton("byNumberRadio").Set @@ hightlight id_;_1896714984_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("byNumberWatermark").Set Environment("orderNumber") @@ hightlight id_;_1937325128_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SEARCH").Click @@ hightlight id_;_1937326712_;_script infofile_;_ZIP::ssf8.xml_;_

'---update flight
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("numOfTicketsCombo").Select "1" @@ hightlight id_;_1939642552_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("flightClassCombo").Select "First" @@ hightlight id_;_1893343704_;_script infofile_;_ZIP::ssf13.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set "Harry" @@ hightlight id_;_1981931960_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("updateBtn").Click @@ hightlight id_;_1937327288_;_script infofile_;_ZIP::ssf15.xml_;_

'--check update thành công
wait (3)

Environment("checkUpdate") = Replace(Environment("mesOrder"), "completed", "updated")

WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order 91 updated").Check CheckPoint("Order 91 updated") @@ hightlight id_;_1985720112_;_script infofile_;_ZIP::ssf16.xml_;_

'---đóng

WpfWindow("HPE MyFlight Sample Applicatio").Close @@ hightlight id_;_527368_;_script infofile_;_ZIP::ssf17.xml_;_
