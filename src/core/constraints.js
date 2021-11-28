class AppConstraints {
  static E_Ready = "ready";
  static E_WindowsAllClosed = "window-all-closed";
  static E_Activate = "activate";

  static E_Win_IndexFile = "src/presentation/home/index.html";
  static E_Win_Closed = "closed";
  static E_Win_ReadyToShow = "ready-to-show";

  static E_IPC_RequestVersion = "app_version_request";
  static E_IPC_ResponseVersion = "app_version_response";
  static E_IPC_RestartApp = "restart_app";

  static E_AU_UpdateAvailable = "update_available";
  static E_AU_UpdateDownloaded = "update_downloaded";
}

module.exports = {
  AppConstraints,
};
