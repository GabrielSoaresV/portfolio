# Certificados

Coloque os PDFs nesta pasta e registre cada arquivo em `certificados.json`.

Exemplo:

```json
[
  {
    "category": "backend",
    "subcategory": "java",
    "title": "Formação Java e Spring Boot",
    "issuer": "Plataforma de ensino",
    "date": "2026",
    "file": "certificados/java-spring-boot.pdf"
  }
]
```

Os identificadores de categoria e subcategoria estão em
`src/app/core/services/stacks.service.ts`.
