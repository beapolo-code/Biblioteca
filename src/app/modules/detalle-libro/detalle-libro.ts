import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle-libro',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle-libro.html',
})
export class DetalleLibro {
  

  private route = inject(ActivatedRoute);
  
  libro: any = null;
  favorito = false;
  
  cambiarFavorito() {
  this.favorito = !this.favorito;
  }

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');

    this.libro = this.obtenerLibro(id);
  }

  private obtenerLibro(id: string | null) {

    const libros = [
      {
        id: 'guia-de-capacitacion-para-baristas',
        titulo: 'Guía de capacitación para baristas ',
        autor: 'Programa de Promocion de Consumo de cafe ',
        portada:
          'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=700&q=80',
        anio: 2007,
        isbn: 'N/A',
        categoria: 'Arte Culinario',
        formato: 'PDF',
        descripcion:
          'Esta guía de aprendizaje, así como el DVD-Rom y la guía para el estudiante, hacen parte de los medios educativos y comunicativos diseñados para apoyar la estrategia presencial de capacitación a futuros baristas. Sin embargo, si este libro ha llegado a sus manos y Usted se considera un apasionado o un entusiasta del café, será un valioso medio de consulta y referencia, que le permitirá conocer y profundizar más acerca de nuestro café.',
      },
      {
        id: 'guia-de-capacitacion-para-baristas',
        titulo: 'Guía de capacitación para baristas',
        autor: 'Programa de Promoción de Consumo de Café',
        portada:
          'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80',
        anio: 2011,
        isbn: 'N/A',
        categoria:'Repositorio de los trabajos de titulación',
        formato: 'PDF',
        descripcion:
          'Esta guía de aprendizaje, así como el DVD-Rom y la guía para el estudiante, hacen parte de los medios educativos y comunicativos diseñados para apoyar la estrategia presencial de capacitación a futuros baristas. Sin embargo, si este libro ha llegado a sus manos y Usted se considera un apasionado o un entusiasta del café, será un valioso medio de consulta y referencia, que le permitirá conocer y profundizar más acerca de nuestro café.',
      },
      {
        id: 'creacion-de-una-coleccion-inspirada-en-la-cultura-salasaca-y-laarquitectura-de-la-iglesia-de-la-compania-de-jesus-expuestas-en-los-desfiles-academicos-qhapac-nan-primera-edicion-nuanchipac',
        titulo: 'CREACION DE UNA COLECCION INSPIRADA EN LA CULTURA SALASACA Y LA ARQUITECTURA DE LA IGLESIA DE LA COMPAÑIA DE JESUS EXPUESTAS EN LOS DESFILES ACADEMICOS QHAPAC ÑAN PRIMERA EDICION Y ÑUCANCHIPAC',
        autor: 'CARRERA MONTALVO NATALIA GISELA ',
        portada:
          'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=700&q=80',
        anio: 2021,
        isbn: 'N/A',
        categoriA:'Repositorio de los trabajos de titulación',
        formato: 'Físico y PDF',
        descripcion:
          'TESIS DE LA CARRERA DE DISEÑO DE MODAS ',
      },
      {
        id: 'elaboracion-de-outfits-de-tipologia-casual-y-categoria-alta-moda-fomentando-una-nueva-moda-etnica-en-mujeres-del-sector-la-ronda-con-inspiracion-en-las-fiestas-populares-y-el-patrimonio-cultural-direccionado-a-evenos-de-pasarelas',
        titulo: 'ELABORACION DE OUTFITS DE TIPOLOGIA CASUAL Y CATEGORIA ALTA MODA FOMENTANDO UNA NUEVA MODA ETNICA EN MUJERES DEL SECTOR LA RONDA CON INSPIRACION EN LAS FIESTAS POPULARES Y EL PATRIMONIO CULTURAL DIRECCIONANDO A EVENTOS DE PASARELAS ',
        autor: 'NELLY LUZMILA CHALUISA ANTE ',
        portada:
          'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=700&q=80',
        anio: 2021,
        isbn: 'N/A',
        categoria: 'Repositorio de los trabajos de titulación',
        formato: 'Fisico y PDF',
        descripcion:
          'TESIS DE LA CARRERA DE DISEÑO DE MODAS',
      },
      {
        id: 'creacion-de-un-dossier-sobre-el-diseño-de-vestuarios-inspirados-en-el-patrimonio-cultural-y-ancestral-del-ecuador',
        titulo: 'CREACION DE UN DOSSIER SOBRE EL DEISEÑO DE VESTUARIOS INSPIRADOS EN EL PATRIMONIO CULTURAL Y ANCESTRAL DEL ECUADOR ',
        autor: 'LIZETH CAROLINA GUANOLUISA COLUMBA',
        portada:
          'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=80',
        anio: 2020,
        isbn: 'N/A',
        categoria: 'Repositorio de los trabajos de titulación',
        formato: 'Físico y PDF',
        descripcion:
          'TESIS DE LA CARRERA DE DISEÑO DE MODAS ',
      },
    ];

    return libros.find((libro) => libro.id === id) ?? null;
  }
}