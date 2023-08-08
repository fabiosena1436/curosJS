function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length === 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var gênero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            gênero = 'Masculino';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', '../img/bebeh.png');
                //criança
            } else if (idade < 21) {
                img.setAttribute('src', '../img/jovemh.png');
                //jovem
            } else if (idade < 50) {
                img.setAttribute('src', '../img/adultoh.png');
                //adulto
            } else {
                img.setAttribute('src', '../img/idosoh.png');
                //idoso
            }
        } else if (fsex[1].checked) {
            gênero = 'Feminino';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', '../img/bebef.png');
                //criança
            } else if (idade < 21) {
                img.setAttribute('src', '../img/jovemf.png');
                //jovem
            } else if (idade < 50) {
                img.setAttribute('src', '../img/adultof.png');
                //adulto
            } else {
                img.setAttribute('src', '../img/idosof.png');
                //idoso
            }
            
        }

        res.style.textAlign = 'center'
        img.style.padding = '20px 0 0 0'
        res.innerHTML = `Detectamos sexo ${gênero} com ${idade} anos.`;
        res.appendChild(img);
    }

}
