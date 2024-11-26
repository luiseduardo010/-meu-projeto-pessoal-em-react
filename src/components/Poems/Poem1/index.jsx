import React, { useState } from 'react';

function Poem1() {
  const [mostrarPoema, setMostrarPoema] = useState(false);

  const handleClick = () => {
    setMostrarPoema(!mostrarPoema);
  };

  const poema = <p> Quando a vida bater forte <br />
e sua alma sangrar,<br />
quando esse mundo pesado <br />
lhe ferir, lhe esmagar... <br />
É hora do recomeço. <br />
Recomece a LUTAR. <br />
<span class="1">
  <br role="presentation"/>
</span>
Quando tudo for escuro <br />
e nada iluminar, <br />
quando tudo for incerto <br />
e você só duvidar... <br />
É hora do recomeço. <br />
Recomece a ACREDITAR. <br />
<span class="1">
  <br role="presentation"/>
</span>
Quando a estrada for longa<br />
e seu corpo fraquejar,<br />
quando não houver caminho<br />
nem um lugar pra chegar... <br />
É hora do recomeço.<br />
Recomece a CAMINHAR. <br />
<span class="1">
  <br role="presentation"/>
</span>
Quando o mal for evidente<br />
e o amor se ocultar,<br />
quando o peito for vazio, <br />
quando o abraço faltar... <br />
É hora do recomeço. <br />
Recomece a AMAR. <br />
<span class="1">
  <br role="presentation"/>
</span>
Quando você cair<br />
e ninguém lhe aparar,<br />
quando a força do que é ruim<br />
conseguir lhe derrubar...<br />
É hora do recomeço. <br />
Recomece a LEVANTAR. <br />
<span class="1">
  <br role="presentation"/>
</span>
Quando a falta de esperança<br /> 
decidir lhe açoitar,<br />
se tudo que for real<br />
for difícil suportar... <br />
É hora do recomeço.<br />
Recomece a SONHAR. <br />
<span class="1">
  <br role="presentation"/>
</span>
Enfim,<br />
<span class="1">
  <br role="presentation"/>
</span>
É preciso de um  final<br />
pra poder recomeçar,<br />
como é preciso cair<br />
pra poder se levantar. <br />
Nem sempre engatar a ré <br />
significa voltar.<br />
<span class="1">
  <br role="presentation"/>
</span>
Remarque aquele encontro, <br />
reconquiste um amor, <br />
reúna quem lhe quer bem, <br />
reconforte um sofredor, <br />
reanime quem tá triste <br />
e reaprenda na dor.<br />
<span class="1">
  <br role="presentation"/>
</span>
Recomece, se refaça, <br />
relembre o que foi bom, <br />
reconstrua cada sonho, <br />
redescubra algum dom, <br />
reaprenda quando errar, <br />
rebole quando dançar, <br />
e se um dia, lá na frente,<br />
a vida der uma ré, <br />
recupere sua fé<br />
e RECOMECE novamente. <br />
-Bráulio Bessa  <br />
  </p>;


  return (
    <div>
      <button onClick={handleClick}>
        {mostrarPoema ? "Esconder poema" : "Mostrar poema"}
      </button>
      {mostrarPoema && <nav>{poema}</nav>}
    </div>
  );
}
export default Poem1;
