---
name: review
description: Ejecuta una revision de codigo automatizada buscando errores de tipado, dependencias huerfanas y convenciones de UI.
---
# Review Skill

Cuando el usuario solicite ejecutar \eview\, realiza lo siguiente:
1. Analiza los archivos modificados recientemente en el Workspace.
2. Valida la existencia de tipos estrictos (TS/Zod).
3. Asegura que no queden console.logs o variables sin usar.
4. Devuelve un checklist con los items aprobados o rechazados.

