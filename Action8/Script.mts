If Browser("Browser_Amazon.de").Page("Amazon.de_Product_Page").WebList("Select_Size").Exist(10) Then
	Reporter.ReportEvent micPass, "Weblist Select exists", "The select for choosing a size exists"
	notFound = false
	else
	Reporter.ReportEvent micFail, "Weblist Select does not exist", "Did not find the select element for choosing a size"
End If

count = Browser("Browser_Amazon.de").Page("Amazon.de_Product_Page").WebList("Select_Size").GetROProperty( "items count")
itemNumber = 1
notFound = true

While notFound AND i < count
	Browser("Browser_Amazon.de").Page("Amazon.de_Product_Page").WebList("Select_Size").Select "#" & itemNumber
	
	If Browser("Browser_Amazon.de").Page("Amazon.de_Product_Page").WebButton("Buy_Now").Exist(5) Then
		Reporter.ReportEvent micPass, "Purchase button enabled", "The article can be purchased"
		notFound = false
		else
		itemNumber = itemNumber + 1
	End If
Wend
	
If notFound Then
	Reporter.ReportEvent micFail, "Purchase button disabled", "Did not find the article in stock"
End If

Browser("Browser_Amazon.de").Page("Amazon.de_Product_Page").WebButton("Add_To_Cart").Click


