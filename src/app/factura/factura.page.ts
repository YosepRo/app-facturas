import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.page.html',
  styleUrls: ['./factura.page.scss'],
})
export class FacturaPage implements OnInit {

  // formulario: FormGroup | null = null,
  
  formulario = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellidos: ['', [Validators.required, Validators.minLength(3)]],
    dni: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    precioTotal: ['', [Validators.required, Validators.min(0)]],
  });



  constructor(private fb: FormBuilder, private router:Router
    //  private formGroup: FormGroup
    
    ) { }


  ngOnInit() {
    // Definimos el formulario con sus campos y validaciones
    
  }

  exportarPdf() {
    if (this.formulario.invalid) {
      return;
    }
  
    const datos = this.formulario.value;
    const doc = new jsPDF();
  
    // Configuración de estilo
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
  
    // Título del documento
    doc.setFontSize(14);
    doc.text('Factura Electronica N° 0000000000', 105, 20, { align: 'center' });
    doc.setFontSize(12);
  
    // Dibuja el cuadro
    const startY = 40;
    const boxWidth = 180; // Ancho del cuadro
    const boxHeight = 80; // Altura del cuadro
  
    // Dibuja el rectángulo
    doc.rect(10, startY - 10, boxWidth, boxHeight, 'S'); // 'S' para stroke (contorno)
  
    // Información del cliente dentro del cuadro
    doc.text(`Nombre: ${datos.nombre}`, 20, startY);
    doc.text(`Apellidos: ${datos.apellidos}`, 20, startY + 10);
    doc.text(`DNI: ${datos.dni}`, 20, startY + 20);
  
    // Detalle de productos (ejemplo estático)
    doc.text('CANT  DESCRIPCIÓN                    PRECIO   SUBTOTAL', 20, startY + 40);
    doc.text('1    Teclado mecanico               S/ 25.00   S/ 25.00', 20, startY + 50);
    
  
    // Total
    doc.text('TOTAL S/. 103.00', 20, startY + 90);
  
    // Pie de página
    doc.setFontSize(10);
    const footerY = doc.internal.pageSize.height - 30; // Espacio para el pie de página
    doc.text('SON: Ciento Tres y 00/100 Soles', 20, footerY);
    doc.text('Este es  comprobante de Pago', 20, footerY + 10);
  
    // Guardar el archivo como PDF
    doc.save('boleta-de-venta.pdf');
  }
  
  

  terminar(){
    this.router.navigate(["/productos"])
  }


}

