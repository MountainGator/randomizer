const $root = $('#root');
const $form = $('#option-maker');
const options = ['#option-1', '#option-2', '#option-3'];

const handleSubmit = (e) => {
    e.preventDefault();
    let choice = Math.floor(Math.random() * 3);
    let $finalAnswer = $(options[choice]).val();
    let printAnswer = $(`<h2>${$finalAnswer}</h2>`);

    $root.append(printAnswer);
}

$form.on('submit', handleSubmit);

