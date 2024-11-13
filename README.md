# Relatório Final

Nome: Marjorie Luize Martins Costa

RA: 24.223.084-5

# Introdução

Este relatório apresenta o desenvolvimento e os resultados do projeto realizado para a disciplina CCP4670. O projeto consiste na criação de um aplicativo em React Native, abordando o tema "Organizando curriculos". O aplicativo visa armazenar informações pessoais no banco de dados Firebase.

# Motivação

A escolha por desenvolver um aplicativo sobre um Organizador de "curriculos" surgiu a partir de uma ideia espontánea considerando nosso dia a dia buscando por estágios. Onde o usuário consegue armazenar suas informações mais importantes e parte delas ficam visiveis aos outros usuários. 

# Objetivo

O objetivo principal deste projeto é desenvolver um aplicativo mobile funcional em React Native que armazena informações inseridas pelo usuario no banco de dados Firebase, montando assim "curriculos" de vários usuarios cujo os outros possam ver.

Além disso, o projeto busca:

- Lista todos os Cards de informações (curriculos) de cada usuário cadastrado.
- Utilizar o Firebase para armazenar as informações pessoais dos usuários.
- Integrar o aplicativo com o sensor de Haptics (vibração) para sinalizar erros junto da mensagem especifica do mesmo.
- Proporcionar uma experiência de usuário intuitiva e agradável.

# Funcionalidades

O aplicativo desenvolvido conta com as seguintes funcionalidades:

Listar: Monta um card para cada usuário, com suas informações e lista todos na tela principal.

Pesquisa: Pesquisa por cards específicos a partir do nome de seu usuário. 

![Captura de tela 2024-11-12 214726](https://github.com/user-attachments/assets/cb6a92ab-7672-4fc2-bf9d-94bae245edcb)
![Captura de tela 2024-11-12 214716](https://github.com/user-attachments/assets/7d881a1a-68c8-454a-892e-b493c8406485)

Login: Loga a partir do username e senha cadastrados.

Cadastro: Cadastra um usuário no Firebase.

![Captura de tela 2024-11-12 065806](https://github.com/user-attachments/assets/ec558fe4-5cfc-4de9-b685-792f770348f4)
![Captura de tela 2024-11-12 065820](https://github.com/user-attachments/assets/ad7ad8c0-a1ea-415e-9d01-8a5e34cdbe12)

Edição: Você pode escolher um campo e alterar o seu valor, alterar a foto não está disponivel, pois o Realtime Database não é o ideal para isso, então ao clicar em alterar a foto irá vibrar e mostrar a mensagem de erro. Também pode deslogar.

![Captura de tela 2024-11-12 214619](https://github.com/user-attachments/assets/6d0bbe4c-d2dc-4d61-8b16-8106d6cad545)
![Captura de tela 2024-11-12 214646](https://github.com/user-attachments/assets/0305f363-cbff-4d00-aa34-5140f54b5d48)

# Conclusão

A partir do desenvolvimento deste projeto, foi possível aprimorar os conhecimentos sobre o Firebase. Porém, nem todas as metas do planejamento inicial foram alcançados devido a limitações de tempo e do próprio firebase, como por exemplo os problemas com importações mas creio que foram lidados bem até a finalização. Há muitas melhorias a serem implementadas, como pensar em uma solução para adicionar a imagem pessoal dos usuários e desenvolver a compreensão das diversas funcionalidades do Firebase. O projeto tem uma grande gama de possíveis caminhos para atualizações futuras.


