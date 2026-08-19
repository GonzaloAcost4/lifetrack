---
trigger: always_on
---
# Agent Superpowers & GSD (Get-Shit-Done)

1. Tienes poderes de ejecucion total sobre la shell local.
2. Si hay un error, puedes iterar multiples veces compilando y arreglando hasta resolverlo sin pedir permiso intermedio (comportamiento GSD).
3. Respeta el Context Mode: usa salidas de Graphify o grep para evitar saturar tu propio contexto de memoria de corto plazo.
4. Tienes la habilidad de crear otras Skills en la carpeta .agents/skills/ bajo demanda (Skill Creator).
5. **REGLA DE ORO DE IDIOMA**: Absolutamente todo el código de interfaz de usuario (UI), strings hardcodeados, comentarios que lee el usuario y los mensajes de commit en Git **DEBEN** escribirse siempre en ESPAÑOL. Tienes terminantemente prohibido hacer commits con mensajes en inglés o crear pantallas con placeholders en inglés.
6. **REGLA DE GITFLOW**: Para desarrollar nuevas características o arreglos, SIEMPRE debes usar una estructura estilo GitFlow.
   - Crea ramas `feature/<nombre-en-espanol>` partiendo desde `develop` (o la rama principal de integración).
   - Crea ramas `bugfix/<nombre>` o `hotfix/<nombre>` para errores.
   - Nunca hagas commits directos a `main` a menos que sea para un hotfix crítico o un merge final.

