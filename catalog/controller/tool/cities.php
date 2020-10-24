<?php
class ControllerToolCities extends Controller {
	public function index() {
	    $region_id = $this->request->get['region_id'];
        
        $this->load->model('tool/cities');
        $cities = $this->model_tool_cities->getCityByRegion($region_id);
        
        $cities_options = '<option value=""></option>';
        foreach ($cities as $city){
            $cities_options .= '<option value="'.$city['CityCode'].'">'.$city['CityName'].'</option>';
        }
        
		echo $cities_options;
	}
}