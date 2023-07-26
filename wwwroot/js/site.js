// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
  $("#emprestimos").DataTable({
    language: {
      decimal: "",
      emptyTable: "No data available in table",
      info: "Mostrando _START_ registro de _END_ em um total de _TOTAL_ entradas",
      infoEmpty:
        "Mostrando _START_ registro de _END_ em um total de _TOTAL_ entradas",
      infoFiltered: "(filtered from _MAX_ total entries)",
      infoPostFix: "",
      thousands: ",",
      lengthMenu: "Mostrar _MENU_ entradas",
      loadingRecords: "Loading...",
      processing: "",
      search: "Procurar:",
      zeroRecords: "No matching records found",
      paginate: {
        first: "Primeiro",
        last: "Último",
        next: "Proximo",
        previous: "Anterior",
      },
      aria: {
        sortAscending: ": activate to sort column ascending",
        sortDescending: ": activate to sort column descending",
      },
    },
  });
  setTimeout(function () {
    $(".alert").fadeOut("slow", function () {
      $(this).alert("close");
    });
  }, 5000);
});
