<?php
$individuals= json_decode($data,true);
if(!isset($individuals['data'])){
  echo "Error:  'data' key not available";
  exit;
}

$count=0;
$indivString= $individuals['data'];

$similars=[];
preg_match_all('/age=(\d+)/',$indivString,$similars);
if(!empty($similars[1])){
  foreach($similars[1] as $age){
    if((int)$age >=50){
      $count++;
    }
  }
}
echo $count;
?>