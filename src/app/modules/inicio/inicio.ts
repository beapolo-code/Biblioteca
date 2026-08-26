import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  templateUrl: './inicio.html',
})
export class Inicio {

  librosMasLeidos = [
    {
      id: 'Guía-de-capacitación-para-baristas',
      posicion: 1,
      titulo: 'Guía de capacitación para baristas',
      autor: 'Programa de Promocion de Consumo de cafe',
      portada:
        'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'guia-de-capacitacion-para-baristas',
      posicion: 2,
      titulo: 'Guía de capacitación para baristas',
      autor: 'Programa de Promoción de Consumo de Café',
      portada:
        'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'creacion-de-una-coleccion-inspirada-en-la-cultura-salasaca-y-laarquitectura-de-la-iglesia-de-la-compania-de-jesus-expuestas-en-los-desfiles-academicos-qhapac-nan-primera-edicion-nuanchipac',
      posicion: 3,
      titulo: 'CREACION DE UNA COLECCION INSPIRADA EN LA CULTURA SALASACA Y LA ARQUITECTURA DE LA IGLESIA DE LA COMPAÑIA DE JESUS EXPUESTAS EN LOS DESFILES ACADEMICOS QHAPAC ÑAN PRIMERA EDICION Y ÑUCANCHIPAC',
      autor: 'CARRERA MONTALVO NATALIA GISELA',
      portada:
        'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'elaboracion-de-outfits-de-tipologia-casual-y-categoria-alta-moda-fomentando-una-nueva-moda-etnica-en-mujeres-del-sector-la-ronda-con-inspiracion-en-las-fiestas-populares-y-el-patrimonio-cultural-direccionado-a-evenos-de-pasarelas',
      posicion: 4,
      titulo: 'ELABORACION DE OUTFITS DE TIPOLOGIA CASUAL Y CATEGORIA ALTA MODA FOMENTANDO UNA NUEVA MODA ETNICA EN MUJERES DEL SECTOR LA RONDA CON INSPIRACION EN LAS FIESTAS POPULARES Y EL PATRIMONIO CULTURAL DIRECCIONANDO A EVENTOS DE PASARELAS',
      autor: 'NELLY LUZMILA CHALUISA ANTE',
      portada:
        'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'creacion-de-un-dossier-sobre-el-diseño-de-vestuarios-inspirados-en-el-patrimonio-cultural-y-ancestral-del-ecuador',
      posicion: 5,
      titulo: 'CREACION DE UN DOSSIER SOBRE EL DEISEÑO DE VESTUARIOS INSPIRADOS EN EL PATRIMONIO CULTURAL Y ANCESTRAL DEL ECUADOR ',
      autor: 'LIZETH CAROLINA GUANOLUISA COLUMBA',
      portada:
        'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80',
    },
  ];

  librosRecientes = [
    {
      id: 'Guía-de-capacitación-para-baristas',
      titulo: 'Guía de capacitación para baristas',
      autor: 'Programa de Promocion de Consumo de cafe',
      portada:
        'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'guia-de-capacitacion-para-baristas',
      titulo: 'Guía de capacitación para baristas',
      autor: 'Programa de Promoción de Consumo de Café',
      portada:
        'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'creacion-de-una-coleccion-inspirada-en-la-cultura-salasaca-y-laarquitectura-de-la-iglesia-de-la-compania-de-jesus-expuestas-en-los-desfiles-academicos-qhapac-nan-primera-edicion-nuanchipac',
      titulo: 'CREACION DE UNA COLECCION INSPIRADA EN LA CULTURA SALASACA Y LA ARQUITECTURA DE LA IGLESIA DE LA COMPAÑIA DE JESUS EXPUESTAS EN LOS DESFILES ACADEMICOS QHAPAC ÑAN PRIMERA EDICION Y ÑUCANCHIPAC',
      autor: 'CARRERA MONTALVO NATALIA GISELA',
      portada:
        'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'elaboracion-de-outfits-de-tipologia-casual-y-categoria-alta-moda-fomentando-una-nueva-moda-etnica-en-mujeres-del-sector-la-ronda-con-inspiracion-en-las-fiestas-populares-y-el-patrimonio-cultural-direccionado-a-evenos-de-pasarelas',
      titulo: 'ELABORACION DE OUTFITS DE TIPOLOGIA CASUAL Y CATEGORIA ALTA MODA FOMENTANDO UNA NUEVA MODA ETNICA EN MUJERES DEL SECTOR LA RONDA CON INSPIRACION EN LAS FIESTAS POPULARES Y EL PATRIMONIO CULTURAL DIRECCIONANDO A EVENTOS DE PASARELAS',
      autor: 'NELLY LUZMILA CHALUISA ANTE',
      portada:
        'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'creacion-de-un-dossier-sobre-el-diseño-de-vestuarios-inspirados-en-el-patrimonio-cultural-y-ancestral-del-ecuador',
      titulo: 'CREACION DE UN DOSSIER SOBRE EL DEISEÑO DE VESTUARIOS INSPIRADOS EN EL PATRIMONIO CULTURAL Y ANCESTRAL DEL ECUADOR ',
      autor: 'LIZETH CAROLINA GUANOLUISA COLUMBA',
      portada:
        'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80',
    },
  ];

  videos = [
    {
      titulo: 'Cómo aprovechar una biblioteca digital',
      descripcion: 'Consejos para encontrar mejores lecturas.',
      imagen:
        'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80',
    },
    {
      titulo: 'La importancia de la lectura',
      descripcion: 'Beneficios de crear el hábito de leer.',
      imagen:
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    },
    {
      titulo: 'Recomendaciones para estudiantes',
      descripcion: 'Recursos para mejorar tus estudios.',
      imagen:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    },
  ];

}