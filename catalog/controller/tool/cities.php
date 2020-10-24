<?php
class ControllerToolCities extends Controller {
	public function index() {
	    $region_id = $this->request->get['region_id'];
        
        $this->load->model('tool/cities');
        $my_geo = $this->model_tool_cities->getCityByRegion($region_id);
		//echo '<option value=""></option><option value="1">Москва</option><option value="2">Санкт-петербург</option><option value="3">Омск</option>';
	}
}