    <?php
    /**
    * Esta clase representa un equipo que compite en el mundial de Rusia 2018
    */
    class Equipo 
    {
        public $nombre;
        
        function __construct($nombre)
        {
            $this->nombre = $nombre;
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

        function __construct($letra, $equipos, $partidos)
        {
            $this->letra = $letra;
            $this->equipos = $equipos;
            $this->partidos = $partidos;
        }

    }

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

    $rusia = new Equipo("Rusia");
    $arabia = new Equipo("Arabia Saudita");
    $egipto = new Equipo("Egipto");
    $uruguay = new Equipo("Uruguay");

    $partidoRusiaArabia = new Partido($rusia,$arabia,$estadioUno,1,6,10);

    $equipos = array($rusia,$arabia,$egipto,$uruguay);
    $partidos = array($partidoRusiaArabia);

    $grupoa = new Grupo("A",$equipos,$partidos);
    

    
    $myJSON = json_encode($grupoa);
    header('Content-Type: application/json');
    echo $myJSON;


    //hacer funcion en html que cuando se cargue el documento obtenga los datos.
    //Hacer posición 1 y posición 2 en Grupo. Metele Ivan!! :D
?>

