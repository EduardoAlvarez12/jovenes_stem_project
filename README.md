# JOVENES-STEM-WEBSITE
Este repositorio aloja el panel de administración que permite gestionar la API encargada del contenido y el frontend para consumir dicho servicio.

## DESCARGA DEL PROYECTO
1. git clone [enlace]

2. Preparar su propia rama como entorno de trabajo local:
3. cd [repositorio]
4. git branch [rama-tarea-que-esten-trabajando]
5. git checkout [rama-tarea-que-esten-trabajando]

## EJECUTAR EL FRONTEND
1. colocarse en la carpeta /react_website_cliente
2. npm install --force
3. npm run dev

## EJECUTAR EL BACKEND 
1. colocarse en la carpeta /jovenes-stem-website-app
2. pip install -r requirements.txt
3. python manage.py migrate
4. python manage.py createsuperuser
5. python manage.py runserver
6. entrar a http://127.0.0.1:8000/content/api/

## REALIZAR UN PUSH
1. colocarse en la carpeta y rama adecuada
2. git add .
3. git commit -m "mensaje-corto-tarea-que-trabajé"
4. git push origin [rama-tarea-que-esten-trabajando]

## REALIZAR UN PULL REQUEST
1. realizar un pull request desde el repositorio de GitHub
2. una vez aprobado se mezclara su rama con la main
3. es importante mantener su rama propia actualizada
