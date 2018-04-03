<?php
   $array=array(
    "grupoa"=>array(
     array("pais"=>"RUSIA"),
     array("pais"=>"ARABIA SAUDITA"),
     array("pais"=>"EGIPTO"),
     array("pais"=>"URUGUAY")
    ),
    "grupob"=>array(
     array("pais"=>"PORTUGAL"),
     array("pais"=>"ESPAÑA"),
     array("pais"=>"MARRUECOS"),
     array("pais"=>"IRÁN")
    ),
    "grupoc"=>array(
        array("pais"=>"FRANCIA"),
        array("pais"=>"AUSTRALIA"),
        array("pais"=>"PERÚ"),
        array("pais"=>"DINAMARCA")
    ),
    "grupod"=>array(
        array("pais"=>"ARGENTINA"),
        array("pais"=>"ISLANDIA"),
        array("pais"=>"CROACIA"),
        array("pais"=>"NIGERIA")
    ),
    "grupoe"=>array(
        array("pais"=>"BRASIL"),
        array("pais"=>"SUIZA"),
        array("pais"=>"COSTA RICA"),
        array("pais"=>"SERBIA")
    ),
    "grupof"=>array(
        array("pais"=>"ALEMANIA"),
        array("pais"=>"MÉXICO"),
        array("pais"=>"SUECIA"),
        array("pais"=>"COREA DEL SUR")
    ),
    "grupog"=>array(
        array("pais"=>"BÉLGICA"),
        array("pais"=>"PANAMÁ"),
        array("pais"=>"TÚNEZ"),
        array("pais"=>"INGLATERRA")
    ),
    "grupoh"=>array(
        array("pais"=>"POLONIA"),
        array("pais"=>"SENEGAL"),
        array("pais"=>"COLOMBIA"),
        array("pais"=>"JAPÓN")
       )
    );

    $myJSON = json_encode($array);
    echo $myJSON;
    //http://codigo44.blogspot.com.ar/2016/04/crear-un-json-con-php.html

    //hacer funcion en html que cuando se cargue el documento obtenga los datos.
?>

