function sidebarOpen() {
  $(".mainContent").css("marginLeft", "300px");
  $(".sidebar").css("width", "300px");
}

function sidebarClose(){
  $(".mainContent").css("marginLeft", "0px");
  $(".sidebar").css("width", "0px");
  $(".sidebar").css("left", "-20px");
}
