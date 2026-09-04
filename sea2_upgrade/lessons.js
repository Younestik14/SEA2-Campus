/* SEA2 Campus · Lecciones interactivas v5
   Las unidades son una organización didáctica propuesta a partir de los contenidos/resultados del currículo.
*/
const LESSON_META={
 '0522':{
  core:['Empieza por identificar el nivel de tensión, topología, trazado y cargas.','Separa siempre cálculo eléctrico, selección de materiales, representación y comprobaciones reglamentarias.','En un CT razona por bloques: llegada MT → maniobra/protección → transformación → BT → puesta a tierra → ensayos.'],
  examples:[['Red BT trifásica','Una carga de 18 kW a 400 V y cos φ 0,9: I = P/(√3·V·cosφ) = 18.000/(1,732·400·0,9) ≈ 28,87 A.','La intensidad es un dato de partida para comparar alternativas, pero no basta por sí sola para elegir conductor o protección.'],['Relación de transformación','Un transformador ideal 20 kV/400 V tiene m = 20.000/400 = 50.','La relación expresa cuánto se transforma la tensión; en un caso real también se consideran características y pérdidas del equipo.']],
  exercises:[['mc','En una red trifásica, ¿qué tensión aparece en P = √3·V·I·cosφ?',['Tensión de línea','Tensión de tierra','Siempre tensión de fase'],0,'La expresión habitual de potencia trifásica equilibrada usa tensión de línea.'],['num','Calcula la intensidad aproximada de 11 kW a 400 V y cos φ = 0,85 usando I=P/(√3·V·cosφ).',21.34,0.15,'≈ 18,67 A.']]},
 '0602':{
  core:['Convierte el proyecto en fases, recursos, responsables, materiales, tiempos y criterios de aceptación.','La gestión eficaz deja trazabilidad: pedido → recepción → almacén → montaje → prueba → entrega.','Mantenimiento no es solo reparar: define preventivo, correctivo, indicadores, registros y recursos.'],
  examples:[['Planificación','Para una obra de 5 fases, define dependencias y puntos críticos antes de asignar fechas.','Primero secuencia y recursos; después calendario. Si falta una actividad crítica, el cronograma engaña.'],['Disponibilidad','Si MTBF = 900 h y MTTR = 6 h: disponibilidad aproximada = 900/(900+6) = 99,34 %.','Es un indicador educativo; en una instalación real se define el alcance y periodo de observación.']],
  exercises:[['mc','¿Qué documento conecta las fases de montaje con materiales y fechas?',['Cronograma/plan de montaje','Solo el catálogo','Solo la factura'],0,'El plan de montaje coordina tareas, recursos y tiempos.'],['num','Con MTBF=480 h y MTTR=8 h, calcula A=MTBF/(MTBF+MTTR)·100.',98.36,0.2,'≈ 98,36 %.']]},
 '0517':{
  core:['En ICT identifica primero red, punto de medida y recorrido de la señal.','En un balance en dB las ganancias se suman y las pérdidas se restan.','Una medida solo tiene sentido si sabes dónde se hizo, con qué instrumento y bajo qué condiciones.'],
  examples:[['Balance de señal','Entrada 70 dBµV, amplificador +20 dB, repartidor -6 dB y cable -4 dB: salida = 70+20-6-4 = 80 dBµV.','Documenta cada tramo para localizar pérdidas inesperadas.'],['Pérdida acumulada','Tres tramos pierden 2, 3 y 5 dB: pérdida total = 10 dB.','Si la salida es menor de lo previsto, localiza primero el tramo con mayor desviación respecto al diseño.']],
  exercises:[['mc','Una pérdida de 7 dB en un tramo significa que el nivel…',['Aumenta 7 dB','Disminuye 7 dB','No cambia'],1,'Una atenuación reduce el nivel.'],['num','Entrada 68 dBµV, ganancia +15 dB y pérdidas 4+3 dB. ¿Salida?',76,0.2,'68+15-4-3 = 76 dBµV.']]},
 '0521':{
  core:['Antes de programar: define proceso, estados, secuencia, lista de E/S y condiciones de seguridad.','Diferencia mando, potencia, sensores y actuadores.','En diagnóstico divide el problema en entrada → lógica → salida → actuador y registra cada comprobación.'],
  examples:[['Marcha-paro','Una memoria M0.0 puede quedar activa al pulsar MARCHA y mantenerse mientras no exista PARO o una condición de seguridad.','La simulación de la web representa esta lógica de forma didáctica; un automatismo real requiere esquema, protecciones y verificación.'],['GRAFCET','Para una cinta: ETAPA 0 reposo → transición marcha → ETAPA 1 mover → transición final de carrera → ETAPA 2 parar.','La secuencia debe poder traducirse después a E/S y lógica de PLC.']],
  exercises:[['mc','¿Qué conviene definir antes de programar un PLC?',['Secuencia y lista de E/S','Solo el nombre del proyecto','Solo el presupuesto'],0,'La lógica nace de la secuencia y las señales.'],['mc','En un GRAFCET, una transición sirve para…',['Definir la condición que permite avanzar','Medir tensión','Calcular potencia'],0,'Las transiciones condicionan el paso entre etapas.']]},
 '0526':{
  core:['Un proyecto técnico debe mantener coherencia entre necesidad, cálculos, planos, memoria, presupuesto, planificación y control.','Empieza por el problema que quieres resolver y define criterios de aceptación medibles.','La interdisciplinariedad significa integrar electricidad, automatización, documentación, gestión, seguridad y costes.'],
  examples:[['Trazabilidad','Si una memoria indica 45 kW, el cuadro, protecciones, conductores, presupuesto y planos deben ser compatibles con ese dato.','Cada decisión técnica debe poder localizarse en un cálculo, plano, catálogo o criterio del proyecto.'],['Planificación','Divide el proyecto en definición → diseño → cálculos → planos → presupuesto → revisión → entrega.','Asigna entregables y una comprobación al final de cada fase.']],
  exercises:[['mc','¿Qué debe ser coherente en un proyecto técnico?',['Memoria, cálculos, planos y presupuesto','Solo la portada','Solo el presupuesto'],0,'La trazabilidad entre documentos es fundamental.'],['mc','Un criterio de aceptación sirve para…',['Comprobar objetivamente si el resultado cumple lo definido','Sustituir el proyecto','Evitar pruebas'],0,'Permite verificar el resultado.']]},
 '0528':{
  core:['Distingue costes fijos, variables, ingresos, margen y punto muerto.','Un presupuesto profesional separa cantidades, precio unitario, subtotal, impuestos y condiciones.','La decisión empresarial debe apoyarse en hipótesis explícitas, no solo en una cifra final.'],
  examples:[['Punto muerto','Costes fijos 12.000 €, precio 80 €/unidad y coste variable 50 €/unidad: Q*=12.000/(80-50)=400 unidades.','A partir de 400 unidades, el modelo básico empieza a generar beneficio si se mantienen las hipótesis.'],['Margen','Precio 100 € y coste variable 60 € → margen unitario = 40 €.','El margen unitario es el que contribuye a cubrir costes fijos y después generar beneficio.']],
  exercises:[['mc','El punto muerto representa…',['Ingresos = costes totales','IVA = 0','Potencia máxima'],0,'En el modelo básico no hay beneficio ni pérdida.'],['num','Con CF=9.000 €, P=60 € y CVu=30 €, calcula Q*=CF/(P-CVu).',300,0.2,'9.000/(60-30)=300 unidades.']]},
 '0529':{
  core:['FCT conecta el aprendizaje del aula con procedimientos reales de empresa bajo supervisión.','Registra tareas, herramientas, documentación, medidas, incidencias y aprendizajes; evita datos personales innecesarios.','La seguridad y las instrucciones de la empresa tienen prioridad sobre cualquier simulación o guía de estudio.'],
  examples:[['Registro técnico','Para una intervención: fecha → instalación → tarea → procedimiento → medida → resultado → incidencia → acción → aprendizaje.','Este formato convierte la experiencia en evidencia técnica.'],['Medida','Anota instrumento, punto de medida, escala/rango, valor y condiciones relevantes.','Un número sin contexto es difícil de interpretar o reproducir.']],
  exercises:[['mc','¿Qué aporta un buen registro de FCT?',['Trazabilidad del trabajo y aprendizaje','Solo una lista de horas','Nada técnico'],0,'Documentar tareas y aprendizajes mejora la trazabilidad.'],['mc','Antes de una tarea con riesgo debes…',['Seguir el procedimiento seguro y las instrucciones aplicables','Improvisar','Desactivar protecciones sin autorización'],0,'La seguridad tiene prioridad.']]}
};

