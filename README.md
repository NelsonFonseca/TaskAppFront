# TaskAppFront

Este proyecto es el frontend de una aplicación de gestión de tareas, desarrollado con **Angular 16**. La aplicación permite realizar operaciones CRUD (crear, leer, actualizar y eliminar tareas) e interactúa con el backend para almacenar las tareas en una base de datos.

## Tabla de Contenidos
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Requisitos](#requisitos)
- [Ejecución en Local](#ejecución-en-local)
- [Decisiones Técnicas](#decisiones-técnicas)
- [Posibles Mejoras](#posibles-mejoras)

---

## Estructura del Proyecto

```bash
src/app/
  ├── services/
  ├── components/
      ├── task-list/
      └── task-form/
  ├── models/
  ├── app.component.ts
  └── app.module.ts
```
---

## Requisitos

Para ejecutar este proyecto, necesitas:

- **Node.js** v18 o superior
- **Angular CLI** v16 o superior

---

## Ejecución en Local

### 1. Clonar el Repositorio

```bash
git clone https://github.com/NelsonFonseca/TaskAppFront.git
cd TaskAppFront
```

### 2. Instalar Dependencias

Instala las dependencias de Angular:
```bash
npm install
```

### 3. Ejecutar la Aplicación en Local

Inicia la aplicación en modo desarrollo con el siguiente comando:
```bash
ng serve
```
La aplicación estará disponible en http://localhost:4200.

---

## Decisiones Técnicas

1. **Framework de JavaScript:** Se eligió **Angular** por su capacidad para construir aplicaciones SPA escalables y su sólida estructura para componentes, servicios y módulos.
2. **Comunicación con el Backend:** La aplicación utiliza el servicio HttpClient de Angular para realizar solicitudes HTTP al backend. Esto permite que el frontend y el backend estén desacoplados, lo que facilita futuros cambios en cada componente.
3. **Gestión de Estado Local:** Para esta versión, la gestión de estado se mantiene a nivel de componente y servicios. Esta decisión simplifica el código y es adecuada para aplicaciones de tamaño pequeño a mediano.
4. **Diseño Responsive:** Aunque el diseño es básico, se ha implementado un diseño responsive para que la aplicación sea accesible desde dispositivos móviles.

---

## Posibles Mejoras

1. **Manejo Avanzado del Estado:** Para aplicaciones más complejas, se podría integrar **NgRx** para un manejo centralizado del estado. Esto facilita la administración del estado en aplicaciones más grandes.
2. **Mejoras en el Diseño UI/UX:** Se podría mejorar el diseño usando un framework de estilos como **Angular Material** o **Bootstrap** para una interfaz más profesional y accesible.
3. **Autenticación y Autorización:** Para un entorno de producción, sería ideal agregar un sistema de autenticación para proteger el acceso a las tareas.
4. **Tests de Componentes y E2E:** Actualmente se puede realizar testing básico. Agregar pruebas unitarias para cada componente y pruebas E2E (End-to-End) mejoraría la estabilidad de la aplicación.
5. **Variables de Entorno:** En vez de valores codificados, se recomienda usar variables de entorno para la configuración de la URL del backend y otras configuraciones específicas de cada entorno (producción, desarrollo, etc.).