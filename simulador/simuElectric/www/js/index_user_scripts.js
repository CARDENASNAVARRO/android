(function()

{
 "use strict";

    function register_event_handlers()
    {
        var nombreEquipo = null;
        var montoTotal = 0;
        var equipos = [];
        var eTrifasico = [];
        var montoTotalT = 0;
                      
        $(document).on("click", "#monocalcular", function(evt)
        {

         var lecActual = document.getElementById('LecturaActual');
         var lecAnterior = document.getElementById('LecturaAnterior');
         var igv = 0.18;
         var consumo = 0;
         var mantenimiento = 0.67;
         var costoKWh = 0.6023;
         var electrificacion = 0.42;
         var  alum_public= 0.3623;
 
         var cargofijo = 3.59;
         var intereses = 0.08;
         if((lecAnterior.value)*1 < (lecActual.value)*1)
           {  
                   var diferenciaLectura = (lecActual.value)*1 - (lecAnterior.value)*1;
            

               if (diferenciaLectura<=30) {
                     
                    alert("USTED TIENE LA POSIBILIDAD DE AFILIARSE AL FISE");

                     var energia = (diferenciaLectura/2)* costoKWh;
                     var costoAlumbrado= 1 * alum_public;
                    
                     var subtotal = energia + costoAlumbrado + cargofijo + mantenimiento;
                       
                     var sbtt1= subtotal.toFixed(3);
                     var total = subtotal + subtotal * igv;
                     var TotalPago = total + electrificacion;
                     var ppgg1= TotalPago.toFixed(3);
                     $('#idimprimir')[0].innerHTML='USTED CONSUMIO :'+'<div style="color:#2A7513;font-size: 24px">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES: '+'<div style="color:#C5560B; font-size: 15px"> S/. '+ sbtt1 + ' </div><br>' + 'EL PAGO A REALIZAR POR EL CONSUMO ES: '+'<div style="color:#AAC520;font-size: 15px ">S/. '+ppgg1+'</div><br>'+ 'NO SE OLVIDE QUE PAGE ANTES DEL 28 DE CADA MES'+'<div style ="color:#FF4500; font-size: 15px"'+'<br>';

                    }

                   if (diferenciaLectura<=100 &&diferenciaLectura>30) {
                      alert("USTED TIENE mayor  que 30kw");
                     
                     var energia = diferenciaLectura * costoKWh;
                     var costoAlumbrado= 7 * alum_public;
                    
                    
                     var subtotal = energia + costoAlumbrado + cargofijo + mantenimiento;
                     var sbtt2= subtotal.toFixed(2);
                     var total = subtotal + subtotal * igv;
                     var TotalPago = total + electrificacion;
                     var ppgg2= TotalPago.toFixed(2);
                     $('#idimprimir')[0].innerHTML='USTED CONSUMIO :'+'<div style="color:#8B4513">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES: '+'<div style="color:#B8860B"> S/. '+ sbtt2 + ' </div><br>' + 'EL PAGO A REALIZAR POR EL CONSUMO ES: '+'<div style="color:#DAA520">S/. '+ppgg2+'</div><br>'+ 'NO SE OLVIDE QUE PAGE ANTES DEL 28 DE CADA MES'+'<div style ="color:#FF4500"'+'<br>';
                     
                    }

                   if (diferenciaLectura<=150 &&diferenciaLectura>100) {
                     alert("USTED TIENE mayor  que 100kw");
                     var energia = diferenciaLectura * costoKWh;
                     var costoAlumbrado= 12 * alum_public;
                    
                    
                     var subtotal = energia + costoAlumbrado + cargofijo + mantenimiento;
                     var sbtt= subtotal.toFixed(2);
                     var total = subtotal + subtotal * igv;
                     var TotalPago = total + electrificacion;
                     var ppgg= TotalPago.toFixed(2);
                     $('#idimprimir')[0].innerHTML='USTED CONSUMIO :'+'<div style="color:#8B4513">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES: '+'<div style="color:#B8860B"> S/. '+ sbtt + ' </div><br>' + 'EL PAGO A REALIZAR POR EL CONSUMO ES: '+'<div style="color:#DAA520">S/. '+ppgg+'</div><br>'+ 'NO SE OLVIDE QUE PAGE ANTES DEL 28 DE CADA MES'+'<div style ="color:#FF4500"'+'<br>';
                     
                    }                

                   if (diferenciaLectura<=300 &&diferenciaLectura>150) {
                                    
                     var energia = diferenciaLectura * costoKWh;
                     var costoAlumbrado= 25 * alum_public;
                                    
                     var subtotal = energia + costoAlumbrado + cargofijo + mantenimiento;
                     var sbtt= subtotal.toFixed(2);
                     var total = subtotal + subtotal * igv;
                     var TotalPago = total + electrificacion;
                     var ppgg= TotalPago.toFixed(2);
                     $('#idimprimir')[0].innerHTML='USTED CONSUMIO :'+'<div style="color:#8B4513">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES: '+'<div style="color:#B8860B"> S/. '+ sbtt + ' </div><br>' + 'EL PAGO A REALIZAR POR EL CONSUMO ES: '+'<div style="color:#DAA520">S/. '+ppgg+'</div><br>'+ 'NO SE OLVIDE QUE PAGE ANTES DEL 28 DE CADA MES'+'<div style ="color:#FF4500"'+'<br>';
                     
                    }
                    if (diferenciaLectura<=500 &&diferenciaLectura>300) {
                     
                     var energia = diferenciaLectura * costoKWh;
                     var costoAlumbrado= 35 * alum_public;
                                    
                     var subtotal = energia + costoAlumbrado + cargofijo + mantenimiento;
                     var sbtt= subtotal.toFixed(2);
                     var total = subtotal + subtotal * igv;
                     var TotalPago = total + electrificacion;
                     var ppgg= TotalPago.toFixed(2);
                     $('#idimprimir')[0].innerHTML='USTED CONSUMIO :'+'<div style="color:#8B4513">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES: '+'<div style="color:#B8860B"> S/. '+ sbtt + ' </div><br>' + 'EL PAGO A REALIZAR POR EL CONSUMO ES: '+'<div style="color:#DAA520">S/. '+ppgg+'</div><br>'+ 'NO SE OLVIDE QUE PAGE ANTES DEL 28 DE CADA MES'+'<div style ="color:#FF4500"'+'<br>';
                     
                    }
                    if (diferenciaLectura<=750 &&diferenciaLectura>500) {
                     
                     var energia = diferenciaLectura * costoKWh;
                     var costoAlumbrado= 70* alum_public;
                                    
                     var subtotal = energia + costoAlumbrado + cargofijo + mantenimiento;
                     var sbtt= subtotal.toFixed(2);
                     var total = subtotal + subtotal * igv;
                     var TotalPago = total + electrificacion;
                     var ppgg= TotalPago.toFixed(2);
                     $('#idimprimir')[0].innerHTML='USTED CONSUMIO :'+'<div style="color:#8B4513">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES: '+'<div style="color:#B8860B"> S/. '+ sbtt + ' </div><br>' + 'EL PAGO A REALIZAR POR EL CONSUMO ES: '+'<div style="color:#DAA520">S/. '+ppgg+'</div><br>'+ 'NO SE OLVIDE QUE PAGE ANTES DEL 28 DE CADA MES'+'<div style ="color:#FF4500"'+'<br>';
                     
                    }
                   if (diferenciaLectura<=1000 &&diferenciaLectura>750) {
                     
                     var energia = diferenciaLectura * costoKWh;
                     var costoAlumbrado= 80 * alum_public;
                                    
                     var subtotal = energia + costoAlumbrado + cargofijo + mantenimiento;
                     var sbtt= subtotal.toFixed(2);
                     var total = subtotal + subtotal * igv;
                     var TotalPago = total + electrificacion;
                     var ppgg= TotalPago.toFixed(2);
                     $('#idimprimir')[0].innerHTML='USTED CONSUMIO :'+'<div style="color:#8B4513">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES: '+'<div style="color:#B8860B"> S/. '+ sbtt + ' </div><br>' + 'EL PAGO A REALIZAR POR EL CONSUMO ES: '+'<div style="color:#DAA520">S/. '+ppgg+'</div><br>'+ 'NO SE OLVIDE QUE PAGE ANTES DEL 28 DE CADA MES'+'<div style ="color:#FF4500"'+'<br>';
                     
                    }
                    if (diferenciaLectura<=1500 &&diferenciaLectura>1000) {
                     
                     var energia = diferenciaLectura * costoKWh;
                     var costoAlumbrado= 120 * alum_public;
                                    
                     var subtotal = energia + costoAlumbrado + cargofijo + mantenimiento;
                     var sbtt= subtotal.toFixed(2);
                     var total = subtotal + subtotal * igv;
                     var TotalPago = total + electrificacion;
                     var ppgg= TotalPago.toFixed(2);
                     $('#idimprimir')[0].innerHTML='USTED CONSUMIO :'+'<div style="color:#8B4513">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES: '+'<div style="color:#B8860B"> S/. '+ sbtt + ' </div><br>' + 'EL PAGO A REALIZAR POR EL CONSUMO ES: '+'<div style="color:#DAA520">S/. '+ppgg+'</div><br>'+ 'NO SE OLVIDE QUE PAGE ANTES DEL 28 DE CADA MES'+'<div style ="color:#FF4500"'+'<br>';
                     
                    }
                   if (diferenciaLectura<=3000 &&diferenciaLectura>1500) {
                                    
                     
                     var energia = diferenciaLectura * costoKWh;
                     var costoAlumbrado= 140* alum_public;
                                    
                     var subtotal = energia + costoAlumbrado + cargofijo + mantenimiento;
                     var sbtt= subtotal.toFixed(2);
                     var total = subtotal + subtotal * igv;
                     var TotalPago = total + electrificacion;
                     var ppgg= TotalPago.toFixed(2);
                     $('#idimprimir')[0].innerHTML='USTED CONSUMIO :'+'<div style="color:#8B4513">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES: '+'<div style="color:#B8860B"> S/. '+ sbtt + ' </div><br>' + 'EL PAGO A REALIZAR POR EL CONSUMO ES: '+'<div style="color:#DAA520">S/. '+ppgg+'</div><br>'+ 'NO SE OLVIDE QUE PAGE ANTES DEL 28 DE CADA MES'+'<div style ="color:#FF4500"'+'<br>';
                     
                    }

                   if (diferenciaLectura<=5000 &&diferenciaLectura>3000) {
                                    
                     
                     var energia = diferenciaLectura * costoKWh;
                     var costoAlumbrado= 150* alum_public;
                                    
                     var subtotal = energia + costoAlumbrado + cargofijo + mantenimiento;
                     var sbtt= subtotal.toFixed(2);
                     var total = subtotal + subtotal * igv;
                     var TotalPago = total + electrificacion;
                     var ppgg= TotalPago.toFixed(2);
                     $('#idimprimir')[0].innerHTML='USTED CONSUMIO :'+'<div style="color:#8B4513">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES: '+'<div style="color:#B8860B"> S/. '+ sbtt + ' </div><br>' + 'EL PAGO A REALIZAR POR EL CONSUMO ES: '+'<div style="color:#DAA520">S/. '+ppgg+'</div><br>'+ 'NO SE OLVIDE QUE PAGE ANTES DEL 28 DE CADA MES'+'<div style ="color:#FF4500"'+'<br>';
                     
                    }
                   if (diferenciaLectura<=7500 && diferenciaLectura>5000) {///CORRRIGIR
                                    
                     
                     var energia = diferenciaLectura * costoKWh;
                     var costoAlumbrado= 250* alum_public;
                                    
                     var subtotal = energia + costoAlumbrado + cargofijo + mantenimiento;
                     var sbtt= subtotal.toFixed(2);
                     var total = subtotal + subtotal * igv;
                     var TotalPago = total + electrificacion;
                     var ppgg= TotalPago.toFixed(2);
                     $('#idimprimir')[0].innerHTML='USTED CONSUMIO :'+'<div style="color:#8B4513">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES: '+'<div style="color:#B8860B"> S/. '+ sbtt + ' </div><br>' + 'EL PAGO A REALIZAR POR EL CONSUMO ES: '+'<div style="color:#DAA520">S/. '+ppgg+'</div><br>'+ 'NO SE OLVIDE QUE PAGE ANTES DEL 28 DE CADA MES'+'<div style ="color:#FF4500"'+'<br>';
                     
                    }
                   if (diferenciaLectura<=10000 &&diferenciaLectura>7500) {
                                    
                     
                     var energia = diferenciaLectura * costoKWh;
                     var costoAlumbrado= 300* alum_public;
                                    
                     var subtotal = energia + costoAlumbrado + cargofijo + mantenimiento;
                     var sbtt= subtotal.toFixed(2);
                     var total = subtotal + subtotal * igv;
                     var TotalPago = total + electrificacion;
                     var ppgg= TotalPago.toFixed(2);
                     $('#idimprimir')[0].innerHTML='USTED CONSUMIO :'+'<div style="color:#8B4513">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES: '+'<div style="color:#B8860B"> S/. '+ sbtt + ' </div><br>' + 'EL PAGO A REALIZAR POR EL CONSUMO ES: '+'<div style="color:#DAA520">S/. '+ppgg+'</div><br>'+ 'NO SE OLVIDE QUE PAGE ANTES DEL 28 DE CADA MES'+'<div style ="color:#FF4500"'+'<br>';
                     
                    }

                   if (diferenciaLectura>10000) {
                     alert('SU CONSUMO ES DEMASIADO ALTO CORRIGE LOS DATOS'  );
                     
                     var energia = diferenciaLectura * costoKWh;
                     var costoAlumbrado= 350* alum_public;
                                    
                     var subtotal = energia + costoAlumbrado + cargofijo + mantenimiento;
                     var sbtt= subtotal.toFixed(2);
                     var total = subtotal + subtotal * igv;
                     var TotalPago = total + electrificacion;
                     var ppgg= TotalPago.toFixed(2);
                     $('#idimprimir')[0].innerHTML='USTED CONSUMIO :'+'<div style="color:#8B4513">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES: '+'<div style="color:#B8860B"> S/. '+ sbtt + ' </div><br>' + 'EL PAGO A REALIZAR POR EL CONSUMO ES: '+'<div style="color:#DAA520">S/. '+ppgg+'</div><br>'+ 'NO SE OLVIDE QUE PAGE ANTES DEL 28 DE CADA MES'+'<div style ="color:#FF4500"'+'<br>';
                     
                    }

                
                  if((lecAnterior.value)*1==(lecActual.value)*1)

                  {  
                 alert("SU CONSUMO ES IGUAL");
                 var diferenciaLectura = (lecActual.value)*1 - (lecAnterior.value)*1;         
                 var costoAlumbrado= 1 * alum_public;
                 var subtotal = costoAlumbrado + cargofijo + mantenimiento;
                 var sbtt= subtotal.toFixed(2);
                 var total = subtotal + subtotal * igv;
                 var TotalPago = total + electrificacion;
                 var ppgg= TotalPago.toFixed(2);
                 $('#idimprimir')[0].innerHTML='USTED CONSUMIO :'+'<div style="color:#8B4513">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES: '+'<div style="color:#B8860B"> S/. '+ sbtt + ' </div><br>' + 'EL PAGO A REALIZAR POR EL CONSUMO ES: '+'<div style="color:#DAA520">S/. '+ppgg+'</div><br>'+ 'NO SE OLVIDE QUE PAGE ANTES DEL 28 DE CADA MES'+'<div style ="color:#FF4500"'+'<br>';
                   }  


            }

            if((lecAnterior.value)*1==(lecActual.value)*1)

           {  
             alert("SU CONSUMO ES IGUAL");
             var diferenciaLectura = (lecActual.value)*1 - (lecAnterior.value)*1;         
             var costoAlumbrado= 1 * alum_public;
             var subtotal = costoAlumbrado + cargofijo + mantenimiento;
             var sbtt= subtotal.toFixed(2);
             var total = subtotal + subtotal * igv;
             var TotalPago = total + electrificacion;
             var ppgg= TotalPago.toFixed(2);
             $('#idimprimir')[0].innerHTML='USTED CONSUMIO :'+'<div style="color:#8B4513">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES: '+'<div style="color:#B8860B"> S/. '+ sbtt + ' </div><br>' + 'EL PAGO A REALIZAR POR EL CONSUMO ES: '+'<div style="color:#DAA520">S/. '+ppgg+'</div><br>'+ 'NO SE OLVIDE QUE PAGE ANTES DEL 28 DE CADA MES'+'<div style ="color:#FF4500"'+'<br>';
            }        


            if((lecAnterior.value)*1 > (lecActual.value)*1)

           {  
                alert("DATOS INCORRECTOS");
                var lecActual = document.getElementById('LecturaActual');
                var lecAnterior = document.getElementById('LecturaAnterior');     
                    
                document.getElementById('idimprimir').innerHTML='VUELVA A INGRESAR LOS DATOS ';
                lecActual.value='';
                lecAnterior.value=''; 
            } 
           
                       

 
          activate_page("#mainpage"); 
        
        });
        
        //botton cancel monofasico
    
      $(document).on("click", "#monocancelar", function(evt)
        {
         alert("DATOS CANCELADOS");
         var lecActual = document.getElementById('LecturaActual');
         var lecAnterior = document.getElementById('LecturaAnterior');     
                    
         document.getElementById('idimprimir').innerHTML='SE CANCELO LA OPERACION ';
         lecActual.value='';
         lecAnterior.value='';   
        });
        //BUTTON COCINA
    $(document).on("click", "#cocina", function(evt)
      {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "COCINA ELECTRICA "
        div.textContent = nombreEquipo;

      });
        //BUTTON REFRI
    $(document).on("click", "#reefriger", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "REFRIGERADORA"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#cafetera", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "CAFETERA ELECTRICA"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#licuadora", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "LICUADORA OSTER"
        div.textContent = nombreEquipo;

    });
    $(document).on("click", "#batidora", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "BATIDORA ELECTRICA"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#hervidora", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "HERVIDORA DE AGUA"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#horno", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "MICROONDAS"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#olla", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "ARROCERA"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#lavadora", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "LAVADORA DE 7K"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#plancha", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "PLANCHA VAPORIZADOR"
        div.textContent = nombreEquipo;

    });
    ///
        $(document).on("click", "#aspiradora", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "ASPIRADOR"
        div.textContent = nombreEquipo;

    });
    $(document).on("click", "#aire", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "AIRE ACONDICIONADO"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#tv", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "TELIVISOR"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#laptop", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "PC PERSONAL"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#dvd", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "REPRODUCTOR DVD"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#equiposonido", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "RADIO"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#games", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "JUEGOS"
        div.textContent = nombreEquipo;

    });
          $(document).on("click", "#impresora1", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "IMPRESORA"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#foco", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "LAMPARA INCANDESCENTE"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#ducha", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "DUCHA ELECTRICA"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#therma", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "THERMMA"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#secadora", function(evt)
    {   
        var div = document.getElementById("idtxtnombre");
        nombreEquipo = "SECADORA DE CABELLO"
        div.textContent = nombreEquipo;

    });

    $(document).on("click", "#agregar1", function(evt)
    {   
        var cantidad = document.getElementById('cantidad1');
        var potencia = document.getElementById('potencia1');
        var tiempo = document.getElementById('horas1');
           
        equiposGasto(cantidad.value*1,potencia.value*1,tiempo.value*1);
        
    });
    
    $(document).on("click", "#consultarmono", function(evt)
    {   
        
        for (var i = 0; i < equipos.length; i++) {

            $("#idresultado").append('<div style="color:blue">Nombre Equipo: '+equipos[i].nombre+'</div>'+'Cantidad de equipo:'+equipos[i].c+'<br>'+'Potencia(watts):'+equipos[i].p +'<br>'+'Tiempo de uso:'+ equipos[i].t+' Hrs<br>'+'<div style="color:green">Costo por mes: S/.'+equipos[i].monto+'</div><br>');
        };
        $("#idresultado").append('<div style="color:red" >Monto Total: S/.'+montoTotal+'</div>');
    
    });

    function equiposGasto(cantidad,potencia,tiempo){
        
        var costoKWh = 0.6070;
        var montoTotalArtefacto = ((cantidad*(potencia * tiempo))/1000)* 30 * costoKWh;
        
        var equipo = {}
        
            equipo.nombre = nombreEquipo; 
            equipo.c = cantidad;
            equipo.p = potencia;
            equipo.t = tiempo;
            equipo.monto = montoTotalArtefacto;

        equipos.push(equipo);

        montoTotal += montoTotalArtefacto;
        //alert(montoTotalArtefacto);
    }






        ////////////////////////CALCULOS  DE RED  TRIFASICO////////////////////////
        //button calcular trifasico
        $(document).on("click", "#calcula", function(evt)
        {
//alert("hola fredy")
         var actual = document.getElementById('LecActual3');
         var anterior = document.getElementById('LecAnterior3')
         var igv = 0.18;
         var consumo = 0;
         var mantenimiento = 0.67;
         var costoKWh = 0.395;
         var electrificacion = 0.42;
         var  alum_public= 0.3623;
         var cargofijo = 3.59;
         var intereses = 0.08;
        
           if((actual.value)*1 > (anterior.value)*1)
           {  
                    var diferenciaLectura = (actual.value)*1 - (anterior.value)*1;            
                  // alert("Calcular red trifasica");
                     var energia = diferenciaLectura* costoKWh;
                     var costoAlumbrado= 7 * alum_public;                    
                     var subtotal = energia + costoAlumbrado + cargofijo + mantenimiento;                       
                     var sbtt1= subtotal.toFixed(3);
                     var total = subtotal + subtotal * igv;
                     var TotalPago = total + electrificacion;
                     var ppgg1= TotalPago.toFixed(3);
                     $('#salida')[0].innerHTML='USTED CONSUMIO :'+'<div style="color:#8B4513">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES: '+'<div style="color:#B8860B"> S/. '+ sbtt1 + ' </div><br>' + 'EL PAGO A REALIZAR POR EL CONSUMO ES: '+'<div style="color:#DAA520">S/. '+ppgg1+'</div><br>'+ 'NO SE OLVIDE QUE PAGE ANTES DEL 28 DE CADA MES'+'<div style ="color:#FF4500"'+'<br>';

                    
           }




         else {
            alert("Datos incorrectos vuelva ingresar");

            var actual3 = document.getElementById('LecActual3');
            var anterior3= document.getElementById('LecAnterior3')
            document.getElementById('salida').innerHTML='VUELVA A INGRESAR LOS DATOS ';
            actual3.value='';
            anterior3.value=''; 

            }
        });
                       