function buildLesson(code,unit,index){
 const meta=LESSON_META[code]||LESSON_META['0526'];
 const title=unit[1], summary=unit[2];
 const seed=meta.core[index%meta.core.length];
 const ex=meta.examples[index%meta.examples.length];
 const exerciseSet=meta.exercises;
 return {id:code+'-'+unit[0],code,unitNo:unit[0],title,summary,goal:`Al terminar esta unidad deberías poder explicar ${title.toLowerCase()}, identificar los datos importantes y resolver un caso básico justificando cada decisión.`,theory:[`Qué debes entender: ${summary}.`,`Idea clave: ${seed}`,`Método de trabajo: 1) identifica datos y unidades; 2) dibuja o esquematiza el sistema; 3) aplica el procedimiento; 4) comprueba el resultado; 5) documenta supuestos y límites.`,`Transferencia profesional: relaciona la teoría con una instalación, documento, medida o decisión que encontrarías en una práctica real.`],example:{title:ex[0],problem:`Caso guiado de ${title}: ${ex[1]}`,steps:[`1. Lee el enunciado y separa magnitudes conocidas de incógnitas.`,`2. Elige el modelo o procedimiento adecuado y escribe la fórmula/criterio antes de sustituir.`,`3. Sustituye con unidades coherentes y realiza el cálculo o decisión.`,`4. Comprueba si el resultado tiene sentido y explica qué falta verificar en una instalación real.`,`5. Conclusión: ${ex[2]}`],answer:ex[2]},exercises:generateLessonExercises(code,title,unit[0],exerciseSet),simulation:simulationFor(code,title)};
}


