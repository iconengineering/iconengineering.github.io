<?php
session_cache_limiter('nocache');
$cache_limiter = session_cache_limiter();
function goProxy($dataURL)
{
	$baseURL = 'http://ebendennis.cartodb.com/api/v2/sql?';
	//  					^ CHANGE THE 'CARTODB-USER-NAME' to your cartoDB url!
	$api = "&api_key=f378689c408ec8af615ab025710e0af64dffaf6f";
	//				 ^ENTER YOUR API KEY HERE!
	$url = $baseURL.'q='.$dataURL.$api;

	$result = file_get_contents ($url);
	return $result;
}
?>
