$(document).ready(function() {
    $('#form').submit(function(event) {
        event.preventDefault();
        var taskName = $('#input-tarefa').val();
        if (taskName.trim() !== '') {
            $('#lista-tarefas').append('<li>' + taskName + '</li>');
            $('#input-tarefa').val(''); // Correção: Limpar o campo de entrada
        }
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});