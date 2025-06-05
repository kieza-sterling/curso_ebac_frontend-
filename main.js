$(document).ready(function () {

    $('#formulario').on('submit', function (e) {
        e.preventDefault()

        const texto = $('#tarefa').val();

        if (texto.trim() !== '') {
            $('#lista-tarefas').append('<li>' + texto + '</li>');
            $('#tarefa').val('');
        }

        $('#lista-tarefas').on('click', 'li', function () {
            $(this).toggleClass('riscado');
        });
    })
})