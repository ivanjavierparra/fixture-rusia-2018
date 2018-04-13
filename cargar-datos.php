    <?php
    /**
    * Esta clase representa un equipo que compite en el mundial de Rusia 2018
    */
    class Equipo 
    {
        public $nombre;
        public $foto;
        
        function __construct($nombre,$foto)
        {
            $this->nombre = $nombre;
            $this->foto = $foto;
        }
    }

    class Estadio
    {
        public $nombre;
        public $ciudad;
        public $capacidad;
        
        function __construct($nombre,$ciudad,$capacidad)
        {
            $this->nombre = $nombre;
            $this->ciudad = $ciudad;
            $this->capacidad = $capacidad;
        }
    }


    class Partido
    {
        public $equipoLocal;
        public $equipoVisitante;
        public $estadio;
        public $dia;
        public $mes;
        public $hora;

        function __construct($equipoLocal,$equipoVisitante,$estadio,$dia,$mes,$hora)
        {
            $this->equipoLocal = $equipoLocal;
            $this->equipoVisitante = $equipoVisitante;
            $this->estadio = $estadio;
            $this->dia = $dia;
            $this->mes = $mes;
            $this->hora = $hora;
        }

    }

    class Grupo 
    {
        public $letra;
        public $equipos;
        public $partidos;
        public $posicion1;
        public $posicion2;

        function __construct($letra, $equipos, $partidos, $posicion1, $posicion2)
        {
            $this->letra = $letra;
            $this->equipos = $equipos;
            $this->partidos = $partidos;
            $this->posicion1 = $posicion1;
            $this->posicion2 = $posicion2;
        }

    }


    class Posicion
    {
        public $fase; //OCTAVOS - CUARTOS - SEMIS - FINAL
        public $tipo; //LEFT or RIGHT
        public $lugar; //0..15

        function __construct($fase, $tipo, $lugar)
        {
            $this->fase = $fase;
            $this->tipo = $tipo;
            $this->lugar = $lugar;
        }
    }

    class Fixture
    {
        public $grupos;

        function __construct($grupos)
        {
            $this->grupos = $grupos;
        }
    }
    
    /* ESTADIOS */
    $estadioUno = new Estadio("SPARTAK STADIUM","Moscú",43298);
    $estadioDos = new Estadio("ESTADIO LUZHNIKI","Moscú",81000);
    $estadioTres = new Estadio("KAZÁN ARENA","Kazán",44779);
    $estadioCuatro = new Estadio("MORDAVIA ARENA","Saransk",44442);
    $estadioCinco = new Estadio("SAMARA ARENA","Samara",44807);
    $estadioSeis = new Estadio("EKATERIMBURGO ARENA","Ekaterimburgo",42500);
    $estadioSiete = new Estadio("VOLGOGRADO ARENA","Volgogrado",45568);
    $estadioOcho = new Estadio("ROSTOV ARENA","Rostov del Don",45145);
    $estadioNueve = new Estadio("ESTADIO FISHT","Sochi",47700);
    $estadioDiez = new Estadio("NIZHNY NÓVGOROD","Nizhny Novgorod",45331);
    $estadioOnce = new Estadio("SAN PETERSBURGO STADIUM","San Petesburgo",68134);
    $estadioDoce = new Estadio("ESTADIO DE KALININGRADO","Kaliningrado",35212);

    /* GRUPO A */
    $rusia = new Equipo("Rusia","rusia");
    $arabia = new Equipo("Arabia Saudita","arabiaSaudita");
    $egipto = new Equipo("Egipto","egipto");
    $uruguay = new Equipo("Uruguay","uruguay");

    $partidoRusiaArabia = new Partido($rusia,$arabia,$estadioUno,15,6,17);
    $partidoEgiptoUruguay = new Partido($egipto,$uruguay,$estadioSeis,15,6,17);
    $partidoRusiaEgipto = new Partido($rusia,$egipto,$estadioOnce,19,6,21);
    $partidoUruguayArabia = new Partido($uruguay,$arabia,$estadioOcho,20,6,18);
    $partidoUruguayRusia = new Partido($uruguay,$rusia,$estadioCinco,25,6,18);
    $partidoArabiaEgipto = new Partido($arabia,$egipto,$estadioSiete,25,6,17);

    $equipos_A = array($rusia,$arabia,$egipto,$uruguay);
    $partidos_A = array($partidoRusiaArabia,$partidoEgiptoUruguay,$partidoRusiaEgipto,$partidoUruguayArabia,$partidoUruguayRusia,$partidoArabiaEgipto);

    $posicion1_A = new Posicion("OCTAVOS","LEFT",0);
    $posicion2_A = new Posicion("OCTAVOS","RIGHT",1);

    $grupoa = new Grupo("A",$equipos_A,$partidos_A,$posicion1_A,$posicion2_A);
    

    /* GRUPO  B */
    $portugal = new Equipo("Portugal","portugal");
    $espana = new Equipo("España","españa");
    $marruecos = new Equipo("Marruecos","marruecos");
    $iran = new Equipo("Irán","iran");

    $partidoMarruecosIran = new Partido($marruecos,$iran,$estadioOnce,15,6,18);
    $partidoPortugalEspana = new Partido($portugal,$espana,$estadioNueve,15,6,21);
    $partidoPortugalMarruecos = new Partido($portugal,$marruecos,$estadioDos,20,6,15);
    $partidoIranEspana = new Partido($iran,$espana,$estadioTres,20,6,21);
    $partidoIranPortugal = new Partido($iran,$portugal,$estadioCinco,25,6,21);
    $partidoEspanaMarruecos = new Partido($espana,$marruecos,$estadioDoce,25,6,20);

    $equipos_B = array($portugal,$espana,$marruecos,$iran);
    $partidos_B = array($partidoMarruecosIran,$partidoPortugalEspana,$partidoPortugalMarruecos,$partidoIranEspana,$partidoIranPortugal,$partidoEspanaMarruecos);

    $posicion1_B = new Posicion("OCTAVOS","RIGHT",0);
    $posicion2_B = new Posicion("OCTAVOS","LEFT",1);

    $grupob = new Grupo("B",$equipos_B,$partidos_B,$posicion1_B,$posicion2_B);
    

    /* GRUPO  C */
    $francia = new Equipo("Francia","francia");
    $australia = new Equipo("Australia","australia");
    $peru = new Equipo("Perú","peru");
    $dinamarca = new Equipo("Dinamarca","dinamarca");

    $partidoFranciaAustralia = new Partido($francia,$australia,$estadioTres,16,6,13);
    $partidoPeruDinamarca = new Partido($peru,$dinamarca,$estadioCuatro,16,6,19);
    $partidoDinamarcaAustralia = new Partido($dinamarca,$australia,$estadioCinco,21,6,16);
    $partidoFranciaPeru = new Partido($francia,$peru,$estadioSeis,21,6,20);
    $partidoDinamarcaFrancia = new Partido($dinamarca,$francia,$estadioDos,26,6,17);
    $partidoAustraliaPeru = new Partido($australia,$peru,$estadioNueve,26,6,17);

    $equipos_C = array($francia,$australia,$peru,$dinamarca);
    $partidos_C = array($partidoFranciaAustralia,$partidoPeruDinamarca,$partidoDinamarcaAustralia,$partidoFranciaPeru,$partidoDinamarcaFrancia,$partidoAustraliaPeru);

    $posicion1_C = new Posicion("OCTAVOS","LEFT",2);
    $posicion2_C = new Posicion("OCTAVOS","RIGHT",3);

    $grupoc = new Grupo("C",$equipos_C,$partidos_C,$posicion1_C,$posicion2_C);


    /* GRUPO  D */
    $argentina = new Equipo("Argentina","argentina");
    $islandia = new Equipo("Islandia","islandia");
    $croacia = new Equipo("Croacia","croacia");
    $nigeria = new Equipo("Nigeria","nigeria");

    $partidoArgentinaIslandia = new Partido($argentina,$islandia,$estadioUno,16,6,16);
    $partidoCrociaNigeria = new Partido($croacia,$nigeria,$estadioDoce,16,6,21);
    $partidoArgentinaCroacia = new Partido($argentina,$croacia,$estadioDiez,21,6,21);
    $partidoNigeriaIslandia = new Partido($nigeria,$islandia,$estadioSiete,22,6,18);
    $partidoNigeriaArgentina = new Partido($nigeria,$argentina,$estadioOnce,26,6,21);
    $partidoIslandiaCroacia = new Partido($islandia,$croacia,$estadioNueve,26,6,21);

    $equipos_D = array($argentina,$islandia,$croacia,$nigeria);
    $partidos_D = array($partidoArgentinaIslandia,$partidoCrociaNigeria,$partidoArgentinaCroacia,$partidoNigeriaIslandia,$partidoNigeriaArgentina,$partidoIslandiaCroacia);

    $posicion1_D = new Posicion("OCTAVOS","RIGHT",2);
    $posicion2_D = new Posicion("OCTAVOS","LEFT",3);

    $grupod = new Grupo("D",$equipos_D,$partidos_D,$posicion1_D,$posicion2_D);


    /* GRUPO E */
    $brasil = new Equipo("Brasil","brasil");
    $suiza = new Equipo("Suiza","suiza");
    $costaRica = new Equipo("Costa Rica","costaRica");
    $serbia = new Equipo("Serbia","serbia");

    $partidoCostaSerbia = new Partido($costaRica,$serbia,$estadioCinco,17,6,16);
    $partidoBrasilSuiza = new Partido($brasil,$suiza,$estadioOcho,17,6,21);
    $partidoBrasilCosta = new Partido($brasil,$costaRica,$estadioOnce,22,6,15);
    $partidoSerbiaSuiza = new Partido($serbia,$suiza,$estadioDoce,22,6,20);
    $partidoSerbiaBrasil = new Partido($serbia,$brasil,$estadioOnce,27,6,21);
    $partidoSuizaCosta = new Partido($suiza,$costaRica,$estadioDiez,27,6,21);

    $equipos_E = array($brasil,$suiza,$costaRica,$serbia);
    $partidos_E = array($partidoCostaSerbia,$partidoBrasilSuiza,$partidoBrasilCosta,$partidoSerbiaSuiza,$partidoSerbiaBrasil,$partidoSuizaCosta);

    $posicion1_E = new Posicion("OCTAVOS","LEFT",4);
    $posicion2_E = new Posicion("OCTAVOS","RIGHT",5);

    $grupoe = new Grupo("E",$equipos_E,$partidos_E,$posicion1_E,$posicion2_E);


    /* GRUPO F */
    $alemania = new Equipo("Alemania","alemania");
    $mexico = new Equipo("Mexico","mexico");
    $suecia = new Equipo("Suecia","suecia");
    $coreaSur = new Equipo("Corea del Sur","coreaSur");

    $partidoAlemaniaMexico = new Partido($alemania,$mexico,$estadioDos,17,6,18);
    $partidoSueciaCorea = new Partido($suecia,$coreaSur,$estadioDiez,18,6,15);
    $partidoCoreaMexico = new Partido($coreaSur,$mexico,$estadioOcho,23,6,18);
    $partidoAlemaniaSuecia = new Partido($alemania,$suecia,$estadioNueve,23,6,21);
    $partidoMexicoSuecia = new Partido($mexico,$suecia,$estadioSeis,27,6,19);
    $partidoCoreaAlemania = new Partido($coreaSur,$alemania,$estadioTres,27,6,17);

    $equipos_F = array($alemania,$mexico,$suecia,$coreaSur);
    $partidos_F = array($partidoAlemaniaMexico,$partidoSueciaCorea,$partidoCoreaMexico,$partidoAlemaniaSuecia,$partidoMexicoSuecia,$partidoCoreaAlemania);

    $posicion1_F = new Posicion("OCTAVOS","RIGHT",4);
    $posicion2_F = new Posicion("OCTAVOS","LEFT",5);

    $grupof = new Grupo("F",$equipos_F,$partidos_F,$posicion1_F,$posicion2_F);


    /* GRUPO G */
    $belgica = new Equipo("Bélgica","belgica");
    $panama = new Equipo("Panamá","panama");
    $tunez = new Equipo("Túnez","tunez");
    $inglaterra = new Equipo("Inglaterra","inglaterra");

    $partidoBelgicaPanama = new Partido($belgica,$panama,$estadioNueve,18,6,18);
    $partidoTunezInglaterra = new Partido($tunez,$inglaterra,$estadioSiete,18,6,21);
    $partidoBelgicaTunez = new Partido($belgica,$tunez,$estadioUno,23,6,15);
    $partidoInglaterraPanama = new Partido($inglaterra,$panama,$estadioOcho,24,6,15);
    $partidoPanamaTunez = new Partido($panama,$tunez,$estadioCuatro,28,6,21);
    $partidoInglaterraBelgica = new Partido($inglaterra,$belgica,$estadioDiez,28,6,20);

    $equipos_G = array($belgica,$panama,$tunez,$inglaterra);
    $partidos_G = array($partidoBelgicaPanama,$partidoTunezInglaterra,$partidoBelgicaTunez,$partidoInglaterraPanama,$partidoPanamaTunez,$partidoInglaterraBelgica);

    $posicion1_G = new Posicion("OCTAVOS","LEFT",6);
    $posicion2_G = new Posicion("OCTAVOS","RIGHT",7);

    $grupog = new Grupo("G",$equipos_G,$partidos_G,$posicion1_G,$posicion2_G);


    /* GRUPO H */
    $polonia = new Equipo("Polonia","polonia");
    $senegal = new Equipo("Senegal","senegal");
    $colombia = new Equipo("Colombia","colombia");
    $japon = new Equipo("Japón","japon");

    $partidoColombiaJapon = new Partido($colombia,$japon,$estadioCuatro,19,6,15);
    $partidoPoloniaSenegal = new Partido($polonia,$senegal,$estadioUno,19,6,18);
    $partidoJaponSenegal = new Partido($japon,$senegal,$estadioSeis,24,6,20);
    $partidoPoloniaColombia = new Partido($polonia,$colombia,$estadioTres,24,6,21);
    $partidoJaponColombia = new Partido($japon,$colombia,$estadioSiete,28,6,17);
    $partidoSenegalColombia = new Partido($senegal,$colombia,$estadioCinco,28,6,18);

    $equipos_H = array($polonia,$senegal,$colombia,$japon);
    $partidos_H = array($partidoColombiaJapon,$partidoPoloniaSenegal,$partidoJaponSenegal,$partidoPoloniaColombia,$partidoJaponColombia,$partidoSenegalColombia);

    $posicion1_H = new Posicion("OCTAVOS","RIGHT",6);
    $posicion2_H = new Posicion("OCTAVOS","LEFT",7);

    $grupoh = new Grupo("H",$equipos_H,$partidos_H,$posicion1_H,$posicion2_H);

    /* JSON GRUPOS  */
    $grupos = array($grupoa,$grupob,$grupoc,$grupod,$grupoe,$grupof,$grupog,$grupoh);

    $fixture = new Fixture($grupos);

    $myJSON = json_encode($fixture); 
    header('Content-Type: application/json');
    echo $myJSON;
?>

