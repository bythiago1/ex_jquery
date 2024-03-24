$(document).ready(function() {





    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefa = $('#nome-tarefa').val();
        
        const novaTarefa = $(`<li> </li>`);
        $(`<li>${tarefa}</li>`).appendTo(novaTarefa)

        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn();
        $('#nome-tarefa').val('')
    })

    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed')
    })

})