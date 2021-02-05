RunAction "OpenApp", oneIteration

Split_Params = Split(Parameter("Param_Search"),",")
for each search in Split_Params
    RunAction "SearchShoes", oneIteration, search
next

RunAction "ViewCart", oneIteration
RunAction "CloseApp", oneIteration
