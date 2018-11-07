RunAction "Copy of Action1", oneIteration


WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("NEW SEARCH").Click @@ hightlight id_;_2105005712_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER" @@ hightlight id_;_2105007728_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfRadioButton("byNumberRadio").Set @@ hightlight id_;_2111822448_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("byNumberWatermark").Set Environment("orderNumber") @@ hightlight id_;_2016318184_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SEARCH").Click @@ hightlight id_;_2016322024_;_script infofile_;_ZIP::ssf5.xml_;_

'---check class, tickets, passengername, totalprice
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("numOfTicketsCombo").Check CheckPoint("checknumOfTickets") @@ hightlight id_;_2020046024_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("flightClassCombo").Check CheckPoint("checkflightClass") @@ hightlight id_;_2105016368_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Check CheckPoint("checkpassengerName") @@ hightlight id_;_2016322984_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("$1052.82").Check CheckPoint("checkTotalPrice") @@ hightlight id_;_1900514080_;_script infofile_;_ZIP::ssf9.xml_;_


WpfWindow("HPE MyFlight Sample Applicatio").Close @@ hightlight id_;_2034736_;_script infofile_;_ZIP::ssf10.xml_;_
