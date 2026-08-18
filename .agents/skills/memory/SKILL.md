---
name: memory
description: Gestiona la persistencia de contexto a largo plazo para que el agente recuerde decisiones clave.
---
# Memory Skill

1. Almacena silenciosamente en un archivo \.agents/memory.json\ las preferencias del usuario sobre el ruteo, manejo de estado y UI.
2. Cuando el usuario pregunte algo ambiguo, lee el archivo de memoria para responder con el contexto previo.
3. Mantiene un log de las correcciones de codigo previas para no repetir el mismo error en el futuro.

