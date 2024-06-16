como puedo crear una app apk android con ionic y krpano


Para la integración de Krpano en tu proyecto Ionic, es recomendable utilizar **NgModule** para mantener la estructura modular y organizada del proyecto. Aquí tienes los pasos detallados para configurar el proyecto utilizando NgModule:

### Paso 1: Configurar el Proyecto Ionic con Angular

1. **Crear un nuevo proyecto Ionic con Angular**:
    ```bash
    ionic start myKrpanoApp blank --type=angular
    ```
    - Selecciona "NgModule" cuando se te pregunte.

2. **Navegar al directorio del proyecto**:
    ```bash
    cd myKrpanoApp
    ```

### Paso 2: Integrar el Proyecto Krpano sin Modificarlo

1. **Copiar los archivos del Proyecto Krpano**:
    - Copia todos los archivos de tu proyecto Krpano (HTML, JS, imágenes, etc.) en la carpeta `src/assets/krpano` de tu proyecto Ionic.

2. **Crear una página para mostrar el proyecto Krpano**:
    ```bash
    ionic generate page Panorama
    ```

3. **Modificar `panorama.page.html` para incluir un Iframe**:
    - Usa un iframe para incluir tu proyecto Krpano:
    ```html
    <ion-header>
      <ion-toolbar>
        <ion-title>Panorama</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <iframe src="assets/krpano/index.html" style="width: 100%; height: 100%; border: none;"></iframe>
    </ion-content>
    ```

4. **Modificar `panorama.page.scss` para asegurar que el Iframe ocupa toda la pantalla**:
    ```scss
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
    ```

### Paso 3: Navegar a la Página desde la Aplicación Principal

1. **Modificar `app.component.html` para agregar un enlace a la página de Panorama**:
    ```html
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
      <ion-menu side="start" menuId="first" contentId="main-content">
        <ion-header>
          <ion-toolbar>
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item routerLink="/panorama">Panorama</ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-app>
    ```

2. **Modificar `app-routing.module.ts` para asegurar que la ruta `panorama` está definida**:
    ```typescript
    import { NgModule } from '@angular/core';
    import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

    const routes: Routes = [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'panorama',
        loadChildren: () => import('./panorama/panorama.module').then(m => m.PanoramaPageModule)
      }
    ];

    @NgModule({
      imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
      ],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }
    ```

### Paso 4: Construir y Probar la Aplicación

1. **Agregar la plataforma Android**:
    ```bash
    ionic capacitor add android
    ```

2. **Construir la aplicación**:
    ```bash
    ionic build
    npx cap sync
    ```

3. **Abrir en Android Studio**:
    ```bash
    npx cap open android
    ```

4. **Compilar y Probar**:
    - Desde Android Studio, selecciona `Run` para compilar y probar la aplicación en un emulador o dispositivo físico.

### Paso 5: Crear el APK

1. **Crear el APK desde Android Studio**:
    - En Android Studio, selecciona `Build > Build Bundle(s) / APK(s) > Build APK(s)`.
    - Esto generará el APK en el directorio `app/build/outputs/apk/`.

### Consideraciones Adicionales

- **Permisos**: Asegúrate de que tu aplicación tenga los permisos necesarios en el archivo `AndroidManifest.xml` para acceder a la red si es necesario.
- **Optimización**: Considera minificar y optimizar los archivos Krpano y los recursos de tu aplicación para mejorar el rendimiento y reducir el tamaño del APK.

Con estos pasos, deberías poder integrar tu aplicación Krpano dentro de un proyecto Ionic con Angular utilizando NgModule, sin modificar los archivos originales de Krpano y encapsulándolos en un iframe dentro de tu aplicación Ionic.