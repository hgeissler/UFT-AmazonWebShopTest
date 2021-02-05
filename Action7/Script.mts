StrParamSRI = Parameter("Param_Search_Result_Item")
hasSearchResult = Browser("Browser_Amazon.de").Page("Amazon.de_Search_Results").Image(StrParamSRI).Exist(10)
If  hasSearchResult Then
	Reporter.ReportEvent micPass, "Found " & StrParamSRI, "Found" & StrParamSRI
	else
	Reporter.ReportEvent micFail, "Did not find " & StrParamSRI, "Did not find" & StrParamSRI
End If
Browser("Browser_Amazon.de").Page("Amazon.de_Search_Results").Image(StrParamSRI).Click
