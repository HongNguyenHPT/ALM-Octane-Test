SystemUtil.Run("C:\Program Files (x86)\HP\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe")


WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set DataTable("agentName", dtLocalSheet) @@ hightlight id_;_1978383552_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set DataTable("password", dtLocalSheet) @@ hightlight id_;_1978375632_;_script infofile_;_ZIP::ssf3.xml_;_


WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click                                                                                                                                                                                                                                                                                                                                                                                  @@ hightlight id_;_1885222816_;_script infofile_;_ZIP::ssf4.xml_;_

if (WpfWindow("HPE MyFlight Sample Applicatio").Dialog("Login Failed").Exist) then
	WpfWindow("HPE MyFlight Sample Applicatio").Dialog("Login Failed").WinButton("OK").Click
else
	WpfWindow("HPE MyFlight Sample Applicatio").WpfTabStrip("WpfTabStrip").Check CheckPoint("WpfTabStrip")     @@ hightlight id_;_1904616576_;_script infofile_;_ZIP::ssf5.xml_;_
End If 

WpfWindow("HPE MyFlight Sample Applicatio").Close @@ hightlight id_;_265396_;_script infofile_;_ZIP::ssf6.xml_;_

