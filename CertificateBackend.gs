/**
 * TechieHelp Certificate Verification Backend
 * Deploy this as a Web App:
 * 1. Open Google Apps Script (script.google.com)
 * 2. Paste this code.
 * 3. Click 'Deploy' > 'New Deployment'.
 * 4. Select 'Web App'.
 * 5. Set 'Execute as' to 'Me' and 'Who has access' to 'Anyone'.
 * 6. Copy the Web App URL and paste it in the frontend component.
 */

function doGet(e) {
  var certId = e.parameter.id;
  var folderId = "1FwLzZTg8NcvYYRXSkCExsCV_ONPqaTZw";
  
  if (!certId) {
    return createResponse({ success: false, message: "Certificate ID is required" });
  }

  try {
    var folder = DriveApp.getFolderById(folderId);
    var files = folder.getFilesByName(certId + ".pdf");
    
    if (files.hasNext()) {
      var file = files.next();
      return createResponse({
        success: true,
        fileId: file.getId(),
        fileName: file.getName(),
        previewUrl: "https://drive.google.com/file/d/" + file.getId() + "/preview",
        downloadUrl: "https://drive.google.com/uc?export=download&id=" + file.getId()
      });
    } else {
      return createResponse({ success: false, message: "Certificate not found" });
    }
  } catch (error) {
    return createResponse({ success: false, message: "Error: " + error.toString() });
  }
}

function createResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
