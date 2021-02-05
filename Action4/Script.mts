If Browser("Browser_Amazon.de").Page("Amazon.de_Landing_Page").WebEdit("Edit_Search").Exist(10) Then
	Browser("Browser_Amazon.de").Page("Amazon.de_Landing_Page").WebEdit("Edit_Search").Set Parameter("Param_Search")
	else
	Reporter.ReportEvent micFail,"search bar missing", "search bar did not load"
End If
Browser("Browser_Amazon.de").Page("Amazon.de_Landing_Page").WebButton("Button_Submit_Search").Click

RunAction "SelectShoes", oneIteration, "First_Search_Result"
RunAction "AddShoesToCart", oneIteration


