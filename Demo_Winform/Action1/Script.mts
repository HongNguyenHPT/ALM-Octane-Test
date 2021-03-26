WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set DataTable("user", dtGlobalSheet) @@ hightlight id_;_1954159048_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").Set DataTable("pass", dtGlobalSheet) @@ hightlight id_;_1946663352_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1952659800_;_script infofile_;_ZIP::ssf4.xml_;_
wait 2
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Portland" @@ hightlight id_;_1946666472_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "Seattle" @@ hightlight id_;_1907831520_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Business" @@ hightlight id_;_1906243576_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_1952660616_;_script infofile_;_ZIP::ssf14.xml_;_
wait 2
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 1,0 @@ hightlight id_;_1906243288_;_script infofile_;_ZIP::ssf16.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1946666952_;_script infofile_;_ZIP::ssf17.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "Marye" @@ hightlight id_;_1946668776_;_script infofile_;_ZIP::ssf18.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_1946667720_;_script infofile_;_ZIP::ssf19.xml_;_
Wait 4
WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order 134 completed").Check CheckPoint("Order 134 completed") @@ hightlight id_;_1905248944_;_script infofile_;_ZIP::ssf20.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_854284_;_script infofile_;_ZIP::ssf21.xml_;_