function generateLessonExercises(code,title,unitNo,base){
 const out=base.map((e,i)=>({type:e[0],question:e[1],options:e[2],answer:e[3],tolerance:e[0]==='num'?0.2:0,feedback:e[4],id:code+'-'+unitNo+'-'+i}));
 const add=(type,q,opts,ans,tol,fb)=>out.push({type,question:q,options:opts,answer:ans,tolerance:tol||0,feedback:fb,id:code+'-'+unitNo+'-'+out.length});
 const common=[
  ['mc',`En ${title.toLowerCase()}, ¿qué debes identificar primero?`,['Datos, unidades y objetivo','El color del cuadro','Solo el precio'],0,`Empieza por los datos, unidades y objetivo del problema.`],
  ['mc',`¿Qué paso debe hacerse antes de aceptar un resultado de ${title.toLowerCase()}?`,['Comprobar coherencia y supuestos','Cambiar unidades al azar','Ignorar las condiciones'],0,'La comprobación evita aceptar resultados sin sentido.'],
  ['mc',`Si cambias una magnitud de entrada en un cálculo de ${title.toLowerCase()}, ¿qué debes hacer?`,['Recalcular y revisar las condiciones','Mantener el resultado anterior','Eliminar las unidades'],0,'Un cambio de datos puede modificar el resultado y sus comprobaciones.'],
  ['mc',`¿Qué documento o evidencia ayuda a justificar una decisión técnica en ${title.toLowerCase()}?`,['Cálculo, esquema, medida o documentación técnica','Una opinión sin datos','Solo una portada'],0,'La trazabilidad técnica se apoya en evidencias.'],
  ['mc',`¿Qué unidad debes cuidar especialmente al resolver un problema de ${title.toLowerCase()}?`,['Las unidades de todas las magnitudes','Ninguna','Solo el nombre del módulo'],0,'Las unidades coherentes son parte del procedimiento.'],
  ['mc',`¿Qué opción describe mejor un procedimiento profesional para ${title.toLowerCase()}?`,['Datos → procedimiento → resultado → comprobación','Resultado → fórmula inventada → entrega','Solo memorizar la respuesta'],0,'La secuencia permite justificar y revisar el trabajo.'],
  ['mc',`Ante una discrepancia en una práctica de ${title.toLowerCase()}, ¿qué conviene hacer?`,['Revisar medidas, conexiones, datos y procedimiento','Ocultar el resultado','Cambiar la respuesta hasta acertar'],0,'El diagnóstico parte de comprobaciones reproducibles.'],
  ['mc',`¿Para qué sirve documentar las hipótesis de un ejercicio de ${title.toLowerCase()}?`,['Para conocer los límites del resultado','Para evitar hacer cálculos','Para sustituir la seguridad'],0,'Las hipótesis permiten interpretar correctamente el resultado.'],
 ];
 common.forEach(x=>add(...x));
 if(code==='0522'){
  add('num','Carga trifásica de 7,2 kW a 400 V y cos φ=0,9. Calcula I=P/(√3·V·cosφ).',null,11.55,0.15,'≈ 11,55 A.');
  add('num','Transformador ideal 20 kV/400 V. Calcula la relación m=U1/U2.',null,50,0.05,'m=50.');
  add('mc','En el análisis de una red, ¿por qué no basta con calcular la intensidad?', ['Porque hay que comprobar otros criterios de diseño y protección','Porque la intensidad nunca importa','Porque solo importa el presupuesto'],0,'La intensidad es solo una parte del dimensionado.');
 } else if(code==='0602'){
  add('num','Con MTBF=900 h y MTTR=9 h, calcula A=MTBF/(MTBF+MTTR)·100.',null,99.01,0.15,'≈99,01 %.');
  add('num','Si el consumo medio es 12 unidades/día, plazo 5 días y stock de seguridad 10 unidades, calcula punto de pedido = consumo·plazo + SS.',null,70,0.2,'12·5+10=70 unidades.');
  add('mc','¿Qué aporta el mantenimiento preventivo?', ['Reduce la probabilidad de fallos mediante intervenciones planificadas','Elimina toda avería para siempre','Sustituye las protecciones'],0,'El preventivo se planifica para reducir riesgos/fallos.');
 } else if(code==='0517'){
  add('num','Entrada 72 dBµV, ganancia +12 dB y pérdidas 3+5 dB. Calcula salida.',null,76,0.2,'72+12-3-5=76 dBµV.');
  add('num','Una señal de 3 dBm equivale aproximadamente a cuántos mW? Usa P(mW)=10^(dBm/10).',null,1.995,0.08,'≈1,995 mW.');
  add('mc','Una medida ICT debe registrar, además del valor…',['Punto, instrumento y condiciones relevantes','Solo la hora','Solo el nombre del alumno'],0,'La trazabilidad de la medida es esencial.');
 } else if(code==='0521'){
  add('mc','En una secuencia PLC, ¿qué representa una entrada I0.0?', ['Una señal que recibe el PLC','Una salida de potencia','Un fusible'],0,'Las entradas son señales que recibe el PLC.');
  add('mc','¿Qué ventaja tiene separar entrada → lógica → salida en diagnóstico?', ['Permite localizar en qué etapa está el fallo','Hace innecesarias las mediciones','Evita documentar'],0,'Divide el diagnóstico en bloques verificables.');
  add('mc','En GRAFCET, una etapa representa principalmente…',['Un estado o acción del proceso','Un impuesto','Una sección de cable'],0,'Las etapas describen estados/acciones del proceso.');
 } else if(code==='0526'){
  add('mc','Si el plano indica una potencia distinta a la memoria, ¿qué debes hacer?', ['Revisar y reconciliar la documentación','Ignorarlo','Cambiar solo la portada'],0,'La coherencia documental es esencial.');
  add('mc','¿Qué elemento permite comprobar objetivamente que una instalación cumple lo diseñado?', ['Criterios de aceptación y pruebas','Solo una foto','Solo el presupuesto'],0,'Los criterios de aceptación hacen verificable el resultado.');
  add('mc','¿Cuál es una buena secuencia de proyecto?', ['Necesidad → diseño → cálculos → planos → presupuesto → revisión','Presupuesto → portada → entrega','Planos → borrar cálculos'],0,'La secuencia integra diseño y documentación.');
 } else if(code==='0528'){
  add('num','CF=12000 €, P=80 €/u y CVu=50 €/u. Calcula punto muerto.',null,400,0.2,'12000/(80-50)=400 unidades.');
  add('num','Precio 100 € y coste variable 60 €. Calcula margen unitario.',null,40,0.2,'100-60=40 €.');
  add('mc','Si aumenta el coste variable manteniendo el precio, el punto muerto normalmente…',['Aumenta','Disminuye siempre','No puede cambiar'],0,'El margen unitario disminuye y se necesitan más unidades.');
 } else if(code==='0529'){
  add('mc','¿Qué debe acompañar a una medida registrada en FCT?', ['Punto de medida, instrumento y contexto','Solo el número','Solo el nombre de la empresa'],0,'Una medida sin contexto es difícil de reproducir.');
  add('mc','Ante una tarea real no contemplada en tu formación, ¿qué debes hacer?', ['Seguir instrucciones y supervisión de la empresa','Improvisar','Desactivar protecciones'],0,'La supervisión y los procedimientos de empresa tienen prioridad.');
  add('mc','¿Qué convierte una tarea de FCT en aprendizaje técnico?', ['Registrar procedimiento, resultado, incidencia y aprendizaje','Solo anotar que se hizo','No documentarla'],0,'La reflexión técnica convierte la experiencia en evidencia de aprendizaje.');
 }
 return out.slice(0,12);
}

