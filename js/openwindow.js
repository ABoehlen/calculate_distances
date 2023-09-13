// openwindow.js V1.0 12.09.2023
// Autor: Adrian Boehlen
//
// Script ermoeglicht, Dokumente in neuem Fenster zu oeffnen

function NewWindow (Adress) {
  MyWindow = window.open(Adress, "New Window", "width=350, height=380, left=50, top=50, scrollbars=0");
  MyWindow.focus();
}