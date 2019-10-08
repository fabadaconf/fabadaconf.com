# Fabada Conf

:sparkles: Main website of the organization :sparkles:

## Setup

Este website está desarrollado con [Middleman](https://middlemanapp.com/), así que antes de comenzar a trabajar en el proyecto, debes asegurarte de tener instalados:

- **Ruby**: puedes seguir la guía de instalación de la página web de **Ruby** [haciendo click aquí](https://www.ruby-lang.org/es/documentation/installation/). Una vez instalado, deberás instalar también la gema `bundler` ejecutando el comando `gem install bundler`.
- **Nodejs**: puedes seguir la guía de instalación de la página web de **Nodejs** [haciendo click aquí](https://nodejs.org/es/download/).

Tras esto, clona el repositorio del website e instala todas las dependencias necesarias, así como los paquetes npm:

```bash
user@computer:~/Documents> git clone https://github.com/fabadaconf/fabadaconf.com.git
user@computer:~/Documents> cd fabadaconf.com
user@computer:~/Documents/fabadaconf.com> bundle install
user@computer:~/Documents/fabadaconf.com> npm ci
```

Si todo ha ido bien, podrás iniciar un servidor de desarrollo ejecutando:

```bash
user@computer:~/Documents/fabadaconf.com> middleman serve
```

El website estará accesible a través de tu navegador web visitando la **URL** `http://localhost:4567`.

----------------------------

Este proyecto forma parte de la organización [fabadaconf](https://github.com/fabadaconf).
Esto significa que cumple con los [core values](https://github.com/fabadaconf/base/blob/master/files/VALUES.md), el [código de conducta](https://github.com/fabadaconf/base/blob/master/files/CODE_OF_CONDUCT.md), y usa una [licencia](https://github.com/fabadaconf/base/blob/master/files/LICENSE) equivalente.
