function singleThread() {
    console.log('----------------------------------------------');
    console.log('         EL PROCESO DE NODE JS       ');
    console.log('Id del proceso ................' + process.pid);
    console.log('Título ........................' + process.title);
    console.log('Directorio de Node.............' + process.execPath);
    console.log('Directorio actual..............' + process.cwd());
    console.log('Versión del node...............' + process.version);
    console.log('Plataforma (S.O) ..............' + process.platform);
    console.log('Arquitectura (S.O).............' + process.arch);
    console.log('Tiempo activo del node.........' + process.uptime());
    console.log('Argumento del proceso..........' + process.argv);
    console.log('----------------------------------------------');
}

singleThread();