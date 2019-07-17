<?php
	$age = $_GET['data'];
	switch ($age) {
		case 'sheng':
			echo '{"name":"广东", "num":"gd"}';
			break;
		case 'gd':
			echo '{"name":"深圳","num":"sz"}';
			break;
		case 'sz':
			echo '{"name":["南山","福田","罗湖","宝安"]}';
			break;
	}
?>