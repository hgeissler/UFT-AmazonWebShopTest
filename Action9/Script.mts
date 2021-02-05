'Das zweite if-else verschachtelt im ersten?
If Browser("Browser_Amazon.de").Page("Amazon.de_Shopping_Cart").WebButton("Button_To_Cart").Exist(10) Then
	Reporter.ReportEvent micPass, "View cart button enabled", "The view cart button does show"
	Browser("Browser_Amazon.de").Page("Amazon.de_Shopping_Cart").WebButton("Button_To_Cart").Click
	else
	Reporter.ReportEvent micFail, "View cart button disabled", "The view cart button does not show"
End If
If Browser("Browser_Amazon.de").Page("Amazon.de_Shopping_Cart").WebButton("Button_Delete_Item").Exist(10) Then
	Reporter.ReportEvent micPass, "View cart button enabled", "The view cart button does show"
	Browser("Browser_Amazon.de").Page("Amazon.de_Shopping_Cart").WebButton("Button_Delete_Item").Click
	else
	Reporter.ReportEvent micFail, "View cart button disabled", "The view cart button does not show"
End If



