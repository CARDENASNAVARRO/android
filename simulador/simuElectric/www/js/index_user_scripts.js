(function()

{
 "use strict";

    function register_event_handlers()
    {
    
                      
        $(document).on("click", "#monocalcular", function(evt)
        {

         var lecActual = document.getElementById('LecturaActual');
         var lecAnterior = document.getElementById('LecturaAnterior');
         var igv = 0.18;
         var consumo = 0;
         var mantenimiento = 0.67;
         var costoKWh = 0.495;
         var electrificacion = 0.42;
         var  alum_public= 0.3623;
 
         var cargofijo = 3.59;
         var intereses = 0.08;

        
           if((lecAnterior.value)*1 < (lecActual.value)*1)
           {  
         
             var diferenciaLectura = (lecActual.value)*1 - (lecAnterior.value)*1;
            

               if (diferenciaLectura<=30) {
                     
                     alert("USTED TIENE LA POSIBILIDAD DE AFILIARSE AL FISE");

                     var energia = diferenciaLectura* costoKWh;
                     var costoAlumbrado= 1 * alum_public;
                    
                     var subtotal = energia + costoAlumbrado + cargofijo + mantenimiento;
                       
                     var sbtt1= subtotal.toFixed(3);
                     var total = subtotal + subtotal * igv;
                     var TotalPago = total + electrificacion;
                     var ppgg1= TotalPago.toFixed(3);
                     $('#idimprimir')[0].innerHTML='USTED CONSUMIO :'+'<div style="color:#8B4513">'+diferenciaLectura+' KW </div><br>'+'EL SUBTOTAL ES: '+'<div style="color:#B8860B"> S/. '+ sbtt1 + ' </div><br>' + 'EL PAGO A REALIZAR POR EL CONSUMO ES: '+'<div style="color:#DAA520">S/. '+ppgg1+'</div><br>'+ 'NO SE OLVIDE QUE PAGE ANTES DEL 28 DE CADA MES'+'<div style ="color:#FF4500"'+'<br>';

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
                   if (5000>diferenciaLectura<=7500) {
                                    
                     
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
           
                       

 
          //activate_page("#mainpage"); 
        
        });
    
        $(document).on("click", "#monocancelar", function(evt)
        {
         alert("DATOS CANCELADOS");
         var lecActual = document.getElementById('LecturaActual');
         var lecAnterior = document.getElementById('LecturaAnterior');     
                    
         document.getElementById('idimprimir').innerHTML='SE CANCELO LA OPERACION ';
         lecActual.value='';
         lecAnterior.value='';   
        });   


 
    }

   document.addEventListener("app.Ready", register_event_handlers, false);
})();


