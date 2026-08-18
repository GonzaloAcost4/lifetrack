---
name: ultrareview
description: Ejecuta una auditoria arquitectonica profunda para React Native, buscando fugas de memoria, re-renders innecesarios y violaciones FSD.
---
# Ultrareview Skill

Cuando el usuario solicite \ultrareview\, realiza lo siguiente:
1. Analiza el rendimiento (Render loops, callbacks no memoizados en FlatList).
2. Valida la arquitectura FSD (Capa Core vs Features vs UI).
3. Verifica el rendimiento de las consultas Drizzle/SQLite (sin exceso de fetchings).
4. Confirma que Zustand se este mutando inmutablemente.
5. Si encuentras errores, corrígelos proactivamente antes de cerrar el turno.

