<?php
	$age=$_GET['age'];
	switch ($age) {
		case '18':
			echo '{"name":"老刘","age":"18","sex":"未知"}';
			break;
		case '28':
			echo '{"name":"老张","age":"28","sex":"未知"}';
			break;
		case '38':
			echo '{"name":"老李","age":"38","sex":"未知"}';
			break;
		default:
			echo '{"name":"未知","age":"xx","sex":"未知"}';
			break;
	}
?>