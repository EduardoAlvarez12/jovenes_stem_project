# JOVENES-STEM-WEBSITE
Este repositorio aloja la API encargada de gestionar contenido y el frontend para consumir dicho servicio.

## DESCARGA DEL PROYECTO
1. git clone [enlace]

Preparar su propia rama como entorno de trabajo local:
2. cd [repositorio]
2. git branch [rama-tarea-que-esten-trabajando]
3. git checkout [rama-tarea-que-esten-trabajando]

## EJECUTAR EL FRONTEND
1. colocarse en la carpeta /react_website_cliente
2. npm install --force
3. npm run dev

## EJECUTAR EL BACKEND (opcional para el Sprint 1)
1. colocarse en la carpeta /jovenes-stem-website-app
2. python manage.py runserver
3. entrar a http://127.0.0.1:8000/content/api/

### REALIZAR UN PUSH
1. colocarse en la carpeta y rama adecuada
2. git add .
3. git commit -m "mensaje-corto-tarea-que-trabajé"
4. git push origin [rama-tarea-que-esten-trabajando]

### REALIZAR UN PULL REQUEST
1. realizar un pull request desde el repositorio de GitHub
2. una vez aprobado se mezclara su rama con la main
3. es importante mantener su rama propia actualizada