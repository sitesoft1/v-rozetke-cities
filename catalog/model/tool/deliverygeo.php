<?php
/*
@author  Ostap brechko
@link    https://freelancehunt.com/freelancer/sitesoft1.html
*/

class ModelToolDeliveryGeo extends Model {
   
    public function getCdekRegions() {
        $query = $this->db->query("SELECT * FROM ".DB_PREFIX."ll_cdek_region WHERE `country_id`='1' AND `id`>1");
        if ($query->num_rows) {
            return $query->rows;
        }
    }
    
}
?>