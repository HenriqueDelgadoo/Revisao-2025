# 🚦 Semáforo Inteligente – Cruzamento 4.0

Projeto de **Semáforo Inteligente** desenvolvido para modernizar o controle de tráfego urbano por meio de sensores, lógica adaptativa e arquitetura IoT. O sistema busca otimizar o fluxo de veículos, aumentar a segurança de pedestres e garantir funcionamento contínuo mesmo em condições adversas.

---

## 📌 Visão Geral

O **Cruzamento 4.0** é um sistema inteligente de controle semafórico que opera **24 horas por dia**, ajustando automaticamente os tempos de sinalização conforme o fluxo de veículos, condições climáticas e horários de pico. O projeto segue as normas do **Código de Trânsito Brasileiro (CTB)**, priorizando segurança, confiabilidade e eficiência.

**Local:** Limeira – SP
**Ano:** 2025

**Autores:**

* Gabriel Marques Terra
* Henrique Delgado

---

## 🎯 Objetivos do Projeto

* Otimizar o fluxo de veículos em cruzamentos urbanos
* Reduzir congestionamentos, principalmente em horários de pico
* Aumentar a segurança de pedestres e motoristas
* Adaptar os tempos dos semáforos conforme trânsito e clima
* Garantir operação segura em caso de falhas ou quedas de energia

---

## ⚙️ Funcionalidades (Requisitos Funcionais)

* Funcionamento contínuo **24h por dia**

  * Das **05h às 23h**: ciclo normal (verde, amarelo e vermelho)
  * Fora desse intervalo: **amarelo intermitente**
* Monitoramento do tráfego em tempo real por meio de sensores
* Controle seguro do ciclo de fases para evitar colisões
* Intervalo dedicado para travessia de pedestres
* Modo de contingência (fallback) com **amarelo piscante** em caso de falha
* Sequência padrão de sinalização (verde → amarelo → vermelho)
* Geração de relatórios diários sobre a quantidade de veículos
* Monitoramento das condições climáticas para ajuste automático do tempo dos sinais

---

## 🛡️ Requisitos Não Funcionais

* Implementação de política de segurança do sistema
* Resiliência a quedas de energia e chuvas fortes
* Proteção contra ataques cibernéticos
* Resposta eficiente às variações do fluxo de veículos
* Conformidade com o **Código de Trânsito Brasileiro (CTB)**
* Operação estável mesmo em condições críticas

---

## 🔁 Modelagem e Fluxograma

O sistema foi modelado utilizando um **fluxograma desenvolvido em Mermaid**, com o objetivo de representar visualmente a lógica de funcionamento do semáforo inteligente.

O fluxograma contempla:

* Inicialização do sistema
* Verificação de horário (modo normal ou amarelo intermitente)
* Leitura dos sensores de tráfego
* Monitoramento das condições climáticas
* Definição dinâmica dos tempos de sinalização
* Ciclo seguro das fases (verde, amarelo e vermelho)
* Ativação do modo de contingência em caso de falhas

A utilização do **Mermaid** facilita a compreensão do fluxo do sistema, melhora a documentação técnica e contribui para futuras manutenções e evoluções do projeto.

---

## 👥 Histórias de Usuários

* **Chefe do SAC:** Durante horários de pico, falhas em sensores causam grande perda de tempo com semáforos inutilizados.
* **Motorista de aplicativo:** Em chuvas fortes, o tempo de verde é insuficiente devido à baixa visibilidade e redução da velocidade dos veículos.
* **Pedestre (aposentada):** O tempo reduzido para travessia gera insegurança e pressão dos motoristas.

Esses relatos foram fundamentais para a definição das funcionalidades e prioridades do sistema.

---

## 📊 Priorização de Requisitos (MoSCoW)

* **Must Have (M):** Sensores de mapeamento do tráfego, sensores climáticos e adaptação automática do tempo dos sinais.
* **Should Have (S):** Botão para travessia de pedestres e tempo fixo mínimo para travessia.
* **Could Have (C):** Uso de inteligência artificial para adaptação do tráfego conforme horários.
* **Won’t Have (W):** Inteligência artificial avançada para monitoramento completo do tráfego (fora do escopo atual).

---

## 🌐 Arquitetura e Infraestrutura IoT

### Equipamentos de Rede

* **Access Point:** Conexão de usuários e dispositivos
* **Switch:** Organização da rede interna
* **Roteador:** Interligação entre redes
* **Firewall:** Proteção da rede contra acessos indevidos
* **Servidor Local:** Hospedagem dos serviços do sistema

---

## 🖥️ Sistema Operacional do Servidor

Foi realizada uma comparação entre sistemas operacionais para o servidor do projeto:

* **Windows Server**

  * Custo elevado (licença paga)
  * Boa segurança, porém mais visado por ataques
  * Maior consumo de recursos

* **Ubuntu Server**

  * Gratuito e open source
  * Alta segurança e atualizações frequentes
  * Excelente suporte para IoT
  * Baixo consumo de recursos

**Sistema recomendado:** Ubuntu Server

---

## 📄 Licença

Projeto desenvolvido para fins acadêmicos e educacionais.

---

## ✅ Status do Projeto

📌 Em desenvolvimento / Protótipo conceitual

---

## 📬 Contato

Para mais informações ou dúvidas sobre o projeto, entre em contato com os autores.
