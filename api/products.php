<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json;");
// just having GET as that's the only specified method
header("Access-Control-Allow-Methods: GET");

echo file_get_contents(__DIR__ . '/product.json');

http_response_code(200);