function simulationFor(code,title){
 const common={
  '0522':{name:'Diseñador rápido de línea BT',desc:'Introduce potencia, tensión y cos φ para estimar corriente trifásica y luego compara una sección de forma educativa.',fields:[['P','Potencia (kW)','18'],['V','Tensión de línea (V)','400'],['cos','cos φ','0.9'],['L','Longitud (m)','50'],['S','Sección (mm²)','6']],run:v=>{const I=(v.P*1000)/(Math.sqrt(3)*v.V*v.cos);const dv=(2*0.0175*v.L*I)/v.S;return `I ≈ ${I.toFixed(2)} A · ΔV simplificada ≈ ${dv.toFixed(2)} V. Falta comprobar método de instalación, intensidad admisible, caída reglamentaria, protección, cortocircuito y demás criterios aplicables.`;}},
  '0602':{name:'Planificador de montaje',desc:'Ordena fases y observa cómo cambia el avance. La simulación no sustituye un cronograma de obra.',fields:[['fases','Número de fases','6'],['crit','Puntos críticos','2'],['rec','Recursos clave','3']],run:v=>{const total=Math.max(1,v.fases);const critical=Math.min(total,Math.max(0,v.crit));return `Plan sugerido: ${total} fases · ${critical} puntos críticos a revisar · ${v.rec} recursos clave. Añade responsables, dependencias, fechas, materiales y criterios de aceptación antes de darlo por válido.`;}},
  '0517':{name:'Laboratorio de balance ICT',desc:'Suma ganancias y resta pérdidas para visualizar un recorrido de señal.',fields:[['in','Nivel entrada (dBµV)','68'],['gain','Ganancias (dB)','15'],['loss','Pérdidas totales (dB)','7']],run:v=>{const out=v.in+v.gain-v.loss;return `Nivel de salida ≈ ${out.toFixed(2)} dBµV. Comprueba el punto exacto de medida, tolerancias, frecuencia, equipo de medida y valores reglamentarios/fabricante.`;}},
  '0521':{name:'Simulador PLC · cinta',desc:'Prueba una secuencia simple de marcha, paro y final de carrera.',fields:[],run:()=>''},
  '0526':{name:'Revisor de coherencia de proyecto',desc:'Introduce datos clave y detecta campos que faltan antes de entregar.',fields:[['pot','Potencia prevista','45'],['plan','Tiene planos (1/0)','1'],['calc','Tiene cálculos (1/0)','1'],['budget','Tiene presupuesto (1/0)','0']],run:v=>{const missing=[];if(!v.pot)missing.push('potencia prevista');if(v.plan!==1)missing.push('planos');if(v.calc!==1)missing.push('cálculos');if(v.budget!==1)missing.push('presupuesto');return missing.length?`Faltan o deben revisarse: ${missing.join(', ')}.`:'Checklist mínimo superado: potencia, planos, cálculos y presupuesto. Revisa además memoria, normativa, planificación, seguridad y criterios de aceptación.';}},
  '0528':{name:'Simulador de punto muerto',desc:'Comprueba cómo influyen costes fijos, precio y coste variable.',fields:[['cf','Costes fijos (€)','9000'],['p','Precio/unidad (€)','60'],['cv','Coste variable/unidad (€)','30']],run:v=>{const m=v.p-v.cv;if(m<=0)return 'El margen unitario debe ser positivo para este modelo básico.';return `Punto muerto ≈ ${(v.cf/m).toFixed(2)} unidades. Por encima de ese volumen, el modelo básico empieza a generar beneficio.`;}},
  '0529':{name:'Registro de intervención FCT',desc:'Genera la estructura de un registro técnico para una tarea.',fields:[['task','Tarea','Verificación de cuadro'],['measure','Medida','230 V'],['result','Resultado','Conforme']],run:v=>`Registro: tarea “${v.task}” → medida “${v.measure}” → resultado “${v.result}”. Añade fecha, punto de medida, instrumento, procedimiento, incidencia y aprendizaje sin incluir datos personales innecesarios.`}
 };
 return common[code]||common['0526'];
}

