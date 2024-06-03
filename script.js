let tableCriada = false;

function verificarForm() {
    var formulario = document.getElementById("formNotas");
    var campos = formulario.elements;

    for (var i = 0; i < campos.length; i++) {
        var campo = campos[i];

        if (campo.tagName === 'INPUT') {
            if (campo.value === '') {
                alert('Preencha todos os campos.');
                return;
            }
        }
    }
    notasAluno();
}

function notasAluno(){
    let formulario = document.getElementById("formNotas");

    let nome = formulario.elements["nome"].value;
    let matricula =formulario.elements["matricula"].value;
    let nota1 = parseFloat(formulario.elements["nota1"].value);
    let nota2 = parseFloat(formulario.elements["nota2"].value);
    let media = (nota1 + nota2) / 2;

    console.log(nome);
    console.log(matricula);
    console.log(nota1);
    console.log(nota2);
    console.log(media);

    let div = document.getElementById('espacoTabelas');

    if(!tableCriada){
        let table = document.createElement('table');
        div.appendChild(table);
        
        let thead = document.createElement('thead');
        table.appendChild(thead);

        let thNome = document.createElement('th');
        thNome.innerText = 'Nome';
        let thMatricula = document.createElement('th');
        thMatricula.innerText = 'Matrícula';
        let thNota1 = document.createElement('th');
        thNota1.innerText = 'Nota 1';
        let thNota2 = document.createElement('th');
        thNota2.innerText = 'Nota 2';
        let thMedia = document.createElement('th');
        thMedia.innerText = 'Média Final';
        let thSituacao = document.createElement('th');
        thSituacao.innerText = 'Situação';

        thead.appendChild(thNome);
        thead.appendChild(thMatricula);
        thead.appendChild(thNota1);
        thead.appendChild(thNota2);
        thead.appendChild(thMedia);
        thead.appendChild(thSituacao);

        tableCriada = true;
    }
    let table = div.getElementsByTagName('table')[0];
    let tbody = table.getElementsByTagName('tbody')[0];

    let tr = document.createElement('tr');
    let tdNome = document.createElement('td');
    tdNome.innerText = nome;
    let tdMatricula = document.createElement('td');
    tdMatricula.innerText = matricula;
    let tdNota1 = document.createElement('td');
    tdNota1.innerText = nota1;
    let tdNota2 = document.createElement('td');
    tdNota2.innerText = nota2;
    let tdMedia = document.createElement('td');
    tdMedia.innerText = (nota1 + nota2) / 2;
    let tdSituacao = document.createElement('td');
    if (media > 5){
        tdSituacao.innerText = 'Aprovado'
    }else{
        tdSituacao.innerText = 'Reprovado'
    }

    tr.appendChild(tdNome)
    tr.appendChild(tdMatricula)
    tr.appendChild(tdNota1)
    tr.appendChild(tdNota2)
    tr.appendChild(tdMedia)
    tr.appendChild(tdSituacao)
    table.appendChild(tr)

    formulario.reset();
}