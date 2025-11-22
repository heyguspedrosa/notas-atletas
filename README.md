# notas-atletas

Processa notas de atletas removendo a maior e a menor para calcular média válida.

## Objetivo
Para cada atleta:
1. Ordenar as 5 notas.
2. Remover maior e menor.
3. Calcular a média das 3 notas centrais.
4. Exibir resultado formatado.

## Estrutura
- notas-atletas.js: código principal (classe Atleta + execução).

## Como executar
Requisitos: Node.js instalado.
Comando:
```bash
node notas-atletas.js
```

## Exemplo de saída
```
Atleta: Cesar Abascal
--------------------------------------------
Notas Obtidas: 10, 9.34, 8.42, 10, 7.88
Notas Ordenadas: 7.88, 8.42, 9.34, 10, 10
Notas Válidas: 8.42, 9.34, 10
Média Válida: 9.25

Atleta: Bruno Castro
--------------------------------------------
Notas Obtidas: 10, 10, 10, 9, 9.5
Notas Ordenadas: 9, 9.5, 10, 10, 10
Notas Válidas: 9.5, 10, 10
Média Válida: 9.83
```

## Possíveis melhorias
- Validação de quantidade mínima de notas.
- Leitura de dados via arquivo ou entrada padrão.
- Testes automatizados.
- Internacionalização da saída.

## Licença
Uso educacional.