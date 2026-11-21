Set objShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

' Folder bot = folder tempat run.vbs ini berada (tidak lagi hardcode D:\...),
' jadi bisa dipasang di folder mana pun di tiap laptop.
baseDir = fso.GetParentFolderName(WScript.ScriptFullName)
objShell.CurrentDirectory = baseDir

logFile = baseDir & "\bot-log.txt"
logOld = baseDir & "\bot-log.old.txt"
maxLogBytes = 5 * 1024 * 1024 ' 5 MB

Sub RotateLogIfBig()
  On Error Resume Next
  If fso.FileExists(logFile) Then
    If fso.GetFile(logFile).Size > maxLogBytes Then
      If fso.FileExists(logOld) Then fso.DeleteFile logOld, True
      fso.MoveFile logFile, logOld
    End If
  End If
  On Error GoTo 0
End Sub

Do
  RotateLogIfBig
  objShell.Run "cmd /c node src\index.js >> bot-log.txt 2>&1", 0, True
  WScript.Sleep 15000
Loop