//botton cancelar trifasico
        
        
 $(document).on("click", "#cancel3", function(evt)
        {
         alert("Se Cancelara la Operacion");
         var actual3 = document.getElementById('LecActual3');
         var anterior3 = document.getElementById('LecAnterior3');     
                    
         document.getElementById('salida').innerHTML='OPERACION CANCELADA';
         actual3.value='';
         anterior3.value='';   
        
    });

///button de  consumo trifasico//
    
    var hp = 0;

     $(document).on("click", "#afiladora", function(evt)
      {   
        var div = document.getElementById("idtxtnombre3");
        nombreEquipo = "AFILADORA HERRAMIENTAS";
        div.textContent = nombreEquipo;
        hp = 2.5;

      });
        //BUTTON REFRI
     $(document).on("click", "#cepillaadora", function(evt)
     {   
        var div = document.getElementById("idtxtnombre3");
        nombreEquipo = "CEPILLADORA"
        div.textContent = nombreEquipo;
        hp = 3;

     });

    $(document).on("click", "#electrobomba", function(evt)
    {   
        var div = document.getElementById("idtxtnombre3");
        nombreEquipo = "BOMBA DE AGUA"
        div.textContent = nombreEquipo;
        hp = 4;

    });

    $(document).on("click", "#compresor", function(evt)
    {   
        var div = document.getElementById("idtxtnombre3");
        nombreEquipo = "COMPRESORA"
        div.textContent = nombreEquipo;
        hp = 5;

    });
    $(document).on("click", "#rculatas", function(evt)
    {   
        var div = document.getElementById("idtxtnombre3");
        nombreEquipo = "RECTIFICADOR CULATAS"
        div.textContent = nombreEquipo;
        hp = 1.5;

    });

    $(document).on("click", "#rengrosadora", function(evt)
    {   
        var div = document.getElementById("idtxtnombre3");
        nombreEquipo = "RENGROSADORA MADERA"
        div.textContent = nombreEquipo;
        hp = 4;

    });

    $(document).on("click", "#taladrop", function(evt)
    {   
        var div = document.getElementById("idtxtnombre3");
        nombreEquipo = "TALADRO PEDESTAL"
        div.textContent = nombreEquipo;
        hp = 2.5;

    });

    $(document).on("click", "#taladrom", function(evt)
    {   
        var div = document.getElementById("idtxtnombre3");
        nombreEquipo = "TALADRO MANUAL"
        div.textContent = nombreEquipo;
        hp = 0.75; 

    });

    $(document).on("click", "#trituradora", function(evt)
    {   
        var div = document.getElementById("idtxtnombre3");
        nombreEquipo = "TRITURADORA GRANOS"
        div.textContent = nombreEquipo;
        hp = 4;       

    });

    $(document).on("click", "#molino", function(evt)
    {   
        var div = document.getElementById("idtxtnombre3");
        nombreEquipo = "MOLINO HARINA"
        div.textContent = nombreEquipo;
        hp = 4;

    });
    ///
        $(document).on("click", "#fresamulti", function(evt)
    {   
        var div = document.getElementById("idtxtnombre3");
        nombreEquipo = "FRESA MULTIFUNCIONAL"
        div.textContent = nombreEquipo;
        hp = 10;

    });
    $(document).on("click", "#torno", function(evt)
    {   
        var div = document.getElementById("idtxtnombre3");
        nombreEquipo = "TORNO MECANICO"
        div.textContent = nombreEquipo;
        hp = 8;
    });

    $(document).on("click", "#tornom", function(evt)
    {   
        var div = document.getElementById("idtxtnombre3");
        nombreEquipo = "TORNO MADERA"
        div.textContent = nombreEquipo;
        hp = 2.5;
    });

    $(document).on("click", "#discocircular", function(evt)
    {   
        var div = document.getElementById("idtxtnombre3");
        nombreEquipo = "MAQUINA CIRCULAR"
        div.textContent = nombreEquipo;
        hp = 4;
    });

    $(document).on("click", "#radian", function(evt)
    {   
        var div = document.getElementById("idtxtnombre3");
        nombreEquipo = "RADIAN"
        div.textContent = nombreEquipo;
        hp = 0.75;
    });

    $(document).on("click", "#msoldar", function(evt)
    {   
        var div = document.getElementById("idtxtnombre3");
        nombreEquipo = "SOLDADURA"
        div.textContent = nombreEquipo;
        hp = 3.5;
    });

    $(document).on("click", "#cortadora", function(evt)
    {   
        var div = document.getElementById("idtxtnombre3");
        nombreEquipo = "RENGLETEADORA"
        div.textContent = nombreEquipo;
        hp = 1.4;
    });
          $(document).on("click", "#imprenta", function(evt)
    {   
        var div = document.getElementById("idtxtnombre3");
        nombreEquipo = "IMPRESORA GIGANTOGRAFIA"
        div.textContent = nombreEquipo;
        hp = 2;
    });

    //agregando equipos trifasico
    $(document).on("click", "#agregar3", function(evt)
    {   
        //var potencia = document.getElementById('hp');
        var cantidad = document.getElementById('maquinas');
        var tiempo = document.getElementById('tiempo3');   
        equiposTrifasicoGasto(cantidad.value*1,hp,tiempo.value*1);
        
    });


    $(document).on("click", "#consultar3", function(evt)
    {   
        
        for (var i = 0; i < eTrifasico.length; i++) {

            $("#resultado3").append('<div style="color:blue;font-size: 15px;">Nombre Equipo: '+eTrifasico[i].nombre+'</div>'+'Cantidad de equipo:'+eTrifasico[i].c+'<br>'+'Potencia(HP):'+eTrifasico[i].p +'<br>'+'Tiempo de uso:'+ eTrifasico[i].t+' Hrs<br>'+'<div style="color:blue; font-size: 15px;">Costo por mes: S/.'+eTrifasico[i].monto+'</div><br>');
        };
        $("#resultado3").append('<div style="color:blue;font-size: 15px;" >Monto Total: S/.'+montoTotalT+'</div>');
    
    });

    function equiposTrifasicoGasto(cantidad,potencia,tiempo){
        
        var costoKWh = 0.6470;
        var _hp = potencia*746;

        var montoTotalArtefactoT = ((cantidad*(_hp * tiempo))/1000)* 30 * costoKWh;
        
        var equipoT = {}
        
            equipoT.nombre = nombreEquipo; 
            equipoT.c = cantidad;
            equipoT.p = potencia;
            equipoT.t = tiempo;
            equipoT.monto = montoTotalArtefactoT;

        eTrifasico.push(equipoT);

        montoTotalT += montoTotalArtefactoT;
        //alert(montoTotalArtefactoT);
    }


    
    
        /* button  #agregar1 */
    $(document).on("click", "#agregar1", function(evt)
    {
         activate_page("#consmonof"); 
    });
    
        /* button  #agregar3 */
    
    
    }

   document.addEventListener("app.Ready", register_event_handlers, false);
})();


