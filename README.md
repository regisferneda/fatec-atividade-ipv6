# fatec-atividade-ipv6
Atividade para abreviar e expandir IPV6 com Javascript


<b>Abreviando endereços IPv6:</b>

A abreviação de endereços IPv6 seguem duas regras básicas:

1. Dentro de cada quarteto, remova os 0s (0s no lado esquerdo do quarteto) até no máximo três
posições à esquerda. (Nota: nesta etapa, um quarteto de 0000 irá se transformar no número 0.

Antes FE00:0000:0000:0001:0000:0000:0000:0056
Depois FE00:0:0:1:0:0:0:56

2. Qualquer quarteto consecutivo de zeros, troque por uma sequência dupla de dois pontos (::).
a. A sequência dupla de dois pontos significa que dois ou mais quartetos são constituídos por
zeros.
b. Os “::” só pode ser utilizado uma vez no endereçamento e deve ser colocado de modo a
obter a maior compactação possível. É preferível abreviar “0:0:0” do que “0:0”.

Antes FE00:0:0:1:0:0:0:56
Depois FE00:0:0:1::56


Expandindo endereços IPv6 abreviados

Para expandir um endereço IPv6 de volta ao seu número completo não abreviado de 32 dígitos, basta
aplicar o algoritmo ao contrário.

1. Em cada quarteto, adicione zeros à esquerda conforme necessário até que o quarteto tenha quatro
dígitos hexadecimais.

Antes FE00:0:0:1::56
Depois FE00:0000:0000:0001::0056

2. Se houver dois pontos duplos (: :), substituta os pontos duplos por quantos quartetos “0000” forem
necessários até que a string tenha 8 quartetos, formatada corretamente pelo separador “:”.

Antes FE00:0000:0000:0001::0056
Depois FE00:0000:0000:0001:0000:0000:0000:0056
