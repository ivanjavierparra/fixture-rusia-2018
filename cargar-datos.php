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
        public $numero;
        public $equipoLocal;
        public $equipoVisitante;
        public $estadio;
        public $dia;
        public $mes;
        public $hora;
        public $partidoSiguiente;

        function __construct($numero,$equipoLocal,$equipoVisitante,$estadio,$dia,$mes,$hora,$partidoSiguiente)
        {
            $this->numero = $numero;
            $this->equipoLocal = $equipoLocal;
            $this->equipoVisitante = $equipoVisitante;
            $this->estadio = $estadio;
            $this->dia = $dia;
            $this->mes = $mes;
            $this->hora = $hora;
            $this->partidoSiguiente = $partidoSiguiente;
        }

    }

    class Grupo 
    {
        public $letra;
        public $equipos;
        public $partidos;
        public $partido1;
        public $partido2;

        function __construct($letra, $equipos, $partidos, $partido1, $partido2)
        {
            $this->letra = $letra;
            $this->equipos = $equipos;
            $this->partidos = $partidos;
            $this->partido1 = $partido1;
            $this->partido2 = $partido2;
        }
    }

    class Fase
    {
        public $nombre;
        public $partidos;

        function __construct($nombre,$partidos)
        {
            $this->nombre = $nombre;
            $this->partidos = $partidos;
        }
    }

    class Fixture
    {
        public $grupos;
        public $fases;

        function __construct($grupos,$fases)
        {
            $this->grupos = $grupos;
            $this->fases = $fases;
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

    //Partido de la final
    $partidoFinal = new Partido(64,null,null,$estadioUno,15,7,12,null);
    //Partido de Tercer Puesto
    $partidoTercerPuesto = new Partido(63,null,null,$estadioUno,14,7,12,null);
    //Partidos de Semis
    $partidoSemis1 = new Partido(61,null,null,$estadioUno,10,7,15,64);//CUAR 1 vs CUAR 2
    $partidoSemis2 = new Partido(62,null,null,$estadioUno,11,7,15,64);//CUAR 3 vs CUAR 4
    //Partidos de Cuartos
    $partidoCuartos1 = new Partido(57,null,null,$estadioUno,6,7,11,61);//OCT 1 vs OCT 2 / 1
    $partidoCuartos2 = new Partido(58,null,null,$estadioUno,6,7,15,61);//OCT 5 vs OCT 6 / 2
    $partidoCuartos3 = new Partido(59,null,null,$estadioUno,7,7,11,62);//OCT 3 vs OCT 4 / 3
    $partidoCuartos4 = new Partido(60,null,null,$estadioUno,7,7,15,62);//OCT 7 vs OCT 8 / 4
    //Partidos de Octavos
    $partidoOctavos1 = new Partido(49,null,null,$estadioUno,30,6,11,57);//1C vs 2D 2
    $partidoOctavos2 = new Partido(50,null,null,$estadioUno,30,6,15,57);//1A vs 2B 1
    $partidoOctavos3 = new Partido(51,null,null,$estadioUno,1,7,11,59);//1B vs 2A 3
    $partidoOctavos4 = new Partido(52,null,null,$estadioUno,1,7,15,59);//1D vs 2C 4
    $partidoOctavos5 = new Partido(53,null,null,$estadioUno,2,7,11,58);//1E vs 2F 5
    $partidoOctavos6 = new Partido(54,null,null,$estadioUno,2,7,15,58);//1G vs 2H 6
    $partidoOctavos7 = new Partido(55,null,null,$estadioUno,3,7,11,60);//1F vs 2E 7
    $partidoOctavos8 = new Partido(56,null,null,$estadioUno,3,7,15,60);//1H vs 2G 8
    

    /* GRUPO A */
    $rusia = new Equipo("Rusia","rusia");
    $arabia = new Equipo("Arabia Saudita","arabiaSaudita");
    $egipto = new Equipo("Egipto","egipto");
    $uruguay = new Equipo("Uruguay","uruguay");

    $partidoRusiaArabia = new Partido(1,$rusia,$arabia,$estadioUno,14,6,12,null);
    $partidoEgiptoUruguay = new Partido(2,$egipto,$uruguay,$estadioSeis,15,6,9,null);
    $partidoRusiaEgipto = new Partido(3,$rusia,$egipto,$estadioOnce,19,6,15,null);
    $partidoUruguayArabia = new Partido(4,$uruguay,$arabia,$estadioOcho,20,6,12,null);
    $partidoUruguayRusia = new Partido(5,$uruguay,$rusia,$estadioCinco,25,6,11,null);
    $partidoArabiaEgipto = new Partido(6,$arabia,$egipto,$estadioSiete,25,6,11,null);

    $equipos_A = array($rusia,$arabia,$egipto,$uruguay);
    $partidos_A = array($partidoRusiaArabia,$partidoEgiptoUruguay,$partidoRusiaEgipto,$partidoUruguayArabia,$partidoUruguayRusia,$partidoArabiaEgipto);

    $grupoa = new Grupo("A",$equipos_A,$partidos_A,49,51);
    

    /* GRUPO  B */
    $portugal = new Equipo("Portugal","portugal");
    $espana = new Equipo("España","españa");
    $marruecos = new Equipo("Marruecos","marruecos");
    $iran = new Equipo("Irán","iran");

    $partidoMarruecosIran = new Partido(7,$marruecos,$iran,$estadioOnce,15,6,12,null);
    $partidoPortugalEspana = new Partido(8,$portugal,$espana,$estadioNueve,15,6,15,null);
    $partidoPortugalMarruecos = new Partido(9,$portugal,$marruecos,$estadioDos,20,6,9,null);
    $partidoIranEspana = new Partido(10,$iran,$espana,$estadioTres,20,6,15,null);
    $partidoIranPortugal = new Partido(11,$iran,$portugal,$estadioCinco,25,6,15,null);
    $partidoEspanaMarruecos = new Partido(12,$espana,$marruecos,$estadioDoce,25,6,15,null);

    $equipos_B = array($portugal,$espana,$marruecos,$iran);
    $partidos_B = array($partidoMarruecosIran,$partidoPortugalEspana,$partidoPortugalMarruecos,$partidoIranEspana,$partidoIranPortugal,$partidoEspanaMarruecos);
    $grupob = new Grupo("B",$equipos_B,$partidos_B,51,49);
    

    /* GRUPO  C */
    $francia = new Equipo("Francia","francia");
    $australia = new Equipo("Australia","australia");
    $peru = new Equipo("Perú","peru");
    $dinamarca = new Equipo("Dinamarca","dinamarca");

    $partidoFranciaAustralia = new Partido(13,$francia,$australia,$estadioTres,16,6,7,null);
    $partidoPeruDinamarca = new Partido(14,$peru,$dinamarca,$estadioCuatro,16,6,13,null);
    $partidoDinamarcaAustralia = new Partido(15,$dinamarca,$australia,$estadioCinco,21,6,9,null);
    $partidoFranciaPeru = new Partido(16,$francia,$peru,$estadioSeis,21,6,12,null);
    $partidoDinamarcaFrancia = new Partido(17,$dinamarca,$francia,$estadioDos,26,6,11,null);
    $partidoAustraliaPeru = new Partido(18,$australia,$peru,$estadioNueve,26,6,11,null);

    $equipos_C = array($francia,$australia,$peru,$dinamarca);
    $partidos_C = array($partidoFranciaAustralia,$partidoPeruDinamarca,$partidoDinamarcaAustralia,$partidoFranciaPeru,$partidoDinamarcaFrancia,$partidoAustraliaPeru);
    $grupoc = new Grupo("C",$equipos_C,$partidos_C,50,52);


    /* GRUPO  D */
    $argentina = new Equipo("Argentina","argentina");
    $islandia = new Equipo("Islandia","islandia");
    $croacia = new Equipo("Croacia","croacia");
    $nigeria = new Equipo("Nigeria","nigeria");

    $partidoArgentinaIslandia = new Partido(19,$argentina,$islandia,$estadioUno,16,6,10,null);
    $partidoCrociaNigeria = new Partido(20,$croacia,$nigeria,$estadioDoce,16,6,16,null);
    $partidoArgentinaCroacia = new Partido(21,$argentina,$croacia,$estadioDiez,21,6,15,null);
    $partidoNigeriaIslandia = new Partido(22,$nigeria,$islandia,$estadioSiete,22,6,12,null);
    $partidoNigeriaArgentina = new Partido(23,$nigeria,$argentina,$estadioOnce,26,6,15,null);
    $partidoIslandiaCroacia = new Partido(24,$islandia,$croacia,$estadioNueve,26,6,15,null);

    $equipos_D = array($argentina,$islandia,$croacia,$nigeria);
    $partidos_D = array($partidoArgentinaIslandia,$partidoCrociaNigeria,$partidoArgentinaCroacia,$partidoNigeriaIslandia,$partidoNigeriaArgentina,$partidoIslandiaCroacia);
    $grupod = new Grupo("D",$equipos_D,$partidos_D,52,50);


    /* GRUPO E */
    $brasil = new Equipo("Brasil","brasil");
    $suiza = new Equipo("Suiza","suiza");
    $costaRica = new Equipo("Costa Rica","costaRica");
    $serbia = new Equipo("Serbia","serbia");

    $partidoCostaSerbia = new Partido(25,$costaRica,$serbia,$estadioCinco,17,6,9,null);
    $partidoBrasilSuiza = new Partido(26,$brasil,$suiza,$estadioOcho,17,6,15,null);
    $partidoBrasilCosta = new Partido(27,$brasil,$costaRica,$estadioOnce,22,6,9,null);
    $partidoSerbiaSuiza = new Partido(28,$serbia,$suiza,$estadioDoce,22,6,15,null);
    $partidoSerbiaBrasil = new Partido(29,$serbia,$brasil,$estadioOnce,27,6,15,null);
    $partidoSuizaCosta = new Partido(30,$suiza,$costaRica,$estadioDiez,27,6,15,null);

    $equipos_E = array($brasil,$suiza,$costaRica,$serbia);
    $partidos_E = array($partidoCostaSerbia,$partidoBrasilSuiza,$partidoBrasilCosta,$partidoSerbiaSuiza,$partidoSerbiaBrasil,$partidoSuizaCosta);
    $grupoe = new Grupo("E",$equipos_E,$partidos_E,53,55);


    /* GRUPO F */
    $alemania = new Equipo("Alemania","alemania");
    $mexico = new Equipo("Mexico","mexico");
    $suecia = new Equipo("Suecia","suecia");
    $coreaSur = new Equipo("Corea del Sur","coreaSur");

    $partidoAlemaniaMexico = new Partido(31,$alemania,$mexico,$estadioDos,17,6,12,null);
    $partidoSueciaCorea = new Partido(32,$suecia,$coreaSur,$estadioDiez,18,6,9,null);
    $partidoCoreaMexico = new Partido(33,$coreaSur,$mexico,$estadioOcho,23,6,12,null);
    $partidoAlemaniaSuecia = new Partido(34,$alemania,$suecia,$estadioNueve,23,6,15,null);
    $partidoMexicoSuecia = new Partido(35,$mexico,$suecia,$estadioSeis,27,6,11,null);
    $partidoCoreaAlemania = new Partido(36,$coreaSur,$alemania,$estadioTres,27,6,11,null);

    $equipos_F = array($alemania,$mexico,$suecia,$coreaSur);
    $partidos_F = array($partidoAlemaniaMexico,$partidoSueciaCorea,$partidoCoreaMexico,$partidoAlemaniaSuecia,$partidoMexicoSuecia,$partidoCoreaAlemania);
    $grupof = new Grupo("F",$equipos_F,$partidos_F,55,53);


    /* GRUPO G */
    $belgica = new Equipo("Bélgica","belgica");
    $panama = new Equipo("Panamá","panama");
    $tunez = new Equipo("Túnez","tunez");
    $inglaterra = new Equipo("Inglaterra","inglaterra");

    $partidoBelgicaPanama = new Partido(37,$belgica,$panama,$estadioNueve,18,6,21,null);
    $partidoTunezInglaterra = new Partido(38,$tunez,$inglaterra,$estadioSiete,18,6,15,null);
    $partidoBelgicaTunez = new Partido(39,$belgica,$tunez,$estadioUno,23,6,9,null);
    $partidoInglaterraPanama = new Partido(40,$inglaterra,$panama,$estadioOcho,24,6,9,null);
    $partidoPanamaTunez = new Partido(41,$panama,$tunez,$estadioCuatro,28,6,15,null);
    $partidoInglaterraBelgica = new Partido(42,$inglaterra,$belgica,$estadioDiez,28,6,15,null);

    $equipos_G = array($belgica,$panama,$tunez,$inglaterra);
    $partidos_G = array($partidoBelgicaPanama,$partidoTunezInglaterra,$partidoBelgicaTunez,$partidoInglaterraPanama,$partidoPanamaTunez,$partidoInglaterraBelgica);
    $grupog = new Grupo("G",$equipos_G,$partidos_G,54,56);


    /* GRUPO H */
    $polonia = new Equipo("Polonia","polonia");
    $senegal = new Equipo("Senegal","senegal");
    $colombia = new Equipo("Colombia","colombia");
    $japon = new Equipo("Japón","japon");

    $partidoColombiaJapon = new Partido(43,$colombia,$japon,$estadioCuatro,19,6,9,null);
    $partidoPoloniaSenegal = new Partido(44,$polonia,$senegal,$estadioUno,19,6,12,null);
    $partidoJaponSenegal = new Partido(45,$japon,$senegal,$estadioSeis,24,6,12,null);
    $partidoPoloniaColombia = new Partido(46,$polonia,$colombia,$estadioTres,24,6,15,null);
    $partidoJaponColombia = new Partido(47,$senegal,$colombia,$estadioSiete,28,6,11,null);
    $partidoSenegalColombia = new Partido(48,$japon,$polonia,$estadioCinco,28,6,11,null);

    $equipos_H = array($polonia,$senegal,$colombia,$japon);
    $partidos_H = array($partidoColombiaJapon,$partidoPoloniaSenegal,$partidoJaponSenegal,$partidoPoloniaColombia,$partidoJaponColombia,$partidoSenegalColombia);
    $grupoh = new Grupo("H",$equipos_H,$partidos_H,56,54);

    /* JSON GRUPOS  */
    $grupos = array($grupoa,$grupob,$grupoc,$grupod,$grupoe,$grupof,$grupog,$grupoh);

    $faseOctavos= new Fase("Octavos",array($partidoOctavos1,
                                        $partidoOctavos2,
                                        $partidoOctavos5,
                                        $partidoOctavos6,
                                        $partidoOctavos3,
                                        $partidoOctavos4,
                                        $partidoOctavos7,
                                        $partidoOctavos8));
    $faseCuartos= new Fase("Cuartos",array($partidoCuartos1,
                                            $partidoCuartos2,
                                            $partidoCuartos3,
                                            $partidoCuartos4));
    $faseSemis= new Fase("Semis",array($partidoSemis1,$partidoSemis2));
    $faseTercer= new Fase("Tercer Puesto",array($partidoTercerPuesto));
    $faseFinal= new Fase("Final",array($partidoFinal));
    
    $fases = array($faseTercer,$faseFinal,$faseSemis,$faseCuartos,$faseOctavos);

    $fixture = new Fixture($grupos,$fases);

    $myJSON = json_encode($fixture); 
    header('Content-Type: application/json');
    echo $myJSON;
?>