const LESSONS=MODULES.flatMap(m=>m.units.map((u,i)=>buildLesson(m.code,u,i)));

function lessonProgress(){try{return JSON.parse(localStorage.getItem('sea2-lessons')||'{}')}catch{return {}}}
function saveLessonProgress(p){localStorage.setItem('sea2-lessons',JSON.stringify(p));}
function renderLessonIndex(filter='',module='ALL'){
 const q=filter.toLowerCase().trim();
 const list=LESSONS.filter(l=>(module==='ALL'||l.code===module)&&(`${l.code} ${l.title} ${l.summary} ${l.goal}`).toLowerCase().includes(q));
 const p=lessonProgress();
 const by={};list.forEach(l=>(by[l.code]??=[]).push(l));
 const html=Object.entries(by).map(([code,arr])=>{const m=MODULES.find(x=>x.code===code);return `<article class="lesson-module"><div class="lesson-module-head"><div><span class="code">${code}</span><h3>${esc(m.short)}</h3></div><span>${arr.filter(l=>p[l.id]?.done).length}/${arr.length} dominadas</span></div><div class="lesson-list">${arr.map(l=>`<button class="lesson-row ${p[l.id]?.done?'done':''}" data-lesson="${l.id}"><span class="unit-no">${l.unitNo}</span><span><b>${esc(l.title)}</b><small>${esc(l.summary)}</small></span><em>${p[l.id]?.score!=null?p[l.id].score+'%':'Empezar →'}</em></button>`).join('')}</div></article>`}).join('');
 $('#lessonGrid').innerHTML=html||'<div class="notice" style="grid-column:1/-1">No hay unidades que coincidan.</div>';
 $$('#lessonGrid [data-lesson]').forEach(b=>b.onclick=()=>openLesson(b.dataset.lesson));
 const total=LESSONS.length,done=Object.values(p).filter(x=>x.done).length;$('#lessonGlobalProgress').textContent=`${done}/${total} unidades dominadas · ${Math.round(done/total*100)}%`;
 $('#lessonGlobalBar').style.width=(done/total*100)+'%';
}
function openLesson(id){
 const l=LESSONS.find(x=>x.id===id);if(!l)return;
 const p=lessonProgress(),state=p[id]||{answers:{},score:null,done:false};
 $('#lessonDialogContent').innerHTML=`<div class="lesson-header"><span class="code">${l.code} · UD ${l.unitNo}</span><h2>${esc(l.title)}</h2><p class="lead">${esc(l.goal)}</p></div><div class="lesson-tabs"><button class="lesson-tab active" data-ltab="theory">📚 Teoría</button><button class="lesson-tab" data-ltab="example">🧮 Ejemplo guiado</button><button class="lesson-tab" data-ltab="practice">✅ Práctica</button><button class="lesson-tab" data-ltab="sim">⚙️ Simulación</button></div><div id="lessonTabContent"></div>`;
 $('#lessonDialog').showModal();
 function tab(which){
  $$('#lessonDialogContent [data-ltab]').forEach(b=>b.classList.toggle('active',b.dataset.ltab===which));
  if(which==='theory') $('#lessonTabContent').innerHTML=`<div class="lesson-theory">${l.theory.map((x,i)=>`<article><span>${i+1}</span><div><h3>${['Qué debes entender','Idea clave','Método de trabajo','Transferencia profesional'][i]}</h3><p>${esc(x)}</p></div></article>`).join('')}<div class="lesson-goal"><b>Objetivo de la unidad</b><p>${esc(l.goal)}</p></div></div>`;
  if(which==='example') $('#lessonTabContent').innerHTML=`<div class="worked-example"><span class="tag">EJEMPLO RESUELTO</span><h3>${esc(l.example.title)}</h3><p>${esc(l.example.problem)}</p><ol>${l.example.steps.map(x=>`<li>${esc(x)}</li>`).join('')}</ol><div class="answer-box"><b>Conclusión</b><p>${esc(l.example.answer)}</p></div></div>`;
  if(which==='practice') renderLessonPractice(l,state);
  if(which==='sim') renderLessonSimulation(l);
 }
 $$('#lessonDialogContent [data-ltab]').forEach(b=>b.onclick=()=>tab(b.dataset.ltab));
 tab('theory');
}
function renderLessonPractice(l,state){
 $('#lessonTabContent').innerHTML=`<div class="practice-stack"><div class="practice-head"><div><span class="tag">CORRECCIÓN AUTOMÁTICA</span><h3>Comprueba si has entendido la unidad</h3></div><div id="lessonScore" class="score-pill">${state.score==null?'Sin corregir':state.score+'%'}</div></div><div id="lessonExercises"></div><button id="gradeLesson" class="btn primary">Corregir ejercicios</button><div id="lessonGradeFeedback" class="result">Puedes intentarlo tantas veces como quieras.</div></div>`;
 const answers=state.answers||{};
 $('#lessonExercises').innerHTML=l.exercises.map((e,i)=>e.type==='mc'?`<article class="exercise"><span class="exercise-no">${i+1}</span><h4>${esc(e.question)}</h4><div class="exercise-options">${e.options.map((o,j)=>`<label><input type="radio" name="ex${i}" value="${j}" ${String(answers[i])===String(j)?'checked':''}> ${String.fromCharCode(65+j)}) ${esc(o)}</label>`).join('')}</div><div class="exercise-feedback" id="exfb${i}"></div></article>`:`<article class="exercise"><span class="exercise-no">${i+1}</span><h4>${esc(e.question)}</h4><input class="wide-input" id="exnum${i}" inputmode="decimal" placeholder="Escribe el resultado" value="${answers[i]??''}"><div class="exercise-feedback" id="exfb${i}"></div></article>`).join('');
 $('#gradeLesson').onclick=()=>{let ok=0;const out={answers:{}};l.exercises.forEach((e,i)=>{let val;if(e.type==='mc'){const r=document.querySelector(`input[name="ex${i}"]:checked`);val=r?r.value:null;}else{const raw=$('#exnum'+i)?.value.trim().replace(',','.');val=raw===''?null:Number(raw);}out.answers[i]=val;let good=false;if(e.type==='mc')good=Number(val)===e.answer;else good=typeof val==='number'&&Number.isFinite(val)&&Math.abs(val-e.answer)<=e.tolerance;if(good)ok++;$('#exfb'+i).textContent=(good?'✓ Correcto. ':'✗ Revisa. ')+e.feedback;$('#exfb'+i).className='exercise-feedback '+(good?'ok':'bad');});out.score=Math.round(ok/l.exercises.length*100);out.done=out.score>=80;saveLessonProgress({...lessonProgress(),[l.id]:out});$('#lessonScore').textContent=out.score+'%';$('#lessonGradeFeedback').textContent=out.done?'Unidad dominada: has superado el 80%.':'Aún no dominada. Repasa la teoría y vuelve a intentarlo.';$('#lessonGradeFeedback').className='result '+(out.done?'success':'error');renderLessonIndex($('#lessonSearch').value,$('#lessonModuleFilter').value);if(typeof updateProgress==='function')updateProgress();};
}
function renderLessonSimulation(l){
 const s=l.simulation;
 if(l.code==='0521'){
  $('#lessonTabContent').innerHTML=`<div class="sim-workbench"><span class="tag">0521 · PLC</span><h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p><div id="lessonPlc"></div></div>`;
  const st={start:false,stop:false,limit:false};function draw(){const q=st.start&&!st.stop&&!st.limit;$('#lessonPlc').innerHTML=`<div class="sim-inputs">${[['start','I0.0 · MARCHA'],['stop','I0.1 · PARO'],['limit','I0.2 · FINAL CARRERA']].map(x=>`<button class="sim-toggle ${st[x[0]]?'on':''}" data-plc="${x[0]}">${x[1]}<b>${st[x[0]]?1:0}</b></button>`).join('')}</div><div class="plc-flow"><div class="plc-node ${st.start?'on':''}">I0.0<br><small>MARCHA</small></div><span>→</span><div class="plc-node ${q?'on':''}">M0.0<br><small>MEMORIA</small></div><span>→</span><div class="plc-node ${q?'on':''}">Q0.0<br><small>MOTOR</small></div></div><div class="result ${q?'success':'error'}">${q?'Q0.0 activa: el motor puede funcionar.':'Q0.0 desactivada: revisa marcha, paro y final de carrera.'}</div>`;$$('[data-plc]').forEach(b=>b.onclick=()=>{st[b.dataset.plc]=!st[b.dataset.plc];draw();});}draw();return;
 }
 $('#lessonTabContent').innerHTML=`<div class="sim-workbench"><span class="tag">SIMULACIÓN ESPECÍFICA · ${l.code}</span><h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p><div class="field-row">${s.fields.map(f=>`<label>${esc(f[1])}<input class="sim-field" data-key="${f[0]}" value="${esc(f[2])}"></label>`).join('')}</div><button id="runLessonSim" class="btn primary">Ejecutar simulación</button><div id="lessonSimResult" class="result">Introduce datos y ejecuta.</div></div>`;
 $('#runLessonSim').onclick=()=>{const vals={};$$('.sim-field').forEach(i=>{const raw=i.value.replace(',','.');vals[i.dataset.key]=Number.isNaN(Number(raw))?i.value:Number(raw);});$('#lessonSimResult').textContent=s.run(vals);$('#lessonSimResult').className='result success';};
}
function initLessons(){
 $('#lessonSearch').oninput=e=>renderLessonIndex(e.target.value,$('#lessonModuleFilter').value);$('#lessonModuleFilter').onchange=e=>renderLessonIndex($('#lessonSearch').value,e.target.value);
 renderLessonIndex();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initLessons);else initLessons();
