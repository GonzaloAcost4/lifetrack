---
name: memory
description: Gestiona la persistencia de contexto a largo plazo usando un JSON estructurado simulando una base de datos local.
---
# Memory Management Skill

Como no posees un servidor MCP externo, eres responsable de gestionar manualmente la memoria a largo plazo del proyecto.

## Estructura Obligatoria
Todas las preferencias, decisiones de arquitectura y convenciones de negocio deben guardarse en `.agents/memory.json` con el siguiente esquema estricto:

```json
{
  "core_architecture": [],
  "user_preferences": [],
  "resolved_errors": [],
  "business_logic": []
}
```

## Flujo de Trabajo
1. **Lectura:** Al iniciar un nuevo feature complejo, lee silenciosamente `memory.json` para entender el contexto.
2. **Escritura:** Si el usuario toma una decision clave (ej: "las calorias son enteros"), agregalo a la categoria correspondiente.
3. **Mantenimiento:** No dupliques informacion. Manten el JSON limpio y ordenado.
