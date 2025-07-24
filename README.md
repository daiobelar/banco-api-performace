Este projeto contém testes de desempenho para o endpoint `/login` de uma API REST, utilizando o framework [k6](https://k6.io/). Os testes foram organizados para simular diferentes cenários de uso, como carga normal, stress, picos e durabilidade.

# 📊 Testes de Carga com K6 para API de Login

---

## 📁 Estrutura do Projeto

```
k6/
├── tests/
│   ├── login/
│   │   ├── carga.js         # Teste de carga
│   │   ├── stress.js        # Teste de estresse
│   │   ├── picos.js         # Teste de picos
│   │   ├── soak.js          # Teste de durabilidade
│   │   └── default.js       # Lógica comum de login
├── fixtures/
│   ├── postLogin.json       # Payload padrão para login
│   └── usuarios.json        # (opcional) Múltiplos logins
├── utils/
│   └── variaveis.js         # Função para definir a BASE_URL
```

---

## ▶️ Executando os testes

**Pré-requisitos:**

* Node.js (para editar e versionar)
* [k6](https://k6.io/docs/getting-started/installation/)

```bash
# Teste de carga
k6 run tests/login/carga.js

# Teste de stress
k6 run tests/login/stress.js

# Teste de picos
k6 run tests/login/picos.js

# Teste de durabilidade
k6 run tests/login/soak.js
```

### 🔁 Variáveis de ambiente

Você pode configurar a base da URL dinamicamente:

k6 run test/login/carga.js -e BASE_URL=http:suaapi.com

---

## 📈 Exportando relatórios

Para salvar os resultados de execução em um arquivo `.json`:

```bash
k6 run tests/login/carga.js --summary-export=relatorio-carga.json
```

Se quiser converter isso em HTML, você pode usar ferramentas como:

* [k6 Reporter](https://github.com/szkiba/xk6-dashboard)
* Scripts Python/Node customizados

Posso te ajudar a configurar um HTML com base nesse `.json` se quiser.

---

## ✍️ Autor

**Daiane Obelar**
Analista de Qualidade de Software
[LinkedIn](https://linkedin.com/in/daianeobelar) | [GitHub](https://github.com/dobelar)

---

Se tiver dúvidas ou quiser automatizar os testes no CI/CD (GitHub Actions, GitLab CI), entre em contato!
