<?php
/*
@author  Ostap Brechko
@link    https://freelancehunt.com/freelancer/sitesoft1.html
*/

class ModelToolToolCities extends Model {
    
    public function getCityByRegion($region_id){
        $query = $this->db->query("SELECT * FROM ".DB_PREFIX."ll_cdek_city WHERE country_id='1' AND region_id='$region_id'");
        return $query['rows'];
    }
    
}
?>