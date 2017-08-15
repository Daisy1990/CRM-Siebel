1.刷新Applet

var bsRefresh = TheApplication().GetService("FINS Teller UI Navigation");  
bsRefresh.InvokeMethod("RefreshCurrentApplet", inputs, outputs);